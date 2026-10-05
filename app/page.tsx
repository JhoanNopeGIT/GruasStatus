import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Coverage from "@/components/home/Coverage";
import Process from "@/components/home/Process";
import Gallery from "@/components/home/Gallery";
import CTA from "@/components/home/CTA";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PageLoader from "@/components/ui/PageLoader";
import CursorGlow from "@/components/ui/CursorGlow";
import QuoteForm from "@/components/ui/QuoteForm";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Coverage />
      <Process />
      <Gallery />
      <CTA />
      <FloatingWhatsapp />
      <QuoteForm />
      <Footer />
      <ScrollToTop />
    </>
  );
}