import { createInterface } from "readline";
import { stdin, stdout } from "process";

const rl = createInterface({
  input: stdin,
  output: stdout
});

let questionData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter"
  },

  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: "Au"
  }
];
const displayOptions = (question) => {
  console.log(question.question);
  question.options.forEach((item, index) => {
    console.log(`${index + 1} . ${item}`);
  });
};

const generateAnswer = (quest, answer) => {
  const answerProvided = questionData[quest];
  let checkAnswer = answerProvided.answer;
  if (answer == checkAnswer) {
    console.log(answerProvided, checkAnswer);
    console.log("correct");
  } else {
    console.log("incorrect");
  }
};

const getQuestion = () => {
  for (let i = 0; i < questionData.length; i++) {
    console.log(questionData[i].question);
    displayOptions(questionData[i]);
    rl.question(``, (answer) => {
      generateAnswer(i, answer);
      getQuestion();
    });
  }
};
let i = 0;

const genQuestion = () => {
  if (i < questionData.length) {
    rl.question(
      displayOptions(questionData[i]),
      (answer) => console.log(answer),
      i++,
      genQuestion()
    );
  }
};

genQuestion();
