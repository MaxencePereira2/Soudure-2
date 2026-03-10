# Formation Soudure — Par Alesium

Site de formation professionnelle soudure (20h) — support pédagogique pour étudiants novices.

## Déploiement sur GitHub Pages

1. Créer un repository GitHub
2. Copier **tout le contenu** de ce dossier à la racine du repo (pas dans un sous-dossier)
3. Push sur `main`
4. Aller dans **Settings > Pages > Source** : sélectionner `main` / `/ (root)`
5. Le site sera accessible à `https://votre-username.github.io/nom-du-repo/`

### Structure

```
/ (racine du repo)
├── .nojekyll          ← Empêche Jekyll de filtrer les fichiers _prefixés
├── index.html         ← Page d'entrée
├── 404.html           ← Fallback SPA (copie de index.html)
├── asset-manifest.json
└── static/
    ├── css/
    │   └── main.*.css
    └── js/
        └── main.*.js
```

### Contenu (22 sections)

- Accueil, Histoire, Sécurité & EPI
- CAO pour soudure, Découpe laser, Découpe plasma, Pliage CNC
- Préparation & assemblage, Principe des marbres, Mécano-assemblage
- SMAW, MIG/MAG, TIG, Autres procédés
- Positions de soudage, Déformation des pièces, Métallurgie utile
- Normes & qualité, Outils & outillage, Tables & fiches pratiques
- Module formation 20H, Évolutions & futur

## Crédits

- **Formation** : [Alesium](https://www.alesium.fr) — Maxence Pereira
- **Atelier** : [Gracz](https://www.gracz.fr) | [Claustra Gracz](https://claustra.gracz.fr)
