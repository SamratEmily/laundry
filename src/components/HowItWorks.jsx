import { motion } from 'framer-motion'
import { MessageCircle, Truck, Sparkles, ArrowRight } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'

const STEP_ICONS = [MessageCircle, Truck, Sparkles]
const STEP_COLORS = [
  { color: '#25D366', bg: 'rgba(37,211,102,0.1)' },
  { color: '#c9a84c', bg: 'rgba(201,168,76,0.1)' },
  { color: '#1a3a5c', bg: 'rgba(26,58,92,0.1)' },
]

export default function HowItWorks() {
  const { lang } = useLang()
  const t = translations[lang].howItWorks

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a3a5c]/10 text-[#1a3a5c] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={14} />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2540] mb-4">
            {t.h2.includes('Works') ? (
              <>
                How It{' '}
                <span className="text-gradient-gold">Works</span>
              </>
            ) : (
              <span className="text-gradient-gold">{t.h2}</span>
            )}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t.sub}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-100 z-0 mx-32" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {t.steps.map((step, i) => {
              const Icon = STEP_ICONS[i]
              const { color, bg } = STEP_COLORS[i]
              const stepNum = String(i + 1).padStart(2, '0')
              return (
                <motion.div
                  key={stepNum}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.55, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="relative mb-6"
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: bg, border: `2px solid ${color}30` }}
                    >
                      <Icon size={32} style={{ color }} />
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-extrabold flex items-center justify-center shadow-md"
                      style={{ backgroundColor: color }}
                    >
                      {i + 1}
                    </div>
                    {/* Arrow between steps (desktop) */}
                    {i < t.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-[calc(50%+2.5rem)] -translate-y-1/2 text-gray-300">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </motion.div>

                  {/* Step number text */}
                  <span className="text-xs font-black tracking-widest uppercase mb-2" style={{ color }}>
                    {t.stepLabel} {stepNum}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2540] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4 max-w-xs">
                    {step.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: bg, color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {step.detail}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-16 rounded-3xl bg-[#f8f9fb] border border-gray-100 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2540] mb-1">
              {t.bannerTitle}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              {t.bannerSub}
            </p>
          </div>
          <WhatsAppButton isGeneral label={t.bannerBtn} size="lg" className="shrink-0" />
        </motion.div>
      </div>
    </section>
  )
}
