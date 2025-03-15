# Tic Tac Toe game

Le Tic Tac Toe est un jeu pour deux joueurs joué sur une grille 3x3. Le but du jeu est d'aligner trois de ses symboles (habituellement "X" ou "O") horizontalement, verticalement ou en diagonale, avant l'adversaire.

Ce jeu est programmé en JavaScript et déployé sur Vercel : **[Jouer à tic tac toe](https://tic-tac-toe-kappa-weld.vercel.app/)**

---

## 1. Objectif pédagogique

Ce projet a pour but d'illustrer plusieurs concepts fondamentaux en programmation et algorithmique :

- **Manipulation du DOM:** gestion des événements et mise à jour dynamique d'une interface utilisateur.

- **Structures de données:** utilisation d'un tableau 2D pour modéliser la grille du jeu.

- **Algorithmes de vérification:** détection des conditions de victoire et de match nul.

- **Optimisation du code:** simplification des conditions de victoire avec une gestion des combinaisons gagnantes.

---

## 2. Aperçu 


<span style="display:flex;">
  <img src="./images/morpion_desktop.svg" alt="Aperçu du jeu desktop" style="margin-right: 2rem;"/>
  <img src="./images/morpion_mobile.svg" alt="Aperçu du jeu mobile" />
</span>

---

## 3. Fonctionnalités

- **Grille interactive** : clique sur les cases pour jouer.
- **Changement automatique de joueur** : après chaque tour le joueur change.
- **Détection du gagnant** : si un joueur aligne trois symboles, un message de victoire est affiché.
- **Réinitialisation** : le jeu peut être réinitialisé une fois qu'il y a un gagnant ou un match nul.

---

## 2. Technologies utilisées

- **HTML** : structure de la page
- **CSS** : mise en page et style du jeu
- **JavaScript** : logique du jeu (ex: gestion des tours, détection de la victoire, mise à jour de l'affichage)

---

## 3. Installation

```
git clone https://github.com/Melissa-code/tic_tac_toe
cd tic_tac_toe
Ouvrir le fichier index.html dans le navigateur
```

---

## 4. Structure du projet

```
📂 tic-tac-toe/
 ┣ 📜 index.html       # Structure de la page HTML
 ┣ 📜 style.css        # Mise en forme de la grille et des éléments
 ┣ 📜 script.js        # Logique du jeu : gestion des tours, détection du gagnant, etc.
 ┗ 📜 README.md        # Documentation du projet
 ```

---

## 5. Explication du fonctionnement

### 5.1. Création et gestion de la grille

Le jeu est représenté par une matrice 3×3 (tableau 2D) stockant les symboles des joueurs:
```
const grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
```

Chaque case est reliée à cette matrice et mise à jour dynamiquement via JavaScript.

### 5.2. Saisie du joueur

Quand un joueur clique sur une case, la fonction `caseJouee()`:

- Vérifie si la case est vide.
- Remplit la case avec "X" ou "O".
- Vérifie s'il y a un gagnant.
- Change de joueur si nécessaire.

Pour trouver l'indice de la matrice correspondant à la case cliquée:  
```
cell 0 : 0,0 → (i=0, j=0)
cell 1 : 0,1 → (i=0, j=1)
cell 2 : 0,2 → (i=0, j=2)
cell 3 : 1,0 → (i=1, j=0)
cell 4 : 1,1 → (i=1, j=1)
cell 5 : 1,2 → (i=1, j=2)
cell 6 : 2,0 → (i=2, j=0)
cell 7 : 2,1 → (i=2, j=1)
cell 8 : 2,2 → (i=2, j=2)
```
- Soit : `i = Math.trunc(cell/3)` retourne la partie entiere d'un nombre (pour ligne)
- Soit : `j = cell % 3` ex: cell8:`8/3=2 reste 2` ou cell 3:`3/3=1 reste 0` (pour colonne)

### 5.3. Vérification des conditions de victoire

Une victoire se produit si l'un des joueurs aligne trois de ses symboles. Les 8 combinaisons gagnantes sont enregistrées dans un tableau:

```
const combinaisonsGagnantes = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], # Lignes
  [0, 3, 6], [1, 4, 7], [2, 5, 8], # Colonnes
  [0, 4, 8], [2, 4, 6]             # Diagonales
];
```
Une boucle vérifie si une de ces combinaisons contient trois symboles identiques.

### 5.4. Fin de la partie

Deux conditions terminent la partie:

- **Un joueur gagne:** la grille est désactivée et un message s'affiche.

- **Match nul:** si toutes les cases sont remplies sans gagnant, le jeu est réinitialisé.

---

## 6. Author

- Melissa-code 








