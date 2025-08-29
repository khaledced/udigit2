import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from 'lucide-react'

const BlogArticle = ({ article, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-80 overflow-hidden rounded-t-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Back Button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Category Badge */}
          <div className="absolute top-6 right-6">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-udigit-orange text-sm font-bold rounded-full shadow-lg">
              {article.category}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Article complet</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gradient-to-r from-udigit-orange/10 to-udigit-blue/10 text-udigit-orange text-sm rounded-full border border-udigit-orange/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.category === "Développement" && (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {article.id === 1 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">L'entrepreneuriat digital au Burkina Faso</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Olivier SAWADOGO représente parfaitement cette nouvelle génération d'entrepreneurs burkinabés qui ont compris l'importance du digital dans le développement de leurs activités. Son parcours illustre comment la technologie peut transformer une vision entrepreneuriale en réalité concrète.
                      </p>
                      <div className="bg-gradient-to-r from-udigit-orange/10 to-udigit-blue/10 p-6 rounded-2xl mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Points clés de son approche :</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Intégration systématique des outils digitaux dans la gestion quotidienne</li>
                          <li>• Utilisation des réseaux sociaux pour la visibilité et le networking</li>
                          <li>• Automatisation des processus pour optimiser la productivité</li>
                          <li>• Formation continue de l'équipe aux nouvelles technologies</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Les outils digitaux essentiels</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Pour réussir dans l'entrepreneuriat moderne, il est crucial de maîtriser certains outils digitaux fondamentaux. Voici les technologies que tout entrepreneur devrait connaître :
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Gestion de projet</h4>
                          <p className="text-gray-600">Trello, Asana, Notion pour organiser et suivre les projets</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Communication</h4>
                          <p className="text-gray-600">Slack, WhatsApp Business, Zoom pour la collaboration</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Marketing digital</h4>
                          <p className="text-gray-600">Canva, Buffer, Google Analytics pour la promotion</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Gestion financière</h4>
                          <p className="text-gray-600">Wave, QuickBooks, Excel pour la comptabilité</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {article.id === 2 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">L'écosystème tech en pleine expansion</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Le Burkina Faso connaît une véritable révolution numérique. Les jeunes entrepreneurs créent des solutions innovantes qui répondent aux défis locaux tout en ayant un impact international.
                      </p>
                      <div className="bg-gradient-to-r from-udigit-blue/10 to-cyan-500/10 p-6 rounded-2xl mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Secteurs en forte croissance :</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Fintech et services financiers inclusifs</li>
                          <li>• E-commerce et marketplace</li>
                          <li>• Edtech et formation en ligne</li>
                          <li>• Agritech et solutions agricoles</li>
                          <li>• Healthtech et services de santé</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Opportunités pour les développeurs</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Les développeurs burkinabés ont aujourd'hui de nombreuses opportunités pour s'épanouir professionnellement et contribuer au développement de leur pays.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                          <div className="w-16 h-16 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-xl">1</span>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">Freelance</h4>
                          <p className="text-gray-600 text-sm">Travailler avec des clients internationaux</p>
                        </div>
                        <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                          <div className="w-16 h-16 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-xl">2</span>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">Startup</h4>
                          <p className="text-gray-600 text-sm">Créer sa propre entreprise tech</p>
                        </div>
                        <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                          <div className="w-16 h-16 bg-gradient-to-r from-udigit-orange to-udigit-blue rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-xl">3</span>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">Formation</h4>
                          <p className="text-gray-600 text-sm">Former la prochaine génération</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {article.id === 3 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">L'importance du mentorat</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        La formation et le mentorat sont les piliers du développement d'un écosystème tech durable. Ils permettent de transmettre les connaissances et l'expérience aux nouvelles générations.
                      </p>
                      <div className="bg-gradient-to-r from-udigit-orange/10 to-udigit-blue/10 p-6 rounded-2xl mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Notre approche de formation :</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Formation pratique avec des projets réels</li>
                          <li>• Accompagnement personnalisé par des mentors expérimentés</li>
                          <li>• Mise en réseau avec l'écosystème tech local</li>
                          <li>• Suivi post-formation pour assurer la réussite</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Programmes de formation</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Nous proposons plusieurs programmes adaptés aux différents niveaux et objectifs des apprenants.
                      </p>
                      <div className="space-y-6">
                        <div className="border-l-4 border-udigit-orange pl-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Formation Débutant</h4>
                          <p className="text-gray-600 mb-2">Durée : 3 mois</p>
                          <p className="text-gray-700">Initiation aux bases du développement web et des outils digitaux</p>
                        </div>
                        <div className="border-l-4 border-udigit-blue pl-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Formation Avancée</h4>
                          <p className="text-gray-600 mb-2">Durée : 6 mois</p>
                          <p className="text-gray-700">Spécialisation en développement full-stack et gestion de projet</p>
                        </div>
                        <div className="border-l-4 border-cyan-500 pl-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Accompagnement Entrepreneurial</h4>
                          <p className="text-gray-600 mb-2">Durée : 12 mois</p>
                          <p className="text-gray-700">Mentorat complet pour la création et le développement d'entreprise</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {article.category === "Digital" && (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                 {article.id === 4 && (
                   <>
                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">La révolution des réseaux sociaux dans la communication d'entreprise</h2>
                       <p className="text-gray-700 leading-relaxed mb-6">
                         Les réseaux sociaux ont transformé radicalement la façon dont les entreprises communiquent avec leurs clients. Ce qui était autrefois un canal de divertissement est devenu un outil stratégique essentiel pour la croissance commerciale et la fidélisation client.
                       </p>
                       <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl mb-6">
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Chiffres clés de l'impact des réseaux sociaux :</h3>
                         <ul className="space-y-2 text-gray-700">
                           <li>• <strong>4,9 milliards</strong> d'utilisateurs actifs dans le monde</li>
                           <li>• <strong>2h 27min</strong> de temps passé quotidiennement en moyenne</li>
                           <li>• <strong>78%</strong> des consommateurs sont prêts à acheter après une interaction positive</li>
                           <li>• <strong>71%</strong> des clients qui ont une expérience positive sur les réseaux sociaux recommandent la marque</li>
                         </ul>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Avantages stratégiques pour les entreprises</h2>
                       <div className="grid md:grid-cols-2 gap-6 mb-8">
                         <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Visibilité et ciblage</h3>
                           <ul className="space-y-2 text-gray-700">
                             <li>• Atteindre des audiences ciblées avec précision</li>
                             <li>• Augmenter la notoriété de marque</li>
                             <li>• Générer du trafic qualifié vers le site web</li>
                             <li>• Créer une présence digitale 24/7</li>
                           </ul>
                         </div>
                         <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">💬 Interaction et engagement</h3>
                           <ul className="space-y-2 text-gray-700">
                             <li>• Communication directe avec les clients</li>
                             <li>• Feedback en temps réel</li>
                             <li>• Création d'une communauté fidèle</li>
                             <li>• Personnalisation de l'expérience client</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Plateformes clés et leurs spécificités</h2>
                       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">FB</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">Facebook</h4>
                           <p className="text-gray-600 text-sm mb-3">Large audience, publicités ciblées</p>
                           <ul className="text-xs text-gray-500 space-y-1">
                             <li>• Audience diverse</li>
                             <li>• Publicités avancées</li>
                             <li>• Groupes communautaires</li>
                           </ul>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">IG</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">Instagram</h4>
                           <p className="text-gray-600 text-sm mb-3">Contenu visuel, audience jeune</p>
                           <ul className="text-xs text-gray-500 space-y-1">
                             <li>• Stories et Reels</li>
                             <li>• Shopping intégré</li>
                             <li>• Influence marketing</li>
                           </ul>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">LI</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">LinkedIn</h4>
                           <p className="text-gray-600 text-sm mb-3">Réseautage professionnel</p>
                           <ul className="text-xs text-gray-500 space-y-1">
                             <li>• B2B networking</li>
                             <li>• Content marketing</li>
                             <li>• Recrutement</li>
                           </ul>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">TT</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">TikTok</h4>
                           <p className="text-gray-600 text-sm mb-3">Contenu viral, génération Z</p>
                           <ul className="text-xs text-gray-500 space-y-1">
                             <li>• Vidéos courtes</li>
                             <li>• Tendances virales</li>
                             <li>• Audience jeune</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Stratégies de contenu efficaces</h2>
                       <div className="space-y-6">
                         <div className="border-l-4 border-udigit-orange pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Contenu de valeur</h4>
                           <p className="text-gray-700 mb-3">Créez du contenu qui éduque, divertit ou inspire votre audience.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Conseils et astuces du secteur</li>
                             <li>• Études de cas et témoignages</li>
                             <li>• Contenu éducatif et informatif</li>
                             <li>• Histoires de marque authentiques</li>
                           </ul>
                         </div>
                         <div className="border-l-4 border-udigit-blue pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Engagement communautaire</h4>
                           <p className="text-gray-700 mb-3">Interagissez activement avec votre communauté pour créer des relations durables.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Réponse rapide aux commentaires</li>
                             <li>• Questions et sondages interactifs</li>
                             <li>• Lives et événements en direct</li>
                             <li>• Collaboration avec les influenceurs</li>
                           </ul>
                         </div>
                         <div className="border-l-4 border-cyan-500 pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Optimisation et analyse</h4>
                           <p className="text-gray-700 mb-3">Mesurez et optimisez vos performances pour améliorer continuellement vos résultats.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Analyse des métriques clés (engagement, portée, conversions)</li>
                             <li>• Tests A/B pour optimiser le contenu</li>
                             <li>• Planification stratégique du contenu</li>
                             <li>• Adaptation aux tendances et algorithmes</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact sur les ventes et la croissance</h2>
                       <div className="grid md:grid-cols-3 gap-6 mb-6">
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">📈</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">+67% de leads</h4>
                           <p className="text-gray-600 text-sm">Génération de prospects qualifiés via les réseaux sociaux</p>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">💰</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">+45% de conversions</h4>
                           <p className="text-gray-600 text-sm">Amélioration du taux de conversion grâce à l'engagement</p>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">🎯</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">+89% de notoriété</h4>
                           <p className="text-gray-600 text-sm">Augmentation de la reconnaissance de marque</p>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Meilleures pratiques pour réussir</h2>
                       <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl mb-6">
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Plan d'action en 4 étapes :</h3>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">1. Audit et stratégie</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Analyse de votre présence actuelle</li>
                               <li>• Définition des objectifs SMART</li>
                               <li>• Identification de votre audience cible</li>
                               <li>• Choix des plateformes prioritaires</li>
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">2. Création de contenu</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Calendrier éditorial cohérent</li>
                               <li>• Mix de contenus variés</li>
                               <li>• Adaptation au ton de chaque plateforme</li>
                               <li>• Optimisation visuelle et textuelle</li>
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">3. Engagement et communauté</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Réponse systématique aux interactions</li>
                               <li>• Création de conversations authentiques</li>
                               <li>• Organisation d'événements en direct</li>
                               <li>• Collaboration avec les influenceurs</li>
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">4. Mesure et optimisation</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Suivi des métriques clés</li>
                               <li>• Analyse des performances</li>
                               <li>• Ajustement de la stratégie</li>
                               <li>• Innovation et expérimentation</li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Tendances et innovations à surveiller</h2>
                       <div className="grid md:grid-cols-2 gap-6">
                         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">🎥 Contenu vidéo et live</h3>
                           <p className="text-gray-700 mb-3">La vidéo domine l'engagement sur les réseaux sociaux.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Stories et Reels courts</li>
                             <li>• Lives et événements en direct</li>
                             <li>• Vidéos éducatives et tutorielles</li>
                             <li>• Contenu généré par les utilisateurs</li>
                           </ul>
                         </div>
                         <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">🤖 IA et personnalisation</h3>
                           <p className="text-gray-700 mb-3">L'intelligence artificielle révolutionne le ciblage et l'expérience utilisateur.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Ciblage ultra-précis</li>
                             <li>• Chatbots et automatisation</li>
                             <li>• Contenu personnalisé en temps réel</li>
                             <li>• Analyse prédictive des tendances</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <div className="bg-gradient-to-r from-udigit-orange to-udigit-blue p-8 rounded-3xl text-center text-white">
                         <h3 className="text-2xl font-bold mb-4">Prêt à booster votre communication digitale ?</h3>
                         <p className="text-lg mb-6 opacity-90">
                           Contactez-nous dès aujourd'hui pour développer une stratégie réseaux sociaux efficace qui transforme votre entreprise et génère des résultats concrets.
                         </p>
                         <a
                           href="https://wa.me/22671784721"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 bg-white text-udigit-orange px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
                         >
                           Nous Contacter
                         </a>
                       </div>
                     </div>
                   </>
                 )}

                                 {article.id === 5 && (
                   <>
                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment se créer une e-réputation de confiance</h2>
                       <p className="text-gray-700 leading-relaxed mb-6">
                         Dans un monde digital où la confiance se construit en ligne, votre e-réputation peut faire la différence entre le succès et l'échec. Voici des astuces simples pour créer une image de confiance qui booste vos chiffres.
                       </p>
                       <div className="bg-gradient-to-r from-udigit-blue/10 to-cyan-500/10 p-6 rounded-2xl mb-6">
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi la confiance en ligne est cruciale :</h3>
                         <ul className="space-y-2 text-gray-700">
                           <li>• <strong>78%</strong> des clients vérifient les avis en ligne avant d'acheter</li>
                           <li>• <strong>92%</strong> font confiance aux recommandations d'autres clients</li>
                           <li>• <strong>67%</strong> abandonnent un achat si l'entreprise a une mauvaise réputation</li>
                         </ul>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Astuces pour construire la confiance</h2>
                       <div className="grid md:grid-cols-2 gap-6 mb-8">
                         <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Transparence et authenticité</h3>
                           <ul className="space-y-2 text-gray-700">
                             <li>• Partagez l'histoire de votre entreprise</li>
                             <li>• Montrez votre équipe et vos locaux</li>
                             <li>• Répondez honnêtement aux questions</li>
                             <li>• Admettez vos erreurs et montrez comment vous les corrigez</li>
                           </ul>
                         </div>
                         <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">⭐ Gestion des avis clients</h3>
                           <ul className="space-y-2 text-gray-700">
                             <li>• Répondez à TOUS les avis (positifs et négatifs)</li>
                             <li>• Remerciez les clients satisfaits</li>
                             <li>• Proposez des solutions aux clients mécontents</li>
                             <li>• Demandez gentiment des avis à vos clients satisfaits</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenu qui inspire confiance</h2>
                       <div className="space-y-6">
                         <div className="border-l-4 border-udigit-orange pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Témoignages clients</h4>
                           <p className="text-gray-700 mb-3">Les témoignages authentiques sont votre meilleur atout pour la confiance.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Photos des clients avec leurs noms</li>
                             <li>• Vidéos de témoignages</li>
                             <li>• Histoires de transformation</li>
                             <li>• Résultats chiffrés obtenus</li>
                           </ul>
                         </div>
                         <div className="border-l-4 border-udigit-blue pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Contenu éducatif</h4>
                           <p className="text-gray-700 mb-3">Partagez votre expertise pour positionner votre entreprise comme leader.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Articles de blog informatifs</li>
                             <li>• Conseils et astuces gratuits</li>
                             <li>• Webinaires et lives</li>
                             <li>• Guides pratiques téléchargeables</li>
                           </ul>
                         </div>
                         <div className="border-l-4 border-cyan-500 pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Preuves sociales</h4>
                           <p className="text-gray-700 mb-3">Montrez que d'autres font confiance à votre entreprise.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Logos de clients satisfaits</li>
                             <li>• Certifications et accréditations</li>
                             <li>• Médias parlant de vous</li>
                             <li>• Statistiques d'impact</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact sur vos chiffres</h2>
                       <div className="grid md:grid-cols-3 gap-6 mb-6">
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">📈</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">+45% de conversions</h4>
                           <p className="text-gray-600 text-sm">Les entreprises avec une bonne e-réputation convertissent mieux</p>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">💰</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">+30% de panier moyen</h4>
                           <p className="text-gray-600 text-sm">Les clients confiants dépensent plus</p>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">🔄</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">+60% de fidélisation</h4>
                           <p className="text-gray-600 text-sm">La confiance crée des clients fidèles</p>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Actions concrètes à mettre en place</h2>
                       <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl mb-6">
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Plan d'action en 30 jours :</h3>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">Semaine 1 : Audit</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Vérifiez tous vos avis en ligne</li>
                               <li>• Analysez votre présence digitale</li>
                               <li>• Identifiez les points d'amélioration</li>
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">Semaine 2 : Optimisation</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Répondez aux avis non traités</li>
                               <li>• Améliorez vos profils en ligne</li>
                               <li>• Créez du contenu de valeur</li>
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">Semaine 3 : Engagement</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Lancez une campagne de témoignages</li>
                               <li>• Interagissez avec votre communauté</li>
                               <li>• Partagez votre expertise</li>
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">Semaine 4 : Mesure</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• Analysez les résultats</li>
                               <li>• Ajustez votre stratégie</li>
                               <li>• Planifiez les prochaines actions</li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'aide pour optimiser votre e-réputation ?</h2>
                       <p className="text-gray-700 leading-relaxed mb-6">
                         Construire une e-réputation de confiance demande expertise et stratégie. Notre équipe de professionnels peut vous accompagner pour créer une image de marque forte qui booste vos ventes.
                       </p>
                       <div className="bg-gradient-to-r from-udigit-orange/10 to-udigit-blue/10 p-6 rounded-2xl">
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Nos services pour votre e-réputation :</h3>
                         <div className="grid md:grid-cols-2 gap-4">
                           <ul className="text-gray-700 space-y-2">
                             <li>• Audit complet de votre présence en ligne</li>
                             <li>• Stratégie de gestion des avis clients</li>
                             <li>• Création de contenu de confiance</li>
                             <li>• Formation de votre équipe</li>
                           </ul>
                           <ul className="text-gray-700 space-y-2">
                             <li>• Gestion de crise réputationnelle</li>
                             <li>• Optimisation des profils sociaux</li>
                             <li>• Campagnes de témoignages</li>
                             <li>• Suivi et reporting mensuel</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <div className="bg-gradient-to-r from-udigit-orange to-udigit-blue p-8 rounded-3xl text-center text-white">
                         <h3 className="text-2xl font-bold mb-4">Prêt à transformer votre e-réputation ?</h3>
                         <p className="text-lg mb-6 opacity-90">
                           Contactez-nous dès aujourd'hui pour un audit gratuit de votre présence en ligne et découvrez comment nous pouvons vous aider à construire une image de confiance qui booste vos résultats.
                         </p>
                                                   <div className="flex justify-center">
                            <a
                              href="https://wa.me/22671784721"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-white text-udigit-orange px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
                            >
                              Nous Contacter
                            </a>
                          </div>
                       </div>
                     </div>
                   </>
                 )}

                                 {article.id === 6 && (
                   <>
                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">L'IA révolutionne le numérique</h2>
                       <p className="text-gray-700 leading-relaxed mb-6">
                         L'intelligence artificielle transforme profondément le secteur numérique, créant de nouvelles opportunités et redéfinissant les métiers du digital. Les IA actuelles représentent une révolution technologique sans précédent.
                       </p>
                       <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl mb-6">
                         <h3 className="text-xl font-bold text-gray-900 mb-3">Les IA actuelles et leurs capacités :</h3>
                         <ul className="space-y-2 text-gray-700">
                           <li>• <strong>ChatGPT-5</strong> : Génération de texte, analyse, résolution de problèmes complexes</li>
                           <li>• <strong>DALL-E 3</strong> : Création d'images à partir de descriptions textuelles</li>
                           <li>• <strong>Midjourney</strong> : Génération d'images artistiques et photoréalistes</li>
                           <li>• <strong>Claude</strong> : Analyse de documents, rédaction, assistance créative</li>
                           <li>• <strong>GitHub Copilot</strong> : Assistance au développement de code</li>
                         </ul>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Domaines d'application actuels</h2>
                       <div className="grid md:grid-cols-2 gap-6 mb-8">
                         <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">Génération de contenu</h3>
                           <ul className="space-y-2 text-gray-700">
                             <li>• Rédaction d'articles et de blogs</li>
                             <li>• Création de scripts vidéo</li>
                             <li>• Génération de posts réseaux sociaux</li>
                             <li>• Traduction automatique multilingue</li>
                             <li>• Création de descriptions produits</li>
                           </ul>
                         </div>
                         <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">Design et créativité</h3>
                           <ul className="space-y-2 text-gray-700">
                             <li>• Création de logos et identités visuelles</li>
                             <li>• Design d'interfaces utilisateur</li>
                             <li>• Génération de maquettes web</li>
                             <li>• Création d'illustrations personnalisées</li>
                             <li>• Optimisation de l'expérience utilisateur</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">IA dans le développement web</h2>
                       <p className="text-gray-700 leading-relaxed mb-6">
                         Les développeurs utilisent aujourd'hui des outils IA avancés pour accélérer et améliorer leur travail quotidien.
                       </p>
                       <div className="space-y-6">
                         <div className="border-l-4 border-blue-500 pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">GitHub Copilot & Cursor</h4>
                           <p className="text-gray-700 mb-3">Assistance intelligente au codage qui suggère du code en temps réel, complète automatiquement les fonctions et aide à la résolution de bugs.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Autocomplétion de code contextuelle</li>
                             <li>• Génération de tests unitaires</li>
                             <li>• Refactoring automatique</li>
                             <li>• Documentation automatique</li>
                           </ul>
                         </div>
                         <div className="border-l-4 border-purple-500 pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">IA pour l'optimisation</h4>
                           <p className="text-gray-700 mb-3">Outils d'analyse et d'optimisation des performances web utilisant l'apprentissage automatique.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Optimisation automatique des images</li>
                             <li>• Analyse de la vitesse de chargement</li>
                             <li>• Détection de problèmes de sécurité</li>
                             <li>• Recommandations d'amélioration SEO</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">IA dans le marketing digital</h2>
                       <div className="grid md:grid-cols-3 gap-6 mb-6">
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">📊</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">Analyse prédictive</h4>
                           <p className="text-gray-600 text-sm">Prédiction des tendances, comportements clients et ROI des campagnes</p>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">🎯</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">Ciblage personnalisé</h4>
                           <p className="text-gray-600 text-sm">Segmentation avancée et personnalisation en temps réel</p>
                         </div>
                         <div className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                           <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                             <span className="text-white font-bold text-xl">🤖</span>
                           </div>
                           <h4 className="font-bold text-gray-900 mb-2">Chatbots intelligents</h4>
                           <p className="text-gray-600 text-sm">Service client 24/7 avec compréhension contextuelle</p>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Outils IA populaires en 2025</h2>
                       <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl mb-6">
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Outils de productivité :</h3>
                         <div className="grid md:grid-cols-2 gap-4">
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">Génération de contenu</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• <strong>ChatGPT-5</strong> : Texte, analyse, brainstorming</li>
                               <li>• <strong>Claude</strong> : Rédaction, analyse de documents</li>
                               <li>• <strong>Jasper</strong> : Marketing et copywriting</li>
                               <li>• <strong>Copy.ai</strong> : Contenu commercial</li>
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900 mb-2">Design et création</h4>
                             <ul className="text-sm text-gray-700 space-y-1">
                               <li>• <strong>DALL-E 3</strong> : Images à partir de texte</li>
                               <li>• <strong>Midjourney</strong> : Art et illustrations</li>
                               <li>• <strong>Canva AI</strong> : Design assisté</li>
                               <li>• <strong>Runway ML</strong> : Vidéo et animation</li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact sur l'emploi et les compétences</h2>
                       <p className="text-gray-700 leading-relaxed mb-6">
                         L'IA transforme les métiers du digital, créant de nouvelles opportunités tout en modifiant les compétences requises.
                       </p>
                       <div className="space-y-6">
                         <div className="border-l-4 border-green-500 pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Nouvelles compétences requises</h4>
                           <ul className="text-gray-700 space-y-2">
                             <li>• Maîtrise des prompts et de l'ingénierie prompt</li>
                             <li>• Capacité à évaluer et valider les outputs IA</li>
                             <li>• Compréhension des limites et biais des IA</li>
                             <li>• Intégration des outils IA dans les workflows</li>
                             <li>• Éthique et responsabilité dans l'utilisation de l'IA</li>
                           </ul>
                         </div>
                         <div className="border-l-4 border-orange-500 pl-6">
                           <h4 className="text-lg font-bold text-gray-900 mb-2">Métiers en évolution</h4>
                           <ul className="text-gray-700 space-y-2">
                             <li>• <strong>Prompt Engineer</strong> : Spécialiste de l'optimisation des prompts</li>
                             <li>• <strong>AI Trainer</strong> : Formation et fine-tuning des modèles</li>
                             <li>• <strong>AI Ethics Officer</strong> : Responsable de l'éthique IA</li>
                             <li>• <strong>AI Integration Specialist</strong> : Intégration des outils IA</li>
                           </ul>
                         </div>
                       </div>
                     </div>

                     <div className="mb-8">
                       <h2 className="text-2xl font-bold text-gray-900 mb-4">Tendances futures de l'IA</h2>
                       <div className="grid md:grid-cols-2 gap-6">
                         <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">IA Multimodale</h3>
                           <p className="text-gray-700 mb-3">Fusion du texte, image, audio et vidéo dans un seul modèle.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• Génération de vidéos à partir de texte</li>
                             <li>• Analyse d'images avec contexte</li>
                             <li>• Création de contenu multimédia</li>
                           </ul>
                         </div>
                         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                           <h3 className="text-lg font-bold text-gray-900 mb-3">IA Spécialisée</h3>
                           <p className="text-gray-700 mb-3">Modèles dédiés à des domaines spécifiques.</p>
                           <ul className="text-sm text-gray-600 space-y-1">
                             <li>• IA médicale et diagnostic</li>
                             <li>• IA juridique et analyse de contrats</li>
                             <li>• IA financière et trading</li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </>
                 )}
              </>
            )}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {article.content}
              </p>
              <p className="text-gray-600">
                Restez connectés pour découvrir plus d'articles sur l'écosystème tech au Burkina Faso et les innovations digitales qui transforment notre continent.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-udigit-orange transition-colors duration-300">
                <Share2 className="w-4 h-4" />
                <span>Partager</span>
              </button>
            </div>
            
            {article.pdfLink && (
              <motion.a
                href={article.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-udigit-orange to-udigit-blue text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Télécharger PDF
                <BookOpen className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default BlogArticle
