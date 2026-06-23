import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Клик Логистик (Klik Logistik)",
    short_name: "Klik Logistik",
    description:
      "Клик Логистик — транспорт и превоз на роба и палети во Скопје и низ цела Македонија.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a1a1a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
