import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const Icon = ({ 
  icon: IconComponent, 
  size = 'md', 
  color = 'current', 
  className = '', 
  animated = false,
  ...props 
}) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-12 h-12'
  }
  
  const colors = {
    current: 'text-current',
    primary: 'text-udigit-blue',
    secondary: 'text-udigit-orange',
    success: 'text-green-500',
    danger: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
    white: 'text-white',
    gray: 'text-gray-500',
    dark: 'text-gray-800'
  }

  const IconWrapper = animated ? motion.div : 'div'

  return (
    <IconWrapper
      className={clsx(
        sizes[size],
        colors[color],
        'transition-colors duration-200',
        className
      )}
      {...(animated && {
        whileHover: { scale: 1.1, rotate: 5 },
        whileTap: { scale: 0.9 }
      })}
      {...props}
    >
      <IconComponent className="w-full h-full" />
    </IconWrapper>
  )
}

export default Icon
