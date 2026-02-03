import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

const services = [
  {
    id: 'software-medida',
    title: 'Desarrollo de Software a la Medida',
    href: '/servicios/software-medida',
  },
  {
    id: 'inteligencia-artificial',
    title: 'Aplicaciones con Inteligencia Artificial',
    href: '/servicios/inteligencia-artificial',
  },
  {
    id: 'business-intelligence',
    title: 'Análisis de Datos y Business Intelligence',
    href: '/servicios/business-intelligence',
  },
  {
    id: 'apps-moviles',
    title: 'Desarrollo de Aplicaciones Móviles y Web',
    href: '/servicios/apps-moviles',
  },
  {
    id: 'modernizacion',
    title: 'Modernización de Sistemas Legacy',
    href: '/servicios/modernizacion',
  },
]

export default function ServiciosPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl mb-6 text-white text-center">
          Nuestros Servicios
        </h1>
        <p className="text-text-muted text-center text-xl mb-16 max-w-3xl mx-auto">
          Soluciones tecnológicas diseñadas para transformar tu negocio
        </p>

        <div className="space-y-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="block bg-bg-secondary p-8 border-4 border-accent hover:border-accent-dark transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-accent font-bold text-2xl mr-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </span>
                </div>
                <svg
                  className="w-8 h-8 text-accent group-hover:translate-x-2 transition-transform"
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
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <CTAButton href="/contacto" variant="primary">
            Agendar Consultoría Gratuita
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
