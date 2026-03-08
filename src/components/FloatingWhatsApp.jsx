import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '8801763257219'
const OWNER_NAME = 'Ripon'

const QUICK_MESSAGES = [
  { label: 'Basic Package', msg: `Hi ${OWNER_NAME}, I want to book the Basic Laundry Package. Please help me with the process.` },
  { label: 'Premium Package', msg: `Hi ${OWNER_NAME}, I want to book the Premium Laundry Package. Please help me with the process.` },
  { label: 'VIP Package', msg: `Hi ${OWNER_NAME}, I want to book the VIP Laundry Package. Please help me with the process.` },
  { label: 'General Inquiry', msg: `Hi ${OWNER_NAME}, I need help with a laundry pickup in Makkah.` },
]

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[260px] sm:w-[290px]"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white font-bold text-sm">Easy Laundry</div>
                <div className="text-white/80 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
                  Online · Replies instantly
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-[#e5ddd5]">
              <div className="bg-white rounded-lg rounded-tl-none px-3.5 py-2.5 shadow-sm max-w-[85%]">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Hi! 👋 I'm Ripon from <strong>Easy Laundry Makkah</strong>.<br />
                  How can I help you today?
                </p>
                <span className="text-gray-400 text-[10px] float-right mt-1">Just now</span>
              </div>
            </div>

            {/* Quick replies */}
            <div className="p-3 bg-white border-t border-gray-50 flex flex-col gap-2">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Quick Order</p>
              {QUICK_MESSAGES.map(({ label, msg }) => (
                <a
                  key={label}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#25D366] font-medium border border-[#25D366]/30 rounded-lg px-3 py-2 hover:bg-[#25D366]/10 transition-colors no-underline"
                >
                  <MessageCircle size={13} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center text-white whatsapp-glow relative"
        aria-label="Open WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <MessageCircle size={26} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Notification dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white text-white text-[8px] font-bold flex items-center justify-center">
            1
          </span>
        )}
      </motion.button>
    </div>
  )
}
