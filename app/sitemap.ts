import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://klikgroup.mk"
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/klik-trejd`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/za-nas`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/nasata-rabota`, changeFrequency: "monthly", priority: 0.8 },
  ]
}
