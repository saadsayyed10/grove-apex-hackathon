import CTA from "./CTA";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Trusted from "./Trusted";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
