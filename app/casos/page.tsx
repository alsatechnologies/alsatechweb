import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export default function CasosPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white text-center">
          Casos de Éxito
        </h1>
        <p className="text-text-muted text-center text-xl mb-16 max-w-3xl mx-auto">
          Proyectos reales que han transformado negocios
        </p>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-12">
          <div className="mb-8">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Sistema de Trazabilidad Industrial
            </h2>
            <p className="text-accent font-semibold text-xl mb-2">
              Sector: Agroindustria / Manufactura
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              El Cliente
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-4">
              Empresa procesadora de aceite vegetal con operaciones nacionales e internacionales.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-text-muted">
              <div>
                <strong className="text-white">TAMAÑO:</strong> 150+ empleados
              </div>
              <div>
                <strong className="text-white">OPERACIÓN:</strong> 24/7, múltiples turnos
              </div>
              <div>
                <strong className="text-white">VOLUMEN:</strong> Miles de toneladas mensuales
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              El Desafío
            </h3>
            <ul className="space-y-2 text-text-muted text-lg mb-4">
              <li>❌ Falta de visibilidad en producción</li>
              <li>❌ Trazabilidad manual propensa a errores</li>
              <li>❌ Reportes tardíos para toma de decisiones</li>
              <li>❌ Dificultad para cumplir certificaciones internacionales</li>
              <li>❌ Desperdicios no detectados a tiempo</li>
            </ul>
            <div className="bg-bg-primary p-4 border-2 border-accent">
              <p className="text-white font-semibold mb-2">CONSECUENCIAS:</p>
              <ul className="text-text-muted space-y-1">
                <li>• Pérdida de oportunidades de exportación</li>
                <li>• Sobrecostos operativos</li>
                <li>• Riesgo de incumplimiento regulatorio</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              La Solución
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              SISTEMA INTEGRAL desarrollado en 75 días:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: 'Módulo de Recepción',
                  items: ['Registro digital de materia prima', 'QR codes y trazabilidad desde origen'],
                },
                {
                  title: 'Módulo de Producción',
                  items: ['Seguimiento en tiempo real', 'Alertas de calidad automáticas', 'Control de mermas'],
                },
                {
                  title: 'Módulo de Producto Terminado',
                  items: ['Trazabilidad completa', 'Gestión de inventarios', 'Control de embarques'],
                },
                {
                  title: 'Dashboard Ejecutivo',
                  items: ['KPIs en tiempo real', 'Gráficas de tendencias', 'Alertas automáticas'],
                },
                {
                  title: 'Reportes Automáticos',
                  items: ['Certificaciones con un clic', 'Reportes regulatorios', 'Trazabilidad para auditorías'],
                },
              ].map((module) => (
                <div key={module.title} className="bg-bg-primary p-6 border-2 border-accent">
                  <h4 className="text-xl font-display font-bold text-accent mb-3">
                    {module.title}
                  </h4>
                  <ul className="space-y-2 text-text-muted">
                    {module.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-bg-primary p-6 border-2 border-accent">
              <p className="text-white font-semibold mb-2">TECNOLOGÍAS:</p>
              <div className="grid md:grid-cols-2 gap-2 text-text-muted text-sm">
                <div>• Backend: .NET Core + SQL Server</div>
                <div>• Frontend: React + TypeScript</div>
                <div>• Mobile: App Android para tablets</div>
                <div>• Cloud: Azure</div>
                <div>• BI: Power BI embedded</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Los Resultados
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '100% de trazabilidad del producto',
                '80% reducción en tiempo de reportes',
                'Visibilidad en tiempo real',
                'Cumplimiento automatizado de certificaciones',
                'Detección temprana de problemas',
                'Reducción de desperdicios',
                'Base sólida para expansión',
                'Implementado en 75 días',
              ].map((result) => (
                <div key={result} className="flex items-start bg-bg-primary p-4 border-2 border-accent">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <span className="text-text-muted">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Por Qué Funcionó
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Involucramiento del Cliente',
                  desc: 'Usuarios participaron desde diseño',
                },
                {
                  title: 'Entendimiento del Negocio',
                  desc: 'Visitamos la planta, entendimos el proceso real',
                },
                {
                  title: 'Diseño para Usuarios Reales',
                  desc: 'Interfaces simples para ambiente industrial',
                },
                {
                  title: 'Implementación Gradual',
                  desc: 'Módulo por módulo, validando',
                },
                {
                  title: 'Capacitación Efectiva',
                  desc: 'Capacitación práctica hasta dominio total',
                },
                {
                  title: 'Soporte Post-Lanzamiento',
                  desc: 'Disponibles para ajustes',
                },
              ].map((factor) => (
                <div key={factor.title} className="bg-bg-primary p-4 border-2 border-accent">
                  <h4 className="text-white font-bold mb-1">{factor.title}</h4>
                  <p className="text-text-muted">{factor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <CTAButton href="/contacto" variant="primary">
            ¿Tienes un Proyecto Similar?
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
