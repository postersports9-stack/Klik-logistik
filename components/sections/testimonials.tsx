"use client";

import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-column";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  { text: "Стоката пристигна навреме и беспрекорно спакувана. Препорачувам.", image: "https://randomuser.me/api/portraits/men/1.jpg", name: "Марко Петровски", role: "Сопственик на фирма" },
  { text: "Соработката со Клик Логистик беше изведена професионално. Постојано ќе ги користиме.", image: "https://randomuser.me/api/portraits/women/2.jpg", name: "Ана Стојановска", role: "Менаџер за набавки" },
  { text: "Возилата се одлично одржувани, а шоферите професионални. Стоката стигна без оштетувања.", image: "https://randomuser.me/api/portraits/men/3.jpg", name: "Стефан Илиевски", role: "Логистички координатор" },
  { text: "Меѓународниот превоз помина без никакви компликации. Документацијата беше во ред.", image: "https://randomuser.me/api/portraits/women/4.jpg", name: "Елена Димитрова", role: "Извршен директор" },
  { text: "Брза реакција и флексибилност во планирањето на превозот. Препорачувам.", image: "https://randomuser.me/api/portraits/men/5.jpg", name: "Никола Трајковски", role: "Сопственик на магацин" },
  { text: "Цените се фер, а услугата на високо ниво. Моите пратки се секогаш во сигурни раце.", image: "https://randomuser.me/api/portraits/women/6.jpg", name: "Марија Ангеловска", role: "Деловен партнер" },
  { text: "Доволно е едно повикување и тие се тука — токму такви треба да бидат професионалците.", image: "https://randomuser.me/api/portraits/men/7.jpg", name: "Александар Костов", role: "Инвеститор" },
  { text: "Континуирано користиме нивни услуги веќе неколку години. Никогаш проблем.", image: "https://randomuser.me/api/portraits/women/8.jpg", name: "Ивана Николовска", role: "Менаџер на магацин" },
  { text: "Од Скопје до цела Европа — секогаш точно и навреме. Клик Логистик е мојот избор.", image: "https://randomuser.me/api/portraits/men/9.jpg", name: "Борис Здравковски", role: "Претприемач" },
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
              Од нашите клиенти
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-5 text-[#2a2a2a] text-center text-balance">
            Луѓето зборуваат најдобро
          </h2>
          <p className="text-center mt-5 text-muted-foreground leading-relaxed">
            Не ние велиме дека сме најдобри — велат оние кои редовно ни ги доверуваат своите пратки.
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
