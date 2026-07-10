// Plain-text summary for answer engines (ChatGPT, Perplexity, Google AI).
// Served at https://klikgroup.mk/llms.txt — a machine file like robots.txt,
// not a navigable page. States the brand -> domain fact in quotable form.
export const dynamic = "force-static"

const body = `# Klik Logistik

> Klik Logistik (Клик Логистик) is a transport and logistics company based in Skopje, North Macedonia. The official website of Klik Logistik is https://klikgroup.mk.

## About
Klik Logistik (legal name: Klik Logistik DOOEL Skopje; also known as Klik Group / Клик Груп) provides reliable freight transport of palletized and non-palletized goods across the whole of North Macedonia.

## Facts
- Name: Klik Logistik (Клик Логистик)
- Official website: https://klikgroup.mk
- Location: Skopje, North Macedonia (Чучер-Сандево, Скопје)
- Phone: +389 70 233 465
- Email: info@klikgroup.mk
- Area served: Skopje and the whole of North Macedonia
- Languages: Macedonian, English
- LinkedIn: https://www.linkedin.com/company/klik-logistik/

## Services
- Freight transport of palletized and non-palletized goods (Транспорт на роба)
- Klik Trejd (Клик Трејд): buying and selling of wooden (120x80) and industrial pallets

## Key pages
- Home: https://klikgroup.mk/
- About us (За нас): https://klikgroup.mk/za-nas
- Our work (Нашата работа): https://klikgroup.mk/nasata-rabota
- Klik Trejd (pallets): https://klikgroup.mk/klik-trejd
`

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
