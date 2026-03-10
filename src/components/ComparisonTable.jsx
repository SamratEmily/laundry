import { motion } from 'framer-motion'
import { Check, X, Trophy } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'
import serviceBanner from '../assets/24_7_service.png'

const COMPARISON_VALUES = [
  { us: true, others: false },
  { us: true, others: false },
  { us: true, others: false },
  { us: true, others: false },
  { us: true, others: false },
  { us: true, others: 'Partial' },
  { us: true, others: 'Partial' },
  { us: true, others: false },
  { us: false, others: false },
  { us: true, others: false },
  { us: true, others: 'Partial' },
  { us: true, others: false },
]

function CellIcon({ value }) {
  if (value === true) {
    return (
      <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center mx-auto">
        <Check size={14} className="text-green-600" strokeWidth={3} />
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center mx-auto">
        <X size={14} className="text-red-400" strokeWidth={3} />
      </div>
    )
  }
  return (
    <span className="text-amber-500 text-sm font-semibold">{value}</span>
  )
}

export default function ComparisonTable() {
  const { lang } = useLang()
  const t = translations[lang].comparison

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8f9fb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/15 text-[#a8882e] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Trophy size={14} />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2540] mb-4">
            {t.h2Part1}{' '}
            <span className="text-gradient-gold">{t.h2Highlight}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t.sub}
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-white rounded-3xl overflow-hidden card-shadow-lg border border-gray-100"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_140px_140px] bg-[#0f2540] text-white">
            <div className="px-5 py-4 font-semibold text-white/70 text-sm">{t.colFeature}</div>
            <div className="px-3 py-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center">
                  <Trophy size={14} className="text-white" />
                </div>
                <span className="font-extrabold text-[#e2c276] text-sm sm:text-base">Easy Laundry</span>
              </div>
            </div>
            <div className="px-3 py-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/50 text-sm">?</span>
                </div>
                <span className="font-bold text-white/50 text-sm sm:text-base">{t.colOthers}</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {t.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className={`grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_140px_140px] items-center border-b border-gray-50 last:border-0 ${
                i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
              }`}
            >
              <div className="px-5 py-3.5 text-sm font-medium text-gray-700">{feature}</div>
              <div className="px-3 py-3.5 text-center">
                <CellIcon value={COMPARISON_VALUES[i].us} />
              </div>
              <div className="px-3 py-3.5 text-center">
                <CellIcon value={COMPARISON_VALUES[i].others} />
              </div>
            </motion.div>
          ))}

          {/* Footer CTA */}
          <div className="p-6 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${serviceBanner})` }}
            />
            <div className="absolute inset-0 bg-[#0f2540]/75" />
            <div className="relative z-10">
              <p className="text-white/80 text-sm mb-4">
                {t.ctaSub}
              </p>
              <WhatsAppButton isGeneral label={t.ctaBtn} size="md" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
