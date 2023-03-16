import engineofGames from '../index.js';
import getRandomInt from '../random.js';

const gameRules = 'What number is missing in the progression?';
const brainProgression = () => {
  const lengthProgress = 10;
  const step = getRandomInt(5) + 1;
  const first = getRandomInt(20);
  const fantom = getRandomInt(lengthProgress);
  const point = '..';
  const result = [first];
  for (let i = 1; i < lengthProgress; i += 1) {
    result[i] = result[i - 1] + step;
    result.push();
  }
  const answer = result[fantom];
  result[fantom] = point;
  const metod = result.join(' ');
  const question = `Question: ${metod}`;
  const output = [question, answer.toString()];
  return output;
};

engineofGames(gameRules, brainProgression);

export default brainProgression;
