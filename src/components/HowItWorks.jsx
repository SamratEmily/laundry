import { motion } from 'framer-motion'
import { MessageCircle, Truck, Sparkles, ArrowRight } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const STEPS = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'WhatsApp Us',
    titleArabic: 'تواصل معنا',
    description:
      'Send us a quick WhatsApp message with your hotel name, room number, and bag count. We confirm in under 2 minutes.',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.1)',
    detail: 'Available 24 hours, 7 days a week',
  },
  {
    step: '02',
    icon: Truck,
    title: 'We Pickup',
    titleArabic: 'نستلم غسيلك',
    description:
      'Our friendly team arrives at your hotel within 15 minutes. We weigh your laundry on-site and give you a receipt.',
    color: '#c9a84c',
    bg: 'rgba(201,168,76,0.1)',
    detail: 'Guaranteed 15-minute arrival',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Fresh Delivery',
    titleArabic: 'توصيل نظيف',
    description:
      'Your clothes come back clean, fresh, neatly folded, and packaged — delivered right to your hotel room door.',
    color: '#1a3a5c',
    bg: 'rgba(26,58,92,0.1)',
    detail: 'Same-day or next-day delivery',
  },
]

export default function HowItWorks() {
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
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2540] mb-4">
            How It{' '}
            <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Three effortless steps to clean laundry — so you can focus on your pilgrimage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-100 z-0 mx-32" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
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
                      style={{ backgroundColor: step.bg, border: `2px solid ${step.color}30` }}
                    >
                      <Icon size={32} style={{ color: step.color }} />
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-extrabold flex items-center justify-center shadow-md"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                    {/* Arrow between steps (desktop) */}
                    {i < STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-[calc(50%+2.5rem)] -translate-y-1/2 text-gray-300">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </motion.div>

                  {/* Step number text */}
                  <span className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: step.color }}>
                    Step {step.step}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2540] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mb-3" dir="rtl">{step.titleArabic}</p>

                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4 max-w-xs">
                    {step.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: step.bg, color: step.color }}
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
              Ready to start? It takes under 2 minutes.
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              No app downloads. No accounts. Just WhatsApp and we handle the rest.
            </p>
          </div>
          <WhatsAppButton isGeneral label="Start My Order" size="lg" className="shrink-0" />
        </motion.div>
      </div>
    </section>
  )
}
