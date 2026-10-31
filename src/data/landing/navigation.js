import { site } from "./site";

export const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Traditions", href: "#categories" },
  { label: "Reading Room", href: "#reading-room" },
  { label: "Visit", href: "#visit" },
];

export const footerColumns = [
  {
    heading: "Collection",
    links: [
      { label: "Hindu Scriptures", href: "#categories" },
      { label: "Herbal Medicine", href: "#categories" },
      { label: "Spirituality", href: "#categories" },
      { label: "Yoga", href: "#categories" },
    ],
  },
  {
    heading: "Visit",
    links: [
      { label: "Find the shop", href: "#visit" },
      { label: "Opening hours", href: "#visit" },
      { label: "Our story", href: "#story" },
      { label: "New arrivals", href: "#collection" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: site.phoneHref },
      { label: "Jwalapur Road, Haridwar" },
      { label: "Uttarakhand 249401" },
    ],
  },
];
