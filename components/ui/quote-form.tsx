"use client"

import { useState } from "react"

type QuoteFormProps = {
  variant?: "hero" | "inline"
}

export function QuoteForm({ variant = "hero" }: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = new FormData(e.currentTarget)
    // Backend wiring is handled in the contact form section. The hero quick form
    // currently logs and shows a confirmation; production should POST to the same
    // endpoint as the contact form once one exists.
    console.info("[QuoteForm]", Object.fromEntries(data.entries()))
    await new Promise((r) => setTimeout(r, 300))
    setSubmitting(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="bg-white p-6 text-kl-ink">
        <p className="text-[15px] font-medium">Благодариме. Ќе ве контактираме во рок од 30 минути.</p>
      </div>
    )
  }

  const wrapperBg = variant === "hero" ? "bg-white" : "bg-transparent"

  return (
    <form onSubmit={onSubmit} className={`${wrapperBg} p-6 text-kl-ink`}>
      <div className="grid grid-cols-2 gap-2">
        <label className="block">
          <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">Од</span>
          <input
            name="from"
            required
            className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
            placeholder="Скопје"
          />
        </label>
        <label className="block">
          <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">До</span>
          <input
            name="to"
            required
            className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
            placeholder="Битола"
          />
        </label>
      </div>
      <label className="mt-2 block">
        <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">Телефон</span>
        <input
          name="phone"
          type="tel"
          required
          className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
          placeholder="07X XXX XXX"
        />
      </label>
      <label className="mt-2 block">
        <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">Тип на товар</span>
        <select
          name="cargo"
          required
          defaultValue="Палети"
          className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
        >
          <option>Палети</option>
          <option>Расути</option>
          <option>ADR</option>
          <option>Комбиниран</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="mt-3 block h-12 w-full bg-kl-cta text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong disabled:opacity-60"
      >
        {submitting ? "Се испраќа…" : "Побарај понуда"}
      </button>
    </form>
  )
}
