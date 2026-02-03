'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import CTAButton from '../CTAButton'

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-primary">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        {isClient && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/components_remix.webm" type="video/webm" />
          </video>
        )}
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/20" />
      
      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}  
          className="text-center"
        >
          <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white">
            Transformamos ideas
            <br />
            <span className="text-accent whitespace-nowrap">en software profesional</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
            Desarrollo de software a la medida para empresas que buscan 
            digitalizar y optimizar sus procesos. Implementaciones de 
            60-90 días con calidad enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contacto" variant="primary">
            Obtén tu análisis inicial
            </CTAButton>
            <CTAButton href="/casos" variant="secondary">
              Ver Proyectos
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
