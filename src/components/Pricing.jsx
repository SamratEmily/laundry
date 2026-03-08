import { motion } from 'framer-motion'
import { Check, Zap, Crown, Sparkles, ShirtIcon, Star } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const PACKAGES = [
  {
    id: 'basic',
    name: 'Basic',
    packageName: 'Basic',
    tagline: 'Great value for everyday clothes',
    price: 12,
    unit: 'SAR/kg',
    icon: ShirtIcon,
    color: '#2d5a8e',
    bgColor: '#eef4ff',
    popular: false,
    features: [
      'Wash & Fold',
      'Regular detergent',
      '24-hour turnaround',
      'Free pickup',
      'Hotel delivery',
    ],
    notIncluded: ['Premium detergent', 'Express service'],
  },
  {
    id: 'premium',
    name: 'Premium',
    packageName: 'Premium',
    tagline: 'Best seller — most pilgrims choose this',
    price: 18,
    unit: 'SAR/kg',
    icon: Star,
    color: '#c9a84c',
    bgColor: '#fffbf0',
    popular: true,
    features: [
      'Wash, Dry & Fold',
      'Premium detergent',
      '18-hour turnaround',
      'Free pickup & delivery',
      'Fabric softener included',
      'Individual item bagging',
    ],
    notIncluded: [],
  },
  {
    id: 'vip',
    name: 'VIP',
    packageName: 'VIP',
    tagline: 'White-glove treatment for your finest garments',
    price: 25,
    unit: 'SAR/kg',
    icon: Crown,
    color: '#0f2540',
    bgColor: '#f0f4ff',
    popular: false,
    features: [
      'Wash, Dry, Iron & Fold',
      'Luxury detergent',
      '12-hour express turnaround',
      'Priority pickup (15 min)',
      'Fabric softener & perfume',
      'Individual garment care',
      'Stain treatment included',
      'Branded packaging',
    ],
    notIncluded: [],
  },
]

const SPECIAL_ITEMS = [
  { name: 'Ihram (Top + Bottom)', price: '14 SAR/piece', icon: '🕌', desc: 'Gentle hand-wash + fold' },
  { name: 'Formal Wear / Thoub', price: '18 SAR/kg', icon: '👔', desc: 'Washed, pressed & hung' },
  { name: 'Abaya / Jalabiya', price: '20 SAR/piece', icon: '👗', desc: 'Delicate care cycle' },
  { name: 'Bed Sheets / Linen', price: '15 SAR/kg', icon: '🛏️', desc: 'Hygienic hot wash' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/15 text-[#a8882e] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={14} />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2540] mb-4">
            Simple, Honest{' '}
            <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Just clean clothes at fair prices.
          </p>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PACKAGES.map((pkg, i) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={pkg.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-3xl p-7 flex flex-col ${
                  pkg.popular
                    ? 'bg-primary-gradient text-white shadow-2xl shadow-[#1a3a5c]/30 scale-[1.03] z-10'
                    : 'bg-white border border-gray-100 card-shadow'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-gradient text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                    style={{
                      backgroundColor: pkg.popular ? 'rgba(201,168,76,0.25)' : pkg.bgColor,
                    }}
                  >
                    <Icon size={20} style={{ color: pkg.popular ? '#e2c276' : pkg.color }} />
                  </div>
                  <div>
                    <h3
                      className={`font-extrabold text-xl ${
                        pkg.popular ? 'text-white' : 'text-[#0f2540]'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs font-medium ${
                        pkg.popular ? 'text-white/60' : 'text-gray-400'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-5xl font-black ${
                        pkg.popular ? 'text-[#e2c276]' : 'text-[#0f2540]'
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-base font-semibold mb-2 ${
                        pkg.popular ? 'text-white/60' : 'text-gray-400'
                      }`}
                    >
                      {pkg.unit}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-2.5 mb-7">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          pkg.popular ? 'bg-[#c9a84c]/30' : 'bg-green-100'
                        }`}
                      >
                        <Check
                          size={12}
                          strokeWidth={3}
                          className={pkg.popular ? 'text-[#e2c276]' : 'text-green-600'}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          pkg.popular ? 'text-white/85' : 'text-gray-600'
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  packageName={pkg.packageName}
                  label={`Book ${pkg.name}`}
                  size="md"
                  variant={pkg.popular ? 'filled' : 'outline'}
                  className={`w-full justify-center ${
                    !pkg.popular
                      ? 'border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white'
                      : ''
                  }`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Special items */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2540] mb-2">
              Special Item Pricing
            </h3>
            <p className="text-gray-500">Tailored rates for specific garments — common for Hajj &amp; Umrah pilgrims.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIAL_ITEMS.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                className="bg-[#f8f9fb] border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center card-shadow hover:border-[#c9a84c]/40 transition-all duration-200"
              >
                <span className="text-3xl mb-3">{item.icon}</span>
                <h4 className="font-bold text-[#0f2540] text-sm mb-1">{item.name}</h4>
                <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                <span className="bg-gold-gradient text-white text-sm font-extrabold px-3 py-1 rounded-full">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Zap size={14} className="text-[#c9a84c]" />
            <span>Minimum order: 3 kg. Prices include free hotel pickup & delivery within service zones.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
