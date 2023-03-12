import engineofGames from '../index.js';
import getRandomInt from '../random.js';

const gameRules = 'What is the result of the expression?';

const brainCalc = () => {
  const coll = ['+', '-', '*'];
  const number1 = getRandomInt(20);
  const number2 = getRandomInt(10);
  const sign = coll[getRandomInt(3)];
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
  }
  const question = `Question: ${number1} ${sign} ${number2}`;
  const result = [question, correctAnswer.toString()];
  return result;
};
engineofGames(gameRules, brainCalc);

export default brainCalc;
