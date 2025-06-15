"use client"

import { motion } from "framer-motion"
import { Users, Home, Shield, Clock } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Happy Tenants",
      description: "Successful rentals completed",
    },
    {
      icon: Home,
      number: "500+",
      label: "Properties Listed",
      description: "Verified properties available",
    },
    {
      icon: Shield,
      number: "98%",
      label: "Success Rate",
      description: "Fraud prevention accuracy",
    },
    {
      icon: Clock,
      number: "24h",
      label: "Response Time",
      description: "Average evaluation delivery",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join the growing community of renters, landlords, and evaluators who trust Proofly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-[#00D7A3]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00D7A3]/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-[#00D7A3]" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
