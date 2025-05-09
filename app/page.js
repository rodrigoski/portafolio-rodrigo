import HeroComponent from "./components/HeroComponent.jsx"
import Navbar from "./components/Navbar.jsx"
import ProjectSection from "./components/ProjectSection.jsx"
import SkillSection from "./components/SkillSection.jsx"
import ExperienceSection from "./components/ExperienceSection.jsx"
import ContactSection from "./components/ContactSection.jsx"
import Footer from "./components/Footer.jsx"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroComponent />
      <ProjectSection />  {/* Quita la 's' */}
      <SkillSection />    {/* Quita la 's' */}
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
