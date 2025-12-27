'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Leaf, Palette, Heart, Building2, Users, Sprout, Music, Ship, Baby, Hammer, Recycle, GraduationCap, ShoppingBag, X, Cake, BookOpen } from 'lucide-react'

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'art', label: 'Art & Culture' },
  { id: 'nature', label: 'Nature & Écologie' },
  { id: 'business', label: 'Entreprises' },
  { id: 'community', label: 'Communautés' },
]

const realisations = [
  {
    id: 1,
    title: 'Benoît Segui',
    category: 'art',
    categoryLabel: 'Art & Culture',
    description: 'Portfolio de guitariste contemporain et chercheur en musicologie. Design minimaliste avec identité visuelle personnalisée et vecteurs sur mesure.',
    image: '/images/projets/benoit-segui.webp',
    tags: ['Portfolio', 'Musique', 'Identité visuelle'],
    icon: Music,
    color: 'terracotta',
    url: null,
    year: '2020',
  },
  {
    id: 2,
    title: 'Bastien Pouilles',
    category: 'art',
    categoryLabel: 'Art & Culture',
    description: 'Portfolio d\'accordéoniste contemporain. Travail graphique personnalisé, édition photo et mise en page minimaliste.',
    image: '/images/projets/bastien-pouilles.webp',
    tags: ['Portfolio', 'Musique', 'Photo editing'],
    icon: Music,
    color: 'terracotta',
    url: 'https://bastienpouilles.com',
    year: '2020',
  },
  {
    id: 3,
    title: 'Pikasilla Puhkemaja',
    category: 'nature',
    categoryLabel: 'Nature & Bien-être',
    description: 'Maison de vacances et de formation en Estonie du Sud. Un lieu authentique pour ateliers, conférences et événements.',
    image: '/images/projets/pikasilla.webp',
    tags: ['Nature', 'Bien-être', 'Hébergement'],
    icon: Leaf,
    color: 'sage',
    url: 'https://pikasillapuhkemaja.ee',
    year: '2023',
  },
  {
    id: 4,
    title: 'Silus Community',
    category: 'community',
    categoryLabel: 'Communauté',
    description: 'Plateforme communautaire avec systèmes personnalisés. Développement web avancé en partenariat avec un designer professionnel.',
    image: '/images/projets/silus.webp',
    tags: ['Plateforme', 'Communauté', 'Développement'],
    icon: Users,
    color: 'sage',
    url: 'https://silus.community',
    year: '2023',
  },
  {
    id: 5,
    title: 'Orion Naval Engineering',
    category: 'business',
    categoryLabel: 'Entreprise',
    description: 'Refonte complète du site pour cette entreprise d\'ingénierie navale établie depuis 13 ans. Design moderne, sécurité et SEO local.',
    image: '/images/projets/orion-naval.webp',
    tags: ['B2B', 'Refonte', 'SEO'],
    icon: Ship,
    color: 'clay',
    url: 'https://orionnaval.com',
    year: '2024',
  },
  {
    id: 6,
    title: 'Better Organix',
    category: 'nature',
    categoryLabel: 'Nature & Écologie',
    description: 'Refonte WordPress en gardant le design original avec des améliorations ciblées. Site propre et maintenable par l\'équipe.',
    image: '/images/projets/better-organix.webp',
    tags: ['Bio', 'WordPress', 'Refonte'],
    icon: Sprout,
    color: 'sage',
    url: 'https://betterorganix.com',
    year: '2023',
  },
  {
    id: 7,
    title: 'Jõelähtme Aed',
    category: 'nature',
    categoryLabel: 'Maraîchage Bio',
    description: 'Site vitrine pour un maraîchage local près de Tallinn, Estonie. Mise en valeur des produits locaux et de la philosophie du lieu.',
    image: '/images/projets/joelahtme-aed.webp',
    tags: ['Maraîchage', 'Local', 'Estonie'],
    icon: Sprout,
    color: 'sage',
    url: 'https://aed.betterorganix.com',
    year: '2025',
  },
  {
    id: 8,
    title: 'Safariland',
    category: 'business',
    categoryLabel: 'Entreprise',
    description: 'Site web pour une aire de jeux couverte pour enfants à Torcy, France. Design ludique et informations pratiques.',
    image: '/images/projets/safariland.webp',
    tags: ['Loisirs', 'Enfants', 'Local'],
    icon: Baby,
    color: 'terracotta',
    url: 'https://safariland.fr',
    year: '2024',
  },
  {
    id: 9,
    title: 'L\'Hôte Idéal',
    category: ['business','art'],
    categoryLabel: 'Boutique',
    description: 'Site vitrine pour une boutique de seconde main. Mise en valeur des produits et de la démarche éco-responsable.',
    image: '/images/projets/hote-ideal.webp',
    tags: ['Seconde main', 'E-commerce', 'Écologie'],
    icon: ShoppingBag,
    color: 'terracotta',
    url: 'https://lhoteideal.fr/',
    year: '2024',
  },
  {
    id: 10,
    title: 'Vahtrame',
    category: ['art','business'],
    categoryLabel: 'Artisanat',
    description: 'Site pour un artisan menuisier et constructeur de maisons en bois en Estonie. Présentation des réalisations et du savoir-faire.',
    image: '/images/projets/vahtrame.webp',
    tags: ['Artisanat', 'Construction', 'Bois'],
    icon: Hammer,
    color: 'clay',
    url: 'https://vahtrame.ee/',
    year: '2022',
  },
  {
    id: 11,
    title: 'E-Compost',
    category: 'nature',
    categoryLabel: 'Nature & Écologie',
    description: 'Site pour un service de collecte de déchets organiques. Présentation des services et sensibilisation au compostage.',
    image: '/images/projets/e-compost.webp',
    tags: ['Compost', 'Écologie', 'Services'],
    icon: Recycle,
    color: 'sage',
    url: 'https://e-compost.ee/',
    year: '2022',
  },
  {
    id: 12,
    title: 'Fairgrow',
    category: 'nature',
    categoryLabel: 'Education à la Nature',
    description: 'Plateforme éducative sur l\'agroécologie. Formation et ressources pour une agriculture durable et régénérative.',
    image: '/images/projets/fairgrow.webp',
    tags: ['Agroécologie', 'Éducation', 'Formation'],
    icon: GraduationCap,
    color: 'sage',
    url: 'https://fairgrow.ee',
    year: '2021',
  },
  {
    id: 13,
    title: 'Fairgreen',
    category: 'nature',
    categoryLabel: 'Maraîchage Bio',
    description: 'Site vitrine pour un maraîchage biologique. Vente directe de légumes de saison et philosophie du circuit court.',
    image: '/images/projets/fairgreen.webp',
    tags: ['Maraîchage', 'Bio', 'Circuit court'],
    icon: Sprout,
    color: 'sage',
    url: 'https://fairgreen.ee',
    year: '2021',
  },
  {
    id: 14,
    title: 'Hélène\'s Delicacies',
    category: ['nature','art','business'],
    categoryLabel: 'Alimentation végétale',
    description: 'E-commerce pour une artisane de fromages végétaux à Tallinn. Boutique en ligne avec commande, présentation des produits et services traiteur.',
    image: '/images/projets/helenes-delicacies.webp',
    tags: ['E-commerce', 'Vegan', 'Artisanat'],
    icon: Cake,
    color: 'terracotta',
    url: 'https://helenesdelicacies.com',
    year: '2024',
  },
  {
    id: 15,
    title: 'Cours Vivantes',
    category: ['community', 'nature'],
    categoryLabel: 'Écologie Sociale',
    description: 'Association bourguignonne de 8 professionnels dédiée au réenchantement des espaces de jeu. Végétalisation des cours d\'école, facilitation en intelligence collective et décloisonnement de la vie locale.',
    image: '/images/projets/cours-vivantes.webp',
    tags: ['Association', 'Végétalisation', 'Intelligence collective'],
    icon: BookOpen,
    color: 'sage',
    url: 'https://coursvivantes.fr',
    year: '2025',
  },
]

