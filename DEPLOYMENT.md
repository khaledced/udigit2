# Guide de Déploiement - Udigit Website

## 🚀 Déploiement sur Vercel

### Étape 1 : Préparation du Repository

1. **Initialiser Git** (si pas déjà fait)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Udigit website"
   ```

2. **Créer un repository GitHub**
   - Allez sur [GitHub](https://github.com)
   - Créez un nouveau repository
   - Poussez votre code :
   ```bash
   git remote add origin https://github.com/votre-username/udigit-website.git
   git branch -M main
   git push -u origin main
   ```

### Étape 2 : Configuration Vercel

1. **Créer un compte Vercel**
   - Allez sur [Vercel](https://vercel.com)
   - Connectez-vous avec votre compte GitHub

2. **Importer le projet**
   - Cliquez sur "New Project"
   - Sélectionnez votre repository `udigit-website`
   - Vercel détectera automatiquement que c'est un projet Vite

3. **Configuration automatique**
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

4. **Variables d'environnement** (optionnel)
   - Ajoutez si nécessaire dans les paramètres du projet

### Étape 3 : Déploiement

1. **Déploiement automatique**
   - Vercel déploiera automatiquement votre site
   - Vous recevrez une URL comme : `https://udigit-website.vercel.app`

2. **Domain personnalisé** (optionnel)
   - Dans les paramètres du projet Vercel
   - Allez dans "Domains"
   - Ajoutez votre domaine personnalisé (ex: `udigit.fr`)

### Étape 4 : Configuration DNS (si domaine personnalisé)

1. **Ajouter les enregistrements DNS**
   - `A` record : `76.76.19.36`
   - `CNAME` record : `cname.vercel-dns.com`

2. **Vérification**
   - Vercel vérifiera automatiquement la configuration
   - Le site sera accessible sur votre domaine

## 🔄 Déploiements Automatiques

### Mise à jour du site
1. **Modifier le code localement**
2. **Pousser les changements**
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. **Vercel déploiera automatiquement**

### Branches de développement
- **Main branch** : Déploiement automatique en production
- **Feature branches** : Déploiement automatique en preview

## 📊 Monitoring et Analytics

### Vercel Analytics
1. **Activer Vercel Analytics**
   - Dans les paramètres du projet
   - Onglet "Analytics"
   - Cliquez sur "Enable Analytics"

2. **Google Analytics** (optionnel)
   - Ajoutez votre ID GA dans les variables d'environnement
   - Modifiez `index.html` pour inclure le script GA

## 🔧 Optimisations

### Performance
- ✅ Build optimisé avec Vite
- ✅ Images optimisées automatiquement
- ✅ Compression gzip activée
- ✅ Cache des assets configuré

### SEO
- ✅ Métadonnées configurées
- ✅ Structure sémantique
- ✅ Sitemap automatique (optionnel)

## 🛠️ Commandes Utiles

```bash
# Build local
npm run build

# Preview du build
npm run preview

# Développement local
npm run dev

# Linting
npm run lint
```

## 📱 Test Post-Déploiement

1. **Vérifier la responsivité**
   - Test sur mobile, tablette, desktop
   - Vérifier les animations

2. **Tester la navigation**
   - Toutes les pages accessibles
   - Liens fonctionnels

3. **Vérifier les performances**
   - PageSpeed Insights
   - Lighthouse audit

## 🆘 Dépannage

### Problèmes courants

1. **Build échoue**
   - Vérifier les logs dans Vercel
   - Tester le build localement

2. **Images ne se chargent pas**
   - Vérifier les chemins des images
   - S'assurer qu'elles sont dans le dossier `public`

3. **Animations ne fonctionnent pas**
   - Vérifier que Framer Motion est installé
   - Tester sur différents navigateurs

### Support
- **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support** : [vercel.com/support](https://vercel.com/support)

## 🎉 Félicitations !

Votre site Udigit est maintenant en ligne et prêt à impressionner vos clients !
