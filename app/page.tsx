import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ClassInfo from "@/components/class-info"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ClassInfo />
      <Gallery />
      <Footer />
    </main>
  )
}
