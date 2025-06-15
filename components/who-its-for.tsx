"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { User, Building, UserCheck, ArrowRight, Check } from "lucide-react"

type UserType = "tenants" | "landlords" | "evaluators" | null

export function WhoItsFor() {
  const [activeType, setActiveType] = useState<UserType>("tenants")
  const [hoveredType, setHoveredType] = useState<UserType>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const userTypes = [
    {
      id: "tenants",
      title: "Tenants",
      subtitle: "Move with Confidence",
      icon: User,
      color: "bg-blue-500",
      features: [
        "View properties remotely through trusted evaluators",
        "Get detailed reports with photos and videos",
        "Avoid rental scams and wasted trips",
        "Make informed decisions before paying deposits",
      ],
      cta: "Find a Rental",
    },
    {
      id: "landlords",
      title: "Landlords",
      subtitle: "Show Your Property to Remote Tenants",
      icon: Building,
      color: "bg-purple-500",
      features: [
        "Expand your tenant pool to include remote applicants",
        "Save time with pre-qualified, serious applicants",
        "Receive secure deposit payments",
        "Reduce vacancy periods with faster leasing",
      ],
      cta: "List Your Property",
    },
    {
      id: "evaluators",
      title: "Evaluators",
      subtitle: "Become a Proofly Friend",
      icon: UserCheck,
      color: "bg-[#00D7A3]",
      features: [
        "Earn money evaluating properties in your area",
        "Flexible schedule - work when you want",
        "Keep 70% of the viewing fee",
        "Help others make informed rental decisions",
      ],
      cta: "Apply Now",
    },
  ]

  const handleTypeClick = (type: UserType) => {
    setActiveType(type)
  }

  return (
    <section id="who-its-for" className="py-20 px-6 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Everything
              <br />
              you need
              <br />
              available
              <br />
              in one place
            </motion.h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {userTypes.map((type) => (
                <motion.button
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`px-4 py-2 rounded-full text-sm ${
                    activeType === type.id ? "bg-[#00D7A3] text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleTypeClick(type.id as UserType)}
                >
                  {type.title}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900 rounded-3xl p-6 mb-8"
            >
              <AnimatePresence mode="wait">
                {userTypes.map(
                  (type) =>
                    activeType === type.id && (
                      <motion.div
                        key={type.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center`}>
                            <type.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{type.title}</h3>
                            <p className="text-[#00D7A3]">{type.subtitle}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          {type.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-[#00D7A3]/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-[#00D7A3]" />
                              </div>
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <Button className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-black rounded-full px-6">
                          {type.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-[#00D7A3] rounded-3xl p-1 shadow-xl">
              <div className="bg-black rounded-3xl overflow-hidden">
                <div className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        {activeType === "tenants" && <User className="w-5 h-5 text-[#00D7A3]" />}
                        {activeType === "landlords" && <Building className="w-5 h-5 text-[#00D7A3]" />}
                        {activeType === "evaluators" && <UserCheck className="w-5 h-5 text-[#00D7A3]" />}
                      </div>
                      <h3 className="text-xl font-bold">My dashboard</h3>
                    </div>

                    <div className="flex gap-3 mb-6">
                      <div className="bg-gray-800 rounded-full px-4 py-2 text-sm">
                        <span className="text-[#00D7A3]">10</span> New listings
                      </div>
                      <div className="bg-gray-800 rounded-full px-4 py-2 text-sm">
                        <span className="text-[#00D7A3]">85%</span> Match rate
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium mb-4">Completed jobs</h4>

                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: item * 0.1 }}
                        className="bg-gray-900 rounded-xl p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                            {activeType === "tenants" ? (
                              <Building className="w-5 h-5 text-gray-400" />
                            ) : activeType === "landlords" ? (
                              <User className="w-5 h-5 text-gray-400" />
                            ) : (
                              <Building className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">
                              {activeType === "tenants"
                                ? "Property viewing"
                                : activeType === "landlords"
                                  ? "Tenant matched"
                                  : "Evaluation complete"}
                            </p>
                            <p className="text-sm text-gray-400">
                              {activeType === "tenants"
                                ? "123 Main St, Apt 4B"
                                : activeType === "landlords"
                                  ? "John D. - 2BR Apartment"
                                  : "Downtown Loft - 15 photos"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#00D7A3] mr-2"></div>
                          <span className="text-sm text-gray-400">Completed</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 bg-gray-900 rounded-full p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#00D7A3] flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-sm">Actions</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <Building className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
