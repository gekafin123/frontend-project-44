import readlineSync from 'readline-sync';

const round = 3;
const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= round; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const answer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (answer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
