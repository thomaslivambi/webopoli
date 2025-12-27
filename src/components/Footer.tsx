'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Leaf } from 'lucide-react'

const footerLinks = {
  navigation: [
    { label: 'Accueil', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'CGV', href: '/cgv' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-clay-900 text-sand-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="font-serif text-3xl text-sand-100">
                  web<span className="text-sage-400">opoli</span>
                </span>
              </Link>
              <p className="text-sand-400 leading-relaxed max-w-md mb-6">
                Sites web accessibles et esthétiques pour les acteurs du changement positif : 
                artistes, thérapeutes, associations et acteurs de la nature.
              </p>
              <div className="flex items-center gap-2 text-sage-400 text-sm">
                <Leaf className="w-4 h-4" />
                <span>Digital accessible et engagé</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-serif text-lg text-sand-100 mb-4">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sand-400 hover:text-sage-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-serif text-lg text-sand-100 mb-4">Légal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sand-400 hover:text-sage-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-clay-800 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-sand-500">
            <p>
              © {currentYear} Webopoli. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-terracotta-500" /> en Bourgogne-Franche-Comté
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
