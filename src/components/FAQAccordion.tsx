'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            group rounded-2xl border transition-all duration-300
            ${openIndex === index 
              ? 'bg-white border-sage-200 shadow-lg shadow-sage-50' 
              : 'bg-white/60 border-sand-200 hover:border-sand-300 hover:bg-white'
            }
          `}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
            aria-expanded={openIndex === index}
          >
            <span className={`
              text-lg font-medium transition-colors duration-200
              ${openIndex === index ? 'text-sage-700' : 'text-clay-700 group-hover:text-clay-900'}
            `}>
              {item.question}
            </span>
            <span className={`
              flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
              ${openIndex === index 
                ? 'bg-sage-100 text-sage-600 rotate-180' 
                : 'bg-sand-100 text-clay-500 group-hover:bg-sand-200'
              }
            `}>
              <ChevronDown className="w-5 h-5" />
            </span>
          </button>
          
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-out
              ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-sand-100">
                <div 
                  className="pt-4 text-clay-600 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ 
                    __html: formatAnswer(item.answer) 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function formatAnswer(answer: string): string {
  let html = answer
    // Bold text **text**
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-clay-700 font-semibold">$1</strong>')
    // Italic *text*
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Tips with emoji
    .replace(/💡([^<]+)/g, '<span class="inline-block mt-3 p-3 bg-terracotta-50 rounded-lg text-terracotta-700 text-sm"><span class="mr-2">💡</span>$1</span>')
  
  return html
}
