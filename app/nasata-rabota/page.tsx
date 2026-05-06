import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SITE_IMAGES } from "@/lib/constants/images";

export default function NasataRabotaPage() {
  const data = [
    {
      title: "2026",
      content: (
        <div key="content-2026">
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Година на големи градежни потфати. Завршивме над 100 проекти за груба градба, реновирање на деловни простории и изведба на системи за греење и ладење низ цела Македонија.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SITE_IMAGES.portfolio.domestic[0]}
              alt="Изградба на куќа"
              width={500}
              height={500}
              priority
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.domestic[1]}
              alt="Модерно реновиран ентериер"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.domestic[2]}
              alt="Градежни работи во тек"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.domestic[3]}
              alt="Монтажа на кровна конструкција"
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
            Година на енергетска ефикасност. Имплементиравме соларни системи и топлински пумпи во голем број станбени објекти, помагајќи им на клиентите да ги намалат трошоците за енергија.
          </p>
          <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
            Се фокусиравме на висококвалитетни инсталации за подно греење и модерни водоводни решенија.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SITE_IMAGES.portfolio.international[0]}
              alt="Машински инсталации"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.international[1]}
              alt="Изградба на деловен објект"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.international[2]}
              alt="Реновирање на фасада"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.international[3]}
              alt="Инсталација на грејни тела"
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
            Почеток на нова ера во градежништвото и инсталациите.
          </p>
          <ul className="mb-8 space-y-1">
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Успешно претставени 50+ станбени единици клуч на рака
            </li>
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Поставени 2000+ м2 подно греење
            </li>
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Специјализирани тимови за бањско реновирање
            </li>
            <li className="flex gap-2 items-center text-foreground/70 text-xs md:text-sm">
              Сертифицирани монтажери за климатизација и топлински пумпи
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={SITE_IMAGES.portfolio.specialized[0]}
              alt="Монтажа на соларен панел"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.specialized[1]}
              alt="Градба со современи материјали"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.specialized[2]}
              alt="Внатрешно уредување"
              width={500}
              height={500}
              className="object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={SITE_IMAGES.portfolio.specialized[3]}
              alt="Градежна опрема"
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
          Нашата Работа
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          Од целосна изградба на куќи и системи клуч на рака, до прецизни реновирања и машински инсталации—ние носиме квалитет и сигурност во секој проект.
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
