# Udigit - Site Web de l'Agence

Site web moderne et responsive pour l'agence Udigit, inspiré du design de KOTA avec des animations fluides et une expérience utilisateur exceptionnelle.

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Outil de build rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **React Router** - Navigation entre les pages

## 🎨 Design & Identité Visuelle

- **Couleurs principales** : 
  - Orange : `#F18440`
  - Bleu : `#2A4B9B`
- **Police** : Inter (Google Fonts)
- **Style** : Moderne, minimaliste, inspiré de KOTA

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx      # Navigation principale
│   └── Footer.jsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── Home.jsx        # Page d'accueil
│   ├── Services.jsx    # Page services
│   ├── About.jsx       # Page à propos
│   └── Projects.jsx    # Page projets
├── App.jsx             # Composant principal
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 🛠️ Installation et Démarrage

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd udigit-website
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📱 Fonctionnalités

### Pages Disponibles
- **Accueil** : Présentation de l'agence avec hero section et statistiques
- **Services** : Détail des services offerts (Design, Développement, Branding, Marketing)
- **À Propos** : Histoire et valeurs de l'agence
- **Projets** : Galerie des réalisations avec filtres par catégorie

### Animations
- Animations d'entrée fluides avec Framer Motion
- Effets de hover et interactions
- Transitions de page
- Animations au scroll (scroll-triggered)

### Responsive Design
- Design mobile-first
- Adaptation parfaite sur tous les écrans
- Navigation mobile avec menu hamburger

## 🎯 Caractéristiques Techniques

- **Performance** : Optimisé avec Vite
- **SEO** : Métadonnées et structure sémantique
- **Accessibilité** : Respect des standards WCAG
- **Cross-browser** : Compatible avec tous les navigateurs modernes

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connecter le repository GitHub à Vercel
2. Configurer automatiquement
3. Déploiement automatique à chaque push

### Autres plateformes
- Netlify
- GitHub Pages
- Firebase Hosting

## 📝 Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualiser le build
npm run lint         # Vérification du code
```

## 🎨 Personnalisation

### Couleurs
Modifier les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  'udigit-orange': '#F18440',
  'udigit-blue': '#2A4B9B',
}
```

### Contenu
- Modifier le contenu dans les fichiers des pages
- Ajouter de nouveaux projets dans `Projects.jsx`
- Personnaliser les services dans `Services.jsx`

## 📞 Contact

Pour toute question ou modification :
- Email : contact@udigit.fr
- Téléphone : +33 1 23 45 67 89

## 📄 Licence

© 2024 Udigit. Tous droits réservés.
