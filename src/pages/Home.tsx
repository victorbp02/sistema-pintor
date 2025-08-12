import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import ShowcaseSection from '../components/ShowcaseSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/ServicesSection';
import PartnersSection from '../components/PartnersSection';
import HomeReviewsSection from '../components/HomeReviewsSection';
import TeamSection from '../components/TeamSection';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function Home() {
  useScrollToTop();

  return (
    <>
      <Hero />
      <BlueSection />
      <ShowcaseSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <HomeReviewsSection />
      <TeamSection />
      <PartnersSection />
    </>
  );
} 