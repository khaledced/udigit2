import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowRight,
  Heart
} from 'lucide-react'
import Icon from './Icon'

// Import du logo
import logoImg from '/images/udi.png'

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
      { name: 'Blog', href: '/blog' },
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
                 src={logoImg} 
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
                href="https://www.facebook.com/share/15cjh47N3q/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
              >
                <Icon icon={Facebook} size="sm" color="white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/udigit__?igsh=MXhqcXNqeDkxdTUxZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
              >
                <Icon icon={Instagram} size="sm" color="white" />
              </motion.a>
                             <motion.a
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 href="https://www.tiktok.com/@udigit_?_t=ZM-8zCAGyKJyWk&_r=1"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
               >
                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                 </svg>
               </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/company/udigit1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-udigit-orange transition-colors"
              >
                <Icon icon={Linkedin} size="sm" color="white" />
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
                <Icon icon={MapPin} size="sm" color="secondary" />
                <span className="text-gray-400">Ouagadougou, Burkina Faso</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon={Mail} size="sm" color="secondary" />
                <a
                  href="mailto:udigit.services@gmail.com"
                  className="text-gray-400 hover:text-udigit-orange transition-colors"
                >
                  udigit.services@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon={Phone} size="sm" color="secondary" />
                <a
                  href="tel:+22671784721"
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
                <Icon icon={ArrowRight} size="sm" color="white" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
