import HeroSection from "@/Components/HeroSection";
import { ListContainer } from "@/Components/ListSection"; 
import { TracingBeam } from "@/Components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <TracingBeam>
        <HeroSection />
        <ListContainer />
      </TracingBeam>
    </main>
  );
}
