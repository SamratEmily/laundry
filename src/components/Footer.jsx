import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { useLang } from '../context/LanguageContext'
import translations from '../i18n/translations'
import logoIcon from '../assets/app-icon-logo.png'
import heroBanner from '../assets/hero_banner.png'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer id="contact" className="bg-[#0a1e35] text-white">
      {/* CTA Banner */}
      <div className="relative py-10 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/30 to-[#a8882e]/50" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-1 drop-shadow">
              {t.ctaTitle}
            </h3>
            <p className="text-white/80 text-base">
              {t.ctaSub}
            </p>
          </div>
          <WhatsAppButton
            isGeneral
            label={t.ctaBtn}
            size="lg"
            className="shrink-0 bg-white! text-[#1a3a5c]! border-0! hover:bg-white/90!"
          />
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="Easy Laundry" className="w-10 h-10 rounded-xl shadow-md object-contain" />
              <div>
                <div className="font-extrabold text-xl text-white leading-tight">Easy Laundry</div>
                <div className="text-[#c9a84c] text-[10px] font-semibold tracking-widest uppercase">Makkah</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              {t.tagline}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
                { icon: Instagram, label: 'Instagram', color: '#e1306c' },
                { icon: Facebook, label: 'Facebook', color: '#1877f2' },
              ].map(({ icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.12 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center no-underline transition-all"
                  style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Icon size={16} style={{ color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4 text-[#c9a84c]">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {t.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-[#c9a84c] text-sm transition-colors no-underline flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4 text-[#c9a84c]">
              {t.ourServices}
            </h4>
            <ul className="space-y-2.5">
              {t.services.map((s) => (
                <li key={s} className="text-white/55 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4 text-[#c9a84c]">
              {t.contactUs}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">{t.whatsappLabel}</div>
                  <a
                    href="https://wa.me/966559637429"
                    className="text-white text-sm font-semibold no-underline hover:text-[#c9a84c] transition-colors"
                  >
                    +966 55 963 7429
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">{t.locationLabel}</div>
                  <span className="text-white text-sm font-medium">{t.locationValue}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-white/60" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">{t.hoursLabel}</div>
                  <span className="text-[#25D366] text-sm font-bold">{t.hoursValue}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-white/60" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">{t.emailLabel}</div>
                  <span className="text-white text-sm font-medium">info@easylaundry-makkah.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} Easy Laundry Makkah.{' '}
            {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] text-sm font-semibold">{t.serviceActive}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