export default function Realisations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredRealisations = activeCategory === 'all' 
  ? realisations 
  : realisations.filter(r => r.category.includes(activeCategory))

  return (
    <section id="realisations" className="py-24 md:py-32 bg-gradient-to-b from-sage-50/30 to-sand-50">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-sage-600 text-sm tracking-widest uppercase mb-4"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl text-clay-900 mb-6"
            >
              Projets <span className="text-sage-600">réalisés</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-clay-600 max-w-2xl mx-auto text-lg"
            >
              Une sélection de sites créés pour des artistes, acteurs de la nature et entreprises engagées
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-sage-600 text-white shadow-lg shadow-sage-600/20'
                    : 'bg-white text-clay-600 hover:bg-sage-50 border border-sand-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((projet, index) => (
              <motion.article
                key={projet.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                layout
                className="group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] mb-5 rounded-2xl overflow-hidden bg-sand-200">
                  {/* Image du projet */}
                  <img 
                    src={projet.image} 
                    alt={projet.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback vers placeholder si l'image ne charge pas
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Placeholder avec icône (fallback) */}
                  <div className={`hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                    projet.color === 'sage' ? 'from-sage-100 to-sage-200' :
                    projet.color === 'terracotta' ? 'from-terracotta-100 to-terracotta-200' :
                    'from-clay-100 to-clay-200'
                  }`}>
                    <projet.icon className={`w-16 h-16 ${
                      projet.color === 'sage' ? 'text-sage-400' :
                      projet.color === 'terracotta' ? 'text-terracotta-400' :
                      'text-clay-400'
                    }`} />
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-clay-600">
                    {projet.year}
                  </div>
                  
                  {/* Hover Overlay - Site disponible */}
                  {projet.url && (
                    <a 
                      href={projet.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-clay-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <span className="text-white flex items-center gap-2 bg-sage-600 px-5 py-2 rounded-full">
                        Voir le site <ExternalLink className="w-4 h-4" />
                      </span>
                    </a>
                  )}

                  {/* Hover Overlay - Site non disponible */}
                  {!projet.url && (
                    <div className="absolute inset-0 bg-clay-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white flex items-center gap-2 bg-clay-600 px-5 py-2 rounded-full">
                        <X className="w-4 h-4" />
                        Site non disponible
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs uppercase tracking-wider ${
                      projet.color === 'sage' ? 'text-sage-600' :
                      projet.color === 'terracotta' ? 'text-terracotta-600' :
                      'text-clay-500'
                    }`}>
                      {projet.categoryLabel}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-clay-800 mb-2 group-hover:text-sage-600 transition-colors">
                    {projet.title}
                  </h3>
                  <p className="text-clay-600 text-sm mb-4 leading-relaxed">
                    {projet.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projet.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-sand-100 text-clay-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="font-serif text-4xl text-sage-600 mb-1">15+</div>
              <div className="text-clay-600 text-sm">Projets livrés</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-sage-600 mb-1">100%</div>
              <div className="text-clay-600 text-sm">Clients satisfaits</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-sage-600 mb-1">5+</div>
              <div className="text-clay-600 text-sm">Années d'expérience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
