import CTAButton from '@/components/CTAButton'

export default function BIPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white">
          Análisis de Datos y Business Intelligence
        </h1>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ¿Qué es Business Intelligence?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            Transformar datos dispersos en información clara y accionable:
          </p>
          <ul className="space-y-3 text-text-muted text-lg">
            <li>• Múltiples fuentes integradas</li>
            <li>• Visualizaciones que cuentan historias</li>
            <li>• KPIs en tiempo real</li>
            <li>• Alertas automáticas</li>
            <li>• Reportes que se generan solos</li>
          </ul>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Soluciones de BI
          </h2>
          <ul className="space-y-3 text-text-muted text-lg">
            <li>• Dashboards ejecutivos</li>
            <li>• Reportes automatizados</li>
            <li>• Data warehouses</li>
            <li>• Análisis avanzado</li>
            <li>• Integraciones con todas tus fuentes de datos</li>
          </ul>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Beneficios
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '👁️', title: 'Visibilidad Total', desc: 'Ve todo en tiempo real' },
              { icon: '⏱️', title: 'Ahorro de Tiempo', desc: 'Elimina trabajo manual' },
              { icon: '📊', title: 'Mejores Decisiones', desc: 'Basadas en datos reales' },
              { icon: '🎯', title: 'Identifica Oportunidades', desc: 'Antes que sea tarde' },
              { icon: '💰', title: 'Incrementa Rentabilidad', desc: 'Optimiza recursos' },
              { icon: '🔔', title: 'Alertas Proactivas', desc: 'No más sorpresas' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start">
                <span className="text-3xl mr-4">{benefit.icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                  <p className="text-text-muted">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent p-8 md:p-12 border-4 border-white text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Inversión
          </h2>
          <p className="text-3xl font-bold text-white mb-6">
            DESDE $180,000 MXN
          </p>
          <div className="text-white/90 space-y-2 mb-8 text-left max-w-2xl mx-auto">
            <ul className="space-y-1">
              <li>• Dashboard básico: $180k - $300k</li>
              <li>• BI completo: $400k - $800k</li>
              <li>• Data Warehouse: $800k - $1.5M+</li>
            </ul>
            <p className="mt-4 font-semibold">Alternativa de suscripción: Desde $25k/mes</p>
          </div>
          <CTAButton href="/contacto" variant="secondary">
            Solicitar Cotización
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
