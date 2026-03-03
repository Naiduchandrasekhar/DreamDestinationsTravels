import { siteConfig } from "./siteConfig";
import { travelPlaces as packageLinks } from "./packageData";

// hero section content visible on the landing page
export const heroContent = {
  title: siteConfig.siteName,
  subtitle:
    "Experience stress-free travel with reliable airport pickups and personalized service, wherever you go.",
  buttons: [
    { label: "Contact Us", link: siteConfig.whatsappLink },
    { label: "Travel Packages", link: siteConfig.whatsappLink },
    { label: "Budget Friendly", link: siteConfig.whatsappLink },
  ],
};

// airport pickup section data
export const airportSection = {
  title: "Pickups from Vizag Airport, Hassle-Free",
  description:
    "Skip the usual rental process and enjoy seamless, on-time airport pickups. No lines, no delays — just reliable, comfortable rides waiting when you land.",
  bullets: [
    "From runway to driveway, effortlessly.",
    "No more waiting — on-time airport pickups, every time.",
    "Land. Ride. Relax.",
  ],
  contactLink: siteConfig.whatsappLink,
};

// the cards shown under "Our Tour Packages" on the home page
export const travelPlaces = packageLinks;
