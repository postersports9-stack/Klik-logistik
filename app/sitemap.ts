import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://klikgroup.mk"
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/klik-trejd`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/za-nas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/nasata-rabota`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]
}
