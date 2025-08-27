import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Users, 
  Award, 
  Heart, 
  Star,
  MessageCircle,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Button from '../components/Button'
import Icon from '../components/Icon'

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
      url: "https://www.facebook.com/profile.php?id=100086151861395",
      icon: Facebook,
      color: "from-blue-500 to-blue-600",
      description: "Suivez-nous pour nos dernières actualités et projets",
      followers: "1.3K+",
      showFollowers: true
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/udigit__/",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      description: "Découvrez nos créations visuelles et notre univers créatif",
      showFollowers: false
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@udigit_",
      icon: () => (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
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
      url: "https://www.linkedin.com/company/udigit1/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      description: "Connectez-vous avec nous pour des opportunités professionnelles",
      showFollowers: false
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
               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 px-4"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
             >
               À Propos de <span className="bg-gradient-to-r from-udigit-orange via-udigit-blue to-cyan-600 bg-clip-text text-transparent">Udigit</span>
             </motion.h1>
             <motion.p 
               className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4"
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
           <div className="grid lg:grid-cols-1 gap-16 items-center">
             <motion.div
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                              <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Notre Histoire
                </motion.h2>
                <motion.div 
                  className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="bg-gradient-to-r from-udigit-orange/10 to-udigit-blue/10 p-6 rounded-2xl border-l-4 border-udigit-orange backdrop-blur-sm">
                    <span className="font-semibold text-udigit-orange">Fondée en 2021</span>, Udigit est née de la passion pour le design digital 
                    et la technologie. Nous croyons que chaque marque mérite une présence 
                    digitale exceptionnelle qui reflète sa vision et ses valeurs.
                  </p>
                  <p className="bg-gradient-to-r from-udigit-blue/10 to-cyan-500/10 p-6 rounded-2xl border-l-4 border-udigit-blue backdrop-blur-sm">
                    Notre équipe combine <span className="font-semibold text-udigit-blue">créativité</span>, <span className="font-semibold text-udigit-blue">expertise technique</span> et <span className="font-semibold text-udigit-blue">vision stratégique</span> pour offrir des solutions sur mesure qui dépassent 
                    les attentes de nos clients.
                  </p>
                  <p className="bg-gradient-to-r from-cyan-500/10 to-udigit-orange/10 p-6 rounded-2xl border-l-4 border-cyan-500 backdrop-blur-sm">
                    Basée au <span className="font-bold text-cyan-600">Burkina Faso</span>, nous apportons une perspective unique et innovante 
                    au monde du digital, en combinant les meilleures pratiques internationales 
                    avec une compréhension profonde du marché local.
                  </p>
                </motion.div>
             </motion.div>
             
             
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
                     <Icon icon={network.icon} size="2xl" color="white" />
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
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-udigit-blue to-cyan-500 text-white font-semibold rounded-full hover:from-udigit-blue/90 hover:to-cyan-500/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Suivre
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
