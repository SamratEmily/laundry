import { motion } from 'framer-motion'
import { MapPin, Clock, Zap, CheckCircle2 } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const ZONES = [
  {
    name: 'Clock Tower / Abraj Al Bait',
    arabic: 'أبراج البيت',
    pickup: '15 min',
    delivery: '12-18 hrs',
    badge: 'Fastest',
    badgeColor: '#25D366',
    distance: 'Walking distance to Haram',
    icon: '🕌',
    popular: true,
  },
  {
    name: 'Jabal Omar',
    arabic: 'جبل عمر',
    pickup: '20 min',
    delivery: '12-18 hrs',
    badge: 'Popular',
    badgeColor: '#c9a84c',
    distance: '500m from Haram',
    icon: '🏨',
    popular: false,
  },
  {
    name: 'Aziziyah',
    arabic: 'العزيزية',
    pickup: '25 min',
    delivery: '18-24 hrs',
    badge: 'Covered',
    badgeColor: '#2d5a8e',
    distance: '3km from Haram',
    icon: '🏙️',
    popular: false,
  },
  {
    name: 'Shisha / Rusaifa',
    arabic: 'شيشة / رصيفة',
    pickup: '30 min',
    delivery: '18-24 hrs',
    badge: 'Covered',
    badgeColor: '#2d5a8e',
    distance: '5km from Haram',
    icon: '🌆',
    popular: false,
  },
  {
    name: 'Misfalah',
    arabic: 'المسفلة',
    pickup: '20 min',
    delivery: '12-18 hrs',
    badge: 'Fast',
    badgeColor: '#25D366',
    distance: '1km from Haram',
    icon: '🕋',
    popular: false,
  },
  {
    name: 'Ajyad / Hilton Area',
    arabic: 'أجياد',
    pickup: '15 min',
    delivery: '12-18 hrs',
    badge: 'Express',
    badgeColor: '#c9a84c',
    distance: 'Prime Haram zone',
    icon: '⭐',
    popular: false,
  },
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
            Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2540] mb-4">
            We Cover All of{' '}
            <span className="text-gradient-gold">Makkah's</span>
            {' '}Key Zones
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From the heart of the Haram to residential districts — we pick up fast and deliver fresh.
          </p>
        </motion.div>

        {/* Zone cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ZONES.map((zone) => (
            <motion.div
              key={zone.name}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-2xl p-6 card-shadow border transition-all duration-200 ${
                zone.popular
                  ? 'border-[#c9a84c]/50 ring-2 ring-[#c9a84c]/20'
                  : 'border-gray-100 hover:border-[#1a3a5c]/20'
              }`}
            >
              {zone.popular && (
                <div className="absolute -top-3 left-6 bg-gold-gradient text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  ⚡ Most Requested
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{zone.icon}</div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: zone.badgeColor }}
                >
                  {zone.badge}
                </span>
              </div>

              <h3 className="font-bold text-[#0f2540] text-lg leading-tight mb-0.5">{zone.name}</h3>
              <p className="text-gray-400 text-sm font-medium mb-3" dir="rtl">{zone.arabic}</p>

              <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                <MapPin size={13} className="text-[#c9a84c] shrink-0" />
                {zone.distance}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f8f9fb] rounded-xl p-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-[#25D366] mb-1">
                    <Zap size={13} />
                    <span className="text-xs font-semibold">Pickup</span>
                  </div>
                  <span className="text-[#0f2540] font-extrabold text-base">{zone.pickup}</span>
                </div>
                <div className="bg-[#f8f9fb] rounded-xl p-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-[#1a3a5c] mb-1">
                    <Clock size={13} />
                    <span className="text-xs font-semibold">Delivery</span>
                  </div>
                  <span className="text-[#0f2540] font-extrabold text-base">{zone.delivery}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-primary-gradient rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #2d5a8e 0%, transparent 50%)`
          }} />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 size={20} className="text-[#c9a84c]" />
              <span className="text-[#e2c276] font-semibold">Don't see your area?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">We Likely Cover Your Location!</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Message us on WhatsApp with your hotel name — we'll confirm pickup availability instantly.
            </p>
            <WhatsAppButton isGeneral label="Check My Location" size="md" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
