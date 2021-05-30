provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket         = "daniels-personal-terraform-state"
    key            = "plants/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}

locals {
  domain = "${var.subdomain_name}.${var.base_domain_name}"
  s3_origin_id = "dans-plants-website"
}

## bucket
data "aws_iam_policy_document" "s3-website-policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = ["*"]
      type = "AWS"
    }
    resources = [
      "arn:aws:s3:::${var.bucket_name}/*"
    ]
  }
}

resource "aws_s3_bucket" "website-bucket" {
  bucket = var.bucket_name
  acl = "public-read"
  policy = data.aws_iam_policy_document.s3-website-policy.json
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}
resource "aws_s3_bucket_public_access_block" "website-bucket-access-control" {
  bucket = aws_s3_bucket.website-bucket.id
  block_public_acls   = true
  ignore_public_acls = true
}

## ssl & domain
# this module handles the heavy lifting to register a subdomain if specified and automatically approves it
module "acm_request_certificate" {
  source                      = "cloudposse/acm-request-certificate/aws"
  version                     = "0.7.0"
  domain_name                 = local.domain
  zone_name                   = var.base_domain_name
  wait_for_certificate_issued = true
}

## cdn
resource "aws_cloudfront_distribution" "website-cdn" {
  enabled = true
  is_ipv6_enabled = true
  comment = "CDN for Daniel's plants website"
  default_root_object = "index.html"
  aliases = [local.domain]
  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
    forwarded_values {
      query_string = false
      cookies {
        forward = "all"
      }
    }
  }
  origin {
    domain_name = aws_s3_bucket.website-bucket.bucket_regional_domain_name
    origin_id = local.s3_origin_id
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = module.acm_request_certificate.arn
    ssl_support_method = "sni-only"
  }
  custom_error_response {
    error_code = 404
    error_caching_min_ttl = 86400
    response_page_path = "/index.html"
    response_code = 200
  }
}

## iam policy to invalidate index.html file in cloudfront to force servers to re-fetch index from s3 
resource "aws_iam_policy" "cloudfront-invalidate-paths" {
  name = "cloudfront-invalidate-paths"
  description = "Used by CI pipelines to delete cached paths"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid = "VisualEditor0",
        Effect = "Allow",
        Action = "cloudfront:CreateInvalidation",
        Resource = "*"
      }
    ]
  })
}