import CTAButton from '@/components/CTAButton'

export default function AppsMovilesPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white">
          Desarrollo de Aplicaciones Móviles y Web
        </h1>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Tipos de Apps
          </h2>
          <ul className="space-y-3 text-text-muted text-lg">
            <li>• Apps móviles nativas (iOS/Android)</li>
            <li>• Apps híbridas multiplataforma</li>
            <li>• Progressive Web Apps (PWA)</li>
            <li>• Aplicaciones web empresariales</li>
          </ul>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Casos de Uso
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Apps de Ventas y Campo',
                items: ['CRM móvil', 'Toma de pedidos', 'Gestión de visitas'],
              },
              {
                title: 'Apps de Operaciones',
                items: ['Checklist y auditorías', 'Reportes de incidencias', 'Control de inventarios'],
              },
              {
                title: 'Apps para Clientes',
                items: ['E-commerce móvil', 'Programas de lealtad', 'Rastreo de pedidos'],
              },
              {
                title: 'Apps Internas',
                items: ['Directorio empresarial', 'RRHH móvil', 'Control de asistencia'],
              },
            ].map((useCase) => (
              <div key={useCase.title}>
                <h3 className="text-xl font-display font-bold text-accent mb-3">
                  {useCase.title}
                </h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, idx) => (
                    <li key={idx} className="text-text-muted flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Beneficios
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📱', title: 'Movilidad Real', desc: 'Trabajo desde cualquier lugar' },
              { icon: '⚡', title: 'Productividad', desc: 'Elimina papeleo' },
              { icon: '🎯', title: 'Mejor Experiencia', desc: 'Apps vs sitios móviles' },
              { icon: '📊', title: 'Datos en Tiempo Real', desc: 'Información actualizada' },
              { icon: '💰', title: 'Reducción de Errores', desc: 'Formularios digitales' },
              { icon: '🔄', title: 'Sincronización', desc: 'Funciona offline' },
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
          <div className="text-white/90 space-y-2 mb-8 text-left max-w-2xl mx-auto">
            <ul className="space-y-1">
              <li>• App básica: $200k - $350k</li>
              <li>• App mediana: $350k - $700k</li>
              <li>• App compleja: $700k - $1.5M+</li>
            </ul>
            <p className="mt-4 font-semibold">Mantenimiento: Desde $15k/mes</p>
          </div>
          <CTAButton href="/contacto" variant="secondary">
            Solicitar Cotización
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
