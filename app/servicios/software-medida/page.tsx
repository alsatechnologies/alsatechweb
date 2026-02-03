import CTAButton from '@/components/CTAButton'

export default function SoftwareMedidaPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white">
          Desarrollo de Software a la Medida
        </h1>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ¿Qué es?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            Software diseñado específicamente para tu empresa, considerando tus procesos, 
            reglas de negocio y necesidades particulares.
          </p>
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            A diferencia del software comercial:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="text-text-muted flex items-start">
              <span className="text-accent mr-3">✓</span>
              Se adapta 100% a tu forma de trabajar
            </li>
            <li className="text-text-muted flex items-start">
              <span className="text-accent mr-3">✓</span>
              No pagas por funciones que no usas
            </li>
            <li className="text-text-muted flex items-start">
              <span className="text-accent mr-3">✓</span>
              Es tuyo (código fuente incluido)
            </li>
            <li className="text-text-muted flex items-start">
              <span className="text-accent mr-3">✓</span>
              Evoluciona contigo
            </li>
            <li className="text-text-muted flex items-start">
              <span className="text-accent mr-3">✓</span>
              Se integra con tus sistemas existentes
            </li>
          </ul>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Qué Podemos Desarrollar
          </h2>
          <ul className="space-y-3 text-text-muted text-lg">
            <li>• ERP personalizados</li>
            <li>• CRM a la medida</li>
            <li>• Sistemas de gestión operativa</li>
            <li>• Portales web empresariales</li>
            <li>• Sistemas de control y monitoreo</li>
            <li>• Automatización de procesos</li>
            <li>• Integraciones de sistemas</li>
          </ul>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Beneficios
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Eficiencia Operativa', desc: 'Elimina procesos manuales' },
              { icon: '💰', title: 'ROI Medible', desc: 'Inversión que se paga con ahorros' },
              { icon: '📈', title: 'Escalabilidad', desc: 'Crece contigo sin límites' },
              { icon: '🔒', title: 'Control Total', desc: 'Es tu software' },
              { icon: '🔗', title: 'Integración Perfecta', desc: 'Conecta todo' },
              { icon: '⚡', title: 'Ventaja Competitiva', desc: 'Innovación real' },
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
            DESDE $200,000 MXN
          </p>
          <div className="text-white/90 space-y-2 mb-8">
            <p>Incluye:</p>
            <ul className="space-y-1">
              <li>• Análisis y diseño completo</li>
              <li>• Desarrollo y pruebas</li>
              <li>• Implementación y capacitación</li>
              <li>• Documentación</li>
              <li>• Código fuente 100% tuyo</li>
              <li>• 3 meses de soporte</li>
            </ul>
          </div>
          <p className="text-white/90 mb-6">
            Cotización personalizada sin compromiso.
          </p>
          <CTAButton href="/contacto" variant="secondary">
            Solicitar Cotización
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
