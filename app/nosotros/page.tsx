import CTAButton from '@/components/CTAButton'

export default function NosotrosPage() {
  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-8 text-white text-center">
          Nosotros
        </h1>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Sobre Alsatechologies
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Somos un equipo de ingenieros y desarrolladores especializados en crear 
            software empresarial a la medida para empresas que buscan transformación digital.
          </p>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Nuestra Historia
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            Fundada en 2019, Alsatech nació de la visión de llevar tecnología de punta 
            a empresas de todos los tamaños y sectores.
          </p>
          <p className="text-text-muted text-lg leading-relaxed">
            Con más de 6 años desarrollando soluciones empresariales, hemos trabajado 
            con clientes de sectores como manufactura, agroindustria, retail, logística 
            y más, ayudándoles a digitalizar y optimizar sus operaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-bg-secondary p-8 border-4 border-accent">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Misión
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Desarrollar software empresarial de la más alta calidad que transforme 
              procesos y genere valor real para nuestros clientes, con entregas rápidas 
              y atención personalizada.
            </p>
          </div>

          <div className="bg-bg-secondary p-8 border-4 border-accent">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Visión
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Ser el partner tecnológico de referencia para empresas que buscan 
              innovación y excelencia en desarrollo de software a la medida en México.
            </p>
          </div>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Valores
          </h2>
          <ul className="space-y-4 text-text-muted text-lg">
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <div>
                <strong className="text-white">EXCELENCIA TÉCNICA</strong> - Cada línea de código cumple los más altos estándares
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <div>
                <strong className="text-white">COMPROMISO TOTAL</strong> - El éxito de tu proyecto es nuestro éxito
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <div>
                <strong className="text-white">INNOVACIÓN CONSTANTE</strong> - Siempre a la vanguardia en tecnología
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <div>
                <strong className="text-white">TRANSPARENCIA</strong> - Comunicación clara y honesta en cada etapa
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <div>
                <strong className="text-white">RESULTADOS MEDIBLES</strong> - Nos enfocamos en generar valor real
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Nuestro Enfoque
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            A diferencia de las grandes consultoras, somos una empresa ágil:
          </p>
          <ul className="space-y-3 text-text-muted text-lg mb-6">
            <li className="flex items-start">
              <span className="text-accent mr-3">✓</span>
              Atención directa del equipo técnico
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">✓</span>
              Equipos flexibles según tu proyecto
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">✓</span>
              Decisiones rápidas sin burocracia
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">✓</span>
              Precios justos y transparentes
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">✓</span>
              Comprometidos con tu éxito
            </li>
          </ul>
          <p className="text-accent font-bold text-xl text-center">
            No eres un número de ticket. Eres un partner.
          </p>
        </div>

        <div className="bg-bg-secondary p-8 md:p-12 border-4 border-accent mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Equipo Multidisciplinario
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            Conformamos el equipo ideal para cada proyecto:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-text-muted">
            {[
              'Arquitectos de Software',
              'Desarrolladores Full-Stack',
              'Especialistas en IA/ML',
              'Ingenieros de Datos',
              'Diseñadores UX/UI',
              'QA Engineers',
              'DevOps Engineers',
              'Project Managers',
            ].map((role) => (
              <div key={role} className="flex items-center">
                <span className="text-accent mr-3">•</span>
                {role}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <CTAButton href="/contacto" variant="primary">
            Trabajemos Juntos
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
