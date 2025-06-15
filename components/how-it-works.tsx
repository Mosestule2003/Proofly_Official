"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingCart, UserCheck, FileText, CheckCircle, Home, ChevronLeft, ChevronRight } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Browse for Listing",
    description: "Browse our listings or paste external links to properties you're interested in.",
    icon: Search,
  },
  {
    id: 2,
    title: "Add to Cart and Checkout",
    description: "Add listings to your cart, proceed to checkout, and pay the viewing fee.",
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Match Order with Evaluator",
    description: "Our system matches your order with a local Proofly Friend who will evaluate the property.",
    icon: UserCheck,
  },
  {
    id: 4,
    title: "Submit Rental Offer to Landlord",
    description: "After receiving the evaluation report, submit your rental offer to the landlord.",
    icon: FileText,
  },
  {
    id: 5,
    title: "Approved, Sign Lease, and Pay Deposit",
    description: "Once approved, sign the lease and pay the deposit securely through our platform.",
    icon: CheckCircle,
  },
  {
    id: 6,
    title: "Move Into Property",
    description: "Congratulations! You're ready to move into your new home.",
    icon: Home,
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)

  const nextStep = () => {
    setActiveStep((prev) => (prev < steps.length ? prev + 1 : prev))
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : prev))
  }

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our simple process makes remote property evaluations easy and secure.
          </p>
        </motion.div>

        {/* Apple-style Interactive Steps */}
        <div className="relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl"></div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Step Navigation */}
            <div className="flex justify-center mb-12"></div>

            {/* Main Content Area */}
            <div className="w-full aspect-[2/1] bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <div className="grid grid-cols-2 h-full">
                {/* Left Side - Step Content Carousel */}
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#00D7A3] rounded-2xl flex items-center justify-center shadow-lg">
                        {React.createElement(steps[activeStep - 1].icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#00D7A3] mb-1">Step {activeStep}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {steps[activeStep - 1].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {steps[activeStep - 1].description}
                    </p>

                    {/* Interactive Features */}
                    <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-[#00D7A3] rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Key Feature</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activeStep === 1 && "Browse verified listings with detailed property information"}
                        {activeStep === 2 && "Secure payment processing with instant confirmation"}
                        {activeStep === 3 && "AI-powered matching with qualified local evaluators"}
                        {activeStep === 4 && "Professional reports with photos, videos, and insights"}
                        {activeStep === 5 && "Streamlined lease signing with digital verification"}
                        {activeStep === 6 && "Move-in support and ongoing assistance"}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                  </motion.div>
                </div>

                {/* Right Side - Interactive Phone Visual */}
                <div className="p-8 flex items-center justify-center bg-gradient-to-br from-[#00D7A3]/5 to-blue-500/5">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* iPhone-style Frame */}
                    <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2rem] overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 py-2 bg-gray-50 dark:bg-gray-200">
                          <span className="text-xs font-medium text-gray-900">9:41</span>
                          <div className="flex gap-1">
                            <div className="w-3 h-1.5 bg-gray-900 rounded-sm"></div>
                            <div className="w-4 h-1.5 bg-gray-900 rounded-sm"></div>
                            <div className="w-4 h-1.5 bg-gray-900 rounded-sm"></div>
                          </div>
                        </div>

                        {/* Dynamic Content Based on Step */}
                        <div className="p-4 h-full">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeStep}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              className="h-full flex flex-col"
                            >
                              {/* Step 1 - Browse */}
                              {activeStep === 1 && (
                                <div className="space-y-3">
                                  <h4 className="text-base font-bold text-gray-900">Browse Properties</h4>
                                  <div className="space-y-2">
                                    {[1, 2, 3].map((item) => (
                                      <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: item * 0.1 }}
                                        className="bg-gray-100 rounded-lg p-2 flex items-center gap-2"
                                      >
                                        <div className="w-8 h-8 bg-[#00D7A3] rounded-md"></div>
                                        <div>
                                          <div className="text-xs font-medium text-gray-900">Property {item}</div>
                                          <div className="text-xs text-gray-600">2BR • $2,500/mo</div>
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Step 2 - Cart */}
                              {activeStep === 2 && (
                                <div className="space-y-3">
                                  <h4 className="text-base font-bold text-gray-900">Checkout</h4>
                                  <div className="bg-gray-100 rounded-lg p-3">
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-xs text-gray-600">Viewing Fee</span>
                                      <span className="text-sm font-medium text-gray-900">$49.99</span>
                                    </div>
                                    <motion.button
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      className="w-full bg-[#00D7A3] text-white py-2 rounded-lg text-sm font-medium"
                                    >
                                      Pay Now
                                    </motion.button>
                                  </div>
                                </div>
                              )}

                              {/* Step 3 - Matching */}
                              {activeStep === 3 && (
                                <div className="space-y-3">
                                  <h4 className="text-base font-bold text-gray-900">Finding Evaluator</h4>

                                  {/* Loading Animation */}
                                  <div className="flex justify-center mb-4">
                                    <div className="relative">
                                      <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                        className="w-12 h-12 border-3 border-[#00D7A3] border-t-transparent rounded-full"
                                      />
                                      <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                        className="absolute inset-0 w-12 h-12 border border-[#00D7A3]/30 rounded-full"
                                      />
                                    </div>
                                  </div>

                                  {/* Searching Animation */}
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center mb-4"
                                  >
                                    <motion.div
                                      animate={{ opacity: [0.5, 1, 0.5] }}
                                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                      className="text-xs text-gray-500 mb-2"
                                    >
                                      Searching for available evaluators...
                                    </motion.div>

                                    {/* Progress dots */}
                                    <div className="flex justify-center space-x-1">
                                      {[0, 1, 2].map((i) => (
                                        <motion.div
                                          key={i}
                                          animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 1, 0.3],
                                          }}
                                          transition={{
                                            duration: 1.5,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: i * 0.2,
                                          }}
                                          className="w-1.5 h-1.5 bg-[#00D7A3] rounded-full"
                                        />
                                      ))}
                                    </div>
                                  </motion.div>

                                  {/* Evaluator Match */}
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-3"
                                  >
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">Sarah M.</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">Local Proofly Friend</div>
                                    <div className="text-xs text-[#00D7A3] flex items-center justify-center gap-1 mt-1">
                                      <span>⭐</span>
                                      <span>4.9 rating</span>
                                      <span>•</span>
                                      <span>2.1 km away</span>
                                    </div>

                                    {/* Match confirmation */}
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 1.5, type: "spring" }}
                                      className="mt-2 text-xs text-green-600 dark:text-green-400 font-medium"
                                    >
                                      ✓ Match found!
                                    </motion.div>
                                  </motion.div>
                                </div>
                              )}

                              {/* Step 4 - Report */}
                              {activeStep === 4 && (
                                <div className="space-y-3">
                                  <h4 className="text-base font-bold text-gray-900">Evaluation Report</h4>
                                  <div className="grid grid-cols-2 gap-1">
                                    {[1, 2, 3, 4].map((item) => (
                                      <motion.div
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: item * 0.1 }}
                                        className="aspect-square bg-gray-200 rounded-md"
                                      />
                                    ))}
                                  </div>
                                  <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                                    <div className="text-xs font-medium text-green-800">✓ Verified</div>
                                    <div className="text-xs text-green-600">Property matches listing</div>
                                  </div>
                                </div>
                              )}

                              {/* Step 5 - Lease */}
                              {activeStep === 5 && (
                                <div className="space-y-3">
                                  <h4 className="text-base font-bold text-gray-900">Digital Lease</h4>
                                  <div className="bg-gray-100 rounded-lg p-3 space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-xs text-gray-600">Monthly Rent</span>
                                      <span className="text-sm font-medium">$2,500</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-xs text-gray-600">Security Deposit</span>
                                      <span className="text-sm font-medium">$2,500</span>
                                    </div>
                                    <motion.button
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      className="w-full bg-[#00D7A3] text-white py-2 rounded-lg text-sm font-medium"
                                    >
                                      Sign Lease
                                    </motion.button>
                                  </div>
                                </div>
                              )}

                              {/* Step 6 - Move In */}
                              {activeStep === 6 && (
                                <div className="space-y-3 text-center">
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                    className="w-16 h-16 bg-[#00D7A3] rounded-full flex items-center justify-center mx-auto"
                                  >
                                    <Home className="w-8 h-8 text-white" />
                                  </motion.div>
                                  <h4 className="text-base font-bold text-gray-900">Congratulations!</h4>
                                  <p className="text-xs text-gray-600">You're ready to move into your new home</p>
                                  <div className="bg-[#00D7A3]/10 rounded-lg p-2">
                                    <div className="text-xs font-medium text-[#00D7A3]">Move-in Date</div>
                                    <div className="text-xs text-gray-600">December 1, 2024</div>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-white rounded-full"></div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-3 -right-3 bg-[#00D7A3] text-white p-2 rounded-full shadow-lg"
                    >
                      {React.createElement(steps[activeStep - 1].icon, { className: "w-4 h-4" })}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-12 gap-4">
              <motion.button
                onClick={prevStep}
                disabled={activeStep === 1}
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Previous</span>
              </motion.button>

              <motion.button
                onClick={nextStep}
                disabled={activeStep === steps.length}
                className="flex items-center gap-2 px-6 py-3 bg-[#00D7A3] text-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">Next</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {steps.map((step) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === step.id ? "bg-[#00D7A3] w-8" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
