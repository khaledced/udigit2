import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Tag,
  Search,
  Filter
} from 'lucide-react'
import { useState } from 'react'
import BlogArticle from '../components/BlogArticle'

const Blog = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Comment Olivier SAWADOGO intègre le digital dans sa routine entrepreneuriale.",
      excerpt: "Découvrez les startups innovantes dirigées par de jeunes entrepreneurs burkinabés qui révolutionnent leur secteur d'activité.",
      content: "Le Burkina Faso regorge de talents et d'innovations. Découvrez comment ces jeunes entrepreneurs créent des solutions locales pour des défis locaux et internationaux.",
      image: "/images/black.jpg",
      author: "Équipe Udigit",
      date: "28 Aout 2025",
      readTime: "8 min",
      category: "Développement",
      tags: ["Startups", "Jeunes", "Innovation"],
             pdfLink: "/pdfs/Passage-du-MCD1-au-MLD.pdf"
    },
    {
      id: 2,
      title: "L'écosystème tech au Burkina Faso : Opportunités et défis",
      excerpt: "Startups locales : Les jeunes entrepreneurs qui transforment le Burkina Faso ",
      content: "L'écosystème tech au Burkina Faso est en pleine expansion. Découvrez les opportunités, les défis et comment s'y intégrer pour réussir.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Équipe Udigit",
      date: "12 Janvier 2024",
      readTime: "10 min",
      category: "Développement",
      tags: ["Tech", "Écosystème", "Opportunités"],
      pdfLink: "/pdfs/ecosysteme-tech-burkina-faso.pdf"
    },
    {
      id: 3,
      title: "Formation et mentorat : Accompagner la nouvelle génération de développeurs",
      excerpt: "Analyse complète de l'écosystème technologique au Burkina Faso et des opportunités pour les jeunes développeurs.",
      content: "La formation et le mentorat sont essentiels pour développer les compétences des jeunes développeurs. Découvrez nos programmes et méthodologies.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Équipe Udigit",
      date: "10 Janvier 2024",
      readTime: "7 min",
      category: "Développement",
      tags: ["Formation", "Mentorat", "Développement"],
      pdfLink: "/pdfs/formation-mentorat-developpeurs.pdf"
    },
         {
       id: 4,
       title: "Comment les réseaux sociaux boostent la communication des entreprises",
       excerpt: "Découvrez comment les réseaux sociaux révolutionnent la communication d'entreprise et stimulent la croissance commerciale.",
       content: "Les réseaux sociaux ne sont plus seulement des outils de divertissement. Ils sont devenus des leviers puissants pour la communication et le développement commercial.",
              image: "/images/front-view-man-looking-away.jpg",
       author: "Équipe Udigit",
       date: "27 août 2025",
       readTime: "12 min",
              category: "Digital",
        tags: ["Réseaux sociaux", "Communication", "Business"]
     },
    {
      id: 5,
             title: "Comment se créer une e-réputation de confiance, astuces",
       excerpt: "Découvrez des astuces simples pour créer une image de confiance auprès de vos clients et booster vos chiffres grâce à une e-réputation solide.",
      content: "La communication digitale professionnelle fait la différence dans un monde ultra-connecté. Découvrez pourquoi il est crucial de faire appel à des experts.",
      image: "/images/customer-experience-creative-collage.jpg",
      author: "Équipe Udigit",
      date: "5 août 2025",
      readTime: "45 min",
      category: "Digital",
      tags: ["Communication", "Professionnels", "Image de marque"]
    },
    {
      id: 6,
      title: "L'apport de l'IA dans le domaine du numérique",
      excerpt: "Comment l'intelligence artificielle transforme le secteur numérique et ouvre de nouvelles perspectives.",
      content: "L'IA révolutionne le monde numérique. Découvrez ses applications concrètes et comment elle transforme les métiers du digital.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Équipe Udigit",
      date: "5 août 2025",
      readTime: "2H 30min",
      category: "Digital",
      tags: ["IA", "Numérique", "Innovation"]
    }
  ]

  const categories = ["Tous", "Développement", "Digital"]
  const [selectedCategory, setSelectedCategory] = useState("Développement")
  const [selectedArticle, setSelectedArticle] = useState(null)

  const filteredPosts = selectedCategory === "Tous" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 relative overflow-hidden"
    >
             {/* Hero Section */}
       <section className="min-h-[80vh] bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden flex items-center">
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
            
            {/* Blog Badge */}
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
                    Notre Blog
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
                         <motion.h1 
               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, delay: 0.5 }}
             >
                               <span className="bg-gradient-to-r from-udigit-orange via-udigit-blue to-cyan-600 bg-clip-text text-transparent">
                  Blog
                </span>
             </motion.h1>
            
                         <motion.p 
               className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light px-4"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.7 }}
             >
               Découvrez nos <span className="font-semibold text-gray-800">insights sur l'écosystème tech</span> et les <span className="font-semibold text-gray-800">startups locales</span> qui transforment le Burkina Faso
             </motion.p>
          </motion.div>
        </div>
      </section>

             {/* Blog Content Section */}
       <section className="py-20 bg-white relative overflow-hidden">
        <div className="container-custom">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-udigit-orange focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                                         className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                       selectedCategory === category
                         ? 'bg-gradient-to-r from-udigit-blue to-cyan-500 text-white shadow-lg'
                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                     }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-3xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-udigit-orange text-sm font-bold rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-udigit-orange transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-udigit-orange/10 to-udigit-blue/10 text-udigit-orange text-xs rounded-full border border-udigit-orange/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                                         {post.pdfLink ? (
                       <motion.a
                         href={post.pdfLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.05, x: 5 }}
                         whileTap={{ scale: 0.95 }}
                         className="inline-flex items-center gap-2 text-udigit-orange font-semibold hover:text-udigit-blue transition-colors duration-300"
                       >
                         Télécharger PDF
                         <ArrowRight className="w-4 h-4" />
                       </motion.a>
                                           ) : (
                        <motion.button
                          onClick={() => setSelectedArticle(post)}
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 text-udigit-orange font-semibold hover:text-udigit-blue transition-colors duration-300"
                        >
                          Lire plus
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-udigit-orange to-udigit-blue text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              Charger plus d'articles
            </motion.button>
          </motion.div>
                 </div>
       </section>

       {/* Article Modal */}
       {selectedArticle && (
         <BlogArticle 
           article={selectedArticle} 
           onClose={() => setSelectedArticle(null)} 
         />
       )}
     </motion.div>
   )
 }

export default Blog
