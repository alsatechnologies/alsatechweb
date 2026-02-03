import CTAButton from '@/components/CTAButton'

export default function IAPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white">
          Aplicaciones con Inteligencia Artificial
        </h1>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ¿Qué es IA Aplicada?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            Tecnología que resuelve problemas reales de negocio:
          </p>
          <ul className="space-y-3 text-text-muted text-lg">
            <li>• Toma decisiones automáticas basadas en datos</li>
            <li>• Predice comportamientos y tendencias</li>
            <li>• Reconoce patrones invisibles para humanos</li>
            <li>• Aprende y mejora continuamente</li>
          </ul>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Soluciones de IA
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Análisis Predictivo',
                items: ['Predicción de demanda', 'Forecasting de ventas', 'Detección de fraudes', 'Mantenimiento predictivo'],
              },
              {
                title: 'Automatización Inteligente',
                items: ['RPA + IA', 'Clasificación de documentos', 'OCR inteligente', 'Procesamiento de lenguaje natural'],
              },
              {
                title: 'Chatbots y Asistentes',
                items: ['Atención 24/7', 'Calificación de leads', 'Resolución automática'],
              },
              {
                title: 'Visión Artificial',
                items: ['Control de calidad automatizado', 'Reconocimiento de objetos', 'Conteo de inventarios', 'Análisis de imágenes'],
              },
              {
                title: 'Recomendación',
                items: ['Sistemas de recomendación', 'Personalización de contenido', 'Optimización de precios'],
              },
              {
                title: 'Optimización',
                items: ['Rutas de logística', 'Asignación de recursos', 'Planificación de producción', 'Detección de anomalías'],
              },
            ].map((solution) => (
              <div key={solution.title}>
                <h3 className="text-xl font-display font-bold text-accent mb-3">
                  {solution.title}
                </h3>
                <ul className="space-y-2">
                  {solution.items.map((item, idx) => (
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
              { icon: '🤖', title: 'Automatización Real', desc: '24/7 sin errores' },
              { icon: '📊', title: 'Decisiones Basadas en Datos', desc: 'Precisión real' },
              { icon: '💰', title: 'Reducción de Costos', desc: 'ROI en 6-18 meses' },
              { icon: '⚡', title: 'Velocidad Sobrehumana', desc: 'Respuesta en tiempo real' },
              { icon: '🎯', title: 'Precisión Mejorada', desc: 'Reduce errores humanos' },
              { icon: '📈', title: 'Mejora Continua', desc: 'Aprende constantemente' },
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
            DESDE $250,000 MXN
          </p>
          <div className="text-white/90 space-y-2 mb-8 text-left max-w-2xl mx-auto">
            <p className="font-semibold mb-2">Proyectos típicos:</p>
            <ul className="space-y-1">
              <li>• Chatbot básico: $250k - $400k</li>
              <li>• Sistema predictivo: $400k - $800k</li>
              <li>• Visión artificial: $500k - $1M+</li>
            </ul>
            <p className="mt-4 font-semibold">POC (Proof of Concept): Desde $80k-150k</p>
          </div>
          <CTAButton href="/contacto" variant="secondary">
            Solicitar Cotización
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
