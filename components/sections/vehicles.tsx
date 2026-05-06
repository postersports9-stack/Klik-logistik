"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VEHICLES, type Vehicle } from "@/lib/constants/vehicles";
import { BRAND } from "@/lib/constants/brand";

export function Vehicles() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Vehicle | null>(null);

  return (
    <section id="vozila" className="bg-white py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block border border-border px-4 py-1 text-xs font-medium tracking-widest text-muted-foreground">
            Возен парк
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#2a2a2a] md:text-4xl lg:text-5xl">
            Возила
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Возила прилагодени за различни потреби на превоз. Кликнете за повеќе детали.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => { setActive(v); setOpen(true); }}
              className="group flex flex-col overflow-hidden border border-border bg-white text-left transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#eee]">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold text-[#2a2a2a]">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.shortDescription}</p>
                <p className="mt-2 text-sm font-medium text-[#2a2a2a]">
                  Носивост: {v.capacity}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-primary">
                  Повеќе детали →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) setActive(null);
      }}>
        <DialogContent className="max-w-2xl rounded-none p-0">
          {active && (
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eee]">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                    {active.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">
                    {active.shortDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Носивост
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#2a2a2a]">
                      {active.capacity}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Габаритни димензии
                    </p>
                    <ul className="mt-1 text-sm text-[#2a2a2a]">
                      <li>Должина: {active.dimensions.length}</li>
                      <li>Ширина: {active.dimensions.width}</li>
                      <li>Висина: {active.dimensions.height}</li>
                    </ul>
                  </div>
                </div>

                {active.features.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Опрема
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {active.features.map((f) => (
                        <li
                          key={f}
                          className="border border-border px-3 py-1 text-xs text-[#2a2a2a]"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 flex-1 rounded-none bg-primary text-sm font-semibold tracking-wide text-white hover:bg-primary/90"
                  >
                    <a href={BRAND.phoneHref} className="inline-flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" /> Повикај нè ({BRAND.phone})
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="h-12 rounded-none"
                  >
                    Затвори
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
