"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Users, Building, UserCheck, ArrowRight, Zap } from "lucide-react"
import { useState } from "react"

export function PricingOverview() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const pricingPlans = [
    {
      name: "Renter",
      subtitle: "Perfect for finding your next home",
      price: "49",
      period: "per evaluation",
      originalPrice: null,
      popular: false,
      description: "Get verified property reports before you commit",
      features: [
        "Professional property evaluation",
        "Detailed photo and video report",
        "Local market insights",
        "Fraud protection guarantee",
        "24/7 customer support",
        "Mobile app access",
      ],
      cta: "Book Evaluation",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-white dark:bg-gray-800",
      textColor: "text-gray-900 dark:text-white",
    },
    {
      name: "Landlord",
      subtitle: "Expand your reach to remote tenants",
      price: "Free",
      period: "to list properties",
      originalPrice: null,
      popular: true,
      description: "Only pay when you successfully rent your property",
      features: [
        "Unlimited property listings",
        "Access to pre-qualified tenants",
        "Professional property showcasing",
        "Secure deposit processing (5% fee)",
        "Tenant screening reports",
        "Priority customer support",
        "Analytics dashboard",
      ],
      cta: "List Property",
      icon: Building,
      color: "from-[#00D7A3] to-emerald-600",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      textColor: "text-white",
    },
    {
      name: "Evaluator",
      subtitle: "Earn money as a Proofly Friend",
      price: "Competitive",
      period: "viewing fees",
      originalPrice: null,
      popular: false,
      description: "Keep most of what you earn from evaluations",
      features: [
        "Flexible working schedule",
        "Earn $35+ per evaluation",
        "Professional training provided",
        "Mobile evaluation tools",
        "Weekly payouts",
        "Performance bonuses",
        "Community support",
      ],
      cta: "Apply Now",
      icon: UserCheck,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-white dark:bg-gray-800",
      textColor: "text-gray-900 dark:text-white",
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D7A3]/10 text-[#00D7A3] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Plans that work for everyone
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you're renting, listing, or evaluating properties, we have the perfect plan for your needs.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"></div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 shadow-xl border transition-all duration-500 cursor-pointer ${
                selectedCard === plan.name
                  ? "border-[#00D7A3] ring-4 ring-[#00D7A3]/20 transform scale-110 z-10"
                  : plan.popular
                    ? "border-[#00D7A3] ring-2 ring-[#00D7A3]/20 transform scale-105 hover:scale-110"
                    : "border-gray-200 dark:border-gray-700 hover:border-[#00D7A3]/50 hover:scale-105"
              } ${plan.bgColor}`}
              onClick={() => setSelectedCard(selectedCard === plan.name ? null : plan.name)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Popular Badge */}
              {(plan.popular || selectedCard === plan.name) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-[#00D7A3] to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {selectedCard === plan.name ? "Selected" : "Most Popular"}
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                  animate={{
                    scale: selectedCard === plan.name ? 1.2 : 1,
                    rotate: selectedCard === plan.name ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.textColor}`}>{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.subtitle}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {plan.originalPrice && (
                      <span className="text-2xl text-gray-400 line-through">${plan.originalPrice}</span>
                    )}
                    <motion.span
                      className={`text-5xl font-bold ${plan.textColor}`}
                      animate={{
                        scale: selectedCard === plan.name ? 1.1 : 1,
                        color: selectedCard === plan.name ? "#00D7A3" : undefined,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {plan.name === "Renter"
                        ? "Affordable"
                        : plan.price === "Free"
                          ? "Free"
                          : plan.price === "Competitive"
                            ? "Competitive"
                            : `$${plan.price}`}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.period}</p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <motion.div
                className="space-y-4 mb-8"
                animate={{
                  height: selectedCard === plan.name ? "auto" : "200px",
                  overflow: selectedCard === plan.name ? "visible" : "hidden",
                }}
                transition={{ duration: 0.5 }}
              >
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center gap-3"
                    animate={{
                      scale: selectedCard === plan.name ? 1.05 : 1,
                      x: selectedCard === plan.name ? 5 : 0,
                    }}
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-[#00D7A3]/20 flex items-center justify-center flex-shrink-0"
                      animate={{
                        backgroundColor: selectedCard === plan.name ? "#00D7A3" : "rgba(0, 215, 163, 0.2)",
                      }}
                    >
                      <Check className={`w-3 h-3 ${selectedCard === plan.name ? "text-white" : "text-[#00D7A3]"}`} />
                    </motion.div>
                    <span className={`text-sm ${plan.textColor}`}>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <Link href="/waitlist" className="block">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className={`w-full py-4 text-lg font-medium rounded-2xl transition-all duration-300 ${
                      selectedCard === plan.name
                        ? "bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white shadow-2xl"
                        : plan.popular
                          ? "bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    }`}
                  >
                    {selectedCard === plan.name ? `Choose ${plan.name}` : plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        ></motion.div>
      </div>
    </section>
  )
}
