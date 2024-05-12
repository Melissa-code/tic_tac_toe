# Tic Tac Toe game

Le Tic Tac Toe est un jeu pour deux joueurs joué sur une grille 3x3. Le but du jeu est d'aligner trois de ses symboles (habituellement "X" ou "O") horizontalement, verticalement ou en diagonale, avant l'adversaire.

Ce jeu a été programmé en JavaScript. 

Jouer à ce jeu: (tic_tac_toe)[https://tic-tac-toe-kappa-weld.vercel.app/]


## 1. Créer la matrice qui va stocker les valeurs
- tableau à 2 dimensions


## 2. Créer la fonction caseJouee() 
- enregistre X ou O dans la matrice,
- change de joueur 

Pour trouver l'indice de la matrice correspondant à la case cliquée: 

`cell 0 : 0,0` -> i = 0 et j = 0 

`cell 1 : 0,1` -> i = 0 et j = 1

`cell 2 : 0,2` -> i = 0 et j = 2 

`cell 3 : 1,0` -> i = 1 et j = 0 

`cell 4 : 1,1` -> i = 1 et j = 1

`cell 5 : 1,2` -> i = 1 et j = 2 

`cell 6 : 2,0` -> i = 2 et j = 0 

`cell 7 : 2,1` -> i = 2 et j = 1 

`cell 8 : 2,2` -> i = 2 et j = 2


Soit : `i = Math.trunc(cell/3)` retourne la partie entiere d'un nombre

Soit : `j = cell % 3` ex: cell8 : 8/3=2 reste 2 ou cell 3: 3/3=1 reste 0


## 3. Créer la fonction afficheTour() 
- affiche X ou 0 sur la case 

A l'inverse si l'on connaît les indices i et j : 

`cell = i*3+j`


## 4. Créer la fonction changeJoueur() 
- Change de joueur après le tour 


## 5. Créer la function enregistrerCombinaisonsJouees(matrice) pour optimiser le code 
- Enregistre les 8 combinaisons possibles dans un tableau combinaisons 

### 5-1. Ajout des 3 lignes au tableau combinaisons
- Parcours de chaque ligne de la matrice  
- Ajoute la combinaison des 3 lignes (string) dans le tableau combinaisons 


### 5-2. Ajout des 3 colonnes au tableau combinaisons
- Parcours de chaque colonne la matrice (inverse j et i dans les boucles for)
- Ajoute la combinaison des 3 colonnes dans le tableau combinaisons 


### 5-3. Ajout des 2 diagonales au tableau combinaisons
- Parcours chaque ligne de la matrice 
- 1re diagonale: `00 11 22 => i,i (j = i) donc if (matrice[i][i] === "X")`
- 2e diagonale : `02 11 20 => i, 2-i (j = 2-i) donc if (matrice[i][2 - i] === "X")`
- Ajoute la combinaison des 2 diagonales dans le tableau combinaisons 


## 6. Ajout d'une variable globale booléenne `jeuTermine` 
- pour réinitiliser le jeu au clic sur le bouton 


## 7. Créer la function afficherGagnant()
- Vérifie si la combinaison "XXX" ou "OOO" (string) est dans le tableau combinaisons 
- Si oui affiche un message annonçant le gagnant 
- Et vérouille le jeu (le joueur suivant ne peut plus jouer): `if (jeuTermine) return;`


## 8. créer une fonction verifieMatriceRemplie() 
- pour pouvoir afficher un message s'il n'y a aucun gagnant






