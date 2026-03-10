# PRD — Site de Formation Soudure

## Problem Statement
Site web pedagogique multi-pages sur les techniques de soudure en francais. Theme industriel sombre avec accents ambre/feu. 22 sections couvrant tous les aspects de la metallerie et du soudage.

## Architecture
- **Frontend**: React SPA avec hash routing (compatible GitHub Pages)
- **Backend**: Non utilise (contenu statique)

## What's Been Implemented (Dec 2025)
### Pages (22 sections) :
1. Accueil (hero sparks, navigation, galerie images Alesium)
2. Histoire de la Soudure (timeline interactive + video)
3. Securite & EPI (9 items detailles + video)
4. CAO Specifique Soudure (logiciels, regles conception, DFM)
5. Decoupe Laser (principe, gaz, regles conception, capacites)
6. Decoupe Plasma (principe, comparaison, regles, securite)
7. Pliage CNC (principe, regles, table V/epaisseur)
8. Preparation & Assemblage (chanfreins, joints, symboles ISO)
9. Principe des Marbres (types, accessoires, methodologie)
10. Mecano-Assemblage (flux production, bonnes pratiques)
11. SMAW / Electrode Enrobee (parametres, defauts, technique)
12. MIG / MAG (parametres, gaz, modes transfert)
13. TIG / GTAW (tungstenes, technique deux mains)
14. Autres Procedes (8 procedes industriels)
15. Positions de Soudage (nomenclature ISO, conseils)
16. Deformation des Pieces (types, facteurs, prevention, redressage)
17. Metallurgie Utile (ZAT, Ceq, aciers, alu, inox)
18. Normes & Qualite (WPS, PQR, ISO 9606, CND)
19. Outils & Outillage (7 categories)
20. Tables & Fiches (4 tables filtrables)
21. Module Formation 20H (10 seances expandables)
22. Evolutions & Futur (8 thematiques)

### Fonctionnalites :
- Navigation sidebar avec 22 items
- Hash routing (#cao, #decoupe_laser, etc.)
- Videos YouTube verifiees et fonctionnelles
- Images Alesium.fr + Unsplash
- Liens directs Alesium, Gracz, Claustra.gracz
- Tables filtrables avec recherche
- Progression de lecture, back to top
- Responsive mobile/desktop
- Toutes mentions CTT SIGMA supprimees

## Prioritized Backlog
### P1
- Ajouter accents francais (e, a, c) aux textes
- Tables supplementaires (prechauffage, compatibilite)
- Mode quiz/QCM interactif

### P2
- Recherche globale dans le contenu
- Version imprimable CSS
- Animations d'entree par section
