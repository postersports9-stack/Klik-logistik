"use client";

import { Feature72 } from "@/components/ui/feature-72";
import { SITE_IMAGES } from "@/lib/constants/images";

const services = [
  {
    id: "service-1",
    title: "Груба градба и конструкција",
    image: SITE_IMAGES.services.construction,
    description:
      "Бетонирање, ѕидарски работи, новоградба и градба на куќа по систем клуч на рака.",
  },
  {
    id: "service-2",
    title: "Покривни работи",
    image: SITE_IMAGES.services.roofing,
    description:
      "Изработка на покривна конструкција, покривање покриви и лимени покриви.",
  },
  {
    id: "service-3",
    title: "Реновирање и внатрешно уредување",
    image: SITE_IMAGES.services.renovation,
    description:
      "Комплетно реновирање на куќи, станови и бањи со врвен квалитет.",
  },
  {
    id: "service-4",
    title: "Инсталации (Водовод и Греење)",
    image: SITE_IMAGES.services.plumbing,
    description:
      "Водоинсталатерски работи, системи за греење вклучувајќи подно и електрично подно греење.",
  },
  {
    id: "service-5",
    title: "Енергетска ефикасност",
    image: SITE_IMAGES.services.hvac,
    description:
      "Монтажа на клима уреди, топлински пумпи и соларни системи.",
  },
];

export function Services() {
  return (
    <div id="uslugi">
      <Feature72
        heading="Нашите Услуги"
        description="Од идеја до реализација. Комплетни градежни и инсталатерски услуги."
        linkText="ЈАВЕТЕ НИ СЕ"
        linkUrl="tel:075211440"
        features={services}
      />
    </div>
  );
}
