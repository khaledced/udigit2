import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const footerLinks = {
    services: [
      { name: 'Design Web', href: '/services' },
      { name: 'Développement', href: '/services' },
      { name: 'Branding', href: '/services' },
      { name: 'Marketing Digital', href: '/services' }
    ],
    company: [
      { name: 'À Propos', href: '/about' },
      { name: 'Projets', href: '/projects' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Mentions légales', href: '/legal' },
      { name: 'Politique de confidentialité', href: '/privacy' },
      { name: 'CGV', href: '/terms' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
                         <div className="flex items-center space-x-3 mb-6">
               <img 
                 src="/images/udi.png" 
                 alt="Udigit Logo" 
                 className="w-16 h-16 object-contain scale-150"
               />
               <span className="text-2xl font-bold">udigit</span>
             </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Agence créative spécialisée dans le design web, le développement 
              et le branding. Nous créons des expériences digitales qui marquent les esprits.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
              >
                <span className="text-lg">📘</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
              >
                <span className="text-lg">🐦</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
              >
                <span className="text-lg">📷</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
              >
                <span className="text-lg">💼</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-udigit-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-udigit-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-udigit-orange">📍</span>
                <span className="text-gray-400">Ouagadougou, Burkina Faso</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-udigit-orange">📧</span>
                <a
                  href="mailto:contact@udigit.fr"
                  className="text-gray-400 hover:text-udigit-orange transition-colors"
                >
                  udigit.services@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-udigit-orange">📞</span>
                <a
                  href="tel:+33123456789"
                  className="text-gray-400 hover:text-udigit-orange transition-colors"
                >
                  +226 71 78 47 21
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Udigit. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-udigit-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-udigit-orange rounded-full flex items-center justify-center hover:bg-udigit-orange/90 transition-colors shadow-lg"
                title="Remonter en haut"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
