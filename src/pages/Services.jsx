import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const Services = () => {
  const containerRef = useRef(null)
  const [expandedServices, setExpandedServices] = useState({})
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const toggleServiceExpansion = (serviceTitle) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }))
  }

  const services = [
    {
      title: "Maintenance Informatique",
      description: "Services informatiques complets pour assurer le bon fonctionnement de vos équipements et systèmes.",
      features: ["Installation de système d'exploitation", "Antivirus et sécurité", "Configuration et maintenance réseaux", "Support technique", "Optimisation des performances"],
      icon: "🔧",
      color: "from-udigit-orange to-orange-500",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      gradient: "from-orange-400/20 to-red-500/20"
    },
    {
      title: "Développement Web",
      description: "Sites web performants et applications modernes développées avec les dernières technologies et bonnes pratiques.",
      features: ["Sites web responsives", "Applications web modernes", "E-commerce et CMS", "Optimisation SEO", "Maintenance et support"],
      icon: "💻",
      color: "from-udigit-blue to-blue-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      gradient: "from-blue-400/20 to-indigo-500/20"
    },
    {
      title: "Branding & Identité",
      description: "Développons votre identité de marque complète, de la stratégie à l'application sur tous vos supports.",
      features: ["Stratégie de marque", "Logo et identité visuelle", "Charte graphique", "Supports de communication", "Impression"],
      icon: "✨",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      gradient: "from-purple-400/20 to-pink-500/20"
    },
    {
      title: "Marketing Digital",
      description: "Stratégies marketing digital complètes pour augmenter votre visibilité et générer des leads qualifiés.",
      features: ["Stratégie marketing", "Campagnes publicitaires", "Gestion des réseaux sociaux", "Création de contenu vidéos", "Analytics et reporting"],
      icon: "📈",
      color: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      gradient: "from-green-400/20 to-teal-500/20"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Découverte",
      description: "Nous analysons vos besoins, objectifs et votre marché pour définir la meilleure stratégie.",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Conception",
      description: "Nous créons des concepts créatifs et des maquettes qui répondent à vos objectifs.",
      icon: "✏️"
    },
    {
      step: "03",
      title: "Développement", 
      description: "Nous développons votre projet avec les meilleures technologies et pratiques.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Lancement",
      description: "Nous testons, optimisons et lançons votre projet avec un support continu.",
      icon: "🚀"
    }
  ]

  const technologies = [
    "React", "Figma", "Node.js", "PHP", "WordPress", "Adobe XD",
    "Adobe Illustrator", "Adobe Photoshop", "Canva", "PostgreSQL", "MongoDB", "Cloud"
  ]

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 relative overflow-hidden"
    >
      {/* Hero Section with Parallax */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-gray-50 to-orange-50 relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          <div className="w-full h-full bg-gradient-to-br from-udigit-orange/20 to-udigit-blue/20"></div>
        </motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-800 mb-6 md:mb-8 px-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Nos <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Nous offrons une gamme complète de services digitaux pour transformer 
              votre vision en réalité et propulser votre entreprise vers le succès.
            </motion.p>
          </motion.div>
        </div>
      </section>

                    {/* Services Grid - Refonte Exceptionnelle */}
        <section className="section-padding bg-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-udigit-orange opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-udigit-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-udigit-orange opacity-5 rounded-full blur-2xl"></div>
          </div>

         <div className="container-custom relative z-10 px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20">
             {services.map((service, index) => (
               <motion.div
                 key={service.title}
                 initial={{ opacity: 0, y: 150, scale: 0.8 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 transition={{ 
                   duration: 1.2, 
                   delay: index * 0.4,
                   type: "spring",
                   stiffness: 50
                 }}
                 viewport={{ once: true, margin: "-100px" }}
                 whileHover={{ 
                   y: -30,
                   scale: 1.05,
                   transition: { duration: 0.4, type: "spring" }
                 }}
                 className="group relative"
               >
                                   {/* Card Container avec effet glassmorphism */}
                  <div className="relative bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-2xl p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
                   
                   {/* Effet de bordure animée */}
                   <motion.div 
                     className="absolute inset-0 rounded-3xl"
                     style={{
                       background: `linear-gradient(45deg, ${service.color.includes('orange') ? '#F18440' : '#2A4B9B'}, transparent, ${service.color.includes('orange') ? '#2A4B9B' : '#F18440'})`,
                       backgroundSize: '400% 400%'
                     }}
                     animate={{
                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                     }}
                     transition={{
                       duration: 3,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                   />
                                       <div className="absolute inset-[2px] bg-gradient-to-br from-gray-50/95 to-white/95 rounded-3xl"></div>
                   
                   {/* Background Pattern */}
                   <div className="absolute inset-0 opacity-5">
                     <div className="w-full h-full" style={{
                       backgroundImage: `radial-gradient(circle at 25% 25%, ${service.color.includes('orange') ? '#F18440' : '#2A4B9B'} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${service.color.includes('orange') ? '#2A4B9B' : '#F18440'} 2px, transparent 2px)`,
                       backgroundSize: '50px 50px'
                     }}></div>
                   </div>
                   
                   <div className="relative z-10">
                                           {/* Icon Container avec animations extraordinaires */}
                                             <motion.div 
                         className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 mx-auto"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.8, type: "spring" }
                        }}
                      >
                       {/* Cercle de fond animé */}
                       <motion.div 
                         className="absolute inset-0 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full opacity-20"
                         animate={{ 
                           scale: [1, 1.3, 1],
                           opacity: [0.2, 0.4, 0.2]
                         }}
                         transition={{ 
                           duration: 2,
                           repeat: Infinity,
                           ease: "easeInOut"
                         }}
                       />
                       
                                               {/* Icon principal */}
                                                 <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-2xl border-2 border-white/20`}>
                         <motion.span
                           animate={{ 
                             y: [0, -5, 0],
                             rotate: [0, 5, 0]
                           }}
                           transition={{ 
                             duration: 3,
                             repeat: Infinity,
                             ease: "easeInOut"
                           }}
                         >
                           {service.icon}
                         </motion.span>
                       </div>
                       
                       {/* Particules flottantes */}
                       <motion.div 
                         className="absolute -top-2 -right-2 w-4 h-4 bg-udigit-orange rounded-full opacity-60"
                         animate={{ 
                           y: [0, -10, 0],
                           x: [0, 5, 0],
                           scale: [1, 1.2, 1]
                         }}
                         transition={{ 
                           duration: 2,
                           repeat: Infinity,
                           ease: "easeInOut",
                           delay: 0.5
                         }}
                       />
                       <motion.div 
                         className="absolute -bottom-2 -left-2 w-3 h-3 bg-udigit-blue rounded-full opacity-60"
                         animate={{ 
                           y: [0, 10, 0],
                           x: [0, -5, 0],
                           scale: [1, 1.3, 1]
                         }}
                         transition={{ 
                           duration: 2.5,
                           repeat: Infinity,
                           ease: "easeInOut",
                           delay: 1
                         }}
                       />
                     </motion.div>
                     
                                           {/* Titre avec effet de révélation */}
                      <motion.h3 
                        className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
                          {service.title}
                        </span>
                      </motion.h3>
                     
                                           {/* Description avec animation de texte */}
                      <motion.p 
                        className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {service.description}
                      </motion.p>
                     
                                           {/* Features compactes avec effet de survol */}
                      <div className="relative">
                        {/* Affichage principal - 3 points clés */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: featureIndex * 0.1
                              }}
                              viewport={{ once: true }}
                              className="text-center p-2 md:p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-udigit-orange/50 transition-all duration-300 group/feature"
                            >
                              <div className="w-3 h-3 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full mx-auto mb-2 opacity-60 group-hover/feature:opacity-100 transition-opacity"></div>
                              <span className="text-xs md:text-sm font-medium text-gray-600 group-hover/feature:text-black transition-colors">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Services supplémentaires (cachés par défaut) */}
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: expandedServices[service.title] ? "auto" : 0,
                            opacity: expandedServices[service.title] ? 1 : 0
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                            {service.features.slice(3).map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: expandedServices[service.title] ? 1 : 0, y: expandedServices[service.title] ? 0 : 20 }}
                                transition={{ 
                                  duration: 0.5, 
                                  delay: featureIndex * 0.1
                                }}
                                className="text-center p-2 md:p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-udigit-orange/50 transition-all duration-300 group/feature"
                              >
                                <div className="w-3 h-3 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full mx-auto mb-2 opacity-60 group-hover/feature:opacity-100 transition-opacity"></div>
                                <span className="text-xs md:text-sm font-medium text-gray-600 group-hover/feature:text-black transition-colors">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Bouton pour révéler plus de détails */}
                        <motion.div 
                          className="text-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <motion.button
                            onClick={() => toggleServiceExpansion(service.title)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-udigit-orange text-sm font-medium hover:text-udigit-blue transition-colors duration-300 flex items-center justify-center mx-auto space-x-2"
                          >
                            <span>{expandedServices[service.title] ? "Voir moins" : "Voir tous les services"}</span>
                            <motion.svg 
                              className="w-4 h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              animate={{ 
                                rotate: expandedServices[service.title] ? 180 : 0,
                                y: expandedServices[service.title] ? [0, -2, 0] : [0, 2, 0]
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </motion.button>
                        </motion.div>
                      </div>
                     
                     
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

                     {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
                                           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-6 md:mb-8 px-4">
              <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
                Notre Processus
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
             Une approche structurée et collaborative pour garantir le succès de votre projet.
           </p>
        </motion.div>

        <div className="container-custom px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                                 <motion.div 
                   className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8"
                   whileHover={{ 
                     scale: 1.08,
                     rotate: 5,
                     transition: { duration: 0.4 }
                   }}
                 >
                                       {/* Cercle principal avec design futuriste */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-udigit-orange rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                      {/* Effet de profondeur */}
                      <div className="absolute inset-2 bg-gradient-to-br from-udigit-orange/20 to-udigit-blue/20 rounded-full"></div>
                     
                     {/* Lignes géométriques */}
                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-udigit-orange opacity-80"></div>
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-udigit-blue opacity-80"></div>
                     <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-udigit-orange opacity-60"></div>
                     <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-udigit-blue opacity-60"></div>
                     
                     {/* Cercle central avec numéro */}
                     <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-udigit-orange rounded-full flex items-center justify-center relative z-10 shadow-lg">
                       <span className="text-white font-black text-lg sm:text-xl md:text-2xl tracking-wider">{step.step}</span>
                     </div>
                   </div>
                   
                   {/* Effet de particules animées */}
                   <motion.div 
                     className="absolute inset-0"
                     animate={{ 
                       rotate: 360
                     }}
                     transition={{ 
                       duration: 20,
                       repeat: Infinity,
                       ease: "linear"
                     }}
                   >
                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-udigit-blue rounded-full opacity-70"></div>
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-udigit-orange rounded-full opacity-70"></div>
                     <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-udigit-blue rounded-full opacity-50"></div>
                     <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-udigit-orange rounded-full opacity-50"></div>
                   </motion.div>
                   
                   {/* Anneau externe pulsant */}
                   <motion.div 
                     className="absolute inset-0 border border-udigit-orange rounded-full opacity-30"
                     animate={{ 
                       scale: [1, 1.4, 1],
                       opacity: [0.3, 0, 0.3]
                     }}
                     transition={{ 
                       duration: 2,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                   />
                 </motion.div>
                
                <div className="text-4xl mb-4">{step.icon}</div>
                
                                 <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-udigit-orange transition-colors">
                   {step.title}
                 </h3>
                 
                 <p className="text-gray-600 leading-relaxed">
                   {step.description}
                 </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             {/* Technologies Section */}
       <section className="section-padding bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                                           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 md:mb-8 px-4">
              <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
                Technologies & Outils
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Nous utilisons les technologies les plus modernes pour créer des solutions 
            performantes et évolutives.
          </p>
        </motion.div>

                 <div className="container-custom px-4">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(241, 132, 64, 0.2)"
                }}
                                                                   className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 text-center hover:border-udigit-orange/50 transition-all duration-300"
              >
                                                                   <div className="text-black font-semibold text-sm sm:text-base md:text-lg">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-udigit-orange to-udigit-blue relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container-custom text-center relative z-10"
        >
                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 px-4">
             Prêt à commencer votre projet ?
           </h2>
           <p className="text-lg sm:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Discutons de vos besoins et découvrons comment nous pouvons 
            vous aider à atteindre vos objectifs.
          </p>
          <motion.a
            href="https://wa.me/22671784721?text=Bonjour%20!%20Je%20souhaite%20demander%20un%20devis%20pour%20mes%20besoins%20digitaux%20avec%20votre%20agence%20Udigit."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
                         className="bg-white text-udigit-orange font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-xl sm:rounded-2xl text-lg sm:text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl inline-block cursor-pointer"
          >
            Demander un devis
          </motion.a>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Services
