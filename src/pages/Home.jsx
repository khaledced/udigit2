import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
      description: "Créons des expériences digitales qui marquent les esprits et convertissent vos visiteurs.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#F18440",
      features: ["Gestion réseaux sociaux", "Création de contenu vidéo", "Stratégie marketing", "Analyse de performance"]
    },
    {
      title: "Développement Web & maintenance informatique",
      description: "Sites web performants et applications modernes avec les dernières technologies.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#2A4B9B",
      features: ["Sites web modernes", "Applications web", "Maintenance système", "Support technique"]
    },
    {
      title: "Branding & Communication visuelle",
      description: "Donnez vie à votre marque avec une identité visuelle cohérente et mémorable.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#F18440",
      features: ["Identité de marque", "Supports de communication", "Impression", "Design graphique"]
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
       <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
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
           <div className="absolute top-0 left-0 w-96 h-96 bg-udigit-orange opacity-20 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-udigit-blue opacity-20 rounded-full blur-3xl"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-udigit-orange opacity-10 rounded-full blur-2xl"></div>
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
            className="fixed w-64 h-64 bg-udigit-orange rounded-full pointer-events-none z-10 opacity-20"
            animate={{
              x: mousePosition.x - 128,
              y: mousePosition.y - 128,
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
                className="mb-20"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-[0.9] sm:leading-[0.85] tracking-tight px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <span className="text-udigit-orange">Nous créons</span>
                  </div>
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <span className="text-white">des designs</span>
                  </div>
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <span className="text-udigit-blue">ambassadeurs</span>
                  </div>
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <span className="text-white">de votre</span>
                  </div>
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <span className="text-udigit-orange">marque</span>
                  </div>
                </motion.h1>
              </motion.div>
             
                           <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 sm:mb-16 md:mb-20 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed font-light px-4"
              >
                Udigit est une agence créative au Burkina Faso qui allie marketing digital, design, contenu et solutions web pour donner vie à vos projets.
              </motion.p>
             
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.6, duration: 1 }}
               className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center px-4"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Link to="/projects" className="inline-block bg-udigit-orange text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 font-bold rounded-none border-2 border-udigit-orange hover:bg-transparent hover:text-udigit-orange transition-all duration-300">
                   Voir nos projets
                 </Link>
               </motion.div>
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Link to="/services" className="inline-block bg-transparent text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 font-bold rounded-none border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
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
              <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/40 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-100/30 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                
                <h2 className="text-5xl md:text-7xl font-black text-gray-800 mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-udigit-orange via-udigit-blue to-cyan-600 bg-clip-text text-transparent">
                    Solutions Digitales
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                  Nous créons des expériences digitales exceptionnelles qui 
                  <span className="font-semibold text-gray-800"> transforment votre vision en succès</span>
                </p>
              </motion.div>

              {/* Services Grid - Liquid Glass Cards */}
              <div className="grid lg:grid-cols-3 gap-8">
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
                      <div className="relative h-48 overflow-hidden">
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
                            <span className="text-xl">{service.icon}</span>
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
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-udigit-orange transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-2"
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: service.color }}
                              ></div>
                              <span className="text-gray-600 text-xs font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Liquid Glass CTA Button */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative overflow-hidden rounded-xl"
                        >
                          <Link 
                            to="/services"
                            className={`block w-full text-center py-3 px-4 font-semibold text-sm transition-all duration-300 relative overflow-hidden backdrop-blur-xl border border-white/60 ${
                              index === 0 
                                ? 'bg-gradient-to-r from-udigit-blue/80 to-cyan-600/80 text-white hover:from-udigit-blue hover:to-cyan-600' 
                                : index === 1 
                                ? 'bg-gradient-to-r from-udigit-orange/80 to-orange-500/80 text-white hover:from-udigit-orange hover:to-orange-500'
                                : 'bg-gradient-to-r from-udigit-blue/80 to-cyan-600/80 text-white hover:from-udigit-blue hover:to-cyan-600'
                            }`}
                          >
                            <span className="relative z-10 flex items-center justify-center">
                              <span>Explorer</span>
                              <motion.svg 
                                className="w-4 h-4 ml-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </motion.svg>
                            </span>
                            {/* Liquid Glass Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                          </Link>
                        </motion.div>
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
            <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-4 gap-16 text-center">
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
                  <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/70 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/80">
                    <div 
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/60 flex items-center justify-center shadow-lg"
                      style={{ 
                        borderColor: stat.color,
                      }}
                    >
                      <div 
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: stat.color }}
                      ></div>
                    </div>
                    
                    <motion.div 
                      className="text-5xl md:text-7xl font-black mb-4"
                      style={{ color: stat.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="text-lg text-gray-700 font-medium">
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container-custom text-center relative z-10"
          >
            {/* Liquid Glass CTA Card */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/70 p-12 md:p-16 shadow-xl max-w-6xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-gray-800 mb-8">
                <span className="text-udigit-orange">Prêt à transformer</span>
                <br />
                <span className="text-gray-800">votre vision</span>
                <br />
                <span className="text-udigit-blue">en réalité ?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
                Discutons de votre projet et découvrons comment nous pouvons 
                vous aider à atteindre vos objectifs.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <a 
                  href="https://wa.me/22671784721?text=Bonjour%20!%20Je%20souhaite%20démarrer%20mon%20projet%20avec%20votre%20agence%20Udigit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-udigit-blue/80 to-cyan-600/80 text-white text-xl sm:text-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 font-bold rounded-2xl border border-white/60 backdrop-blur-xl hover:from-udigit-blue hover:to-cyan-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="relative z-10">Démarrer votre projet</span>
                  {/* Liquid Glass Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%]"></div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
    </motion.div>
  )
}

export default Home
