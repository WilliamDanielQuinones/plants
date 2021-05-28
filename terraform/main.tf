provider "aws" {
  version = "~> 2.0"
  region  = "us-east-2"
}

terraform {
  backend "s3" {
    bucket         = "daniel-personal-terraform-state"
    key            = "plants/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}

locals {
  domain = "danq.cloud"
}

data "aws_route53_zone" "zone" {
  name = local.domain
}

module "acm_request_certificate" {
  source                      = "cloudposse/acm-request-certificate/aws"
  version                     = "0.7.0"
  domain_name                 = local.domain
  wait_for_certificate_issued = true
}

module "cloudfront-s3-cdn" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "0.34.1"
  name               = "daniels-plants"
  encryption_enabled = true
  # DNS Settings
  parent_zone_id      = data.aws_route53_zone.zone.id
  acm_certificate_arn = module.acm_request_certificate.arn
  aliases             = [local.domain]
  ipv6_enabled        = true
  # Caching Settings
  default_ttl = 300
  compress    = true
  # Website settings
  website_enabled = true
  index_document  = "index.html" # absolute path in the S3 bucket
  error_document  = "index.html" # absolute path in the S3 bucket
  depends_on = [module.acm_request_certificate]
}

output s3_bucket {
  description = "daniels-plants-website"
  value       = module.cloudfront-s3-cdn.s3_bucket
}