import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { FacilitySection } from "@/components/FacilitySection";
import { MembershipSection } from "@/components/MembershipSection";
import { PersonalTrainingSection } from "@/components/PersonalTrainingSection";
import { TransformationSection } from "@/components/TransformationSection";
import { CommunitySection } from "@/components/CommunitySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingNav />
      <HeroSection />
      <PhilosophySection />
      <FacilitySection />
      <MembershipSection />
      <PersonalTrainingSection />
      <TransformationSection />
      <CommunitySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
