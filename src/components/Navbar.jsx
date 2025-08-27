import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, Home, Briefcase, Users, FolderOpen } from 'lucide-react'
import Button from './Button'
import Icon from './Icon'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Nos Services', path: '/services', icon: Briefcase },
    { name: 'À Propos', path: '/about', icon: Users },
    { name: 'Projets', path: '/projects', icon: FolderOpen },
  ]

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const menuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  }

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/images/Plan de travail 45.svg" 
              alt="Udigit Logo" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-udigit-orange'
                      : 'text-gray-700 hover:text-udigit-orange'
                  }`}
                >
                  {item.name}
                </Link>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-udigit-orange"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
                         <a
               href="https://wa.me/22671784721?text=Bonjour%20!%20Je%20suis%20intéressé%20par%20vos%20services%20digitaux."
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-udigit-blue to-cyan-500 text-white font-semibold rounded-lg hover:from-udigit-blue/90 hover:to-cyan-500/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-0"
             >
               <MessageCircle className="w-5 h-5 mr-2" />
               Contact
             </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-white/80 backdrop-blur-sm border border-gray-200"
            icon={isOpen ? X : Menu}
            iconPosition="right"
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 text-lg font-medium transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-udigit-orange'
                          : 'text-gray-700 hover:text-udigit-orange'
                      }`}
                    >
                      <Icon icon={item.icon} size="sm" color={location.pathname === item.path ? 'secondary' : 'gray'} />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
                >
                                     <a
                     href="https://wa.me/22671784721?text=Bonjour%20!%20Je%20suis%20intéressé%20par%20vos%20services%20digitaux."
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={() => setIsOpen(false)}
                     className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-udigit-blue to-cyan-500 text-white font-semibold rounded-lg hover:from-udigit-blue/90 hover:to-cyan-500/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-0"
                   >
                     <MessageCircle className="w-5 h-5 mr-2" />
                     Contact
                   </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
