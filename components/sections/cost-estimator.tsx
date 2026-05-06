"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SERVICE_PRICES: Record<string, number> = {
  "Превоз на роба (домашен)": 1.2,
  "Меѓународен транспорт": 1.6,
  "Логистички решенија": 1.4,
};

const CITIES = [
  "Скопје", "Битола", "Охрид", "Тетово", "Куманово", "Прилеп", "Велес", "Штип", "Останато"
];

const SKOPJE_SUBURBS = [
  "Центар", "Карпош", "Аеродром", "Кисела Вода", "Ѓорче Петров", "Гази Баба", "Бутел", "Чаир", "Сарај", "Шуто Оризари", "Приградски населби"
];


export function CostEstimator() {
  const [service, setService] = useState("Превоз на роба (домашен)");
  const [city, setCity] = useState("Скопје");
  const [suburb, setSuburb] = useState("Центар");
  const [distance, setDistance] = useState(100);
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  useEffect(() => {
    let multiplier = 1.0;
    if (city === "Скопје") {
      multiplier = 1.0;
      if (["Центар", "Карпош", "Аеродром"].includes(suburb)) multiplier = 1.05;
    } else if (["Битола", "Охрид", "Тетово"].includes(city)) {
      multiplier = 1.1;
    } else if (city === "Останато") {
      multiplier = 1.15;
    }
    const perKm = SERVICE_PRICES[service] * multiplier;
    const min = Math.round(perKm * distance * 0.9 + 30);
    const max = Math.round(perKm * distance * 1.1 + 50);
    setEstimate({ min, max });
  }, [service, city, suburb, distance]);

  const getFontSize = (val: number) => {
    const len = val.toLocaleString().length;
    if (len > 9) return "text-3xl md:text-4xl";
    if (len > 7) return "text-4xl md:text-5xl";
    return "text-4xl md:text-6xl";
  };

  return (
    <section id="cenovnik" className="relative overflow-hidden bg-white py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-border px-4 py-1 text-xs font-medium tracking-widest text-muted-foreground">
            <Calculator className="h-3 w-3" />
            Интерактивен Калкулатор
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#2a2a2a] md:text-4xl lg:text-5xl">
            Пресметајте ги трошоците
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Брза проценка за трошокот за превоз. За точна понуда контактирајте нè.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-semibold tracking-wider text-[#2a2a2a]">
                Тип на услуга
              </label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="h-auto min-h-[56px] py-3 text-left w-full rounded-none border-border bg-white text-sm [&>span]:whitespace-normal [&>span]:break-words">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(SERVICE_PRICES).map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <label className="text-sm font-semibold tracking-wider text-[#2a2a2a]">
                  Град
                </label>
                <Select value={city} onValueChange={(val) => {
                  setCity(val);
                  if (val !== "Скопје") setSuburb("");
                  else setSuburb("Центар");
                }}>
                  <SelectTrigger className="h-14 w-full rounded-none border-border bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <AnimatePresence mode="wait">
                {city === "Скопје" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="text-sm font-semibold tracking-wider text-[#2a2a2a]">
                      Општина / Населба
                    </label>
                    <Select value={suburb} onValueChange={setSuburb}>
                      <SelectTrigger className="h-14 w-full rounded-none border-border bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {SKOPJE_SUBURBS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold tracking-wider text-[#2a2a2a]">
                  Растојание (km)
                </label>
                <span className="text-2xl font-bold text-primary">
                  {distance} km
                </span>
              </div>
              <Slider
                value={[distance]}
                min={10}
                max={2000}
                step={10}
                onValueChange={(val) => setDistance(val[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground tracking-tighter">
                <span>10 km</span>
                <span>2 000 km</span>
              </div>
            </div>
          </div>

          <Card className="rounded-none border-none bg-[#1a1a1a] p-8 text-white lg:p-12 overflow-hidden">
            <div className="flex h-full flex-col justify-between space-y-12">
              <div>
                <h3 className="mb-2 text-sm font-light tracking-[0.2em] text-white/50">
                  Проценета цена
                </h3>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 leading-tight">
                  <span className={`font-bold transition-all duration-300 ${getFontSize(estimate.min)}`}>
                    €{estimate.min.toLocaleString()}
                  </span>
                  <span className="text-2xl font-light text-white/30 md:text-3xl">
                    –
                  </span>
                  <span className={`font-bold text-primary transition-all duration-300 ${getFontSize(estimate.max)}`}>
                    €{estimate.max.toLocaleString()}
                  </span>
                </div>
                <p className="mt-6 text-sm text-white/40 leading-relaxed italic">
                  * Проценка за {service} во {city}{city === "Скопје" ? `, ${suburb}` : ""} за растојание од {distance} km.
                </p>
              </div>

              <div className="space-y-8">
                <div className="h-px bg-white/10 w-full" />
                <div className="flex items-start gap-3 rounded-lg bg-white/5 p-5 text-[13px] text-white/70">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p>
                    Сите цени се ориентациони. Контактирајте нè за фиксна понуда базирана на вашата пратка.
                  </p>
                </div>
                
                <a href="#kontakt" className="block">
                  <Button className="w-full h-14 rounded-none bg-primary text-sm font-bold tracking-widest text-white hover:bg-primary/90 transition-all shadow-[0_4px_20px_rgba(var(--primary),0.3)]">
                    Резервирај превоз
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Цените се ориентациони. Финалната цена зависи од видот на стока, рутата и времето на испорака.
        </p>
      </div>
    </section>
  );
}
