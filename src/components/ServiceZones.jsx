import { motion } from 'framer-motion'
import { MapPin, Clock, Zap, CheckCircle2 } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'
import serviceZoneMap from '../assets/service_zone.png'
import deliveryPickupBanner from '../assets/delivery_pickup.png'

const ZONE_META = [
  { pickup: '15 min', delivery: '12-18 hrs', badgeColor: '#25D366', icon: '🕌', popular: true },
  { pickup: '20 min', delivery: '12-18 hrs', badgeColor: '#c9a84c', icon: '🏨', popular: false },
  { pickup: '25 min', delivery: '18-24 hrs', badgeColor: '#2d5a8e', icon: '🏙️', popular: false },
  { pickup: '30 min', delivery: '18-24 hrs', badgeColor: '#2d5a8e', icon: '🌆', popular: false },
  { pickup: '20 min', delivery: '12-18 hrs', badgeColor: '#25D366', icon: '🕋', popular: false },
  { pickup: '15 min', delivery: '12-18 hrs', badgeColor: '#c9a84c', icon: '⭐', popular: false },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServiceZones() {
  const { lang } = useLang()
  const t = translations[lang].serviceZones

  return (
    <section id="coverage" className="py-20 lg:py-28 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a3a5c]/10 text-[#1a3a5c] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <MapPin size={14} />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2540] mb-4">
            {t.h2Part1}{' '}
            <span className="text-gradient-gold">{t.h2Highlight}</span>
            {' '}{t.h2Part2}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t.sub}
          </p>
        </motion.div>

        {/* Service zone map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-xl"
        >
          <img src={serviceZoneMap} alt="Makkah Service Coverage Map" className="w-full h-50 object-cover" />
        </motion.div>

        {/* Zone cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {t.zones.map((zone, i) => {
            const meta = ZONE_META[i]
            return (
              <motion.div
                key={zone.name}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative bg-white rounded-2xl p-6 card-shadow border transition-all duration-200 ${
                  meta.popular
                    ? 'border-[#c9a84c]/50 ring-2 ring-[#c9a84c]/20'
                    : 'border-gray-100 hover:border-[#1a3a5c]/20'
                }`}
              >
                {meta.popular && (
                  <div className="absolute -top-3 left-6 bg-gold-gradient text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {t.mostRequested}
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{meta.icon}</div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: meta.badgeColor }}
                  >
                    {zone.badge}
                  </span>
                </div>

                <h3 className="font-bold text-[#0f2540] text-lg leading-tight mb-3">{zone.name}</h3>

                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                  <MapPin size={13} className="text-[#c9a84c] shrink-0" />
                  {zone.distance}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#f8f9fb] rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-[#25D366] mb-1">
                      <Zap size={13} />
                      <span className="text-xs font-semibold">{t.pickup}</span>
                    </div>
                    <span className="text-[#0f2540] font-extrabold text-base">{meta.pickup}</span>
                  </div>
                  <div className="bg-[#f8f9fb] rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-[#1a3a5c] mb-1">
                      <Clock size={13} />
                      <span className="text-xs font-semibold">{t.delivery}</span>
                    </div>
                    <span className="text-[#0f2540] font-extrabold text-base">{meta.delivery}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${deliveryPickupBanner})` }}
          />
          <div className="absolute inset-0 bg-[#0f2540]/75" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 size={20} className="text-[#c9a84c]" />
              <span className="text-[#e2c276] font-semibold">{t.ctaBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">{t.ctaTitle}</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              {t.ctaSub}
            </p>
            <WhatsAppButton isGeneral label={t.ctaBtn} size="md" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
