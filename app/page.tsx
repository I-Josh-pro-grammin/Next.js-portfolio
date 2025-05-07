import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import './globals.css'
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      <div>
        <FloatingNavbar navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
