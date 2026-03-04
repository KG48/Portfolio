import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { LeetCodeSection } from "./sections/LeetCodeSection";
import { GitHubStatsSection } from "./sections/GitHubStatsSection";
import { BlogSection } from "./sections/BlogSection";
import { GoalsSection } from "./sections/GoalsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./Footer";
import { ParticlesBackground } from "./ParticlesBackground";

export function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LeetCodeSection />
      <GitHubStatsSection />
      <BlogSection />
      <GoalsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}