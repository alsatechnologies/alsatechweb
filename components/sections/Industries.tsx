'use client'

import Image from 'next/image'
import { GraduationCap, Settings, HeartPulse, DollarSign, ShoppingBag, Truck, Building2, Sprout } from 'lucide-react'

const industries = [
  {
    icon: <GraduationCap size={48} strokeWidth={1.5} />,
    name: 'Educación',
    solutions: ['Plataformas LMS', 'Gestión escolar', 'E-learning'],
  },
  {
    icon: <Settings size={48} strokeWidth={1.5} />,
    name: 'Manufactura',
    solutions: ['Control de producción', 'Trazabilidad', 'Gestión de calidad'],
  },
  {
    icon: <HeartPulse size={48} strokeWidth={1.5} />,
    name: 'Salud',
    solutions: ['Expedientes digitales', 'Telemedicina', 'Gestión hospitalaria'],
  },
  {
    icon: <DollarSign size={48} strokeWidth={1.5} />,
    name: 'Finanzas',
    solutions: ['Plataformas fintech', 'Sistemas de pagos', 'Prevención de fraude'],
  },
  {
    icon: <ShoppingBag size={48} strokeWidth={1.5} />,
    name: 'Retail',
    solutions: ['E-commerce', 'Sistemas POS', 'Gestión de inventarios'],
  },
  {
    icon: <Truck size={48} strokeWidth={1.5} />,
    name: 'Logística',
    solutions: ['Rastreo GPS', 'Optimización de rutas', 'Gestión de almacenes'],
  },
  {
    icon: <Building2 size={48} strokeWidth={1.5} />,
    name: 'Construcción',
    solutions: ['Gestión de proyectos', 'Control de presupuestos', 'Seguimiento de obra'],
  },
  {
    icon: <Sprout size={48} strokeWidth={1.5} />,
    name: 'Agroindustria',
    solutions: ['Control de cultivos', 'Trazabilidad agrícola', 'Sistemas de pesaje industrial'],
  },
]

export default function Industries() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/components-remix.png"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-bg-secondary/30 z-[1]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-4 text-center text-white">
          Industrias que Atendemos
        </h2>
        <p className="text-text-muted text-center text-lg mb-16 max-w-3xl mx-auto">
          Experiencia en múltiples sectores con soluciones especializadas
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="glass-card p-6 hover:glass-card-light transition-all duration-300 group"
            >
              <div className="text-accent mb-4">{industry.icon}</div>
              <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-accent transition-colors">
                {industry.name}
              </h3>
              <ul className="space-y-2">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="text-text-muted text-base">
                    • {solution}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            ¿Tu sector es diferente?
          </h3>
          <p className="text-text-muted text-lg leading-relaxed">
            Nuestra experiencia en transformación digital se adapta a cualquier industria.
            Diseñamos soluciones personalizadas según tus necesidades específicas.
          </p>
        </div>
      </div>
    </section>
  )
}
