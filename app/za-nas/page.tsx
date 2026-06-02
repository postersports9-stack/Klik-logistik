import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = {
  title: "За нас — фирма за транспорт во Скопје",
  description: "Дознајте за Клик Логистик (Klik Group) — фирма за транспорт и логистика за сигурен превоз на роба во Скопје и низ Македонија.",
  alternates: { canonical: "/za-nas" },
}

const paragraphs = [
  "Klik Logistik е логистичка компанија специјализирана за сигурен, навремен и ефикасен транспорт во Македонија. Градиме раст преку стабилна услуга и долгорочна соработка со клиенти од различни индустрии.",
  "Работиме организирано и одговорно, со јасна комуникација и фокус на секоја испорака. Обезбедуваме практични логистички решенија прилагодени на реалните потреби на клиентите, со акцент на точност и сигурност.",
  "Нашата сила е во тимот. Се грижиме за луѓето во компанијата затоа што веруваме дека добрата услуга започнува од внатре.",
  "Во следната фаза од развојот, планираме континуирано проширување на нашиот возен парк и воведување нови домашни релации.",
]

export default function ZaNasPage() {
  return (
    <main className="flex min-h-screen flex-col bg-kl-subtle">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Дома", item: "https://klikgroup.mk/" },
          { "@type": "ListItem", position: 2, name: "За нас", item: "https://klikgroup.mk/za-nas" },
        ],
      }} />
      <Header />
      <section className="flex-1 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-kl-muted">
              Компанија
            </span>
            <h1 className="mt-3 text-[36px] font-medium leading-tight tracking-tight text-kl-ink sm:text-[48px]">
              За нас
            </h1>
            
            <div className="mt-10 space-y-6">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[28px] text-kl-ink/80 sm:text-[18px] sm:leading-[32px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
