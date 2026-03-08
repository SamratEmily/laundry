import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '8801763257219'
const OWNER_NAME = 'Ripon'

function buildWhatsAppMessage({ packageName, serviceType, isGeneral }) {
  if (isGeneral || (!packageName && !serviceType)) {
    return `Hi ${OWNER_NAME}, I need help with a laundry pickup in Makkah.`
  }
  if (packageName) {
    return `Hi ${OWNER_NAME}, I want to book the ${packageName} Laundry Package. Please help me with the process.`
  }
  if (serviceType) {
    return `Hi ${OWNER_NAME}, I'm interested in your ${serviceType} service. Please help me with the process.`
  }
  return `Hi ${OWNER_NAME}, I need help with a laundry pickup in Makkah.`
}

export default function WhatsAppButton({
  packageName,
  serviceType,
  isGeneral = false,
  label = 'WhatsApp Order Now',
  size = 'md',
  variant = 'filled',
  className = '',
}) {
  const message = buildWhatsAppMessage({ packageName, serviceType, isGeneral })
  const encodedMsg = encodeURIComponent(message)
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  }

  const variantClasses = {
    filled: 'bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white',
    gold: 'bg-gold-gradient text-white shadow-lg hover:shadow-xl hover:brightness-110',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center justify-center font-semibold rounded-full
        transition-all duration-200 cursor-pointer no-underline
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <MessageCircle size={size === 'lg' ? 22 : size === 'sm' ? 16 : 19} strokeWidth={2} />
      <span>{label}</span>
    </motion.a>
  )
}
