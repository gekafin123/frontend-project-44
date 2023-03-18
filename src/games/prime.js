import engineofGames from '../index.js';
import getRandomInt from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrime = () => {
  let answer;
  let result;
  const num = getRandomInt(100) + 2;
  const question = `Question: ${num}`;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
      answer = [question, result];
      return answer;
    }
  }
  result = 'yes';
  answer = [question, result];
  return answer;
};

engineofGames(gameRules, brainPrime);

export default brainPrime;
