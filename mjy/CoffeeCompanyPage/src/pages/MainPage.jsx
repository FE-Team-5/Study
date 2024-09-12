import style from "../styles/MainPage.module.css";
import CollectionSection from "./CollectionSection";
import HowItWorksPage from "./HowItWorksPage";
import TopSection from "./TopSection";
import WhyChooseSection from "./WhyChooseSection";
export default function MainPage() {
  return (
    <main className={`${style.main} mw`}>
      <TopSection />
      <CollectionSection />
      <WhyChooseSection />
      <HowItWorksPage />
    </main>
  );
}
