const techCategories = [
  {
    category: 'BACKEND',
    techs: ['.NET', 'Node.js', 'Python', 'Java'],
  },
  {
    category: 'FRONTEND',
    techs: ['React', 'Angular', 'Vue.js', 'Next.js'],
  },
  {
    category: 'CLOUD',
    techs: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    category: 'MOBILE',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    category: 'DATABASES',
    techs: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'AI/ML',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn'],
  },
]

import Image from 'next/image'

export default function Technologies() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background image with duotone effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/spacez.png"
          alt="Technology background"
          fill
          className="object-cover"
          style={{
            filter: 'grayscale(100%) contrast(1.2)',
            opacity: 0.08,
            mixBlendMode: 'multiply',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(255, 70, 6, 0.15) 0%, rgba(181, 50, 7, 0.05) 100%)`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white">
          Tecnologías
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div
              key={category.category}
              className="glass-card p-6"
            >
              <h3 className="text-accent font-mono font-bold text-sm uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg-secondary px-3 py-1 text-text-muted text-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
