import engineofGames from '../index.js';
import getRandomInt from '../random.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  let number1 = getRandomInt(100);
  let number2 = getRandomInt(100);
  const question = `Question: ${number1} ${number2}`;
  let result;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
    result = number1 + number2;
  }
  const answer = [question, result.toString()];
  return answer;
};
engineofGames(gameRules, brainGcd);

export default brainGcd;
