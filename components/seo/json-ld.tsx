export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const ORG_ID = "https://klikgroup.mk/#organization"
const WEBSITE_ID = "https://klikgroup.mk/#website"

// Single connected entity graph. Org, WebSite and Service all reference the
// same @id so search engines + LLMs treat them as ONE entity instead of three
// competing nodes — this is what lets them confirm klikgroup.mk is the
// official website of "Klik Logistik".
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "MovingCompany"],
      "@id": ORG_ID,
      name: "Klik Logistik",
      legalName: "Klik Logistik DOOEL Skopje",
      alternateName: [
        "Клик Логистик",
        "Klik Group",
        "Клик Груп",
        "Клик Логистика",
      ],
      url: "https://klikgroup.mk",
      mainEntityOfPage: "https://klikgroup.mk",
      logo: {
        "@type": "ImageObject",
        url: "https://klikgroup.mk/icon-512.png",
        width: 512,
        height: 512,
      },
      image: "https://klikgroup.mk/images/hero-cover-updated.webp",
      description:
        "Klik Logistik (Клик Логистик) is a transport and logistics company based in Skopje, North Macedonia. It provides reliable freight transport of palletized and non-palletized goods across the whole country. Official website: https://klikgroup.mk",
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
      areaServed: { "@type": "Country", name: "North Macedonia" },
      openingHours: "Mo-Su 09:00-17:00",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+389 70 233 465",
        email: "info@klikgroup.mk",
        contactType: "customer service",
        areaServed: "MK",
        availableLanguage: ["Macedonian", "English"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: "https://klikgroup.mk",
      name: "Klik Logistik",
      alternateName: ["Клик Логистик", "Klik Group"],
      inLanguage: "mk",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "Service",
      name: "Транспорт на роба",
      serviceType: "Freight transport",
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "North Macedonia" },
      description:
        "Превоз на палетизирана и непалетизирана стока низ цела Македонија.",
    },
  ],
}
