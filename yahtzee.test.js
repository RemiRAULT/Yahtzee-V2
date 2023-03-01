// yahtzee.test.js

const { lancerDes, trierDes, compterDes, estValide, calculerScore } = require('./yahtzee');

describe('lancerDes', () => {
  test('renvoie un tableau de 5 nombres', () => {
    const des = lancerDes();
    expect(des.length).toBe(5);
    expect(des.every(d => typeof d === 'number')).toBe(true);
  });
});

describe('trierDes', () => {
  test('renvoie un tableau trié par ordre croissant', () => {
    const des = [3, 1, 4, 5, 2];
    const desTries = trierDes(des);
    expect(desTries).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('compterDes', () => {
  test('renvoie le nombre de dés ayant une certaine valeur', () => {
    const des = [3, 1, 4, 5, 3];
    expect(compterDes(des, 3)).toBe(2);
    expect(compterDes(des, 2)).toBe(0);
  });
});

describe('estValide', () => {
  test('renvoie true si la combinaison est valide', () => {
    const des = [3, 3, 3, 5, 2];
    expect(estValide(des, 'brelan')).toBe(true);
  });

  test('renvoie false si la combinaison n\'est pas valide', () => {
    const des = [3, 3, 5, 5, 2];
    expect(estValide(des, 'brelan')).toBe(false);
  });
});

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [3, 3, 3, 5, 2];
    expect(calculerScore(des, 'brelan')).toBe(16);
  });
});

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [4, 4, 4, 4, 2];
    expect(calculerScore(des, 'carre')).toBe(18);
  });
});

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [4, 4, 4, 3, 3];
    expect(calculerScore(des, 'full')).toBe(25);
  });
});

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [1, 2, 3, 4, 1];
    expect(calculerScore(des, 'petiteSuite')).toBe(30);
  });
});


describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [1, 2, 3, 4, 5];
    expect(calculerScore(des, 'grandeSuite')).toBe(40);
  });
});

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [5, 5, 5, 5, 5];
    expect(calculerScore(des, 'yahtzee')).toBe(50);
  });
});

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [1, 5, 4, 1, 2];
    expect(calculerScore(des, '')).toBe(13);
  });
});

describe('calculerScore', () => {
  test('renvoie le score pour une combinaison', () => {
    const des = [5, 3, 6, 1, 4];
    expect(calculerScore(des, '')).toBe(19);
  });
});

