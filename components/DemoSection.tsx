"use client"

import { useState } from "react"
import { Smartphone, Server, Activity } from "lucide-react"

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState("offline")

  const tabs = [
    { id: "offline", label: "Offline App", icon: <Smartphone className="w-6 h-6" /> },
    { id: "sync", label: "Data Sync", icon: <Server className="w-6 h-6" /> },
    { id: "ai", label: "AI Predictions", icon: <Activity className="w-6 h-6" /> },
  ]

  return (
    <section id="demo" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Interactive Demo</h2>
      <div className="max-w-4xl mx-auto bg-blue-800 bg-opacity-50 rounded-lg overflow-hidden">
        <div className="flex border-b border-blue-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-4 px-6 flex items-center justify-center ${
                activeTab === tab.id ? "bg-blue-700" : "hover:bg-blue-700 hover:bg-opacity-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === "offline" && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">Offline Inventory Management</h3>
              <p className="mb-4">Experience seamless inventory tracking, even without an internet connection.</p>
              <div className="bg-blue-900 p-4 rounded-lg">
                {/* Placeholder for offline app demo */}
                <p className="text-center text-blue-300">Offline App Interface Placeholder</p>
              </div>
            </div>
          )}
          {activeTab === "sync" && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">Real-Time Data Synchronization</h3>
              <p className="mb-4">
                Watch as data seamlessly syncs across devices when internet connection is restored.
              </p>
              <div className="bg-blue-900 p-4 rounded-lg">
                {/* Placeholder for data sync demo */}
                <p className="text-center text-blue-300">Data Sync Visualization Placeholder</p>
              </div>
            </div>
          )}
          {activeTab === "ai" && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Demand Prediction</h3>
              <p className="mb-4">
                See how our AI models predict future medical supply needs based on historical data.
              </p>
              <div className="bg-blue-900 p-4 rounded-lg">
                {/* Placeholder for AI prediction demo */}
                <p className="text-center text-blue-300">AI Prediction Graph Placeholder</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

