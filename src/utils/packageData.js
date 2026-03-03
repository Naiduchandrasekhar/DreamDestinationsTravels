// data for individual tour packages and the list of packages used on the home page

import {
  arakuLandscape,
  vizagCity,
  whatsUpIcon,
  amazeRedCar,
  carwalDzireImage,
  ertigaCarWaleImage,
  innovaCrystaCarwaleImage,
  urbaniaVanImage,
} from "./images";
import { siteConfig } from "./siteConfig";

// common car package options used by several tour pages
export const commonCarPackages = [
  {
    name: "Honda Amaze",
    price: "₹ 5,000",
    description:
      "Accommodates 4 passengers. Comfortable ride for tour packages. Minimum 12 hours & 260 km.",
    pax: "4 Max",
    type: "Sedan",
    image: amazeRedCar,
  },
  {
    name: "Swift Dzire",
    price: "₹ 5,000",
    description:
      "Accommodates 4 passengers. Comfortable ride for tour packages. Minimum 12 hours & 260 km.",
    pax: "4 Max",
    type: "Sedan",
    image: carwalDzireImage,
  },
  {
    name: "Ertiga",
    price: "₹ 6,500",
    description:
      "Accommodates 6 passengers. Comfortable ride for tour packages. Minimum 12 hours & 260 km.",
    pax: "6 Max",
    type: "SUV",
    image: ertigaCarWaleImage,
  },
  {
    name: "Innova Crysta",
    price: "₹ 8,000",
    description:
      "Accommodates 7 passengers. Comfortable ride for tour packages. Minimum 12 hours & 260 km.",
    pax: "7 Max",
    type: "SUV",
    image: innovaCrystaCarwaleImage,
  },
  {
    name: "17 Seater",
    price: "₹ 10,000",
    description:
      "Accommodates 17 passengers. Comfortable ride for tour packages. Minimum 12 hours & 260 km.",
    pax: "17 Max",
    type: "Van",
    image: urbaniaVanImage,
  },
];

// specialized car packages for Odisha tour
export const odishaCarPackages = [
  {
    name: "Innova Crysta",
    price: "Start from ₹ 9,000",
    description:
      "Spacious and ideal for temple and coastal tours including Bhubaneswar, Konark, and Puri. Great for families.",
    location: "Bhubaneswar / Puri",
    pax: "7 Max",
    type: "SUV",
    offer: null,
    image: innovaCrystaCarwaleImage,
  },
  {
    name: "Ertiga",
    price: "Start from ₹ 7,800",
    description:
      "Comfortable and budget-friendly option for heritage tours and scenic drives across Odisha’s top sites.",
    location: "Bhubaneswar / Puri",
    pax: "6 Max",
    type: "SUV",
    offer: "Sale 10%",
    image: ertigaCarWaleImage,
  },
  {
    name: "Honda Amaze",
    price: "Start from ₹ 5,500",
    description:
      "Perfect for couples or small groups exploring Sun Temple, Chilika Lake, and Bhubaneswar temples.",
    location: "Bhubaneswar",
    pax: "4 Max",
    type: "Sedan",
    offer: "Sale 10%",
    image: amazeRedCar,
  },
  {
    name: "Swift Dzire",
    price: "Start from ₹ 5,300",
    description:
      "Affordable sedan for full-day Odisha sightseeing and city explorations.",
    location: "Bhubaneswar",
    pax: "4 Max",
    type: "Sedan",
    offer: "Sale 10%",
    image: carwalDzireImage,
  },
];

