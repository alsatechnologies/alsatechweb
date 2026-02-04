'use client'

import Image from 'next/image'

export default function CaseStudy() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/components_remix(3).png"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-bg-secondary/0 z-[1]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white">
          Caso de Éxito Destacado
        </h2>

        <div className="glass-card-light p-8 md:p-12">
          <div className="mb-8">
            <h3 className="text-3xl font-display font-bold text-white mb-2">
              Sistema de Trazabilidad Industrial
            </h3>
            <p className="text-accent font-semibold text-lg">
              Sector: Agroindustria / Manufactura
            </p>
          </div>

          <div className="mb-8">
            <p className="text-text-muted mb-6 leading-relaxed">
              Empresa procesadora de aceite vegetal con operaciones nacionales e internacionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-display font-bold text-white mb-4">
                DESAFÍO:
              </h4>
              <ul className="space-y-2 text-text-muted">
                <li>• Falta de visibilidad en producción</li>
                <li>• Trazabilidad manual propensa a errores</li>
                <li>• Reportes tardíos</li>
                <li>• Dificultad para cumplir certificaciones</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-display font-bold text-white mb-4">
                SOLUCIÓN:
              </h4>
              <p className="text-text-muted leading-relaxed">
                Sistema integral con trazabilidad completa, dashboard en tiempo real y reportes automáticos.
              </p>
            </div>
          </div>

          <div className="glass-card p-6">
            <h4 className="text-xl font-display font-bold text-white mb-4">
              RESULTADOS:
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-muted">100% trazabilidad del producto</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-muted">Reducción de tiempo en reportes</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-muted">Cumplimiento automatizado de certificaciones</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span className="text-text-muted">Implementado en 75 días</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#contacto')
              if (element) {
                const headerOffset = 96
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className="text-accent hover:text-accent-dark font-semibold text-lg uppercase tracking-wider inline-flex items-center cursor-pointer"
          >
            Conversemos sobre tu proyecto
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
