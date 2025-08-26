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
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#F18440"
    },
    {
      title: "Développement Web & maintenance informatique",
      description: "Sites web performants et applications modernes avec les dernières technologies.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#2A4B9B"
    },
    {
      title: "Branding,support de communication & impression",
      description: "Donnez vie à votre marque avec une identité visuelle cohérente et mémorable.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
       <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
         {/* Video Background */}
         <div className="absolute inset-0 z-0">
           <video
             autoPlay
             loop
             muted
             playsInline
             className="w-full h-full object-cover opacity-40"
           >
             <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
             <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
           </video>
           {/* Overlay pour assurer la lisibilité du texte */}
           <div className="absolute inset-0 bg-black/60"></div>
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
           className="fixed w-64 h-64 bg-udigit-orange rounded-full pointer-events-none z-10 opacity-30"
           animate={{
             x: mousePosition.x - 128,
             y: mousePosition.y - 128,
           }}
           transition={{ type: "spring", stiffness: 50, damping: 20 }}
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

             {/* Services Section - Modern Design */}
       <section className="section-padding bg-white relative overflow-hidden">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-24"
         >
           <h2 className="text-6xl md:text-8xl font-black text-black mb-8">
             <span className="text-udigit-orange">Nos</span> Services
           </h2>
           <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
             Nous combinons créativité et stratégie pour créer des solutions digitales 
             qui génèrent des résultats concrets.
           </p>
         </motion.div>

         <div className="grid md:grid-cols-3 gap-12">
           {services.map((service, index) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: index * 0.2 }}
               viewport={{ once: true }}
               whileHover={{ 
                 y: -10,
                 transition: { duration: 0.3 }
               }}
               className="group relative"
             >
               <div className="bg-white border-2 border-gray-100 p-12 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                 {/* Color Accent */}
                 <div 
                   className="absolute top-0 left-0 w-full h-1"
                   style={{ backgroundColor: service.color }}
                 ></div>
                 
                 {/* Background Pattern */}
                 <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                   <div className="w-full h-full" style={{
                     backgroundImage: `linear-gradient(45deg, ${service.color} 25%, transparent 25%), linear-gradient(-45deg, ${service.color} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${service.color} 75%), linear-gradient(-45deg, transparent 75%, ${service.color} 75%)`,
                     backgroundSize: '20px 20px',
                     backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                   }}></div>
                 </div>
                 
                 <div className="relative z-10">
                   <motion.div 
                     className="text-8xl mb-8 flex justify-center items-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.3 }}
                   >
                     <span className="block">{service.icon}</span>
                   </motion.div>
                   
                   <h3 className="text-3xl font-bold text-black mb-6">
                     {service.title}
                   </h3>
                   
                   <p className="text-gray-600 leading-relaxed text-lg mb-8">
                     {service.description}
                   </p>
                   
                   <div 
                     className="w-16 h-1"
                     style={{ backgroundColor: service.color }}
                   ></div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </section>

             {/* Stats Section - Modern Design */}
       <section className="section-padding bg-gradient-to-br from-orange-50 via-blue-50 to-gray-50 relative overflow-hidden">
         <div className="container-custom">
           <div className="grid md:grid-cols-4 gap-16 text-center">
             {[
               { number: "150+", label: "Projets Réalisés", color: "#F18440" },
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
                 whileHover={{ y: -10 }}
                 className="group"
               >
                 <div 
                   className="w-24 h-24 mx-auto mb-8 border-2"
                   style={{ 
                     borderColor: stat.color,
                     backgroundColor: `${stat.color}20`
                   }}
                 ></div>
                 
                 <motion.div 
                   className="text-6xl md:text-8xl font-black mb-4"
                   style={{ color: stat.color }}
                   whileHover={{ scale: 1.1 }}
                 >
                   {stat.number}
                 </motion.div>
                 
                 <div className="text-xl text-gray-700 font-light">
                   {stat.label}
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

             {/* CTA Section - Modern Design */}
       <section className="section-padding bg-white relative overflow-hidden">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="container-custom text-center relative z-10"
         >
           <h2 className="text-6xl md:text-8xl font-black text-black mb-8">
             <span className="text-udigit-orange">Prêt à transformer</span>
             <br />
             <span className="text-black">votre vision</span>
             <br />
             <span className="text-udigit-blue">en réalité ?</span>
           </h2>
           <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto font-light">
             Discutons de votre projet et découvrons comment nous pouvons 
             vous aider à atteindre vos objectifs.
           </p>
           <motion.div
             whileHover={{ scale: 1.05, y: -5 }}
             whileTap={{ scale: 0.95 }}
           >
                           <a 
                href="https://wa.me/22671784721?text=Bonjour%20!%20Je%20souhaite%20démarrer%20mon%20projet%20avec%20votre%20agence%20Udigit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-udigit-blue text-white text-2xl px-16 py-8 font-bold border-2 border-udigit-blue hover:bg-transparent hover:text-udigit-blue transition-all duration-300"
              >
                Démarrer votre projet
              </a>
           </motion.div>
         </motion.div>
       </section>
    </motion.div>
  )
}

export default Home
