const phases = [
  {
    number: '1',
    title: 'Investigación y Análisis',
    duration: '1-2 semanas',
    activities: [
      'Kickoff meeting',
      'Levantamiento de requerimientos',
      'Análisis técnico',
      'Propuesta de solución',
    ],
    deliverables: [
      'Documento de requerimientos',
      'Propuesta técnica y económica',
      'Cronograma detallado',
    ],
    involved: {
      client: 'Directivos, usuarios key',
      team: 'PM, Arquitecto, Analista',
    },
  },
  {
    number: '2',
    title: 'Diseño de Solución',
    duration: '2-3 semanas',
    activities: [
      'Arquitectura del sistema',
      'Diseño de experiencia (UX)',
      'Diseño de interfaz (UI)',
      'Validación con usuarios',
    ],
    deliverables: [
      'Documentación de arquitectura',
      'Diseños UI completos',
      'Prototipo interactivo',
      'Guía de estilos',
    ],
    involved: {
      client: 'Usuarios para validación',
      team: 'Arquitecto, UX/UI Designer',
    },
  },
  {
    number: '3',
    title: 'Desarrollo Ágil',
    duration: '4-6 semanas',
    methodology: [
      'Sprints de 1 semana',
      'Daily standups (15 min)',
      'Demos semanales',
      'Retrospectivas',
    ],
    sprint: [
      'Código funcional entregado',
      'Demo en vivo',
      'Testing automatizado',
      'Ajustes basados en feedback',
    ],
    communication: [
      'Daily standups',
      'Demo semanal (1 hora)',
      'Slack/Teams para dudas',
      'Retrospectiva',
    ],
  },
  {
    number: '4',
    title: 'Implementación',
    duration: '1-2 semanas',
    activities: [
      'Preparación (migración de datos)',
      'Testing final (UAT, performance, seguridad)',
      'Capacitación a usuarios',
      'Go-live',
      'Soporte intensivo',
    ],
    strategies: [
      'Big Bang - Todo a la vez',
      'Piloto - Grupo pequeño primero',
      'Fases - Módulo por módulo',
    ],
    deliverables: [
      'Sistema en producción',
      'Datos migrados',
      'Usuarios capacitados',
      'Documentación completa',
    ],
  },
  {
    number: '5',
    title: 'Soporte y Evolución',
    duration: '3 meses incluidos',
    support: [
      'Bug fixing',
      'Ajustes menores',
      'Optimizaciones',
      'Respuesta a dudas',
      'Monitoreo',
      'Actualizaciones de seguridad',
    ],
    sla: [
      'Crítico: 2 horas',
      'Alto: 8 horas',
      'Medio: 48 horas',
      'Bajo: Próximo sprint',
    ],
    after: [
      'Mantenimiento mensual: Desde $15k/mes',
      'Pay-as-you-go: $1,500/hora',
      'Evolución: Se cotiza por proyecto',
    ],
  },
]

export default function ProcesoPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white text-center">
          Nuestro Proceso
        </h1>
        <p className="text-text-muted text-center text-xl mb-4 max-w-3xl mx-auto">
          5 fases estructuradas para garantizar el éxito de tu proyecto
        </p>
        <p className="text-accent text-center text-2xl font-bold mb-16">
          ⏱️ Tiempo total: 60-90 días promedio
        </p>

        <div className="space-y-12">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-bg-secondary p-8 md:p-12 border-4 border-accent"
            >
              <div className="flex items-start mb-8">
                <div className="w-20 h-20 bg-accent flex items-center justify-center text-white font-display font-bold text-4xl mr-6 flex-shrink-0">
                  {phase.number}
                </div>
                <div>
                  <h2 className="text-4xl font-display font-bold text-white mb-2">
                    {phase.title}
                  </h2>
                  <p className="text-accent font-semibold text-xl">{phase.duration}</p>
                </div>
              </div>

              {phase.activities && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    ACTIVIDADES:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">{idx + 1}.</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.methodology && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    METODOLOGÍA:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.methodology.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.sprint && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    CADA SPRINT:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.sprint.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.communication && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    COMUNICACIÓN:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.communication.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.strategies && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    ESTRATEGIAS DE ROLLOUT:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.strategies.map((strategy, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">•</span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.support && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    SOPORTE INCLUIDO:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.support.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.sla && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    SLA:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.sla.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.deliverables && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    ENTREGABLES:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.involved && (
                <div className="mb-6 ml-26">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    INVOLUCRADOS:
                  </h3>
                  <div className="space-y-2 text-text-muted">
                    <p>
                      <strong className="text-white">Tu equipo:</strong> {phase.involved.client}
                    </p>
                    <p>
                      <strong className="text-white">Nuestro equipo:</strong> {phase.involved.team}
                    </p>
                  </div>
                </div>
              )}

              {phase.after && (
                <div className="ml-26 bg-bg-primary p-6 border-2 border-accent">
                  <h3 className="text-xl font-display font-bold text-accent mb-4">
                    DESPUÉS DE 3 MESES:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    {phase.after.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3">•</span>
                        {item}
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
