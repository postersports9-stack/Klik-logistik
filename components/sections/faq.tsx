"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Какви видови стока превезувате?",
    answer:
      "Превезуваме палетизирана и непалетизирана стока, општи товари и стока на температура (по договор). За опасна стока контактирајте нè.",
  },
  {
    question: "Дали правите меѓународен транспорт?",
    answer:
      "Да, организираме превоз од и до Европа со целосна документација (CMR, царина) и следење на пратката.",
  },
  {
    question: "Колку време треба за домашна испорака?",
    answer:
      "Зависи од дестинацијата и видот на товарот. За поголем дел од Македонија испораката е во истиот или следниот работен ден.",
  },
  {
    question: "Како се пресметува цената?",
    answer:
      "Цената зависи од растојанието, типот на возилото, видот на стока и времето на испорака. Користете го калкулаторот за брза проценка или контактирајте нè за фиксна понуда.",
  },
  {
    question: "Дали имате осигурување на стока?",
    answer:
      "Да, секоја пратка може да биде покриена со транспортно осигурување. Деталите ги усогласуваме при договорување.",
  },
  {
    question: "Како да резервирам превоз?",
    answer:
      "Контактирајте нè на 070 233 465 или преку формуларот за контакт. Брзо ќе ви одговориме со термин и понуда.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative bg-[#f9f9f9] py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block border border-border px-4 py-1 text-xs font-medium tracking-widest text-muted-foreground">
            Прашања
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#2a2a2a] md:text-4xl lg:text-5xl">
            Најчесто прашуваат
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Одговори на прашањата кои ги слушаме најмногу. Ако имате друго прашање, слободно јавете ни се.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden border border-border bg-white"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#f5f5f5]"
              >
                <span className="pr-4 text-sm font-semibold text-[#2a2a2a] md:text-base">
                  {faq.question}
                </span>
                <span className="shrink-0 text-primary">
                  {openIndex === i ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