// metadata for each package page and home travel links
export const packages = {
  araku: {
    path: "/araku-package",
    title: "Araku Tour Packages",
    description:
      "Discover the serene beauty of Araku Valley with our exclusive tour packages. Explore misty hills, coffee plantations, and tribal culture. Choose from a variety of comfortable car options for a personalized travel experience.",
    carPackages: commonCarPackages,
    contactButtonImage: whatsUpIcon,
  },
  lambasingi: {
    path: "/lambasingi-package",
    title: "Lambasingi Tour Packages",
    description:
      "Explore the misty hills of Lambasingi, often called the \"Kashmir of Andhra Pradesh\". Enjoy cool weather, scenic beauty, and peaceful nature. Our tour packages provide reliable transportation and experienced local drivers.",
    carPackages: commonCarPackages,
    contactButtonImage: whatsUpIcon,
  },
  vanajangi: {
    path: "/vanajangi-package",
    title: "Vanajangi Tour Packages",
    description:
      "Escape to Vanajangi, a hidden gem in the Eastern Ghats known for spectacular sunrise views above the clouds. Ideal for trekkers and photographers seeking a tranquil adventure.",
    carPackages: commonCarPackages,
    contactButtonImage: whatsUpIcon,
  },
  temple: {
    path: "/temple-package",
    title: "Visakhapatnam Temple Tour Packages",
    description:
      "Discover Vizag’s spiritual side by visiting temples like Simhachalam, Kanaka Mahalakshmi, and ISKCON. These guided temple tours offer peaceful and culturally rich experiences across the city.",
    carPackages: commonCarPackages,
    contactButtonImage: whatsUpIcon,
  },
  vizagTour: {
    path: "/vizag-tour-package",
    title: "Visakhapatnam City Sightseeing Tour Packages",
    description:
      "Explore Vizag’s top attractions including RK Beach, Kailasagiri, and Submarine Museum. These full-day city tours offer a vibrant blend of culture, coastlines, and urban charm.",
    images: [tenatiPark, simhachalamTemple, divisBeachImage],
    carPackages: commonCarPackages,
    contactButtonImage: whatsUpIcon,
  },
  odisha: {
    path: "/odisha-package",
    title: "Odisha Full Tour Packages",
    description:
      "Discover the cultural and natural wonders of Odisha with our all-inclusive tour packages. From the iconic Konark Sun Temple and Jagannath Puri to serene Chilika Lake and tribal heritage, travel in comfort with local drivers and well-maintained vehicles.",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sun_temple_Konark.jpg",
    carPackages: odishaCarPackages,
  },
};

// an array suitable for the home page card grid
export const travelPlaces = [
  {
    title: "Araku Valley",
    img: arakuLandscape,
    description:
      "Araku Valley is a scenic hill station in the Eastern Ghats, known for coffee plantations, tribal culture, and lush waterfalls. A peaceful retreat just hours from Visakhapatnam.",
    path: packages.araku.path,
  },
  {
    title: "Lambasingi",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/Misty-Lambasingi.jpg",
    description:
      "Lambasingi is a charming village with misty mornings, cool temperatures, and lush landscapes. Known as the 'Kashmir of Andhra', it's a unique winter destination in South India.",
    path: packages.lambasingi.path,
  },
  {
    title: "Vanajangi",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/30-VZ-VANJANGI.jpg",
    description:
      "Vanajangi offers breathtaking sunrise views above the clouds. Nestled in the Eastern Ghats, it's a serene trekker’s paradise and perfect for nature photography and quiet escapes.",
    path: packages.vanajangi.path,
  },
  {
    title: "Visakhapatnam Temple Tour Packages",
    img: "https://lightsalmon-okapi-437889.hostingersite.com/wp-content/uploads/2025/03/download-3.jpg",
    description:
      "Discover Vizag’s spiritual side by visiting temples like Simhachalam, Kanaka Mahalakshmi, and ISKCON. These guided temple tours offer peaceful and culturally rich experiences across the city.",
    path: packages.temple.path,
  },
  {
    title: "Visakhapatnam City Sightseeing Tour Packages",
    img: vizagCity,
    description:
      "Explore Vizag’s top attractions including RK Beach, Kailasagiri, and Submarine Museum. These full-day city tours offer a vibrant blend of culture, coastlines, and urban charm.",
    path: packages.vizagTour.path,
  },
];
