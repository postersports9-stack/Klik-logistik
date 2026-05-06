"use client"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="kontakt" className="bg-white py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#2a2a2a] md:text-4xl lg:text-5xl">
              Побарајте понуда
            </h2>
            
            <p className="mb-10 text-lg leading-relaxed text-[#666] text-pretty">
              Подготвени сме да ви помогнеме со вашите градежни и инсталатерски проекти. Контактирајте нè денес за брза понуда и стручен совет.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f4f4f4]">
                  <MapPin className="h-5 w-5 text-[#2a2a2a]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2a2a2a]">Адреса</p>
                  <p className="text-[#666]">Скопје, Македонија</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f4f4f4]">
                  <Phone className="h-5 w-5 text-[#2a2a2a]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2a2a2a]">Телефон</p>
                  <p className="text-[#666]">075 211 440</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#f4f4f4] p-6 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-1">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-[#2a2a2a]">
                     Вашето име
                  </Label>
                  <Input
                    id="name"
                    placeholder="Име и Презиме"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 border-[#ddd] bg-white focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-[#2a2a2a]">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="075 211 440"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-[#ddd] bg-white focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-sm font-medium text-[#2a2a2a]">
                    Вид на услуга
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="h-auto min-h-[48px] py-3 text-left border-[#ddd] bg-white focus:border-primary focus:ring-primary [&>span]:whitespace-normal [&>span]:break-words">
                      <SelectValue placeholder="Изберете тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Груба градба и конструкција</SelectItem>
                      <SelectItem value="roofing">Покривни работи</SelectItem>
                      <SelectItem value="renovation">Реновирање и внатрешно уредување</SelectItem>
                      <SelectItem value="installations">Инсталации (Водовод и Греење)</SelectItem>
                      <SelectItem value="climate">Енергетска ефикасност и климатизација</SelectItem>
                      <SelectItem value="other">Друго</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-[#2a2a2a]">
                  Порака
                </Label>
                <Textarea
                  id="message"
                  placeholder="Опишете ги деталите за вашиот проект..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] resize-none border-[#ddd] bg-white focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                className="h-14 w-full text-base font-semibold tracking-wide bg-primary text-white hover:bg-primary/90 rounded-none"
              >
                Испрати порака
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
