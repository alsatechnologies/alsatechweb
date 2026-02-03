const industries = [
  {
    id: 'educacion',
    icon: '🎓',
    name: 'Educación',
    solutions: [
      'Plataformas LMS',
      'Gestión escolar y académica',
      'Control de asistencia',
      'Portales para estudiantes y padres',
      'E-learning y educación a distancia',
    ],
    benefits: [
      'Automatización administrativa',
      'Mejor comunicación',
      'Análisis de desempeño',
      'Educación híbrida',
    ],
  },
  {
    id: 'manufactura',
    icon: '🏭',
    name: 'Manufactura e Industria',
    solutions: [
      'Control de producción (MES)',
      'Trazabilidad de productos',
      'Gestión de calidad (QMS)',
      'Control de inventarios',
      'Mantenimiento preventivo',
      'OEE y métricas de producción',
      'Integración IoT',
    ],
    benefits: [
      'Visibilidad total de producción',
      'Reducción de desperdicios',
      'Cumplimiento de certificaciones',
    ],
    caseStudy: 'Sistema de Trazabilidad para Aceite Vegetal',
  },
  {
    id: 'salud',
    icon: '🏥',
    name: 'Salud',
    solutions: [
      'Expedientes clínicos electrónicos',
      'Gestión de citas',
      'Sistemas de farmacia',
      'Telemedicina',
      'Gestión hospitalaria',
      'PACS (imágenes médicas)',
      'Facturación médica',
    ],
    compliance: ['Protección de datos médicos', 'Interoperabilidad HL7/FHIR'],
    benefits: [
      'Expedientes digitales seguros',
      'Mejor coordinación',
      'Reducción de errores',
    ],
  },
  {
    id: 'finanzas',
    icon: '💰',
    name: 'Finanzas',
    solutions: [
      'Plataformas fintech',
      'Sistemas de pagos',
      'Gestión de cartera',
      'Scoring crediticio con IA',
      'Banca móvil',
      'Trading platforms',
      'Prevención de fraude',
    ],
    security: ['Encriptación end-to-end', 'Cumplimiento PCI-DSS', '2FA y biometría'],
  },
  {
    id: 'retail',
    icon: '🛒',
    name: 'Retail y E-commerce',
    solutions: [
      'Plataformas e-commerce',
      'Sistemas POS',
      'Gestión de inventarios multi-sucursal',
      'Programas de lealtad',
      'Apps móviles de compra',
      'Integraciones con marketplaces',
    ],
    integrations: ['Mercado Libre, Amazon', 'Pasarelas de pago', 'Sistemas contables'],
  },
  {
    id: 'logistica',
    icon: '🚚',
    name: 'Logística y Transporte',
    solutions: [
      'Rastreo GPS de flotillas',
      'Optimización de rutas',
      'Gestión de almacenes (WMS)',
      'TMS (gestión de transporte)',
      'Apps para choferes',
      'Gestión de entregas last-mile',
    ],
    benefits: [
      'Optimización de rutas (ahorro combustible)',
      'Visibilidad en tiempo real',
      'Reducción de tiempos',
    ],
  },
  {
    id: 'construccion',
    icon: '🏗️',
    name: 'Construcción',
    solutions: [
      'Gestión de proyectos constructivos',
      'Control de presupuestos',
      'Seguimiento de obra',
      'Gestión de materiales',
      'Apps de supervisión en sitio',
      'BIM integration',
    ],
    benefits: [
      'Control de presupuesto en tiempo real',
      'Reducción de sobrecostos',
      'Mejor comunicación',
    ],
  },
  {
    id: 'agroindustria',
    icon: '🌾',
    name: 'Agroindustria',
    solutions: [
      'Control de cultivos',
      'Trazabilidad agrícola',
      'Gestión de procesamiento',
      'Sistemas de riego inteligente',
      'Monitoreo con IoT',
      'Certificaciones y compliance',
    ],
    benefits: [
      'Trazabilidad para exportación',
      'Optimización de recursos',
      'Cumplimiento de certificaciones',
    ],
    caseStudy: 'Procesadora de Aceite Vegetal',
  },
]

export default function IndustriasPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white text-center">
          Industrias que Atendemos
        </h1>
        <p className="text-text-muted text-center text-xl mb-16 max-w-3xl mx-auto">
          Experiencia en múltiples sectores con soluciones especializadas
        </p>

        <div className="space-y-12">
          {industries.map((industry) => (
            <div
              key={industry.id}
              id={industry.id}
              className="bg-bg-secondary p-8 md:p-12 border-4 border-accent scroll-mt-24"
            >
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">{industry.icon}</span>
                <h2 className="text-4xl font-display font-bold text-white">
                  {industry.name}
                </h2>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-display font-bold text-accent mb-4">
                  SOLUCIONES:
                </h3>
                <ul className="space-y-2 text-text-muted">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              {industry.caseStudy && (
                <div className="mb-6 p-4 bg-bg-primary border-2 border-accent">
                  <p className="text-accent font-semibold">
                    CASO DE ÉXITO: {industry.caseStudy}
                  </p>
                </div>
              )}

              {industry.compliance && (
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    CUMPLIMIENTO:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {industry.compliance.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {industry.security && (
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    SEGURIDAD:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {industry.security.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {industry.integrations && (
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    INTEGRACIONES:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {industry.integrations.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {industry.benefits && (
                <div>
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    BENEFICIOS:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
