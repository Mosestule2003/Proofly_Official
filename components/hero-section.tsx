"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D7A3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#00D7A3]/10 text-[#00D7A3] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4" />
              Trusted by 1000+ Users
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Rental Evaluations.{" "}
              <span className="text-[#00D7A3] relative">
                Remotely.
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C100 2 200 2 298 10" stroke="#00D7A3" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              <span className="text-[#00D7A3]">Securely.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Book in-person viewings even when you're not there. Get verified property reports before you send
              deposits. Join the future of remote renting.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-8 mb-8"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00D7A3]" />
                <span className="text-sm text-gray-600 dark:text-gray-400">500+ Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00D7A3]" />
                <span className="text-sm text-gray-600 dark:text-gray-400">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#00D7A3]" />
                <span className="text-sm text-gray-600 dark:text-gray-400">24h Response</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                size="lg"
                onClick={() => window.open("https://calendar.app.google/ETcNL8pSfbAz9sca6", "_blank")}
              >
                Book Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="/waitlist">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:border-[#00D7A3] hover:text-[#00D7A3] px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 group"
                  size="lg"
                >
                  Join Waitlist
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              {/* Mock Interface */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                </div>

                <div className="bg-gradient-to-r from-[#00D7A3]/10 to-blue-500/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Property Evaluation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Get verified reports from local Proofly Friends
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#00D7A3] rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">Verified & Secure</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#00D7A3]">98%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#00D7A3]">24h</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Response Time</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-[#00D7A3] text-white p-3 rounded-full shadow-lg"
              >
                <Star className="w-5 h-5" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
              >
                <Shield className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
