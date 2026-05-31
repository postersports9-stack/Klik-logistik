"use client"

import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { SectionHeading } from "@/components/sections/section-heading"
import { BRAND } from "@/lib/constants/brand"
import { SectionWatermark } from "@/components/ui/section-watermark"

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [route, setRoute] = useState("")

  useEffect(() => {
    function handleFillRoute(e: Event) {
      const customEvent = e as CustomEvent<{ route: string }>

      if (customEvent.detail && customEvent.detail.route) {
        setRoute(customEvent.detail.route)
      }
    }

    window.addEventListener("fill-route", handleFillRoute)

    return () => {
      window.removeEventListener("fill-route", handleFillRoute)
    }
  }, [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        alert(result.message || "Настана грешка при испраќање.")
        return
      }

      setDone(true)
      form.reset()
      setRoute("")
    } catch (error) {
      console.error("[ContactForm]", error)
      alert("Настана грешка при испраќање. Обидете се повторно.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="kontakt" data-theme="light" className="relative bg-white">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="Контакт" position="br" />

        <SectionHeading
          number="07"
          eyebrow="Контакт"
          title="Побарај понуда."
          lead="Одговараме во 30 минути работно време."
        />

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            {done ? (
              <p className="text-[16px] text-kl-ink">
                Благодариме. Ќе ве контактираме во рок од 30 минути.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input name="name" label="Име" required />
                <Input name="company" label="Компанија" />
                <Input name="phone" type="tel" label="Телефон" required />
                <Input name="email" type="email" label="Email" />

                <div className="sm:col-span-2">
                  <Input
                    name="route"
                    label="Релација"
                    placeholder="Скопје → Виена"
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Textarea
                    name="message"
                    label="Порака"
                    placeholder="Напишете краток опис на пратката, дестинација или прашање."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="h-12 rounded-[8px] bg-kl-cta text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong disabled:opacity-60 sm:col-span-2"
                >
                  {submitting ? "Се испраќа…" : "Побарај понуда"}
                </button>
              </form>
            )}
          </div>

          <aside className="md:col-span-5">
            <dl className="space-y-6 text-[14px]">
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  Телефон
                </dt>
                <dd className="mt-1">
                  <a href={BRAND.phoneHref} className="text-[22px] font-medium text-kl-ink">
                    {BRAND.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  Email
                </dt>
                <dd className="mt-1 text-kl-ink">
                  <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                </dd>
              </div>

              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  Адреса
                </dt>
                <dd className="mt-1 text-kl-ink">{BRAND.address}</dd>
              </div>

              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  Работно време
                </dt>
                <dd className="mt-1 text-kl-ink">Пон–Саб 08:00–20:00</dd>
              </div>
            </dl>

            <div className="mt-8">
              <iframe
                title="Локација"
                src="https://www.google.com/maps?q=Skopje&output=embed"
                className="h-[320px] w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Input({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 h-12 w-full border-b border-kl-line bg-transparent text-[16px] text-kl-ink outline-none transition-colors duration-100 placeholder:text-kl-muted focus:border-kl-cta"
      />
    </label>
  )
}

function Textarea({
  label,
  name,
  required,
  placeholder,
}: {
  label: string
  name: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
        {label}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="mt-2 w-full resize-none border-b border-kl-line bg-transparent py-3 text-[16px] text-kl-ink outline-none transition-colors duration-100 placeholder:text-kl-muted focus:border-kl-cta"
      />
    </label>
  )
}
