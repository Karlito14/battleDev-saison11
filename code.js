// Ne supprimez pas ces lignes
// Chargement de l'input de test
let input;
function initInput(valeur) {
  input = valeur;
}

// Ne supprimez pas ces lignes
// Support de LocalPrint et LocalPrintArray utilisées dans les
// réponses des exercices de la saison 11
function LocalPrint(chaine) {
  console.error(chaine);
}
function LocalPrintArray(chaine) {
  console.error(chaine);
}

// -- Développez votre code dans la fonction ContestResponse ci-après
function ContestResponse() {
  // Implémentez votre code ci-dessous
   const nombreRestaurants = +input[0];
   let meilleurMoyenne = 0;
   for(let i = 1 ; i <= nombreRestaurants; i++){
    const notesRestaurant = input[i];
    const tableauNotes = notesRestaurant.split(' ');

    let somme = 0;
    for(let i = 0; i < tableauNotes.length; i++){
      somme += Number(tableauNotes[i]);
    }
    const moyenne = somme / tableauNotes.length;
    if(moyenne > meilleurMoyenne){
      meilleurMoyenne = moyenne;
    }
   }
   console.log(Math.ceil(meilleurMoyenne))
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;
