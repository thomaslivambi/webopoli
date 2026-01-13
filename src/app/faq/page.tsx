'use client'

import { useLanguage } from '@/context/LanguageContext'
import FAQAccordion from '@/components/FAQAccordion'

export default function FAQPage() {
  const { t } = useLanguage()
  const faq = t.faq

  return (
    <main className="min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-sand-50 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sage-100 rounded-full opacity-40 blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-terracotta-100 rounded-full opacity-30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
              {faq.label}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-clay-800 mb-6 leading-tight">
              {faq.title}
              <span className="block text-sage-600">{faq.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-clay-600 leading-relaxed">
              {faq.description}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faq.items} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sand-100">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-clay-800 mb-4">
              {faq.cta.title}
            </h2>
            <p className="text-clay-600 mb-8">
              {faq.cta.description}
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage-600 text-white rounded-full font-medium hover:bg-sage-700 transition-all duration-300 hover:shadow-lg hover:shadow-sage-200 hover:-translate-y-0.5"
            >
              {faq.cta.button}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
