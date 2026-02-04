'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const phases = [
  {
    number: '1',
    title: 'Investigación y Análisis',
    duration: '1-2 semanas',
    activities: [
      'Levantamiento de requerimientos',
      'Análisis de procesos actuales',
      'Propuesta técnica y económica',
    ],
  },
  {
    number: '2',
    title: 'Diseño de Solución',
    duration: '2 semanas',
    activities: [
      'Arquitectura del sistema',
      'Diseño de interfaces (UX/UI)',
      'Prototipos interactivos',
    ],
  },
  {
    number: '3',
    title: 'Desarrollo Ágil',
    duration: '3-4 semanas',
    activities: [
      'Sprints semanales con entregables',
      'Demos y validaciones continuas',
      'Ajustes en tiempo real',
    ],
  },
  {
    number: '4',
    title: 'Implementación',
    duration: '1 semana',
    activities: [
      'Puesta en producción controlada',
      'Capacitación a usuarios',
      'Migración de datos (si aplica)',
    ],
  },
  {
    number: '5',
    title: 'Soporte y Evolución',
    duration: 'Continuo',
    activities: [
      'Acompañamiento post-lanzamiento',
      'Correcciones y optimizaciones',
      'Nuevas funcionalidades',
    ],
  },
]

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const drawLines = () => {
      if (!timelineRef.current || !svgRef.current) return

      const svg = svgRef.current
      const timeline = timelineRef.current

      // Clear SVG
      svg.innerHTML = ''

      // Get positions of phase numbers
      const fases: Array<{ x: number; y: number; bottom: number }> = []
      for (let i = 1; i <= 5; i++) {
        const fase = timeline.querySelector(`[data-fase="${i}"]`)
        if (!fase) continue

        const numero = fase.querySelector('.fase-numero')
        if (!numero) continue

        const rect = numero.getBoundingClientRect()
        const timelineRect = timeline.getBoundingClientRect()

        fases.push({
          x: rect.left - timelineRect.left + rect.width / 2,
          y: rect.top - timelineRect.top + rect.height / 2,
          bottom: rect.top - timelineRect.top + rect.height,
        })
      }

      // Define connections: [from, to]
      const connections = [
        [0, 1], // 1 → 2
        [1, 2], // 2 → 3
        [2, 3], // 3 → 4
        [3, 4], // 4 → 5
      ]

      connections.forEach(([from, to]) => {
        const p1 = fases[from]
        const p2 = fases[to]
        if (!p1 || !p2) return

        // Create path with curves
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

        let d
        const midX = (p1.x + p2.x) / 2

        if (p1.y < p2.y) {
          // Going down (1→2, 3→4)
          const dropY = p1.bottom + 15
          d = `M ${p1.x} ${p1.bottom + 5}
               L ${p1.x} ${dropY}
               Q ${p1.x} ${dropY + 20}, ${midX} ${dropY + 20}
               L ${midX} ${p2.y - 40}
               Q ${midX} ${p2.y - 20}, ${p2.x} ${p2.y - 20}
               L ${p2.x} ${p2.y - 28}`
        } else {
          // Going up (2→3, 4→5)
          const startY = p1.y - 28
          d = `M ${p1.x} ${startY}
               L ${p1.x} ${startY - 20}
               Q ${p1.x} ${startY - 40}, ${midX} ${startY - 40}
               L ${midX} ${p2.bottom + 35}
               Q ${midX} ${p2.bottom + 15}, ${p2.x} ${p2.bottom + 15}
               L ${p2.x} ${p2.bottom + 5}`
        }

        path.setAttribute('d', d)
        path.setAttribute('fill', 'none')
        path.setAttribute('stroke', '#333')
        path.setAttribute('stroke-width', '2')
        svg.appendChild(path)

        // Point at start
        const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle1.setAttribute('cx', String(p1.x))
        circle1.setAttribute('cy', String(p1.y < p2.y ? p1.bottom + 5 : p1.y - 28))
        circle1.setAttribute('r', '5')
        circle1.setAttribute('fill', '#ff5722')
        svg.appendChild(circle1)

        // Point at end
        const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle2.setAttribute('cx', String(p2.x))
        circle2.setAttribute('cy', String(p1.y < p2.y ? p2.y - 28 : p2.bottom + 5))
        circle2.setAttribute('r', '5')
        circle2.setAttribute('fill', '#ff5722')
        svg.appendChild(circle2)
      })
    }

    // Draw on load and resize
    const timer = setTimeout(drawLines, 100)
    window.addEventListener('resize', drawLines)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', drawLines)
    }
  }, [])
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container mx-auto max-w-7xl">
        <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-4 text-center text-white">
          Nuestro Proceso
        </h2>
        <p className="text-text-muted text-center text-lg mb-16 max-w-3xl mx-auto">
          5 fases estructuradas para garantizar el éxito de tu proyecto
        </p>

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-6xl mx-auto px-4">
          <div
            ref={timelineRef}
            className="relative grid grid-cols-5 gap-5"
            style={{ minHeight: '600px' }}
          >
            {phases.map((phase, index) => {
              const isTopRow = index === 0 || index === 2 || index === 4
              const gridRow = isTopRow ? 1 : 2
              const marginTop = !isTopRow ? '60px' : '0'

              return (
                <motion.div
                  key={phase.number}
                  data-fase={phase.number}
                  initial={{ opacity: 0, y: isTopRow ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center relative z-[2]"
                  style={{
                    gridRow,
                    gridColumn: index + 1,
                    marginTop,
                  }}
                >
                  {/* Number badge */}
                  <div className="fase-numero w-14 h-14 bg-accent text-white flex items-center justify-center text-[28px] font-bold mb-4 shadow-lg shadow-accent/40 relative z-[3]">
                    {phase.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 min-h-[48px] flex items-center justify-center leading-tight">
                    {phase.title}
                  </h3>

                  {/* Duration */}
                  <div className="text-accent text-sm font-semibold mb-4">
                    {phase.duration}
                  </div>

                  {/* Activities */}
                  <ul className="text-left text-base leading-relaxed text-text-muted space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="relative pl-4">
                        <span className="absolute left-0 top-0 text-accent font-bold text-lg">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}

            {/* SVG Container for lines */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
              <svg ref={svgRef} className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card-light p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center text-white font-display font-bold text-xl mr-4 flex-shrink-0">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {phase.title}
                    </h3>
                    <span className="text-accent font-semibold text-sm">
                      {phase.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-text-muted flex items-start text-sm">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span className="flex-1">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
