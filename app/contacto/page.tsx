'use client'

import { useState } from 'react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    industria: '',
    solucion: [] as string[],
    proyecto: '',
    sistema: '',
    presupuesto: '',
    cuando: '',
    conociste: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu interés! Te contactaremos pronto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData({
      ...formData,
      solucion: checked
        ? [...formData.solucion, value]
        : formData.solucion.filter((s) => s !== value),
    })
  }

  return (
    <div className="pt-24 section-padding bg-bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-display text-5xl sm:text-6xl mb-4 text-white text-center">
          Contacto
        </h1>
        <p className="text-text-muted text-center text-xl mb-12 max-w-3xl mx-auto">
          Agenda una consultoría gratuita y descubre cómo podemos ayudarte
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-6">
              Contacto Directo
            </h2>
            <div className="space-y-4 text-text-muted">
              <div>
                <p className="text-white font-semibold mb-1">📱 WhatsApp</p>
                <a
                  href="https://wa.me/526674783641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +52 667 478 3641
                </a>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">📧 Email</p>
                <a
                  href="mailto:alsatechologies@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  alsatechologies@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">📍 Ubicación</p>
                <p>Culiacán, Sinaloa, México</p>
                <p className="text-sm">Blvr. Sinaloa 730, Las Quintas</p>
              </div>
            </div>
          </div>

          <div className="bg-bg-secondary p-6 border-4 border-accent">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Qué Esperar
            </h2>
            <ol className="space-y-3 text-text-muted">
              <li className="flex items-start">
                <span className="text-accent mr-2 font-bold">1.</span>
                <span>CONTACTO INICIAL (24 horas)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 font-bold">2.</span>
                <span>CONSULTORÍA ESTRATÉGICA (45-60 min)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 font-bold">3.</span>
                <span>PROPUESTA TÉCNICA (48-72 horas)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 font-bold">4.</span>
                <span>DECISIÓN (sin presión)</span>
              </li>
            </ol>
            <p className="text-accent font-bold mt-4 text-center">
              Todo SIN COSTO y SIN COMPROMISO
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-bg-secondary p-8 md:p-12 border-4 border-accent">
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-white mb-6">
              Información de Contacto
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-white font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-white font-semibold mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                />
              </div>

              <div>
                <label htmlFor="cargo" className="block text-white font-semibold mb-2">
                  Cargo
                </label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-white font-semibold mb-2">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-white mb-6">
              Sobre Tu Proyecto
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="industria" className="block text-white font-semibold mb-2">
                  Industria *
                </label>
                <select
                  id="industria"
                  name="industria"
                  required
                  value={formData.industria}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                >
                  <option value="">Selecciona una industria</option>
                  <option value="educacion">Educación</option>
                  <option value="manufactura">Manufactura</option>
                  <option value="salud">Salud</option>
                  <option value="finanzas">Finanzas</option>
                  <option value="retail">Retail</option>
                  <option value="logistica">Logística</option>
                  <option value="construccion">Construcción</option>
                  <option value="agroindustria">Agroindustria</option>
                  <option value="otra">Otra</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  ¿Qué tipo de solución necesitas? * (múltiples opciones)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Desarrollo de Software a la Medida',
                    'Aplicaciones con IA',
                    'Análisis de Datos y BI',
                    'Apps Móviles y Web',
                    'Modernización de Sistemas Legacy',
                  ].map((sol) => (
                    <label key={sol} className="flex items-center text-text-muted cursor-pointer">
                      <input
                        type="checkbox"
                        value={sol}
                        checked={formData.solucion.includes(sol)}
                        onChange={handleCheckbox}
                        className="mr-2 w-5 h-5 accent-accent"
                      />
                      {sol}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="proyecto" className="block text-white font-semibold mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="proyecto"
                  name="proyecto"
                  required
                  rows={5}
                  value={formData.proyecto}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark resize-none"
                  placeholder="Describe tu proyecto, necesidades y objetivos..."
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  ¿Ya tienes un sistema que reemplazar? *
                </label>
                <div className="flex gap-6">
                  {['Sí', 'No', 'Parcialmente'].map((option) => (
                    <label key={option} className="flex items-center text-text-muted cursor-pointer">
                      <input
                        type="radio"
                        name="sistema"
                        value={option.toLowerCase()}
                        checked={formData.sistema === option.toLowerCase()}
                        onChange={handleChange}
                        className="mr-2 accent-accent"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="presupuesto" className="block text-white font-semibold mb-2">
                    Presupuesto aproximado
                  </label>
                  <select
                    id="presupuesto"
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="100-200">$100k - $200k MXN</option>
                    <option value="200-400">$200k - $400k MXN</option>
                    <option value="400-800">$400k - $800k MXN</option>
                    <option value="800+">$800k+ MXN</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cuando" className="block text-white font-semibold mb-2">
                    ¿Cuándo lo necesitas? *
                  </label>
                  <select
                    id="cuando"
                    name="cuando"
                    required
                    value={formData.cuando}
                    onChange={handleChange}
                    className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                  >
                    <option value="">Selecciona un plazo</option>
                    <option value="inmediato">Inmediato</option>
                    <option value="1-3meses">1-3 meses</option>
                    <option value="3-6meses">3-6 meses</option>
                    <option value="6+meses">6+ meses</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="conociste" className="block text-white font-semibold mb-2">
                  ¿Cómo nos conociste?
                </label>
                <select
                  id="conociste"
                  name="conociste"
                  value={formData.conociste}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border-2 border-accent p-3 text-white focus:outline-none focus:border-accent-dark"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="google">Google / Búsqueda</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referido">Referido</option>
                  <option value="redes">Redes sociales</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn-primary">
              Agendar Consultoría Gratuita
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
