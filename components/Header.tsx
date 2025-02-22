"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-blue-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MedCaché</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-blue-300 transition-colors">
            Features
          </a>
          <a href="#demo" className="hover:text-blue-300 transition-colors">
            Demo
          </a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">
            Contact
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 p-4">
          <a href="#features" className="block py-2 hover:text-blue-300 transition-colors">
            Features
          </a>
          <a href="#demo" className="block py-2 hover:text-blue-300 transition-colors">
            Demo
          </a>
          <a href="#contact" className="block py-2 hover:text-blue-300 transition-colors">
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}

