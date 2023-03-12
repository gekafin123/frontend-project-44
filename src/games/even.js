import engineofGames from '../index.js';
import getRandomInt from '../random.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const number = getRandomInt(100);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  const question = `Question: ${number}`;
  const result = [question, answer];
  return result;
};
engineofGames(gameRules, brainEven);

export default brainEven;
