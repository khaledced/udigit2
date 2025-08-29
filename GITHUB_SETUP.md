# Configuration GitHub et Déploiement GitHub Pages

## 1. Créer le dépôt GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Connectez-vous à votre compte
3. Cliquez sur le bouton "+" en haut à droite, puis "New repository"
4. Nommez le dépôt : `udigit2`
5. Laissez-le en public (pour GitHub Pages gratuit)
6. **NE PAS** initialiser avec README, .gitignore ou licence (nous avons déjà ces fichiers)
7. Cliquez sur "Create repository"

## 2. Connecter votre projet local au dépôt GitHub

Une fois le dépôt créé, GitHub vous donnera des instructions. Utilisez ces commandes :

```bash
# Ajouter le remote origin
git remote add origin https://github.com/[VOTRE_USERNAME]/udigit2.git

# Pousser le code vers GitHub
git branch -M main
git push -u origin main
```

## 3. Installer les dépendances pour GitHub Pages

```bash
npm install --save-dev gh-pages
```

## 4. Configurer GitHub Pages

1. Allez dans les paramètres de votre dépôt GitHub
2. Scroll vers le bas jusqu'à la section "Pages"
3. Dans "Source", sélectionnez "Deploy from a branch"
4. Choisissez la branche `gh-pages` et le dossier `/ (root)`
5. Cliquez sur "Save"

## 5. Déployer le site

```bash
npm run deploy
```

## 6. Vérifier le déploiement

Après quelques minutes, votre site sera disponible à :
`https://[VOTRE_USERNAME].github.io/udigit2`

## Notes importantes

- Remplacez `[VOTRE_USERNAME]` par votre nom d'utilisateur GitHub
- Le site peut prendre quelques minutes à se déployer
- Assurez-vous que le dépôt est public pour utiliser GitHub Pages gratuitement
- Si vous modifiez le code, utilisez `npm run deploy` pour redéployer

## Structure finale

```
udigit2/
├── src/                 # Code source React
├── public/              # Assets statiques
├── dist/                # Build de production (généré)
├── package.json         # Configuration du projet
├── vite.config.js       # Configuration Vite
├── tailwind.config.js   # Configuration Tailwind
└── README.md           # Documentation
```
