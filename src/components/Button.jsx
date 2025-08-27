import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-udigit-blue to-cyan-600 text-white hover:from-udigit-blue/90 hover:to-cyan-600/90 focus:ring-udigit-blue/50 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/90 backdrop-blur-xl text-gray-800 border border-white/60 hover:bg-white hover:border-white/90 focus:ring-gray-300/50 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-udigit-orange text-udigit-orange hover:bg-udigit-orange hover:text-white focus:ring-udigit-orange/50',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300/50',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-500/50 shadow-lg hover:shadow-xl',
    success: 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:ring-green-500/50 shadow-lg hover:shadow-xl'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-6 text-xl'
  }
  
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }
  
  const iconSpacing = {
    sm: 'space-x-2',
    md: 'space-x-3',
    lg: 'space-x-4',
    xl: 'space-x-4'
  }

  return (
    <motion.button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        iconSpacing[size],
        className
      )}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {loading && (
        <motion.div
          className={clsx('animate-spin rounded-full border-2 border-current border-t-transparent', iconSizes[size])}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {!loading && Icon && iconPosition === 'left' && (
        <Icon className={iconSizes[size]} />
      )}
      
      <span>{children}</span>
      
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={iconSizes[size]} />
      )}
    </motion.button>
  )
}

export default Button
