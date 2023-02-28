function lancerDes() {
    let des = [];
    for (let i = 0; i < 5; i++) {
      des.push(Math.floor(Math.random() * 6) + 1);
    }
    return des;
  }
  
  // Calcul combinaison
  function calculerScore(des, combinaison) {
    let score = 0;
    switch (combinaison) {
      case "un":
        score = des.filter((d) => d === 1).reduce((acc, d) => acc + d, 0);
        break;
      case "deux":
        score = des.filter((d) => d === 2).reduce((acc, d) => acc + d, 0);
        break;
      case "trois":
        score = des.filter((d) => d === 3).reduce((acc, d) => acc + d, 0);
        break;
      case "quatre":
        score = des.filter((d) => d === 4).reduce((acc, d) => acc + d, 0);
        break;
      case "cinq":
        score = des.filter((d) => d === 5).reduce((acc, d) => acc + d, 0);
        break;
      case "six":
        score = des.filter((d) => d === 6).reduce((acc, d) => acc + d, 0);
        break;
      case "brelan":
        for (let i = 1; i <= 6; i++) {
          if (des.filter((d) => d === i).length >= 3) {
            score = des.reduce((acc, d) => acc + d, 0);
            break;
          }
        }
        break;
      case "carre":
        for (let i = 1; i <= 6; i++) {
          if (des.filter((d) => d === i).length >= 4) {
            score = des.reduce((acc, d) => acc + d, 0);
            break;
          }
        }
        break;
      case "full":
        let freq = {};
        des.forEach((d) => {
          freq[d] = (freq[d] || 0) + 1;
        });
        if (Object.values(freq).includes(3) && Object.values(freq).includes(2)) {
          score = 25;
        }
        break;
      case "petite_suite":
        if (
          (des.includes(1) &&
            des.includes(2) &&
            des.includes(3) &&
            des.includes(4)) ||
          (des.includes(2) &&
            des.includes(3) &&
            des.includes(4) &&
            des.includes(5)) ||
          (des.includes(3) &&
            des.includes(4) &&
            des.includes(5) &&
            des.includes(6))
        ) {
          score = 30;
        }
        break;
      case "grande_suite":
        if (
          des.includes(1) &&
          des.includes(2) &&
          des.includes(3) &&
          des.includes(4) &&
          des.includes(5)
        ) {
          score = 40;
        } else if (
          des.includes(2) &&
          des.includes(3) &&
          des.includes(4) &&
          des.includes(5) &&
          des.includes(6)
        ) {
            score = 40;
          }
        break;
     case "chance":
    score = calculateChance(des);
    break;
    case "yahtzee":
    if (isYahtzee(des)) {
        score = 50;
    }
    break;
    
    
    default:
    score = 0;
    break;
    }
  }

function calculateChance(dice) {
    return dice.reduce((sum, value) => sum + value, 0);
  }

  function isYahtzee(dice) {
    const uniqueValues = new Set(dice);
    return uniqueValues.size === 1;
  }  