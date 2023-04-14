const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex=0
  questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
//**Câu hỏi */
const questions = [
  {
    question: 'Mona Lisa có thật hay không ?',
    answers: [
      { text: 'Có', correct: true },
      { text: 'Không', correct: false }
    ]
  },
  {
    question: 'Đâu là quê hương của Bác Hồ ?',
    answers: [
      { text: 'Kim Liên,Nam Đàn,Nghệ An', correct:true  },
      { text: 'Làng Sen,Nam Đàn,Nghệ An', correct: false },
      { text: 'Làng Sen,Kim Liên,Nghệ An', correct:false  },
      { text: 'Kim Liên,Nam Đàn,Nghệ AN', correct: false }
    ]
  },
  {
    question: 'Ai là cha đẻ của khẩu súng AK-47 ?',
    answers: [
      { text: 'Daniel Leavitt', correct: false },
      { text: 'Samuel Colt', correct: false },
      { text: 'Robert Adams', correct: false },
      { text: 'Mikhail Timofeyevich Kalashnikov', correct: true }
    ]
  },
  {
    question: 'Bóng đèn được phát minh vào năm nào ?',
    answers: [
      { text: '1879', correct: true},
      { text: '1897', correct: false }
    ]
  }
]
