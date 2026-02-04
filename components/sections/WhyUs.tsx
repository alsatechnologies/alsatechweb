'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Users, Gem, Rocket, RefreshCw } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Implementación Rápida',
    description: '60-90 días sin sacrificar calidad',
    highlight: 'Fast',
  },
  {
    icon: Target,
    title: 'Equipo a Tu Medida',
    description: 'Profesionales exactos para tu proyecto',
    highlight: 'Custom',
  },
  {
    icon: Users,
    title: 'Atención Directa',
    description: 'Sin intermediarios ni burocracia',
    highlight: 'Direct',
  },
  {
    icon: Gem,
    title: 'Calidad Enterprise',
    description: 'Código limpio, mantenible y escalable',
    highlight: 'Quality',
  },
  {
    icon: Rocket,
    title: 'Tecnología de Punta',
    description: 'IA, cloud, frameworks modernos',
    highlight: 'Modern',
  },
  {
    icon: RefreshCw,
    title: 'Partner de Largo Plazo',
    description: 'Evolucionamos contigo',
    highlight: 'Growth',
  },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-4 text-center text-white">
            Por Qué Alsatech
          </h2>
          <p className="text-text-muted text-center text-lg mb-16 max-w-3xl mx-auto">
            Ventajas que nos distinguen en el mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card */}
                <div className="glass-card p-8 h-full hover:glass-card-light transition-all duration-300 relative overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 text-xs font-bold text-accent opacity-60 group-hover:opacity-100 transition-opacity">
                    {reason.highlight}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
