"use client";

import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-column";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "Презадоволни сме од грубата градба на нашата нова куќа. Екипата беше брза, прецизна и се придржуваше до сите рокови.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Марко Петровски",
    role: "Сопственик на куќа",
  },
  {
    text: "Реновирањето на нашиот деловен простор помина без никакви дополнителни грижи. Професионализам на највисоко ниво.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Ана Стојановска",
    role: "Менаџер, Дизајн Студио",
  },
  {
    text: "Инсталацијата на подното греење и топлинската пумпа беше изведена совршено. Сега имаме топл дом со минимални трошоци.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Стефан Илиевски",
    role: "Домаќин",
  },
  {
    text: "Целосното реновирање на бањата беше завршено со внимание на секој детаљ. Резултатот е модерен и функционален простор.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Елена Димитрова",
    role: "Сопственичка на стан",
  },
  {
    text: "Покривната конструкција беше изградена со врвни материјали. Се чувствуваме безбедно под нашиот нов кров.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Никола Трајковски",
    role: "Сопственик на вила",
  },
  {
    text: "Монтажата на соларниот систем беше брза и ефикасна. Веќе гледаме значителни заштеди на сметките за струја.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Марија Ангеловска",
    role: "Клиент",
  },
  {
    text: "Високото ниво на стручност во делот на машинските инсталации е она што ги издвојува Ламбел Терм од останатите.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Д-р Александар Костов",
    role: "Приватен инвеститор",
  },
  {
    text: "Сите водоинсталатерски работи беа завршени чисто и без никакви компликации. Вистински мајстори во својата работа.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Ивана Николовска",
    role: "Архитект",
  },
  {
    text: "Од првичната понуда до финалната изведба, соработката беше беспрекорна. Ламбел Терм се мојот избор за секој следен проект.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Борис Здравковски",
    role: "Претприемач",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section id="iskustva" className="bg-background py-20 relative scroll-mt-24">
      <div className="container z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 text-sm font-medium tracking-wide text-muted-foreground">
              ОД НАШИТЕ КЛИЕНТИ
            </div>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-5 text-[#2a2a2a] text-center text-balance">
            Луѓето зборуваат најдобро
          </h2>
          <p className="text-center mt-5 text-muted-foreground leading-relaxed">
            Не ние велиме дека сме најдобри — велат оние што ги доверуваат своите домови и бизниси на нашите раце.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
