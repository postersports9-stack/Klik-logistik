import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SITE_IMAGES } from "@/lib/constants/images";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "Нашата работа — транспорт МК",
  description: "Портфолио и историја на Клик Логистик — транспорт и превоз на роба и палети низ цела Македонија.",
  alternates: { canonical: "/nasata-rabota" },
};

export default function NasataRabotaPage() {
  const data = [
    {
      title: "2026",
      content: (
        <div key="content-2026">
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Година на проширување. Превезовме над 500 пратки низ цела Македонија со флота од модерни возила. Воспоставивме редовни меѓуградски линии.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SITE_IMAGES.portfolio.domestic[0]}
              alt="Камион на автопат"
              width={500}
              height={500}
              priority
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.domestic[1]}
              alt="Натовар на палети"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.domestic[2]}
              alt="Меѓународен превоз"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.domestic[3]}
              alt="Магацин со подготвена стока"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div key="content-2025">
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Година на национална експанзија. Отпочнавме соработка со реномирани партнери и ги проширивме нашите рути во повеќе градови.
          </p>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Инвестиравме во нови возила и унапредивме процесите за следење на пратки во реално време.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SITE_IMAGES.portfolio.international[0]}
              alt="Меѓународен камион"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.international[1]}
              alt="Документација за увоз"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.international[2]}
              alt="Следење на пратки"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.international[3]}
              alt="Тим за логистика"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div key="content-2024">
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-4">
            Почеток на нова ера во логистиката за Клик Логистик.
          </p>
          <ul className="mb-8 space-y-1">
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Успешно превезени 100+ пратки во првата година
            </li>
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Воспоставени директни рути до Скопје, Битола и Охрид
            </li>
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Набавени 2 нови возила со натоварна рампа и палетар
            </li>
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Изградена мрежа од деловни клиенти во прехранбениот сектор
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SITE_IMAGES.portfolio.specialized[0]}
              alt="Ново возило Клик Логистик"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.specialized[1]}
              alt="Прво испорачани пратки"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.specialized[2]}
              alt="Тим при натовар"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.specialized[3]}
              alt="Почетоци на бизнисот"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Дома", item: "https://klikgroup.mk/" },
          { "@type": "ListItem", position: 2, name: "Нашата работа", item: "https://klikgroup.mk/nasata-rabota" },
        ],
      }} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-10 px-4 md:px-8 lg:px-10 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад кон почетна
        </Link>
        <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
          Нашата работа
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          Од Скопје до секој град во Македонија — Клик Логистик носи доверба, прецизност и брзина во секоја пратка.
        </p>
      </section>

      {/* Timeline */}
      <div className="relative">
        <Timeline data={data} />
      </div>

      <Footer />
    </main>
  );
}
