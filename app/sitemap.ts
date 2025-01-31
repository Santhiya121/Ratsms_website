import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return[
    {
        url: "https://ratsms.com/",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
    },
    {
        url: "https://ratsms.com/about-us",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    },
    {
        url: "https://ratsms.com/blog",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    },
    {
        url: "https://ratsms.com/bulk-sms",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
    },
    {
        url: "https://ratsms.com/bulk-sms-gateway-aggregator",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
    },
    {
        url: "https://ratsms.com/bulk-sms-pricing-india",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
    },
    {
        url: "https://ratsms.com/bulk-sms-service-explicit",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
    },
    {
        url: "https://ratsms.com/bulk-sms-service-implicit",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
    },
    {
        url: "https://ratsms.com/bulk-sms-service-provider",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.6,
    },
    {
        url: "https://ratsms.com/bulk-sms-service-provider-in-ahmedabad",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.6,
    },
    {
        url: "https://ratsms.com/bulk-sms-service-provider-in-alappuzha",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.6,
    },
]
}