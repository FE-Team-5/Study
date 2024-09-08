import CTASection from '../components/organisms/CTASection';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import HeroSection from '../components/organisms/HeroSection';
import StatisticsSection from '../components/organisms/StatisticsSection';

export default function IndexPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </>
  );
}
