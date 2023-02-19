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
/* 
  31   49  
  40   40
  49   31
  15   15
  24   24
  16   16
*/
// -- Développez votre code dans la fonction ContestResponse ci-après
function ContestResponse() {
  // Implémentez votre code ci-dessous

  //je créé un tableau avec toutes mes notes
  const chaineMesNotes = input[0].split(' ');
  let mesNotes = [];
  for (let i = 0; i < chaineMesNotes.length; i++) {
    mesNotes.push(+chaineMesNotes[i])
  }

  const nombreCopains = +input[1];
  const meilleurCopains = +input[2];

  let distances = [];
  for (let i = 3; i < nombreCopains + 3; i++) {
    // Je créé un tableau avec les notes de chaque copain
    const chaineNotesCopains = input[i].split(' ');
    const notesCopains = [];
    for (let i = 0; i < chaineNotesCopains.length; i++) {
      notesCopains.push(+chaineNotesCopains[i])
    }

    let distance = 0;
    for (let i = 0; i < mesNotes.length; i++) {
      // Je regarde les différence de notes entre lui et moi
      distance += Math.abs(mesNotes[i] - notesCopains[i]);
    }
    distances.push(distance);
  }

  let somme = 0;
  for(let i = 0; i < meilleurCopains; i++){
    // Je récupère l'index du copain avec la plus petite différence de notes
    const positionMeilleurCopain = distances.indexOf(Math.min(...distances));
    // Je récupère la note de rocky6 de ce meilleur copain
    const noteRocky6 = +input[positionMeilleurCopain + 3].split(' ').slice(-1);
    somme += noteRocky6;
    distances[positionMeilleurCopain] = Number.MAX_VALUE;
  }
  console.log(Math.floor(somme / meilleurCopains))
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;
