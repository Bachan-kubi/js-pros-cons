// Project: Simple Quiz Game

// Objective: Create a simple quiz game that asks the user multiple-choice questions and provides feedback on their answers.

// Features:

// Store a set of questions with options and correct answers.
// Display questions to the user and prompt for answers.
// Provide feedback on whether the answer is correct or not.
// Keep track of the user's score.
// Allow the user to quit the quiz at any time.


// // Define an array of questions with options and correct answers
// const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["London", "Berlin", "Paris", "Madrid"],
//       correctAnswer: "Paris"
//     },
//     {
//       question: "Which planet is known as the 'Red Planet'?",
//       options: ["Venus", "Mars", "Jupiter", "Neptune"],
//       correctAnswer: "Mars"
//     },
//     {
//       question: "What gas do plants use for photosynthesis?",
//       options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
//       correctAnswer: "Carbon Dioxide"
//     }
//   ];
  
//   // Initialize score
//   let score = 0;
  
//   // Function to display and interact with the quiz
//   function startQuiz() {
//     console.log("Welcome to the Quiz Game!\n");
  
//     for (let i = 0; i < questions.length; i++) {
//       console.log(`Question ${i + 1}: ${questions[i].question}`);
      
//       for (let j = 0; j < questions[i].options.length; j++) {
//         console.log(`${j + 1}. ${questions[i].options[j]}`);
//       }
      
//       const userAnswer = prompt("Enter the number of your answer: ");
      
//       if (userAnswer === (questions[i].options.indexOf(questions[i].correctAnswer) + 1).toString()) {
//         console.log("Correct!\n");
//         score++;
//       } else {
//         console.log(`Incorrect. The correct answer is: ${questions[i].correctAnswer}\n`);
//       }
//     }
  
//     console.log(`Quiz completed. Your score: ${score} out of ${questions.length}`);
//   }
  
//   // Start the quiz
//   startQuiz();
  