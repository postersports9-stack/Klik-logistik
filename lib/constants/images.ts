const T1 = "/images/transport-1.avif";
const T2 = "/images/transport-2.avif";
const T3 = "/images/transport-3.avif";
const T4 = "/images/transport-4.avif";
const T5 = "/images/transport-5.avif";

export const SITE_IMAGES = {
  hero: [
    {
      src: T1,
      title: "Превоз на роба",
      sub: "БРЗО И БЕЗБЕДНО",
      description: "Сигурен превоз на палетизирана и непалетизирана стока низ цела држава."
    },
    {
      src: T2,
      title: "Меѓународен транспорт",
      label: "Низ цела Европа",
      sub: "ДОВЕРБА И ПРОФЕСИОНАЛНОСТ",
      description: "Брз и сигурен меѓународен превоз на стока."
    },
    {
      src: T3,
      title: "Логистика",
      label: "Целосни решенија",
      sub: "ОД А ДО Б",
      description: "Логистички решенија прилагодени на вашите потреби."
    }
  ],
  services: {
    domestic: T1,
    international: T2,
    logistics: T3,
  },
  capabilities: [T1, T2, T3, T4, T5],
  vehicles: {
    v1: T4,
    v2: T5,
  },
  portfolio: {
    residential: [T1, T2, T3, T4],
    commercial: [T2, T3, T4, T5],
    specialized: [T1, T3, T4, T5],
  }
} as const;
