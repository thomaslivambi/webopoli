import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Webopoli - Questions fréquentes',
  description: 'Réponses aux questions fréquentes sur la création de sites web éco-conçus pour artistes, thérapeutes et acteurs du changement positif. Tarifs, délais, technologies, maintenance.',
  keywords: ['FAQ', 'questions fréquentes', 'création site web', 'éco-conception', 'tarifs web', 'maintenance site'],
  openGraph: {
    title: 'FAQ | Webopoli - Questions fréquentes',
    description: 'Tout savoir sur nos services de création web solidaire et éco-responsable.',
    url: 'https://webopoli.com/faq',
    siteName: 'Webopoli',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
