/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who directed \'2001\': A Space Odyssey',
      answers: [
        'Stanley Kubrik',
        'Ridley Scott,',
        'John Carpenter',
        'Steven Spielberg'
      ],
      correctAnswer: 'Stanley Kubrik'
    },
    {
      question: 'Who wrote the screenplay for \'2001: A Space Odyssey\'',
      answers: [
        'Aruthur C. Clarke',
        'Phillip K. Dick',
        'Rod Serling',
        'Frank Herbert'
      ],
      correctAnswer: 'Arthur C. Clarke'
    },
    {
      question: 'What was the name of the spacecraft?',
      answers: [
        'Discovery One',
        'Enterprise',
        'Nostromo',
        'Nebuchadnezzar'
      ],
      correctAnswer: 'Discovery One'
    },
    {
      question: 'Who pilots the Discovery One?',
      answers: [
        'Dr. David Bowman',
        'Hakaru Sulu',
        'Naomi',
        'Corbin Dallas'
      ],
      correctAnswer: 'Dr. David Bowman'
    },
    {
      question: '1. What is the name of the AI computer onboard Discovery One?',
      answers: [
        'HAL-9000',
        'GERTY',
        'David',
        'Rehoboam'
      ],
      correctAnswer: 'HAL-9000'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)