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
  const prixMenu = +input[0];
  const nombreTables = +input[1]

  let totalVente = 0;
  for (let i = 2; i < nombreTables + 2; i++) {
    const personneParTable = Number(input[i]);
    if(personneParTable >= 10){
      totalVente += personneParTable * (prixMenu - prixMenu * 0.3)
    } else if(personneParTable >= 6 && personneParTable < 10){
      totalVente += personneParTable * (prixMenu - prixMenu * 0.2)
    } else if(personneParTable >= 4 && personneParTable < 6){
      totalVente += personneParTable * (prixMenu - prixMenu * 0.1)
    } else {
      totalVente += personneParTable *prixMenu
    }
  }

  console.log(Math.ceil(totalVente))
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;
