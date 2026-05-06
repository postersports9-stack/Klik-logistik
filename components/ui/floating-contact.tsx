"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND } from "@/lib/constants/brand";

const PHONE = BRAND.whatsappPhone;
const VIBER_LINK = `viber://chat?number=${PHONE}`;
const WHATSAPP_LINK = `https://wa.me/${PHONE}`;
const CALL_LINK = `tel:${PHONE}`;

const options = [
  {
    label: "Viber",
    href: VIBER_LINK,
    color: "bg-[#7360f2] hover:bg-[#6350e0]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.4 0C5.5 0 1 4.3 1 10.1c0 3.2 1.4 6 3.8 8l-.5 3.7 3.8-1.3c1.2.4 2.5.6 3.8.6C17.7 21 23 16.5 23 10.1S17.7 0 11.4 0zm5.3 14.8c-.3.8-1.4 1.4-2.3 1.6-.6.1-1.4.2-4-1.3-3.3-1.9-5.4-5.2-5.5-5.4-.1-.2-1.1-1.5-1.1-2.9s.7-2 .9-2.3c.2-.3.5-.4.6-.4h.4c.1 0 .4 0 .5.4s.9 2.3.9 2.4c.1.2.1.4 0 .5-.1.2-.2.3-.3.5-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.6 1 .9 1.8 1.2 2.1 1.3.3.1.4 0 .6-.2.2-.2.5-.6.8-.9.2-.3.4-.2.6-.1.2.1 1.6.8 1.9.9.3.2.5.2.6.3.1.3.1 1-.2 1.9z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_LINK,
    color: "bg-[#25d366] hover:bg-[#1ebe5d]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "Повикај",
    href: CALL_LINK,
    color: "bg-primary hover:bg-primary/90",
    icon: <Phone className="h-5 w-5" />,
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-2"
          >
            {options.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 rounded-full py-2 pl-4 pr-5 text-sm font-medium text-white shadow-lg transition-all duration-200 ${opt.color}`}
              >
                {opt.icon}
                {opt.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(0,0,0,0.35)] hover:scale-105"
        aria-label="Контактирајте не"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Phone className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
