"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Колку време е потребно за градба на куќа - клуч на рака?",
    answer:
      "Временската рамка зависи од комплексноста на проектот, но вообичаено процесот трае од 6 до 9 месеци од почеток до вселување.",
  },
  {
    question: "Дали вршите проценка на терен пред понуда?",
    answer:
      "Да, нашиот тим врши бесплатен увид на локацијата за да можеме да изготвиме прецизна и реална понуда за вашиот проект.",
  },
  {
    question: "Каков тип на гаранција нудите за вашите услуги?",
    answer:
      "Нудиме целосна гаранција за квалитетот на изведбата и вградените материјали, согласно законските прописи за градежништво во државата.",
  },
  {
    question: "Дали работите проекти надвор од Скопје?",
    answer:
      "Да, нашите екипи се мобилни и работиме на проекти низ цела Македонија, без оглед на локацијата.",
  },
  {
    question: "Што вклучува енергетската ефикасност кај објектите?",
    answer:
      "Вклучува квалитетна термоизолација, монтажа на топлински пумпи, соларни системи и инсталација на енергетски ефикасни прозорци и врати.",
  },
  {
    question: "Дали помагате со документација и дозволи за градба?",
    answer:
      "Како дел од нашата услуга клуч на рака, нудиме поддршка и насоки во процесот на обезбедување на потребната документација.",
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
