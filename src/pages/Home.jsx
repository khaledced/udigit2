import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Smartphone, 
  Monitor, 
  Palette, 
  ArrowRight, 
  Users, 
  Award, 
  Clock, 
  Star,
  MessageCircle,
  ChevronUp,
  FolderOpen,
  Heart,
  Calendar,
  Headphones
} from 'lucide-react'
import Button from '../components/Button'
import Icon from '../components/Icon'

const Home = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      title: "Marketing Digital & Gestion de réseaux sociaux",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#F18440"
    },
    {
      title: "Développement Web & maintenance informatique",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#2A4B9B"
    },
    {
      title: "Branding & Communication visuelle",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#F18440"
    }
  ]

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-20 relative overflow-hidden"
    >
             {/* Hero Section - Modern Design */}
       <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-8 sm:py-12 md:py-16 lg:py-20">
         {/* Video Background */}
         <div className="absolute inset-0 z-0">
                       <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60"
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
              <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            {/* Overlay pour assurer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black/40"></div>
         </div>

                   {/* Geometric Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-udigit-orange opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-udigit-blue opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-udigit-orange opacity-10 rounded-full blur-2xl"></div>
          </div>

         {/* Grid Pattern */}
         <div className="absolute inset-0 z-0 opacity-30">
           <div className="w-full h-full" style={{
             backgroundImage: `linear-gradient(rgba(241, 132, 64, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 132, 64, 0.15) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}></div>
         </div>

                   {/* Mouse Follow Effect */}
          <motion.div
            className="fixed w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-udigit-orange rounded-full pointer-events-none z-10 opacity-20"
            animate={{
              x: mousePosition.x - (window.innerWidth < 640 ? 64 : window.innerWidth < 768 ? 96 : 128),
              y: mousePosition.y - (window.innerWidth < 640 ? 64 : window.innerWidth < 768 ? 96 : 128),
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            style={{
              filter: 'blur(20px)',
              transform: 'translate(-50%, -50%)'
            }}
          />

         <div className="container-custom section-padding relative z-20">
           <div className="text-center max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto">
                           <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-[1.1] sm:leading-[1.05] md:leading-[1] lg:leading-[0.95] xl:leading-[0.9] tracking-tight px-2 sm:px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <div className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
                    <span className="text-udigit-orange">Nous créons des</span>
                  </div>
                  <div className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
                    <span className="text-white">designs ambassadeurs</span>
                  </div>
                  <div className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
                    <span className="text-white">de </span>
                    <span className="text-udigit-blue">votre marque</span>
                  </div>
                </motion.h1>
              </motion.div>
             
                           <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light px-2 sm:px-4"
              >
                Udigit est une agence créative au Burkina Faso qui allie marketing digital, design, contenu et solutions web pour donner vie à vos projets.
              </motion.p>
             
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.6, duration: 1 }}
               className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center px-2 sm:px-4"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 whileTap={{ scale: 0.95 }}
               >
                                   <Link to="/projects" className="inline-block bg-udigit-orange text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 font-bold rounded-full border-2 border-udigit-orange hover:bg-transparent hover:text-udigit-orange transition-all duration-300">
                   Voir nos projets
                 </Link>
               </motion.div>
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 whileTap={{ scale: 0.95 }}
               >
                                   <Link to="/services" className="inline-block bg-transparent text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 font-bold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                   Nos services
                 </Link>
               </motion.div>
             </motion.div>
           </div>
         </div>

         {/* Scroll Indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
         >
           <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-8 h-12 border-2 border-white flex justify-center"
           >
             <motion.div
               animate={{ y: [0, 16, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-1 h-4 bg-white mt-2"
             />
           </motion.div>
         </motion.div>
       </section>

                                                                                       {/* Services Section - Liquid Glass Design */}
          <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 relative overflow-hidden">
            {/* Liquid Glass Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-cyan-200/40 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-200/40 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-cyan-100/30 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-8 py-3 mb-8 shadow-lg"
                >
                  <span className="text-gray-700 font-medium text-sm tracking-wider uppercase">Nos Expertises</span>
                </motion.div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-800 mb-6 sm:mb-8 leading-tight px-2 sm:px-4">
                  <span className="bg-gradient-to-r from-udigit-orange via-udigit-blue to-cyan-600 bg-clip-text text-transparent">
                    Solutions Digitales
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed px-2 sm:px-4">
                  Nous créons des expériences digitales exceptionnelles qui 
                  <span className="font-semibold text-gray-800"> transforment votre vision en succès</span>
                </p>
              </motion.div>

              {/* Services Grid - Liquid Glass Cards */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.4 }
                    }}
                    className="group relative"
                  >
                    {/* Liquid Glass Card Design */}
                    <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/70 overflow-hidden transform transition-all duration-500 hover:bg-white/80 hover:border-white/90 hover:shadow-2xl shadow-xl">
                      
                      {/* Top Section with Image */}
                      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        
                        {/* Floating Icon - Liquid Glass */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/60 group-hover:bg-white/90 transition-all duration-300 shadow-lg">
                            <Icon icon={service.icon} size="lg" color="primary" animated />
                          </div>
                        </div>
                        
                        {/* Service Badge - Liquid Glass */}
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-lg">
                            <span className="text-gray-700 text-xs font-medium">Service {index + 1}</span>
                          </div>
                        </div>
                      </div>
                      
                                             {/* Content Section */}
                       <div className="p-4 sm:p-6">
                         <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-udigit-orange transition-colors duration-300">
                           {service.title}
                         </h3>
                         
                                                   {/* Liquid Glass CTA Button */}
                          <Link 
                            to="/services"
                            className={`inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                              index === 0 
                                ? 'bg-udigit-orange text-white hover:bg-udigit-orange/90 border-2 border-udigit-orange' 
                                : index === 1 
                                ? 'bg-transparent text-udigit-blue hover:bg-udigit-blue hover:text-white border-2 border-udigit-blue' 
                                : 'bg-udigit-orange text-white hover:bg-udigit-orange/90 border-2 border-udigit-orange'
                            }`}
                          >
                            Explorer
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                       </div>
                      
                      {/* Bottom Accent - Liquid Glass */}
                      <div 
                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-40"
                        style={{ color: service.color }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

                           {/* Stats Section - Liquid Glass Design */}
        <section className="section-padding bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 relative overflow-hidden">
          {/* Liquid Glass Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 lg:gap-16 text-center px-2 sm:px-4">
                            {[
                 { number: "50+", label: "Projets Réalisés", color: "#F18440" },
                 { number: "98%", label: "Clients Satisfaits", color: "#2A4B9B" },
                 { number: "4+", label: "Années d'Expérience", color: "#F18440" },
                 { number: "24/7", label: "Support Client", color: "#2A4B9B" }
               ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  {/* Liquid Glass Stat Card */}
                  <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/70 p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/80">
                                         <div 
                       className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/60 flex items-center justify-center shadow-lg"
                       style={{ 
                         borderColor: stat.color,
                       }}
                     >
                       {index === 0 ? (
                         <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                           <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
                           </svg>
                         </div>
                       ) : index === 1 ? (
                         <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                           <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                           </svg>
                         </div>
                       ) : index === 2 ? (
                         <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                           <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                           </svg>
                         </div>
                       ) : (
                         <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                           <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                           </svg>
                         </div>
                       )}
                     </div>
                    
                    <motion.div 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 sm:mb-3 md:mb-4"
                      style={{ color: stat.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

                           {/* CTA Section - Liquid Glass Design */}
        <section className="section-padding bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/50 relative overflow-hidden">
          {/* Liquid Glass Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container-custom text-center relative z-10"
          >
            {/* Liquid Glass CTA Card */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/70 p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                <span className="text-udigit-orange">Prêt à transformer</span>
                <br />
                <span className="text-gray-800">votre vision</span>
                <br />
                <span className="text-udigit-blue">en réalité ?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-3xl sm:max-w-4xl mx-auto font-light px-2 sm:px-4">
                Discutons de votre projet et découvrons comment nous pouvons 
                vous aider à atteindre vos objectifs.
              </p>
                             <a
                 href="https://wa.me/22671784721?text=Bonjour%20!%20Je%20souhaite%20démarrer%20mon%20projet%20avec%20votre%20agence%20Udigit."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-udigit-orange hover:bg-udigit-orange/90 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
               >
                 <MessageCircle className="mr-3 w-6 h-6" />
                 Démarrer votre projet
               </a>
            </div>
          </motion.div>
        </section>
    </motion.div>
  )
}

export default Home
