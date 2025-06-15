"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight, Check, Sparkles } from "lucide-react"

export function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#00D7A3]/10 to-blue-500/5 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00D7A3]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#00D7A3]/10 text-[#00D7A3] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Stay Updated
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Join our newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  Get the latest updates on Proofly's features, market insights, and rental tips delivered straight to
                  your inbox.
                </p>

                <div className="space-y-4">
                  {!isSubscribed ? (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-[#00D7A3] focus:border-[#00D7A3]"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <span>Subscribe</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-green-800 dark:text-green-400 font-medium">Thank you for subscribing!</p>
                        <p className="text-green-700 dark:text-green-500 text-sm">
                          Check your inbox for a confirmation email.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By subscribing, you agree to our Privacy Policy. We respect your privacy and will never share your
                    information.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0 w-full md:w-64 lg:w-80"
            >
              <div className="bg-gradient-to-br from-[#00D7A3]/20 to-blue-500/20 p-6 rounded-2xl">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#00D7A3] rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Newsletter</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Monthly updates</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Proofly Team</div>
                    <div className="text-xs text-[#00D7A3]">Read more</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
