const lancerDes = require('./yahtzee');
const calculerScore = require('./yahtzee');
const calculateChance = require('./yahtzee');
const isYahtzee = require('./yahtzee');

describe("calculerScore", () => {
    const des = [1, 2, 3, 4, 5];
  
    it("calcule le score pour la combinaison 'un' !", () => {
      expect(calculerScore(des, "un")).toBe(1);
    });
});