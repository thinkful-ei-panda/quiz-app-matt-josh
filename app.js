/* eslint-disable quotes */
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
        'Stanley Kubrick',
        'Ridley Scott',
        'John Carpenter',
        'Steven Spielberg'
      ],
      correctAnswer: 'Stanley Kubrick'
    },
    {
      question: 'Who wrote the screenplay for \'2001: A Space Odyssey\'',
      answers: [
        'Frank Herbert',
        'Phillip K. Dick',
        'Rod Serling',
        'Arthur C. Clarke'
      ],
      correctAnswer: 'Arthur C. Clarke'
    },
    {
      question: 'What was the name of the spacecraft?',
      answers: [
        'Nostromo',
        'Enterprise',
        'Discovery One',
        'Nebuchadnezzar'
      ],
      correctAnswer: 'Discovery One'
    },
    {
      question: 'Who pilots the Discovery One?',
      answers: [
        'Hakaru Sulu',
        'Dr. David Bowman',
        'Naomi',
        'Corbin Dallas'
      ],
      correctAnswer: 'Dr. David Bowman'
    },
    {
      question: 'What is the name of the AI computer onboard Discovery One?',
      answers: [
        'Rehoboam',
        'GERTY',
        'David',
        'HAL-9000'
      ],
      correctAnswer: 'HAL-9000'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  outOf: 0
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

function startPage() {
  return $('main').html(
    `<div class="container">
        <div class="start">
          <div class="group">
              <div class="item">
                <h1>2001: A Space Odyssey: The Quiz</h1>
                <p> Daisy, daisy, give me your answer, do.</p>
              </div>
              <div class="button-center">
                <button id="startButton" type="submit">Start</button>
            </div>
        </div>
      </div>
    </div>`);
}
function endPage() {
  return $('main').html(
    `<div class="container">
      <div class="end">
        <div class="group">
          <div class="item">
            <h2>Final Score</h2>
            <p>${store.score} / ${store.outOf}</p>
        </div>
        <div class="button-center">
            <button id="js-restart">Restart</button>
        </div>
        </div>
      </div>
    </div>`
  );
}
function questionPage() {
  const question = store.questions[store.questionNumber].question;
  const answer1 = store.questions[store.questionNumber].answers[0];
  const answer2 = store.questions[store.questionNumber].answers[1];
  const answer3 = store.questions[store.questionNumber].answers[2];
  const answer4 = store.questions[store.questionNumber].answers[3];

  return $('main').html(
    `<div class="container">
    <div class="group">
        <div class="header">
            <div class="question-count"></div>
            <div class="score-count"></div>
        </div>
        <div class="item">
            <h2>${question}</h2>
        </div>
        <div>
            <form id="js-form">
                <span><input type="radio" id="${answer1}" name="answers" value="${answer1}" required />
                <label for="answer1">${answer1}</label></span>
                <span><input type="radio" id="${answer2}" name="answers" value="${answer2}" required />
                <label for="answer2">${answer2}</label></span>
                <span><input type="radio" id="${answer3}" name="answers" value="${answer3}" required  />
                <label for="answer3">${answer3}</label></span>
                <span><input type="radio" id="${answer4}" name="answers" value="${answer4}" />
                <label for="answer4">${answer4}</label></span>
                <div class="button-center">
                    <button id="js-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>`
  );
}
function correctAnswerPage() {
  const correct = store.questions[store.questionNumber].correctAnswer;
  return $('main').html(`<div class="container">
            <div class="group">
              <div class="header">
                <div class="question-count"></div>
                <div class="score-count"></div>
              </div>
              <div class="item"><h2>Correct</h2><p>The correct answer was "${correct}".</p>
              </div>
              <form id="js-form">
                <div class="button-center">
                  <button id="js-next" type="submit">Next</button>
                </div>
              </form>
            </div>
          </div>`
  );
}

function wrongAnswerPage() {
  const correct = store.questions[store.questionNumber].correctAnswer;

  return $('main').html(
    `<div class="container">
      <div class="group">
        <div class="header">
          <div class="question-count"></div>
          <div class="score-count"></div>
        </div>
        <div class="item"><h2>Human Error</h2><p>The correct answer was "${correct}.</p></div>
        <form id="js-form">
          <div class="button-center">
            <button id="js-next" type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>`
  );
  
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderStartPage() {
  startPage();
}
function renderEndPage() {
  endPage();
}
function renderQuestionPage() {
  questionPage();
  renderQuestionCount();
  renderScoreCount();
}
function renderCorrectAnswerPage(){
  correctAnswerPage();
  renderQuestionCount();
  renderScoreCount();
}
function renderWrongAnswerPage(){
  wrongAnswerPage();
  renderQuestionCount();
  renderScoreCount();
}
function renderQuestionCount() {
  return $('.question-count').html(`Question: ${store.questionNumber+1}/${store.questions.length}`);
}
function renderScoreCount() {
  return $('.score-count').html(
    `Score: ${store.score} / ${store.outOf}`
  );
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startGame() {
  $('main').on('click', '#startButton', () => {
    event.preventDefault();
    renderQuestionPage();
  });
}

function restartGame() {
  $('main').on('click', '#restartButton', () => {
    event.preventDefault();
    renderStartPage();
  });
}

function handleSubmitAnswer() {
  $('main').on('click', '#js-button', (event) => {
    event.preventDefault();
    let selectedAnswer = $("input[name='answers']:checked").val();
    if(selectedAnswer === undefined) {
      alert('Please select an answer');
    } else {
      checkAnswer(selectedAnswer);
    }
    
    console.log(selectedAnswer)
  });
}

const handleNextButton = () => {
  $('main').on('click', '#js-next', (event) => {
    event.preventDefault();
    if (store.questionNumber === store.questions.length) {
      renderEndPage();
    } else {
      renderQuestionPage();
    }
  });

};

const handleRestartGame = () => {
  $('main').on('click', '#js-restart', (event) => {
    event.preventDefault();
    store.questionNumber = 0;
    store.score = 0;
    store.outOf = 0;
   
    renderStartPage();
  });
};

function checkAnswer(selected) {
  const correctAnswer = store.questions[store.questionNumber].correctAnswer; 
  console.log(correctAnswer)
  if (selected === correctAnswer){
    store.score++;
    store.outOf++;
    renderCorrectAnswerPage();
  } else {
    store.outOf++;
    renderWrongAnswerPage();
  }
  store.questionNumber++;
}

// const fade = () => { $('.container').fadeIn('slow');};

function game() {
  
  renderStartPage();
  startGame();
  handleSubmitAnswer();
  handleNextButton();
  handleRestartGame();
}

$(game);
