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
      question: 'What is the name of the AI computer onboard Discovery One?',
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

function startPage(){
  return $('main').html(
    `<div class="container">
        <div class="start">
          <div class="group">
              <div class="item">
                <h1>2001: A Space Odyssey: The Quiz</h1>
                <p> Daisy, daisy, give me your answer, do.</p>
              </div>
              <div class="button-center">
                <button type="submit">Start</button>
            </div>
        </div>
      </div>
    </div>`);
}
function endPage(){
  return $('main').html(
    `<div class="container">
      <div class="group">
        <div class="item">
            <h2>Final Score</h2>
            <p>0 / 0</p>
        </div>
        <div class="button-center">
            <button>Restart</button>
        </div>
      </div>
    </div>`
  );
}
function questionPage(){
  
  return $('main').html(
    `<div class="container">
    <div class="group">
        <div class="header">
            <div class="question-count"></div>
            <div class="score-count"></div>
        </div>
        <div class="item">
            <h2>${store.questions[store.questionNumber].question}</h2>
        </div>
        <div>
            <form id="js-form">
                <span><input type="radio" id="${store.questions[store.questionNumber].answers[0]}" name="answers" value="${store.questions[store.questionNumber].answers[0]}" />
                <label for="answer1">${store.questions[store.questionNumber].answers[0]}</label></span>
                <span><input type="radio" id="${store.questions[store.questionNumber].answers[1]}" name="answers" value="${store.questions[store.questionNumber].answers[1]}" />
                <label for="answer2">${store.questions[store.questionNumber].answers[1]}</label></span>
                <span><input type="radio" id="${store.questions[store.questionNumber].answers[2]}" name="answers" value="${store.questions[store.questionNumber].answers[2]}" />
                <label for="answer3">${store.questions[store.questionNumber].answers[2]}</label></span>
                <span><input type="radio" id="${store.questions[store.questionNumber].answers[3]}" name="answers" value="${store.questions[store.questionNumber].answers[3]}" />
                <label for="answer4">${store.questions[store.questionNumber].answers[3]}</label></span>
                <div class="button-center">
                    <button id="js-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>`
  );
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderStartPage(){
  startPage();
  
}

function renderEndPage(){
  endPage();

}
function renderQuestionPage(){
  questionPage();
  renderQuestionCount();
  renderScoreCount();
  
  
}

function renderQuestionCount(){
  return $('.question-count').html(`Question: ${store.questionNumber}/${store.questions.length}`);
}
function renderScoreCount(){
  return $('.score-count').html(
    `Score: ${store.score} / ${store.questionNumber}`
  );
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startGame(){
  
  $('main').on('click', 'button', () => {
    event.preventDefault();
    renderQuestionPage();
    
  });
}

function restartGame(){
  $('main').on('click', 'button', () => {
    event.preventDefault();
    renderStartPage();
  });
}

function handleSubmitAnswer(){
  $('main').on('click', 'button', event => {
    event.preventDefault();
    let selectedAnswer = $("input[name='answers']:checked").val();
    console.log(selectedAnswer);
    store.questionNumber += 1;
    console.log(store.questionNumber);

    checkAnswer(selectedAnswer);
  });
}



function checkAnswer(selected){
  const correctAnswer = store.questions[store.questionNumber].correctAnswer;

  // console.log(correctAnswer);
  // if (selected === correctAnswer){
  //   renderCorrectAnswerPage();
  // } else {
  //   renderWrongAnswerPage();
  // }

}


function answerQuestion(){}

function game(){
  renderStartPage();
  startGame();
  handleSubmitAnswer();
  
  
  
}





$(game);