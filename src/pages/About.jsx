import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const socialNetworks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/15cjh47N3q/?mibextid=wwXIfr", // Remplacez par votre lien Facebook
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      description: "Suivez-nous pour nos dernières actualités et projets",
      followers: "1.3K+",
      showFollowers: true
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/udigit__?igsh=MXhqcXNqeDkxdTUxZw==", // Remplacez par votre lien Instagram
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      description: "Découvrez nos créations visuelles et notre univers créatif",
      showFollowers: false
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@udigit_?_t=ZM-8zCAGyKJyWk&_r=1", // Remplacez par votre lien TikTok
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      color: "from-black to-gray-800",
      description: "Contenu créatif et tendances digitales en direct",
      followers: "3.3K+",
      showFollowers: true
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/udigit1/", // Remplacez par votre lien LinkedIn
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "from-blue-600 to-blue-700",
      description: "Connectez-vous avec nous pour des opportunités professionnelles",
      showFollowers: false
    }
  ]

  const values = [
    {
      title: "Innovation",
      description: "Nous repoussons constamment les limites pour créer des solutions innovantes.",
      image: "/images/innovation.jpg",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Qualité",
      description: "Chaque projet est réalisé avec le plus grand soin et la plus haute qualité.",
      image: "/images/qualité.jpg",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour des résultats optimaux.",
      image: "/images/collaboration.jpg",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque aspect de notre travail.",
      image: "/images/excellence.jpg",
      color: "from-purple-400 to-pink-500"
    }
  ]

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 relative overflow-hidden"
    >
             {/* Hero Section - Liquid Glass Design */}
       <section className="section-padding bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/50 relative overflow-hidden">
        {/* Liquid Glass Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-100/20 to-blue-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-white/70 backdrop-blur-xl border border-white/50 rounded-full px-8 py-3 mb-8 shadow-lg"
            >
              <span className="text-gray-700 font-medium text-sm tracking-wider uppercase">À Propos</span>
            </motion.div>
            
                         <motion.h1 
               className="text-6xl md:text-8xl font-bold text-gray-800 mb-8"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
             >
               À Propos de <span className="bg-gradient-to-r from-udigit-orange via-udigit-blue to-cyan-600 bg-clip-text text-transparent">Udigit</span>
             </motion.h1>
             <motion.p 
               className="text-2xl text-gray-600 leading-relaxed"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.4 }}
             >
               Nous sommes une agence créative passionnée par l'innovation digitale 
               et déterminée à créer des expériences qui marquent les esprits.
             </motion.p>
          </motion.div>
        </div>
      </section>

             {/* Story Section - Liquid Glass Design */}
       <section className="section-padding bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
                             <motion.h2 
                 className="text-5xl font-bold text-gray-800 mb-8"
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 Notre Histoire
               </motion.h2>
               <motion.p 
                 className="text-xl text-gray-600 mb-8 leading-relaxed"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ once: true }}
               >
                 Fondée en 2021, Udigit est née de la passion pour le design digital 
                 et la technologie. Nous croyons que chaque marque mérite une présence 
                 digitale exceptionnelle qui reflète sa vision et ses valeurs.
               </motion.p>
               <motion.p 
                 className="text-xl text-gray-600 leading-relaxed"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 viewport={{ once: true }}
               >
                 Notre équipe combine créativité, expertise technique et vision 
                 stratégique pour offrir des solutions sur mesure qui dépassent 
                 les attentes de nos clients.
               </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="bg-white/60 backdrop-blur-2xl p-10 rounded-3xl text-gray-800 shadow-xl border border-white/70"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-8xl mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  🎯
                </motion.div>
                <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
                <p className="text-xl leading-relaxed">
                  Transformer les idées en expériences digitales exceptionnelles 
                  qui inspirent, engagent et convertissent.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

             {/* Values Section - Liquid Glass Design */}
       <section className="section-padding bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
                     <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
             <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
               Nos Valeurs
             </span>
           </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Ces principes guident chacune de nos décisions et actions.
           </p>
        </motion.div>

        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="text-center group"
              >
                                 <motion.div 
                   className="w-24 h-24 mx-auto mb-8 bg-white/60 backdrop-blur-xl shadow-xl border border-white/70 rounded-full overflow-hidden"
                   whileHover={{ 
                     scale: 1.1,
                     boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                   }}
                   transition={{ duration: 0.6 }}
                 >
                   <img 
                     src={value.image} 
                     alt={value.title}
                     className="w-full h-full object-cover"
                   />
                 </motion.div>
                 
                 <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-udigit-orange transition-colors">
                   {value.title}
                 </h3>
                 
                 <p className="text-gray-600 leading-relaxed">
                   {value.description}
                 </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Networks Section - Liquid Glass Design */}
      <section className="section-padding bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
              Nos Réseaux Sociaux
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez-nous sur nos réseaux sociaux pour rester connectés et découvrir nos dernières créations.
          </p>
        </motion.div>

                 <div className="container-custom">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {socialNetworks.map((network, index) => (
               <motion.div
                 key={network.name}
                 initial={{ opacity: 0, y: 100, rotateX: -15 }}
                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                 transition={{ duration: 1, delay: index * 0.2 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -20, rotateY: 5, scale: 1.05 }}
                 className="group relative"
               >
                 <div className="bg-white/60 backdrop-blur-2xl p-8 rounded-3xl shadow-xl border border-white/70 overflow-hidden hover:shadow-2xl hover:bg-white/80 transition-all duration-500">
                   {/* Social Network Icon */}
                   <motion.div 
                     className={`w-24 h-24 bg-gradient-to-r ${network.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                     whileHover={{ 
                       scale: 1.2,
                       rotate: 360,
                       boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                     }}
                     transition={{ duration: 0.6 }}
                   >
                     <div className="text-white">
                       {network.icon}
                     </div>
                   </motion.div>
                   
                   {/* Network Name */}
                   <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center group-hover:text-udigit-orange transition-colors">
                     {network.name}
                   </h3>
                   
                   {/* Followers Count - Only show for Instagram and TikTok */}
                   {network.showFollowers && (
                     <p className="text-udigit-blue font-semibold mb-4 text-center text-lg">
                       {network.followers} abonnés
                     </p>
                   )}
                   
                   {/* Description */}
                   <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                     {network.description}
                   </p>
                   
                   {/* Follow Button - Only this is clickable */}
                   <a 
                     href={network.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block"
                   >
                     <motion.div
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="w-full bg-gradient-to-r from-udigit-blue/80 to-cyan-600/80 text-white font-bold py-3 px-6 rounded-xl hover:from-udigit-blue hover:to-cyan-600 backdrop-blur-xl border border-white/60 hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
                     >
                       Suivre
                     </motion.div>
                   </a>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
      </section>


    </motion.div>
  )
}

export default About
