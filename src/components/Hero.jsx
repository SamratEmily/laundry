import { motion } from 'framer-motion'
import { Clock, ArrowDown } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'
import heroBg from '../assets/hero-banner-2.jpeg'
import fastPickupIcon from '../assets/fast-pickup.png'
import ihramCareIcon from '../assets/ihram-care.png'
import hotelDeliveryIcon from '../assets/hotel-delivery.png'
import available247Icon from '../assets/24-7-available-icon.png'
import whatsappOrderIcon from '../assets/whatsapp-order-icon.png'

const SERVICE_ICONS = [fastPickupIcon, ihramCareIcon, hotelDeliveryIcon, available247Icon, whatsappOrderIcon]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0f2540]/35" />
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#2d5a8e]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#e2c276] px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse inline-block" />
          {t.badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
        >
          {t.h1Line1}
          <br />
          <span className="text-gradient-gold">{t.h1Line2}</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/75 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          {t.sub}{' '}
          <span className="text-[#e2c276] font-semibold">{t.subHighlight}</span>
          {t.subSuffix}
        </motion.p>

        {/* 15-min guarantee callout */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#4ade80] px-5 py-2.5 rounded-full text-base font-bold mb-10"
        >
          <Clock size={18} className="text-[#4ade80]" />
          {t.guarantee}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <WhatsAppButton
            isGeneral
            label={t.btnOrder}
            size="lg"
            className="w-full sm:w-auto whatsapp-glow"
          />
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:border-[#c9a84c] hover:text-[#e2c276] transition-all duration-200 no-underline w-full sm:w-auto"
          >
            {t.btnPricing}
          </motion.a>
        </motion.div>

        {/* Service icons strip */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
        >
          {SERVICE_ICONS.map((icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white backdrop-blur-md border border-white/25 flex items-center justify-center p-2"
            >
              <img src={icon} alt="" className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a href="#services" className="flex flex-col items-center gap-2 text-white hover:text-white transition-colors no-underline group">
            <span className="text-xs font-medium tracking-widest uppercase">{t.explore}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-3 divide-x divide-white/10">
          {t.stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center px-4">
              <span className="text-[#e2c276] text-2xl sm:text-3xl font-extrabold">{value}</span>
              <span className="text-white/60 text-xs sm:text-sm mt-1 font-medium text-center">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
