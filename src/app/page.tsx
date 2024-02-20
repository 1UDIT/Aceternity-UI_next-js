import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import InfinityScrollNews from "@/Components/InfinityScrollNews";
import { ListContainer } from "@/Components/ListSection"; 
import { TracingBeam } from "@/Components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <TracingBeam>
        <HeroSection />
        <ListContainer />
        <InfinityScrollNews/>
        <Footer/>
      </TracingBeam>
    </main>
  );
}
