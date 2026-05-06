import { SITE_IMAGES } from "./images";

export type Vehicle = {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  capacity: string;
  dimensions: { length: string; width: string; height: string };
  features: string[];
};

export const VEHICLES: Vehicle[] = [
  {
    id: "vozilo-1",
    name: "Возило 1",
    shortDescription: "Камион со церада, натоварна рампа и палетар",
    image: SITE_IMAGES.vehicles.v1,
    capacity: "3.600 kg",
    dimensions: { length: "6.20 m", width: "2.45 m", height: "2.20 m" },
    features: ["Церада", "Натоварна рампа", "Палетар"],
  },
  {
    id: "vozilo-2",
    name: "Возило 2",
    shortDescription: "Камион фургон со натоварна рампа и палетар",
    image: SITE_IMAGES.vehicles.v2,
    capacity: "9.350 kg",
    dimensions: { length: "7.60 m", width: "2.45 m", height: "2.60 m" },
    features: ["Фургон", "Натоварна рампа", "Палетар"],
  },
];
