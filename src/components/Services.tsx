'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  {
    id: 'essentielle',
    name: 'Présence Essentielle',
    price: '300',
    description: 'L\'essentiel pour exister en ligne avec élégance',
    features: [
      'Site vitrine 5 pages',
      'Design responsive moderne',
      'Formulaire de contact',
      'Optimisation SEO de base',
      'Hébergement inclus 1ère année',
      '1h de formation',
    ],
    delay: '5-7 jours',
    highlight: false,
  },
  {
    id: 'association',
    name: 'Pack Communauté',
    price: '550',
    description: 'Pour animer et fédérer votre communauté',
    features: [
      'Tout de Présence Essentielle',
      'Agenda événementiel',
      'Intégration Newsletter',
      'Connexion réseaux sociaux',
      'Espace actualités',
      '2h de formation',
    ],
    delay: '7-10 jours',
    highlight: true,
    badge: 'Populaire',
  },
  {
    id: 'createur',
    name: 'Pack Créateur',
    price: '750',
    description: 'Pour vendre vos créations et services',
    features: [
      'Tout de Présence Essentielle',
      'Blog intégré',
      'E-shop (20 produits)',
      'Paiement en ligne',
      'Gestion des commandes',
      '2h de formation',
    ],
    delay: '10-14 jours',
    highlight: false,
  },
]

const addons = [
  { name: 'Newsletter (Mailchimp/Brevo)', price: '80' },
  { name: 'Réseaux sociaux (flux)', price: '60' },
  { name: 'Blog avec gestion', price: '100' },
  { name: 'Agenda événementiel', price: '120' },
  { name: 'Chat automatisé', price: '150' },
  { name: 'Espace membres', price: '200' },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAddons, setShowAddons] = useState(false)

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-sand-50 to-sage-50/30 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-sage-600 text-sm tracking-widest uppercase mb-4"
            >
              Offres
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl text-clay-900 mb-6"
            >
              Des tarifs <span className="text-sage-600">engagés</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-clay-600 max-w-2xl mx-auto text-lg"
            >
              Des formules pensées pour s'adapter à vos besoins et votre budget
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className={`relative rounded-3xl p-8 transition-all duration-500 ${
                  service.highlight
                    ? 'bg-sage-600 text-white shadow-2xl shadow-sage-600/20 scale-105'
                    : 'bg-white border border-sand-200 hover:border-sage-300 hover:shadow-xl'
                }`}
              >
                {service.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta-500 text-white text-xs px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {service.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className={`font-serif text-2xl mb-2 ${service.highlight ? 'text-white' : 'text-clay-800'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-sm ${service.highlight ? 'text-sage-100' : 'text-clay-500'}`}>
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`font-serif text-5xl ${service.highlight ? 'text-white' : 'text-clay-900'}`}>
                    {service.price}€
                  </span>
                  <span className={`text-sm ml-1 ${service.highlight ? 'text-sage-200' : 'text-clay-500'}`}>
                    / projet
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.highlight ? 'text-sage-200' : 'text-sage-500'}`} />
                      <span className={`text-sm ${service.highlight ? 'text-sage-100' : 'text-clay-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={`text-xs mb-6 ${service.highlight ? 'text-sage-200' : 'text-clay-500'}`}>
                  Délai : {service.delay}
                </div>

                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-full transition-all duration-300 ${
                    service.highlight
                      ? 'bg-white text-sage-600 hover:bg-sage-50'
                      : 'bg-sage-600 text-white hover:bg-sage-700'
                  }`}
                >
                  Choisir cette offre
                </a>
              </motion.div>
            ))}
          </div>

          {/* Addons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAddons(!showAddons)}
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors"
            >
              <span>Voir les options à la carte</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${showAddons ? 'rotate-90' : ''}`} />
            </button>

            {showAddons && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
              >
                {addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="bg-white/50 backdrop-blur-sm border border-sand-200 rounded-xl p-4 text-left"
                  >
                    <div className="text-sm text-clay-700">{addon.name}</div>
                    <div className="font-serif text-lg text-sage-600">+{addon.price}€</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
