'use client'

import { useEffect } from "react"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactForm() {
  useEffect(() => {
    // Cal.com inline embed script with proper types
    interface CalApi {
      q?: any[]
      loaded?: boolean
      ns?: Record<string, any>
      [key: string]: any
    }

    (function (C: any, A: string, L: string) {
      const p = function (a: CalApi, ar: any) {
        a.q = a.q || []
        a.q.push(ar)
      }
      const d = C.document
      C.Cal = C.Cal || function () {
        const cal: CalApi = C.Cal
        const ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement("script")).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: CalApi = function () { p(api, arguments) } as any
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === "string") {
            cal.ns = cal.ns || {}
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ["initNamespace", namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(window, "https://app.cal.com/embed/embed.js", "init")

    const w = window as any
    w.Cal("init", "45min", { origin: "https://app.cal.com" })

    w.Cal.ns["45min"]("inline", {
      elementOrSelector: "#my-cal-inline-45min",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "dark"
      },
      calLink: "alsatech/45min",
    })

    w.Cal.ns["45min"]("ui", {
      theme: "dark",
      cssVarsPerTheme: {
        light: { "cal-brand": "#ff4606" },
        dark: { "cal-brand": "#ff4606" }
      },
      hideEventTypeDetails: false,
      layout: "month_view"
    })
  }, [])

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-4 text-center text-white">
          Hablemos de Tu Proyecto
        </h2>
        <p className="text-text-muted text-center text-lg mb-12 max-w-3xl mx-auto">
          Agenda una consultoría gratuita de 45 minutos y descubre cómo podemos ayudarte
        </p>

        {/* Cal.com inline embed */}
        <div
          id="my-cal-inline-45min"
          className="w-full overflow-auto glass-card-light p-6 mb-16"
          style={{ minHeight: '700px' }}
        ></div>

        {/* Contact Information */}
        <div className="mt-12">
          <h3 className="text-2xl font-display font-bold text-white text-center mb-8">
            Contacto alternativo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/526674783641"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover:glass-card-light transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">WhatsApp</p>
                <p className="text-text-muted text-sm">+52 667 478 3641</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:alsatechologies@gmail.com"
              className="glass-card p-6 hover:glass-card-light transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                <p className="text-text-muted text-sm">alsatechologies@gmail.com</p>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Blvr.+Sinaloa+730,+Las+Quintas,+Culiacán,+Sinaloa"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover:glass-card-light transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Ubicación</p>
                <p className="text-text-muted text-sm">Blvr. Sinaloa 730, Las Quintas, Culiacán, Sin.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
