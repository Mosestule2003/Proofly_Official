"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckCircle, Clock, Target, Rocket, Users, Building, ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

const milestones = [
  {
    id: 1,
    title: "Idea Validation",
    description: "Conducted market research and validated the concept with potential users.",
    completed: true,
    icon: CheckCircle,
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "MVP Development",
    description: "Developed the minimum viable product with core functionality.",
    completed: true,
    icon: CheckCircle,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Building Traction",
    description: "Currently growing our user base and refining the platform based on feedback.",
    completed: false,
    current: true,
    icon: Clock,
    color: "bg-[#00D7A3]",
  },
  {
    id: 4,
    title: "Beta Launch",
    description: "Limited release to test the platform with real users in select markets.",
    completed: false,
    icon: Target,
    color: "bg-gray-400 dark:bg-gray-600",
  },
  {
    id: 5,
    title: "User Feedback & Iteration",
    description: "Collecting and implementing user feedback to improve the platform.",
    completed: false,
    icon: Users,
    color: "bg-gray-400 dark:bg-gray-600",
  },
  {
    id: 6,
    title: "Full Public Launch",
    description: "Official launch with all features and support for multiple markets.",
    completed: false,
    icon: Rocket,
    color: "bg-gray-400 dark:bg-gray-600",
  },
  {
    id: 7,
    title: "Expansion & Partnerships",
    description: "Expanding to new markets and forming strategic partnerships.",
    completed: false,
    icon: Building,
    color: "bg-gray-400 dark:bg-gray-600",
  },
]

export function Roadmap() {
  const [activeMilestone, setActiveMilestone] = useState(3) // Building Traction is active
  const [currentStep, setCurrentStep] = useState(3)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleNext = () => {
    if (currentStep < milestones.length) {
      setCurrentStep(currentStep + 1)
      setActiveMilestone(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setActiveMilestone(currentStep - 1)
    }
  }

  const handleStepClick = (step: number) => {
    setCurrentStep(step)
    setActiveMilestone(step)
  }

  return (
    <section id="roadmap" className="py-20 px-6 bg-[#e6ffec] dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Roadmap
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            >
              Follow our journey as we build and grow Proofly into the future of rental evaluations.
            </motion.p>
          </div>

          
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "auto" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          
          
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Left Side - Steps */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                What kind of progress have we made?
              </h3>

              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: milestone.id * 0.05 }}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300",
                      currentStep === milestone.id
                        ? "bg-gray-100 dark:bg-gray-700/50 border-l-4 border-[#00D7A3]"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/30",
                    )}
                    onClick={() => handleStepClick(milestone.id)}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-white",
                        milestone.color,
                      )}
                    >
                      <milestone.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{milestone.title}</h4>
                      {currentStep === milestone.id && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{milestone.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  className="rounded-full px-6"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                >
                  Back
                </Button>
                <Button
                  className="rounded-full px-6 bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white"
                  onClick={handleNext}
                  disabled={currentStep === milestones.length}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-white",
                      milestones[currentStep - 1].color,
                    )}
                  >
                    {React.createElement(milestones[currentStep - 1].icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {milestones[currentStep - 1].title}
                  </h3>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {milestones[currentStep - 1].description}
                </p>

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-[#00D7A3]/5 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        We're currently focused on:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Growing our waitlist of interested users",
                          "Recruiting evaluators in key markets",
                          "Refining our platform based on early feedback",
                          "Building partnerships with property management companies",
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-3 bg-white dark:bg-gray-700/50 p-4 rounded-xl"
                          >
                            <div className="w-2 h-2 bg-[#00D7A3] rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Link href="/waitlist">
                        <Button className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-8 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                          Join the Waitlist
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Illustration for desktop */}
                <div className="hidden lg:block mt-8">
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center md:hidden mt-8">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-gray-300"
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center px-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentStep} of {milestones.length}
              </span>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-gray-300"
              onClick={handleNext}
              disabled={currentStep === milestones.length}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {milestones.map((milestone) => (
              <button
                key={milestone.id}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentStep === milestone.id ? "bg-[#00D7A3] w-6" : "bg-gray-300 dark:bg-gray-600",
                )}
                onClick={() => handleStepClick(milestone.id)}
                aria-label={`Go to step ${milestone.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
