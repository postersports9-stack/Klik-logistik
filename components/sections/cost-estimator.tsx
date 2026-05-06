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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SERVICE_PRICES: Record<string, [number, number, number]> = {
  "Груба градба и конструкција": [150, 250, 400],
  "Покривни работи": [50, 80, 120],
  "Реновирање и внатрешно уредување": [100, 200, 350],
  "Инсталации (Водовод и Греење)": [30, 60, 100],
  "Енергетска ефикасност": [40, 70, 150],
};

const CITIES = [
  "Скопје", "Битола", "Охрид", "Тетово", "Куманово", "Прилеп", "Велес", "Штип", "Останато"
];

const SKOPJE_SUBURBS = [
  "Центар", "Карпош", "Аеродром", "Кисела Вода", "Ѓорче Петров", "Гази Баба", "Бутел", "Чаир", "Сарај", "Шуто Оризари", "Приградски населби"
];

const QUALITY_TIERS = [
  { label: "Стандардно", description: "Основни материјали", factor: 0 },
  { label: "Напредно", description: "Квалитетни решенија", factor: 1 },
  { label: "Премиум", description: "Врвни брендови", factor: 2 },
];

export function CostEstimator() {
  const [service, setService] = useState("Груба градба и конструкција");
  const [city, setCity] = useState("Скопје");
  const [suburb, setSuburb] = useState("Центар");
  const [area, setArea] = useState(120);
  const [tier, setTier] = useState(1); // 0, 1, 2
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  useEffect(() => {
    let multiplier = 1.0;
    
    if (city === "Скопје") {
      multiplier = 1.15;
      if (["Центар", "Карпош", "Аеродром"].includes(suburb)) {
        multiplier = 1.20;
      }
    } else if (["Битола", "Охрид", "Тетово"].includes(city)) {
      multiplier = 1.05;
    } else if (city === "Останато") {
      multiplier = 0.90;
    }

    const basePrices = SERVICE_PRICES[service];
    const pricePerM2 = basePrices[tier] * multiplier;
    
    const min = Math.round(pricePerM2 * area * 0.95);
    const max = Math.round(pricePerM2 * area * 1.05);
    
    setEstimate({ min, max });
  }, [service, city, suburb, area, tier]);

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
          <div className="mb-4 inline-flex items-center gap-2 border border-border px-4 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <Calculator className="h-3 w-3" />
            Интерактивен Калкулатор
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2a2a2a] md:text-4xl lg:text-5xl">
            Пресметајте ги трошоците
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Дознајте колку ќе чини професионалното чистење за вашиот простор.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-semibold uppercase tracking-wider text-[#2a2a2a]">
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
                <label className="text-sm font-semibold uppercase tracking-wider text-[#2a2a2a]">
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
                    <label className="text-sm font-semibold uppercase tracking-wider text-[#2a2a2a]">
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
                <label className="text-sm font-semibold uppercase tracking-wider text-[#2a2a2a]">
                  Површина за чистење (m²)
                </label>
                <span className="font-serif text-2xl font-bold text-primary">
                  {area} m²
                </span>
              </div>
              <Slider
                value={[area]}
                min={20}
                max={300}
                step={5}
                onValueChange={(val) => setArea(val[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-tighter">
                <span>20 m²</span>
                <span>300 m²</span>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-semibold uppercase tracking-wider text-[#2a2a2a]">
                Пакет на чистење
              </label>
              <Tabs
                value={tier.toString()}
                className="w-full"
                onValueChange={(val) => setTier(parseInt(val))}
              >
                <TabsList className="grid h-auto w-full grid-cols-1 sm:grid-cols-3 sm:h-20 rounded-none bg-[#f5f5f5] p-1 gap-1 sm:gap-0">
                  {QUALITY_TIERS.map((q, idx) => (
                    <TabsTrigger
                      key={idx}
                      value={idx.toString()}
                      className="flex flex-col gap-1 rounded-none py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                      <span className="text-sm font-bold">{q.label}</span>
                      <span className="text-[10px] opacity-60">{q.description}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          <Card className="rounded-none border-none bg-[#1a1a1a] p-8 text-white lg:p-12 overflow-hidden">
            <div className="flex h-full flex-col justify-between space-y-12">
              <div>
                <h3 className="mb-2 text-sm font-light uppercase tracking-[0.2em] text-white/50">
                  Проценета цена
                </h3>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 leading-tight">
                  <span className={`font-serif font-bold transition-all duration-300 ${getFontSize(estimate.min)}`}>
                    €{estimate.min.toLocaleString()}
                  </span>
                  <span className="text-2xl font-light text-white/30 md:text-3xl">
                    –
                  </span>
                  <span className={`font-serif font-bold text-primary transition-all duration-300 ${getFontSize(estimate.max)}`}>
                    €{estimate.max.toLocaleString()}
                  </span>
                </div>
                <p className="mt-6 text-sm text-white/40 leading-relaxed italic">
                  * Пресметка за пакет: {service} во {city}{city === "Скопје" ? `, ${suburb}` : ""} за простор од {area}m².
                </p>
              </div>

              <div className="space-y-8">
                <div className="h-px bg-white/10 w-full" />
                <div className="flex items-start gap-3 rounded-lg bg-white/5 p-5 text-[13px] text-white/70">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p>
                    Сите средства за хигиена и машини ги обезбедуваме ние. Контактирајте не за фиксна понуда.
                  </p>
                </div>
                
                <a href="#kontakt" className="block">
                  <Button className="w-full h-14 rounded-none bg-primary text-sm font-bold uppercase tracking-widest text-white hover:bg-primary/90 transition-all shadow-[0_4px_20px_rgba(var(--primary),0.3)]">
                    Резервирај термин
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Цените се ориентациони. За фиксна понуда нашиот тим прави бесплатен увид на локација.
        </p>
      </div>
    </section>
  );
}
