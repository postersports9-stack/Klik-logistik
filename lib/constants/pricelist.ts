export type TruckSize = "small" | "medium" | "large"

export type TruckSpec = {
  id: TruckSize
  label: string
  pallets: number
  tonnage: number
}

export const TRUCKS: TruckSpec[] = [
  { id: "small", label: "Мал", pallets: 10, tonnage: 3.5 },
  { id: "medium", label: "Среден", pallets: 15, tonnage: 3.5 },
  { id: "large", label: "Голем", pallets: 18, tonnage: 10 },
]

export type CityPrice = {
  city: string
  small: number
  medium: number
  large: number
}

export const PRICELIST: CityPrice[] = [
  { city: "Скопје локал", small: 2500, medium: 3000, large: 3500 },
  { city: "Тетово", small: 5500, medium: 6000, large: 7000 },
  { city: "Гостивар", small: 8000, medium: 8500, large: 9500 },
  { city: "Маврово", small: 9000, medium: 10000, large: 11000 },
  { city: "Дебар", small: 12000, medium: 13000, large: 14000 },
  { city: "Кичево", small: 9500, medium: 10500, large: 12000 },
  { city: "Охрид", small: 13000, medium: 14000, large: 16000 },
  { city: "Струга", small: 13000, medium: 14000, large: 16000 },
  { city: "Велес", small: 6000, medium: 7000, large: 8000 },
  { city: "Неготино", small: 8500, medium: 9000, large: 10000 },
  { city: "Кавадарци", small: 8500, medium: 9000, large: 10000 },
  { city: "Прилеп", small: 11500, medium: 12500, large: 13500 },
  { city: "Битола", small: 13000, medium: 14000, large: 16000 },
  { city: "Куманово", small: 5000, medium: 5500, large: 6000 },
  { city: "Крива Паланка", small: 8500, medium: 9500, large: 10500 },
  { city: "Кратово", small: 8500, medium: 9500, large: 10500 },
  { city: "Крушево", small: 12000, medium: 13000, large: 15000 },
  { city: "Ресен", small: 14500, medium: 15500, large: 17000 },
  { city: "Демир Капија", small: 9000, medium: 10000, large: 11000 },
  { city: "Валандово", small: 11000, medium: 12000, large: 13500 },
  { city: "Дојран", small: 13000, medium: 14000, large: 16000 },
  { city: "Гевгелија", small: 13000, medium: 14000, large: 16000 },
  { city: "Свети Николе", small: 5500, medium: 6000, large: 7000 },
  { city: "Штип", small: 8500, medium: 9500, large: 10500 },
  { city: "Радовиш", small: 9500, medium: 10500, large: 12000 },
  { city: "Струмица", small: 12000, medium: 13000, large: 14000 },
  { city: "Кочани", small: 8500, medium: 9500, large: 10500 },
  { city: "Виница", small: 9000, medium: 10000, large: 11000 },
  { city: "Македонска Каменица", small: 10500, medium: 11500, large: 13000 },
  { city: "Делчево", small: 12500, medium: 13500, large: 15000 },
  { city: "Берово", small: 12500, medium: 13500, large: 15000 },
  { city: "Пехчево", small: 12500, medium: 13500, large: 15000 },
  { city: "Пробиштип", small: 8500, medium: 9000, large: 10000 },
  { city: "Македонски Брод", small: 12500, medium: 13500, large: 15000 },
]

export const PRICELIST_CITIES = PRICELIST.map((p) => p.city)

export function priceFor(city: string, truck: TruckSize): number | null {
  const row = PRICELIST.find((p) => p.city === city)
  if (!row) return null
  return row[truck]
}
