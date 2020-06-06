/* eslint-disable quotes */
/* eslint-disable strict */

// Data Store
const store = {
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
        'Niobe',
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


/********** TEMPLATE GENERATION FUNCTIONS **********/

// This function returns the start page template
function startPage() {
  return $('main').html(
    `<div class="container">
        <div class="start">
          <div class="group">
              <div class="item">
                <h1>2001: A Space Odyssey: The Quiz</h1>
                <p> Daisy, daisy, give me your answer, do.</p>
              </div>
              <div>
                <button class="btn" id="startButton" type="submit">Start</button>
            </div>
        </div>
      </div>
    </div>`);
}

// This function returns the final score template
function endPage() {
  return $('main').html(
    `<div class="container">
      <div class="end">
        <div class="group">
          <div class="item">
            <h2>Final Score</h2>
            <p>${store.score} / ${store.outOf}</p>
        </div>
        <div>
            <button class="btn" id="js-restart">Restart</button>
        </div>
        </div>
      </div>
    </div>`
  );
}

// This function returns the question page template
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
                <div>
                    <button class="btn" id="js-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>`
  );
}

// This function returns the correct answer page template
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
                <div>
                  <button class="btn" id="js-next" type="submit">Next</button>
                </div>
              </form>
            </div>
          </div>`
  );
}

// This function returns the incorrect answer page template
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
          <div>
            <button class="btn" id="js-next" type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>`
  );
  
}

/********** RENDER FUNCTION(S) **********/

// This function renders the start page
function renderStartPage() {
  startPage();
}

// This function renders the final score page
function renderEndPage() {
  endPage();
}

// This function renders the question page
function renderQuestionPage() {
  questionPage();
  renderQuestionCount();
  renderScoreCount();
}

// This function renders the correct answer page
function renderCorrectAnswerPage(){
  correctAnswerPage();
  renderQuestionCount();
  renderScoreCount();
}

// This function renders the incorrect answer page
function renderWrongAnswerPage(){
  wrongAnswerPage();
  renderQuestionCount();
  renderScoreCount();
}

// This function renders the question count
function renderQuestionCount() {
  return $('.question-count').html(`Question: ${store.questionNumber+1}/${store.questions.length}`);
}

// This function renders the score count
function renderScoreCount() {
  return $('.score-count').html(
    `Score: ${store.score} / ${store.outOf}`
  );
}


/********** EVENT HANDLER FUNCTIONS **********/

// This function handles the start game event
function startGame() {
  $('main').on('click', '#startButton', () => {
    event.preventDefault();
    renderQuestionPage();
  });
}

// This function handles the submit answer event
function handleSubmitAnswer() {
  $('main').on('click', '#js-button', (event) => {
    event.preventDefault();
    let selectedAnswer = $("input[name='answers']:checked").val();
    if(selectedAnswer === undefined) {
      alert('Please select an answer');
    } else {
      checkAnswer(selectedAnswer);
    }
  });
}

// This function handles the 'next' button event
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

// This function handles the restart game event
const handleRestartGame = () => {
  $('main').on('click', '#js-restart', (event) => {
    event.preventDefault();
    store.questionNumber = 0;
    store.score = 0;
    store.outOf = 0;
    renderStartPage();
  });
};

// This function handles the check answer event
function checkAnswer(selected) {
  const correctAnswer = store.questions[store.questionNumber].correctAnswer; 
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

// This function is the master event handler
function game() {
  
  renderStartPage();
  startGame();
  handleSubmitAnswer();
  handleNextButton();
  handleRestartGame();
}

$(game);
