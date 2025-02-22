import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import DemoSection from "@/components/DemoSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <Header />
      <Hero />
      <Features />
      <DemoSection />
      <Footer />
    </main>
  )
}

