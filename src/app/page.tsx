import CompanySection from "@/components/CompanySection";
import ContactUsSection from "@/components/ContactUsSection";
import HeroSection from "@/components/HeroSection";
import MyStacksSection from "@/components/MyStacksSection";
import ProjectSection from "@/components/ProjectSection";
import ReviewSection from "@/components/ReviewSection";
import SkillSection from "@/components/SkillSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MyStacksSection />
      <ProjectSection />
      <SkillSection />
      <ReviewSection />
      <ContactUsSection />
    </>
  );
}
