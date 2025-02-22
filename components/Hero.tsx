import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Revolutionizing Healthcare Logistics</h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay-1">
        Secure, Efficient, and AI-Powered Medical Supply Management
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors animate-fade-in-delay-2 flex items-center mx-auto">
        Get Started
        <ArrowRight className="ml-2" />
      </button>
    </section>
  )
}

