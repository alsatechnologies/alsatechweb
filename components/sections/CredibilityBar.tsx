'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CredibilityBar() {
  const stats = [
    
    { number: '6+', label: 'Años desarrollando' },
    { number: '10+', label: 'Industrias atendidas' },
    { number: '85+', label: 'Proyectos entregados' },
    { number: '5+', label: 'Millones de lineas de código' },
  ]

  return (
    <section className="relative bg-bg-primary border-y border-white/10 py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-5xl md:text-3xl font-display font-bold text-accent">
                    {stat.number}
                  </div>
                  <p className="text-text-muted text-lg md:text-lg uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
              {index < stats.length - 1 && (
                <div className="w-px h-20 bg-accent hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
