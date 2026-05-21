import Announcement from "@/components/sections/Announcement";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import FeatureEventCard from "@/components/sections/FeatureEventCard";
import FeatureScatteredTiles from "@/components/sections/FeatureScatteredTiles";
import Categories from "@/components/sections/Categories";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Announcement />
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeatureEventCard />
      <FeatureScatteredTiles />
      <Categories />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
