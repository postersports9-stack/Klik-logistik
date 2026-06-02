export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Klik Logistik",
  alternateName: ["Klik Group", "Клик Логистик", "Клик Груп", "Klik Logistik DOOEL Skopje"],
  url: "https://klikgroup.mk",
  logo: "https://klikgroup.mk/favicon.png",
  email: "info@klikgroup.mk",
  telephone: "+389 70 233 465",
  sameAs: [],
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Клик Логистик",
  alternateName: ["Klik Logistik", "Klik Group"],
  url: "https://klikgroup.mk",
  image: "https://klikgroup.mk/images/hero-cover.webp",
  email: "info@klikgroup.mk",
  telephone: "+389 70 233 465",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 бр.38, Кучевиште",
    addressLocality: "Чучер-Сандево",
    addressRegion: "Скопје",
    addressCountry: "MK",
  },
  areaServed: "Северна Македонија",
  openingHours: "Mo-Su 09:00-17:00",
}
