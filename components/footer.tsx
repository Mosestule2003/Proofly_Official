"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/107502063",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/Proofly_O",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/proofly_o",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
    },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description Column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center mb-4">
                <Image src="/logo.png" alt="Proofly Logo" width={100} height={100} className="h-25 w-25" />
              </Link>
              <p className="text-gray-300 max-w-md leading-relaxed">
                Building trust in the rental market through verified property evaluations. Making remote renting as
                reliable as local renting.
              </p>
            </motion.div>
          </div>

          {/* Quick Links Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { name: "How It Works", href: "#how-it-works" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "About", href: "#about" },
                  { name: "Roadmap", href: "#roadmap" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-[#00D7A3] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Connect Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex items-center space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5 text-gray-300 group-hover:scale-110 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-3">
                
                
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Proofly. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link
              href="/waitlist"
              className="text-[#00D7A3] hover:text-[#00D7A3]/80 font-medium text-sm transition-colors duration-300"
            >
              Join Waitlist
            </Link>
            
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
