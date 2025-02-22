import { Shield, Zap, BarChart3 } from "lucide-react"

const features = [
  {
    icon: <Shield className="w-12 h-12 mb-4 text-blue-400" />,
    title: "Tamper-Proof Tracking",
    description: "Blockchain-based QR codes ensure every medicine is traceable and fraud-resistant.",
  },
  {
    icon: <Zap className="w-12 h-12 mb-4 text-blue-400" />,
    title: "AI-Powered Predictions",
    description: "Advanced AI models predict local demand and optimize supply distribution.",
  },
  {
    icon: <BarChart3 className="w-12 h-12 mb-4 text-blue-400" />,
    title: "Real-Time Analytics",
    description: "Get instant insights into your medical supply chain with our intuitive dashboard.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-800 bg-opacity-50 p-6 rounded-lg text-center hover:bg-opacity-70 transition-all transform hover:scale-105"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

