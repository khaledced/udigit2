import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Palette, 
  Package, 
  Image, 
  Video, 
  Monitor, 
  ExternalLink, 
  Eye, 
  X,
  ArrowRight,
  Star,
  Users,
  Award
} from 'lucide-react'
import Button from '../components/Button'
import Icon from '../components/Icon'

const Projects = () => {
  const containerRef = useRef(null)
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Conceptions Graphiques
  const graphicDesigns = [
    {
      id: 1,
      title: "Identités Visuelles",
      description: "Création complète d'identités de marque : logos, chartes graphiques, supports de communication et guidelines.",
      image: "/images/visual.png",
      category: "Branding",
      gallery: [
        "/images/f1.jpeg",
        "/images/f2.jpg",
        "/images/f3.png",
        "/images/f4.png",
      ]
    },
    {
      id: 2,
      title: "Packaging et Illustrations",
      description: "Design d'emballages créatifs et illustrations personnalisées pour valoriser vos produits.",
      image: "/images/illus.jpg",
      category: "Packaging",
             gallery: [
         "/images/55.png",
         "/images/4278766.png",
         "/images/asi1.jpg",
         "/images/mannequin.png",
       ]
    },
    {
      id: 3,
      title: "Affiches Événementielles",
      description: "Création d'affiches impactantes et supports visuels pour vos événements et campagnes.",
      image: "/images/16.png",
      category: "Print",
      gallery: [
        "/images/8.png",
        "/images/11.png",
        "/images/6.png",
        "/images/9.png"
      ]
    }
  ]

  // Créations de Contenus
  const contentCreations = [
    {
      id: 1,
      title: "Contenu promotionnel pour un restaurant",
      description: "Série de contenus pour l'ouverture d'un nouveau restaurant.",
      image: "/images/melina.jpg",
      platform: "Instagram",
      youtubeLink: "https://www.youtube.com/shorts/2vtoRiKiCPY" // Lien de test temporaire
    },
    {
      id: 2,
      title: "Vidéo virale pour un espace détente",
      description: "Contenu vidéo virale pour la promotion d'un espace de détente.",
      image: "/images/lagon.jpg",
      platform: "TikTok",
      youtubeLink: "https://youtube.com/shorts/geLfGMCugsM?si=ivqNMlBSsYryRk0h" // Remplacez par votre lien YouTube
    },
    {
      id: 3,
      title: "Tournage de vidéos pour un espace piscine-lounche-bar",
      description: "Vidéos professionnelles pour la promotion d'un espace piscine-lounche-bar",
      image: "/images/espace.jpg",
      platform: "Facebook",
      youtubeLink: "https://youtube.com/shorts/2vtoRiKiCPY?si=ZaYREFXEiDhen_vd" // Remplacez par votre lien YouTube
    }
  ]

  // Sites Web
  const websites = [
    {
      id: 1,
      title: "Site Udigit - En Développement",
      description: "Site web moderne et professionnel pour notre agence Udigit, conçu avec les dernières technologies web.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      inProgress: true
    }
  ]

  // Logos des Clients
  // Pour changer les logos, remplacez les chemins par vos propres images
  // Placez vos logos directement dans le dossier public/
  const clientLogos = [
    {
      id: 1,
      name: "Client 1",
      logo: "/images/client1.png" // Remplacez par votre logo
    },
    {
      id: 2,
      name: "Client 2", 
      logo: "/images/client2.png" // Remplacez par votre logo
    },
    {
      id: 3,
      name: "Client 3",
      logo: "/images/client3.png" // Remplacez par votre logo
    },
    {
      id: 4,
      name: "Client 4",
      logo: "/images/client4.png" // Remplacez par votre logo
    },
    {
      id: 5,
      name: "Client 5",
      logo: "/images/client5.png" // Remplacez par votre logo
    },
    {
      id: 6,
      name: "Client 6",
      logo: "/images/client6.png" // Remplacez par votre logo
    },
    {
      id: 7,
      name: "Client 7",
      logo: "/images/client7.png" // Remplacez par votre logo
    },
    {
      id: 8,
      name: "Client 8",
      logo: "/images/client8.png" // Remplacez par votre logo
    },
    {
      id: 9,
      name: "Client 9",
      logo: "/images/client9.png" // Remplacez par votre logo
    },
    {
      id: 10,
      name: "Client 10",
      logo: "/images/client10.png" // Remplacez par votre logo
    },
    {
      id: 11,
      name: "Client 11",
      logo: "/images/client11.png" // Remplacez par votre logo
    },
    {
      id: 12,
      name: "Client 12",
      logo: "/images/client12.png" // Remplacez par votre logo
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
             

       {/* Hero Section - Design Refait */}
       <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-udigit-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-udigit-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-udigit-orange/30 to-udigit-blue/30 rounded-full blur-3xl"></div>
        </motion.div>
        
                 <div className="container-custom relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="text-center max-w-6xl mx-auto"
           >
             
             {/* Portfolio Créatif Badge */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="flex justify-center mb-8"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-4 h-4 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800 bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent text-lg">
                     Portfolio Créatif
                   </span>
                 </div>
               </motion.div>
             </motion.div>
             
             <motion.h1 
               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight px-4"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, delay: 0.5 }}
             >
               Nos <span className="bg-gradient-to-r from-udigit-orange via-udigit-blue to-udigit-orange bg-clip-text text-transparent">Créations</span>
             </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Découvrez notre univers créatif à travers des projets qui 
              <span className="font-semibold text-gray-800"> transforment les idées en expériences visuelles extraordinaires</span>
            </motion.p>
            
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.9 }}
               className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-6 px-4"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800 bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
                     Portfolio Créatif
                   </span>
                 </div>
               </motion.div>
               
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-udigit-orange rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800">
                     Section 01
                   </span>
                 </div>
               </motion.div>
               
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800">
                     Section 02
                   </span>
                 </div>
               </motion.div>
               
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800">
                     Section 03
                   </span>
                 </div>
               </motion.div>
               
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800 bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
                     Nos Partenaires
                   </span>
                 </div>
               </motion.div>
             </motion.div>
          </motion.div>
        </div>
      </section>

             

       {/* Conceptions Graphiques Section - Design Refait */}
       <section className="py-32 bg-white relative overflow-hidden">
                 <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2 }}
             viewport={{ once: true }}
             className="text-center mb-20"
           >
             
             {/* Section 01 Badge */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="flex justify-center mb-8"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-4 h-4 bg-udigit-orange rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800 text-lg">
                     Section 01
                   </span>
                 </div>
               </motion.div>
             </motion.div>
             
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
               <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
                 Conceptions Graphiques
               </span>
             </h2>
             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
               Créations visuelles uniques qui donnent vie à votre identité de marque avec 
               <span className="font-semibold text-gray-800"> passion et expertise</span>
             </p>
           </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4">
            {graphicDesigns.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-udigit-orange text-sm font-bold rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-udigit-orange/80 to-transparent flex items-end justify-center pb-8 opacity-100 transition-opacity duration-300"
                    >
                                             <button
                         onClick={() => setSelectedGallery(project)}
                         className="inline-flex items-center justify-center px-4 py-2 bg-black/50 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-black/70 transition-all duration-300"
                       >
                         <Eye className="w-4 h-4 mr-2" />
                         Voir le projet
                       </button>
                    </motion.div>
                  </div>
                  
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-udigit-orange transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mb-4 sm:mb-6">
                      {project.description}
                    </p>
                                         {/* Bouton mobile pour meilleure accessibilité */}
                     <button
                       onClick={() => setSelectedGallery(project)}
                       className="w-full md:hidden inline-flex items-center justify-center px-4 py-2 bg-udigit-orange text-white font-semibold rounded-lg hover:bg-udigit-orange/90 transition-all duration-300"
                     >
                       <Eye className="w-4 h-4 mr-2" />
                       Voir le projet
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             

       {/* Créations de Contenus Section - Design Refait */}
       <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                 <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2 }}
             viewport={{ once: true }}
             className="text-center mb-20"
           >
             
             {/* Section 02 Badge */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="flex justify-center mb-8"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-4 h-4 bg-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800 text-lg">
                     Section 02
                   </span>
                 </div>
               </motion.div>
             </motion.div>
             
             <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
               <span className="bg-gradient-to-r from-udigit-blue to-udigit-orange bg-clip-text text-transparent">
                 Créations de Contenus
               </span>
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
               Contenus engageants et créatifs qui 
               <span className="font-semibold text-gray-800"> captent l'attention et inspirent l'action</span>
             </p>
           </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {contentCreations.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-udigit-blue text-sm font-bold rounded-full shadow-lg">
                        {project.platform}
                      </span>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-udigit-blue/80 to-transparent flex items-end justify-center pb-8 opacity-100 transition-opacity duration-300"
                    >
                                             <a
                         href={project.youtubeLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center px-4 py-2 bg-black/50 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-black/70 transition-all duration-300"
                       >
                         <ExternalLink className="w-4 h-4 mr-2" />
                         Voir le contenu
                       </a>
                    </motion.div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-udigit-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                                         {/* Bouton mobile pour meilleure accessibilité */}
                     <a
                       href={project.youtubeLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-full md:hidden inline-flex items-center justify-center px-4 py-2 bg-udigit-blue text-white font-semibold rounded-lg hover:bg-udigit-blue/90 transition-all duration-300"
                     >
                       <ExternalLink className="w-4 h-4 mr-2" />
                       Voir le contenu
                     </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             

       {/* Sites Web Section - Design Refait */}
       <section className="py-32 bg-white relative overflow-hidden">
                 <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2 }}
             viewport={{ once: true }}
             className="text-center mb-20"
           >
             
             {/* Section 03 Badge */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="flex justify-center mb-8"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-4 h-4 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800 text-lg">
                     Section 03
                   </span>
                 </div>
               </motion.div>
             </motion.div>
             
             <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
               <span className="bg-gradient-to-r from-udigit-orange via-udigit-blue to-udigit-orange bg-clip-text text-transparent">
                 Sites Web
               </span>
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
               Sites web modernes et performants qui 
               <span className="font-semibold text-gray-800"> transforment votre vision en réalité digitale</span>
             </p>
           </motion.div>

          <div className="flex justify-center">
            <div className="max-w-2xl">
              {websites.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {project.inProgress && (
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-yellow-500/90 backdrop-blur-sm text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                          En cours
                        </span>
                      </div>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-udigit-orange/80 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-white font-bold text-lg">
                        {project.inProgress ? 'En développement' : 'Voir le site'}
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-udigit-orange transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-udigit-orange/10 to-udigit-blue/10 text-udigit-orange text-sm rounded-full border border-udigit-orange/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-udigit-orange to-udigit-blue text-white font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all duration-300 text-center block transform hover:-translate-y-1"
                      >
                        Voir le site
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

             

       {/* Clients Section - Design Refait */}
       <section className="py-32 bg-gradient-to-br from-orange-50 via-gray-50 to-blue-50 relative overflow-hidden">
                 <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2 }}
             viewport={{ once: true }}
             className="text-center mb-20"
           >
             
             {/* Nos Partenaires Badge */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="flex justify-center mb-8"
             >
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-r from-udigit-orange/20 to-udigit-blue/20 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-4 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-4 h-4 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full animate-pulse"></div>
                   <span className="font-bold text-gray-800 bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent text-lg">
                     Nos Partenaires
                   </span>
                 </div>
               </motion.div>
             </motion.div>
             
             <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
               <span className="bg-gradient-to-r from-udigit-orange to-udigit-blue bg-clip-text text-transparent">
                 Ils nous ont fait confiance
               </span>
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
               Découvrez les entreprises qui nous ont choisis pour 
               <span className="font-semibold text-gray-800"> transformer leurs idées en succès</span>
             </p>
           </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ${
                      client.id === 4 || client.id === 10 ? 'scale-125' : 'scale-150'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Design Refait */}
      <section className="py-32 bg-gradient-to-r from-udigit-orange via-udigit-blue to-udigit-orange relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="container-custom text-center relative z-10"
        >
          
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-8 leading-tight px-4">
            Prêt à créer quelque chose d'
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              extraordinaire
            </span> ?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Discutons de votre projet et découvrons comment nous pouvons 
            <span className="font-semibold"> transformer vos idées en réalité digitale</span>
          </p>
                     <motion.a
             href="https://wa.me/22671784721?text=Bonjour%20!%20Je%20souhaite%20démarrer%20un%20projet%20avec%20votre%20agence%20Udigit."
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ 
               scale: 1.05, 
               y: -5,
               boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
             }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-udigit-orange font-bold py-6 px-12 rounded-3xl text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:-translate-y-1 inline-block cursor-pointer"
           >
             Démarrer un projet
           </motion.a>
        </motion.div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-udigit-orange to-udigit-blue p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedGallery.title}</h3>
                  <motion.button
                    onClick={() => setSelectedGallery(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <p className="text-white/90 mt-2">{selectedGallery.description}</p>
              </div>

                             {/* Gallery Grid */}
               <div className="p-6 max-h-[70vh] overflow-y-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {selectedGallery.gallery.map((image, index) => (
                     <motion.div
                       key={index}
                       initial={{ opacity: 0, y: 50 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: index * 0.1 }}
                       className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                       onClick={() => setSelectedImage({ src: image, title: `${selectedGallery.title} - Image ${index + 1}` })}
                     >
                       <motion.img
                         src={image}
                         alt={`${selectedGallery.title} - Image ${index + 1}`}
                         className="w-full h-64 object-contain bg-gray-100 group-hover:scale-110 transition-transform duration-500"
                         whileHover={{ scale: 1.05 }}
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                         <span className="text-white font-semibold">Cliquer pour agrandir</span>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </div>

              {/* Footer */}
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">
                    {selectedGallery.gallery.length} images dans cette galerie
                  </span>
                                     <button
                     onClick={() => setSelectedGallery(null)}
                     className="inline-flex items-center justify-center px-4 py-2 bg-udigit-orange text-white font-semibold rounded-lg hover:bg-udigit-orange/90 transition-all duration-300"
                   >
                     <X className="w-4 h-4 mr-2" />
                     Fermer
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
                 )}
       </AnimatePresence>

       {/* Image Modal */}
       <AnimatePresence>
         {selectedImage && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedImage(null)}
           >
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.8, opacity: 0 }}
               className="relative max-w-7xl w-full max-h-[95vh] overflow-hidden"
               onClick={(e) => e.stopPropagation()}
             >
                               {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 flex items-center justify-center transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

               {/* Image */}
               <motion.img
                 src={selectedImage.src}
                 alt={selectedImage.title}
                 className="w-full h-full object-contain max-h-[95vh]"
                 initial={{ scale: 0.9 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 0.3 }}
               />

               {/* Image Title */}
               <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                 <h3 className="text-white font-semibold text-lg">{selectedImage.title}</h3>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
     </motion.div>
   )
 }

export default Projects
