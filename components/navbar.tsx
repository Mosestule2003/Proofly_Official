"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMenu()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Proofly Logo" width={100} height={100} className="h-25 w-25" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="#home"
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#who-its-for"
              onClick={() => scrollToSection("who-its-for")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group"
            >
              Who It's For
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#roadmap"
              onClick={() => scrollToSection("roadmap")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group"
            >
              Roadmap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#pricing"
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/waitlist">
              <Button className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              <Link
                href="#home"
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800"
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800"
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800"
              >
                How It Works
              </Link>
              <Link
                href="#who-its-for"
                onClick={() => scrollToSection("who-its-for")}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800"
              >
                Who It's For
              </Link>
              <Link
                href="#roadmap"
                onClick={() => scrollToSection("roadmap")}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800"
              >
                Roadmap
              </Link>
              <Link
                href="#pricing"
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors"
              >
                Pricing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
