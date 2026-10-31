import TopBar from "./TopBar";
import SiteHeader from "./SiteHeader";
import Hero from "./Hero";
import Marquee from "./Marquee";
import CategoriesSection from "./CategoriesSection";
import CollectionSection from "./CollectionSection";
import ProvenanceSection from "./ProvenanceSection";
import QuoteSection from "./QuoteSection";
import TestimonialsSection from "./TestimonialsSection";
import StorySection from "./StorySection";
import ReadingCircle from "./ReadingCircle";
import SiteFooter from "./SiteFooter";

export {
  TopBar,
  SiteHeader,
  Hero,
  Marquee,
  CategoriesSection,
  CollectionSection,
  ProvenanceSection,
  QuoteSection,
  TestimonialsSection,
  StorySection,
  ReadingCircle,
  SiteFooter,
};

export const landingSections = [
  { id: "hero", Component: Hero },
  { id: "marquee", Component: Marquee },
  { id: "categories", Component: CategoriesSection },
  { id: "collection", Component: CollectionSection },
  { id: "provenance", Component: ProvenanceSection },
  { id: "quote", Component: QuoteSection },
  { id: "testimonials", Component: TestimonialsSection },
  { id: "story", Component: StorySection },
  { id: "reading-circle", Component: ReadingCircle },
];
