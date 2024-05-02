# Tic Tac Toe game


1. Créer la matrice qui va stocker les valeurs


2. Créer la fonction caseJouee() 
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

Soit : `i = Math.trunc(cell/3)` // retourne la partie entiere d'un nombre
Soit : `j = cell % 3` // ex: cell8 : 8/3=2 reste 2 ou cell 3: 3/3=1 reste 0


3. Créer la fonction afficheTour() 
- affiche X ou 0 sur la case 

A l'inverse si l'on connaît les indices i et j : 
`cell = i*3+j`


4. Créer la fonction changeJoueur() 
- change de joueur après le tour 
