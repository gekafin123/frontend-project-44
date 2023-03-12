import readlineSync from 'readline-sync';

const engineofGames = (originalQuestion, game) => {
  const round = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(originalQuestion);
  for (let i = 1; i <= round; i += 1) {
    const originalData = game();
    console.log(originalData[0]);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (originalData[1] === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${originalData[1]}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engineofGames;
