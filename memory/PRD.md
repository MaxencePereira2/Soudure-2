# PRD — Site de Formation Soudure

## Problem Statement
Site web pedagogique multi-pages sur les techniques de soudure en francais. Theme industriel sombre avec accents ambre/feu. 12+ sections couvrant histoire, securite, procedes (SMAW, MIG/MAG, TIG), metallurgie, normes, outils, tables de parametres.

## Architecture
- **Frontend**: React SPA avec hash routing (compatible GitHub Pages)
- **Backend**: Non utilise (contenu statique)
- **Base de donnees**: Non utilisee

## User Personas
- Etudiants novices en soudure (CTT SIGMA Clermont-Ferrand)
- Formateurs professionnels
- Soudeurs en reconversion

## Core Requirements (Static)
- 15 pages de contenu technique en francais
- Navigation sidebar avec routing hash
- Tables de parametres interactives avec filtrage
- Videos YouTube integrees
- Effet particules spark sur hero
- Theme industriel sombre (#0f1012, #e8823a)
- Responsive mobile/tablet/desktop

## What's Been Implemented (Dec 2025)
- [x] Home page avec hero, sparks, navigation cards, images alesium.fr
- [x] Histoire de la Soudure (timeline interactive)
- [x] Securite & EPI (9 items detailles)
- [x] SMAW/Electrode Enrobee (parametres, defauts, technique)
- [x] MIG/MAG (parametres, gaz, modes de transfert)
- [x] TIG/GTAW (tungstenes, technique deux mains)
- [x] Autres Procedes (8 procedes industriels)
- [x] Metallurgie Utile (ZAT, Ceq, aciers, alu, inox)
- [x] Preparation & Assemblage (chanfreins, joints, symboles ISO)
- [x] Positions de Soudage (nomenclature ISO, conseils)
- [x] Normes & Qualite (WPS, PQR, ISO 9606, CND)
- [x] Outils & Outillage (7 categories)
- [x] Tables & Fiches (4 tables filtrables)
- [x] Module SIGMA 20H (10 seances expandables)
- [x] Evolutions & Futur (8 thematiques)
- [x] Sidebar navigation sticky
- [x] Back to top button
- [x] Reading progress bar
- [x] Mobile responsive

## Prioritized Backlog
### P0 (Fait)
- Tous les contenus des 15 pages

### P1 (Prochaines etapes)
- Ajout d'accents (e, a, c) aux textes francais
- More YouTube videos per section
- Print-friendly CSS
- Table des temperatures de prechauffage
- Table compatibilite metal base/apport/gaz

### P2 (Ameliorations)
- Animations d'entree par section
- Mode quiz interactif pour auto-evaluation
- Recherche globale dans tout le contenu
- Dark/light mode toggle
