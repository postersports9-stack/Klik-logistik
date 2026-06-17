export type TruckSize = "small" | "medium" | "large" | "xlarge"

export type TruckSpec = {
  id: TruckSize
  label: string
  pallets: number
  tonnage: number
}

export const TRUCKS: TruckSpec[] = [
  { id: "small", label: "До 10 палети", pallets: 10, tonnage: 3.8 },
  { id: "medium", label: "До 15 палети", pallets: 15, tonnage: 3.6 },
  { id: "large", label: "До 18 палети", pallets: 18, tonnage: 10 },
  { id: "xlarge", label: "До 21 палета", pallets: 21, tonnage: 15.5 },
]

export function truckLabel(t: TruckSpec): string {
  return `${t.label} (${t.tonnage}т)`
}

export type CityPrice = {
  city: string
  small: number
  medium: number
  large: number
  xlarge: number
}

export const PRICELIST: CityPrice[] = [
  { city: "Скопје локал", small: 2500, medium: 3000, large: 3500, xlarge: 4000 },
  { city: "Тетово", small: 5500, medium: 6000, large: 7000, xlarge: 9000 },
  { city: "Гостивар", small: 8000, medium: 8500, large: 9500, xlarge: 12000 },
  { city: "Маврово", small: 9000, medium: 10000, large: 11000, xlarge: 13000 },
  { city: "Дебар", small: 12000, medium: 13000, large: 14000, xlarge: 16000 },
  { city: "Кичево", small: 9500, medium: 10500, large: 12000, xlarge: 13500 },
  { city: "Охрид", small: 13000, medium: 14000, large: 16000, xlarge: 17000 },
  { city: "Струга", small: 13000, medium: 14000, large: 16000, xlarge: 17000 },
  { city: "Велес", small: 6000, medium: 7000, large: 8000, xlarge: 9500 },
  { city: "Неготино", small: 8500, medium: 9000, large: 10000, xlarge: 12000 },
  { city: "Кавадарци", small: 8500, medium: 9000, large: 10000, xlarge: 12000 },
  { city: "Прилеп", small: 11500, medium: 12500, large: 13500, xlarge: 15000 },
  { city: "Битола", small: 13000, medium: 14000, large: 16000, xlarge: 17000 },
  { city: "Куманово", small: 5000, medium: 5500, large: 6000, xlarge: 7000 },
  { city: "Крива Паланка", small: 8500, medium: 9500, large: 10500, xlarge: 12500 },
  { city: "Кратово", small: 8500, medium: 9500, large: 10500, xlarge: 12500 },
  { city: "Крушево", small: 12000, medium: 13000, large: 15000, xlarge: 17000 },
  { city: "Ресен", small: 14500, medium: 15500, large: 17000, xlarge: 19000 },
  { city: "Демир Капија", small: 9000, medium: 10000, large: 11000, xlarge: 13000 },
  { city: "Валандово", small: 11000, medium: 12000, large: 13500, xlarge: 15000 },
  { city: "Дојран", small: 13000, medium: 14000, large: 16000, xlarge: 17500 },
  { city: "Гевгелија", small: 13000, medium: 14000, large: 16000, xlarge: 17500 },
  { city: "Свети Николе", small: 5500, medium: 6000, large: 7000, xlarge: 8500 },
  { city: "Штип", small: 8500, medium: 9500, large: 10500, xlarge: 12000 },
  { city: "Радовиш", small: 9500, medium: 10500, large: 12000, xlarge: 13500 },
  { city: "Струмица", small: 12000, medium: 13000, large: 14000, xlarge: 16000 },
  { city: "Кочани", small: 8500, medium: 9500, large: 10500, xlarge: 12500 },
  { city: "Виница", small: 9000, medium: 10000, large: 11000, xlarge: 13000 },
  { city: "Македонска Каменица", small: 10500, medium: 11500, large: 13000, xlarge: 15000 },
  { city: "Делчево", small: 12500, medium: 13500, large: 15000, xlarge: 17000 },
  { city: "Берово", small: 12500, medium: 13500, large: 15000, xlarge: 17000 },
  { city: "Пехчево", small: 12500, medium: 13500, large: 15000, xlarge: 17000 },
  { city: "Пробиштип", small: 8500, medium: 9000, large: 10000, xlarge: 12000 },
  { city: "Македонски Брод", small: 12500, medium: 13500, large: 15000, xlarge: 16500 },
]

export const PRICELIST_CITIES = PRICELIST.map((p) => p.city)

export function priceFor(city: string, truck: TruckSize): number | null {
  const row = PRICELIST.find((p) => p.city === city)
  if (!row) return null
  return row[truck]
}
