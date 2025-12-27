'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Users, Zap } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Accessible',
    description: 'Des prix solidaires pour que le digital ne soit plus un frein à votre rayonnement.',
  },
  {
    icon: Users,
    title: 'Humain',
    description: 'Un accompagnement personnalisé, à l\'écoute de vos besoins et de votre univers.',
  },
  {
    icon: Zap,
    title: 'Efficace',
    description: 'Des sites performants, livrés rapidement, pour vous concentrer sur l\'essentiel.',
  },
]

export default function Philosophie() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="philosophie" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay-200 to-transparent" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-sage-600 text-sm tracking-widest uppercase mb-4"
            >
              Philosophie
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl text-clay-900 mb-6"
            >
              Le digital au service du{' '}
              <span className="text-sage-600">vivant</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-clay-600 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Je crois qu'un site web professionnel ne devrait pas coûter des mois 
              de collecte de fonds. Votre mission mérite une vitrine à sa hauteur.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="group"
              >
                <div className="relative p-8 md:p-10 bg-white/50 backdrop-blur-sm rounded-3xl border border-sand-200 hover:border-sage-300 transition-all duration-500 hover:shadow-xl hover:shadow-sage-100/50">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-sage-100 rounded-2xl text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-all duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-2xl text-clay-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-clay-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-6xl text-sage-200 font-serif">"</span>
              <p className="font-serif text-xl md:text-2xl text-clay-700 italic max-w-3xl mx-auto leading-relaxed">
                Concentrez-vous sur votre art, votre mission, votre passion. 
                Je m'occupe de votre vitrine digitale.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
