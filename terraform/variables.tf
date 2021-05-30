variable "bucket_name" {
  default = "dans-plants-website"
  description = "The name of the bucket for the website"
}

variable "base_domain_name" {
  default = "danq.cloud"
  description = "The base domain of the website; eg: 'my-site.com'"
}

variable "subdomain_name" {
  default = "plants"
  description = "Subdomain for the site"
}