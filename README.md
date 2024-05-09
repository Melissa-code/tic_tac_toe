# Tic Tac Toe game


## 1. Créer la matrice qui va stocker les valeurs


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
- change de joueur après le tour 


## 5. Vérifier chaque ligne pour afficher le gagnant 
- Mise en place un compteur 
- Parcours de la matrice et de chaque ligne 
- Si une ligne contient 3 X  à la suite ou O, affiche le gagnant 


## 6. Vérifier chaque colonne pour afficher le gagnant 
- Mise en place un compteur 
- Parcours de la matrice et de chaque colonne (inverse j et i dans les boucles for)
- Si une colonne contient 3 X  à la suite ou O, affiche le gagnant 


## 7. Vérifier les 2 diagonales pour afficher le gagnant 
- Mise en place de 2 compteurs X et O 
- Parcours de la matrice et de chaque ligne 
- 1re diagonale: `00 11 22 => i,i (j = i) donc if (matrice[i][i] === "X")`
- 2e diagonale : `02 11 20 => i, 2-i (j = 2-i) donc if (matrice[i][2 - i] === "X")`
- Si une ligne contient 3 X  à la suite ou O, affiche le gagnant 


## 8. Créer la function enregistrerCombinaisonsJouees(matrice) pour optimiser le code 
- Enregistre les 8 combinaisons possible dans un tableau combinaisons 


## 9. Créer la function afficherGagnant()
- Vérifie si la combinaison "XXX" ou "OOO" (string) est dans combinaisons (array)
- Si oui affiche un message annpnçant le gagnant 
- Puis réinitialisation du jeu (vide la matrice et effece le tour sur les cases)



