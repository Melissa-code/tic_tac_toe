var tour = "X";
var matrice = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
var jeuTermine = false; 

/**
 * Affiche X ou O sur la case
 **/
function afficheTour(i, j, tour) {
  let cell = i * 3 + j;
  let id_cellule = "cellule" + cell;

  let case_ = document.getElementById(id_cellule);
  case_.innerText = tour;
}

/**
 * Après le tour change de joueur
 **/
function changeJoueur(tour) {
  if (tour === "X") {
    return "O";
  } else {
    return "X";
  }
}

/**
 * Enregistre les 8 combinaisons jouées à partir de la matrice 
 * dans array combinaisons 
 **/
 function enregistrerCombinaisonsJouees(matrice) {
  let combinaisons = [];

  // Enregistre les 3 lignes dans combinaisons[] 
  for (let i = 0; i < matrice.length; i++) {
    combinaisons.push(matrice[i].join(""));
  }

  // Enregistre les 3 colonnes dans combinaisons[]
  for (let j = 0; j < matrice.length; j++) {
    let colonne = "";
    for (let i = 0; i < matrice.length; i++) {
      colonne += matrice[i][j];
    }
    combinaisons.push(colonne);
  }

  // Enregistre les 2 diagonales dans combinaisons[]
  let diagonale1 = "";
  let diagonale2 = "";
  for (let i = 0; i < matrice.length; i++) {
    diagonale1 += matrice[i][i];
    diagonale2 += matrice[i][2 - i];
  }
  combinaisons.push(diagonale1);
  combinaisons.push(diagonale2);

  return combinaisons;
}

/**
 * Réinitialise le jeu 
 * Vide la matrice 
 * Efface le tour X ou O sur les cases 
 **/
 function reinitialiserJeu() {
  matrice = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  for (let i = 0; i < 9; i++) {
    document.getElementById("cellule" + i).innerText = "";
  }
  divGagnant.innerText = "";
  jeuTermine = false;
}

/**
 * Affiche le gagnant 
 * Puis réinitilise le jeu à zéro 
 * 
 **/
function afficherGagnant(combinaisons, combinaison) {
  if (combinaisons.includes(combinaison)) {
    // ne garde que le 1er symbole (X ou O)
    let symbole = combinaison.slice(0, -2);
    divGagnant.innerText = `Le joueur ${symbole} a gagné!`;
    jeuTermine = true; 
  } 
}

/**
 * Vérifie si la matrice ne contient aucun espace vide " "
 * return bool 
 **/
function verifieMatriceRemplie(matrice) {
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
      if (matrice[i][j] === " ") {
        
        return false;
      } 
    }
  }
  return true;
}

/**
 * Enregistre dans la matrice le tour et change de joueur
 * Vérouille le jeu 
 **/
function caseJouee(cell) {
  if (jeuTermine) return;
  
  let i = Math.trunc(cell / 3);
  let j = cell % 3;
  // Sachant l'indice i,j => matrice[i][j]= X/O selon le tour
  //console.log("indices de la case jouée:", i, j);

  // Vérouille case est déjà remplie
  if (matrice[i][j] !== " ") {
   
    return; 
  }

  // Enregistre X ou O dans la matrice (array)
  if (matrice[i][j] === " ") {
    matrice[i][j] = tour;
  }

  // Affiche le tour sur la case
  afficheTour(i, j, tour);
  tour = changeJoueur(tour);

  // Générer les combinaisons jouées à partir de la matrice
  divGagnant = document.getElementById("gagnant"); 
  let combinaisons = enregistrerCombinaisonsJouees(matrice);

  // Vérifie si la chaîne "XXX" ou "OOO" existe dans le tableau combinaisons
  afficherGagnant(combinaisons, "XXX") ;
  afficherGagnant(combinaisons, "OOO") ;

  // Si aucun gagnant (exaequo)
  if (!combinaisons.includes("XXX") && !combinaisons.includes("OOO") && verifieMatriceRemplie(matrice)) {
    divGagnant.innerText = `Aucun gagnant`;
  } 
}
