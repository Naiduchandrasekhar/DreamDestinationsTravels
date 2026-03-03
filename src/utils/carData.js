// car data and filter configuration used by the "Our Cars" section/components

import {
  carwalDzireImage,
  amazeRedCar,
  ertigaCarWaleImage,
  innovaCrystaCarwaleImage,
  innovaHycrosCarWaleImage,
  fortunerCar,
  urbaniaVanImage,
  volovoBus,
} from "./images";

// list of all vehicles available on the site
export const allCars = [
  {
    id: 1,
    brand: "Maruti Suzuki",
    model: "Dzire",
    image: carwalDzireImage,
    price: "2500",
    seats: "4",
    luggage: "2",
    baseFare: "14/- per KM",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Amaze",
    image: amazeRedCar,
    price: "2500",
    seats: "4",
    luggage: "2",
    baseFare: "14/- per KM",
  },
  {
    id: 3,
    brand: "Maruti Suzuki",
    model: "Ertiga",
    image: ertigaCarWaleImage,
    price: "3500",
    seats: "6",
    luggage: "3",
    baseFare: "18/- per KM",
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Innova Crysta",
    image: innovaCrystaCarwaleImage,
    price: "4000",
    seats: "7",
    luggage: "3",
    baseFare: "20/- per KM",
  },
  {
    id: 5,
    brand: "Toyota",
    model: "Innova Hycross",
    image: innovaHycrosCarWaleImage,
    price: "4500",
    seats: "7",
    luggage: "3",
    baseFare: "20/- per KM",
  },
  {
    id: 6,
    brand: "Toyota",
    model: "Fortuner",
    image: fortunerCar,
    price: "10000",
    seats: "7",
    luggage: "3",
    baseFare: "45/- per KM",
  },
  {
    id: 7,
    brand: "17 Seater",
    model: "Tempo Traveller",
    image: urbaniaVanImage,
    price: "7000",
    seats: "17",
    luggage: "20",
    baseFare: "35/- per KM",
  },
  {
    id: 8,
    brand: "45 Seater",
    model: "Bus",
    image: volovoBus,
    price: "15000",
    seats: "45",
    luggage: "50",
    baseFare: "95/- per KM",
  },
];

// options used by the filter section; this is static but kept for easy maintenance
export const filterOptions = [
  { label: "Brand", options: ["Maruti Suzuki", "Toyota", "Honda", "17 Seater", "45 Seater"], name: "brand" },
  { label: "Model", options: ["Dzire", "Ertiga", "Amaze", "Bus", "Innova Crysta", "Innova Hycross", "Tempo Traveller", "Fortuner"], name: "model" },
  { label: "Seats", options: ["4", "6", "7", "17", "45"], name: "seats", format: (val) => `${val} Seats` },
  { label: "Price", options: ["2500", "3500", "4000", "4500", "7000", "10000", "15000"], name: "price", format: (val) => `₹ ${Number(val).toLocaleString("en-IN")}` },
];
