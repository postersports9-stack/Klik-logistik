"use client"

import { useState } from "react"
import { Phone, MessageCircle, X } from "lucide-react"
import { BRAND } from "@/lib/constants/brand"
import { cn } from "@/lib/utils"

export function ContactWidget() {
  const [open, setOpen] = useState(false)

  const actions = [
    {
      label: "Повикај",
      href: BRAND.phoneHref,
      icon: Phone,
      bg: "bg-kl-ink",
    },
    {
      label: "Viber",
      href: `viber://chat?number=${encodeURIComponent("+389" + BRAND.whatsappPhone.replace(/^0/, ""))}`,
      icon: MessageCircle,
      bg: "bg-[#7360F2]",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/389${BRAND.whatsappPhone.replace(/^0/, "")}`,
      icon: MessageCircle,
      bg: "bg-[#25D366]",
    },
  ]

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col items-end gap-2">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-white shadow-lg transition-opacity duration-100 hover:opacity-90",
                a.bg
              )}
            >
              <a.icon className="h-4 w-4" />
              {a.label}
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Затвори" : "Контакт"}
        className="flex h-14 w-14 items-center justify-center bg-kl-accent text-white shadow-xl transition-colors duration-100 hover:bg-kl-accent-strong"
      >
        {open ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>
    </div>
  )
}
