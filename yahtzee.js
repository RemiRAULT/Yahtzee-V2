// yahtzee.js

// Fonction pour lancer les dés
function lancerDes() {
  return Array.from({length: 5}, () => Math.floor(Math.random() * 6) + 1);
}

// Fonction pour trier les dés par ordre croissant
function trierDes(des) {
  return des.sort((a, b) => a - b);
}

// Fonction pour compter le nombre de dés ayant une certaine valeur
function compterDes(des, valeur) {
  return des.filter(d => d === valeur).length;
}

// Fonction pour vérifier si une combinaison est valide
function estValide(des, combinaison) {
  switch (combinaison) {
    case 'brelan':
      return des.some(d => compterDes(des, d) >= 3);
    case 'carre':
      return des.some(d => compterDes(des, d) >= 4);
    case 'full':
      return des.some(d => compterDes(des, d) === 3) &&
             des.some(d => compterDes(des, d) === 2);
    case 'petiteSuite':
      return trierDes(des).join('') === '12345' ||
             trierDes(des).join('') === '23456';
    case 'grandeSuite':
      return trierDes(des).join('') === '12345' ||
             trierDes(des).join('') === '23456';
    case 'yahtzee':
      return des.every(d => d === des[0]);
    default:
      return true;
  }
}

// Fonction pour calculer le score pour une combinaison
function calculerScore(des, combinaison) {
  switch (combinaison) {
    case 'brelan':
      return des.reduce((acc, d) => acc + d, 0);
    case 'carre':
      return des.reduce((acc, d) => acc + d, 0);
    case 'full':
      return 25;
    case 'petiteSuite':
      return 30;
    case 'grandeSuite':
      return 40;
    case 'yahtzee':
      return 50;
    default:
      return des.reduce((acc, d) => acc + d, 0);
  }
}

module.exports = {
  lancerDes,
  trierDes,
  compterDes,
  estValide,
  calculerScore,
};
