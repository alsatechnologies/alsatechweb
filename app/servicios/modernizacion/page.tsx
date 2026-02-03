import CTAButton from '@/components/CTAButton'

export default function ModernizacionPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white">
          Modernización de Sistemas Legacy
        </h1>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ¿Qué es un Sistema Legacy?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            Sistemas viejos (10+ años) que:
          </p>
          <ul className="space-y-3 text-text-muted text-lg mb-4">
            <li>❌ Usan tecnología obsoleta</li>
            <li>❌ Nadie sabe cómo modificarlos</li>
            <li>❌ Son lentos y poco confiables</li>
            <li>❌ No se integran con sistemas modernos</li>
            <li>❌ Ponen en riesgo la seguridad</li>
          </ul>
          <p className="text-accent font-bold text-lg">
            Pero son CRÍTICOS para el negocio.
          </p>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Estrategias de Modernización
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                1. REWRITE - Reescribir desde cero
              </h3>
              <p className="text-text-muted">Nuevo sistema con funcionalidad mejorada</p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                2. REFACTOR - Modernizar gradualmente
              </h3>
              <p className="text-text-muted">Actualizar tecnología manteniendo funcionalidad</p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                3. REPLACE - Reemplazar con producto comercial
              </h3>
              <p className="text-text-muted">Migrar a solución comercial moderna</p>
            </div>
          </div>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Beneficios
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔒', title: 'Seguridad Moderna', desc: 'Parches actualizados' },
              { icon: '🚀', title: 'Mejor Performance', desc: 'Tecnología actual es más rápida' },
              { icon: '💻', title: 'Acceso Universal', desc: 'Web y móvil' },
              { icon: '🔗', title: 'Integraciones', desc: 'Conecta con sistemas modernos' },
              { icon: '👥', title: 'Mejor Experiencia', desc: 'Interfaces modernas' },
              { icon: '💰', title: 'Menor Costo', desc: 'Desarrolladores más fáciles de encontrar' },
              { icon: '📈', title: 'Escalabilidad', desc: 'Sin limitaciones' },
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
            DESDE $300,000 MXN
          </p>
          <div className="text-white/90 space-y-2 mb-8 text-left max-w-2xl mx-auto">
            <ul className="space-y-1">
              <li>• Sistema pequeño-mediano: $300k - $800k</li>
              <li>• Sistema mediano-grande: $800k - $2M</li>
              <li>• Sistema enterprise: $2M - $5M+</li>
            </ul>
            <p className="mt-4 font-semibold">Análisis de viabilidad previo: $50k-80k</p>
          </div>
          <CTAButton href="/contacto" variant="secondary">
            Solicitar Cotización
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
