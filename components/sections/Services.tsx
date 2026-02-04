import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'software-medida',
    title: 'Desarrollo de Software a la Medida',
    description: 'Diseñamos y desarrollamos sistemas empresariales personalizados que se adaptan exactamente a tus procesos y necesidades específicas.',
    features: [
      'ERP y CRM personalizados',
      'Sistemas de gestión empresarial',
      'Portales web y aplicaciones internas',
      'Automatización de procesos',
    ],
    image: null,
  },
  {
    id: 'inteligencia-artificial',
    title: 'Aplicaciones con Inteligencia Artificial',
    description: 'Integramos IA y machine learning en tus sistemas para automatizar decisiones, predecir comportamientos y optimizar operaciones.',
    features: [
      'Análisis predictivo y forecasting',
      'Automatización inteligente de procesos',
      'Chatbots y asistentes virtuales',
      'Visión artificial y reconocimiento',
    ],
    image: null,
  },
  {
    id: 'business-intelligence',
    title: 'Análisis de Datos y Business Intelligence',
    description: 'Convertimos tus datos en información estratégica con dashboards ejecutivos, reportes automatizados y análisis en tiempo real.',
    features: [
      'Dashboards personalizados',
      'KPIs y métricas automatizadas',
      'Reportes y visualizaciones',
      'Integración de múltiples fuentes',
    ],
    image: null,
  },
  {
    id: 'apps-moviles',
    title: 'Desarrollo de Aplicaciones Móviles y Web',
    description: 'Aplicaciones nativas, híbridas y progresivas para iOS, Android y web que conectan tu empresa con clientes y colaboradores.',
    features: [
      'Apps móviles nativas e híbridas',
      'Aplicaciones web progresivas (PWA)',
      'Apps para equipos de ventas y operaciones',
      'Portales de clientes y proveedores',
    ],
    image: null,
  },
  {
    id: 'modernizacion',
    title: 'Modernización de Sistemas Legacy',
    description: 'Actualizamos y migramos sistemas obsoletos a tecnologías modernas sin perder funcionalidad ni interrumpir operaciones.',
    features: [
      'Migración de sistemas antiguos',
      'Integración con sistemas modernos',
      'Re-arquitectura de aplicaciones',
      'Optimización de performance',
    ],
    image: null,
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container mx-auto max-w-7xl">
        <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-4 text-center text-white">
          Servicios Principales
        </h2>
        <p className="text-text-muted text-center text-lg mb-16 max-w-3xl mx-auto">
          Soluciones tecnológicas diseñadas para transformar tu negocio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="glass-card p-8 hover:glass-card-light transition-all duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-accent transition-colors">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-text-muted mb-6 text-base leading-relaxed">
                  {service.description}
                </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-text-muted text-base flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
