import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import './globals.css'
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      <div>
        <FloatingNavbar navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
