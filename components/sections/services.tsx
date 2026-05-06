"use client";

import { Feature72 } from "@/components/ui/feature-72";
import { SITE_IMAGES } from "@/lib/constants/images";

const services = [
  {
    id: "service-1",
    title: "Превоз на роба",
    image: SITE_IMAGES.services.domestic,
    description:
      "Брз и сигурен превоз на палетизирана и непалетизирана стока низ цела Македонија.",
  },
  {
    id: "service-2",
    title: "Меѓународен транспорт",
    image: SITE_IMAGES.services.international,
    description:
      "Превоз на стока од и до европските држави со целосна документација и следење на пратката.",
  },
  {
    id: "service-3",
    title: "Логистички решенија",
    image: SITE_IMAGES.services.logistics,
    description:
      "Прилагодени логистички решенија за вашиот бизнис — од планирање на рута до испорака.",
  },
];

export function Services() {
  return (
    <div id="uslugi">
      <Feature72
        heading="Нашите услуги"
        description="Доверлив партнер за превоз и логистика низ Македонија и Европа."
        linkText="Јавете ни се"
        linkUrl="tel:070233465"
        features={services}
      />
    </div>
  );
}
