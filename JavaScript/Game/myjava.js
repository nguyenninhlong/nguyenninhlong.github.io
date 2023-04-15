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
    question: 'Tương lai của Nhật Bản được quyết định như thế nào theo Hội nghị Ianta (2-1945)?',
    answers: [
      { text: 'Nhật Bản bị quân đội Mĩ chiếm đóng', correct: true },
      { text: 'Nhật Bản vẫn giữ nguyên trạng.', correct: false },
       { text: 'Nhật Bản trở thành thuộc địa kiểu mới của Mĩ.', correct: false },
       { text: 'Quân đội Liên Xô chiếm 4 đảo thuộc quần đảo Curin của Nhật Bản.', correct: false }
    ]
  },
    {
    question: 'Theo quy định của Hội nghị Ianta (2-1945), quốc gia nào sẽ thực hiện nhiệm vụ chiếm đóng, giải giáp miền Tây Đức, Tây Béc-lin và các nước Tây Âu?',
    answers: [
      { text: 'Mỹ, Anh, Pháp', correct: true },
      { text: 'Mỹ', correct: false },
       { text: 'Anh', correct: false },
       { text: 'Liên Xô', correct: false }
    ]
  },
  {
    question: 'Theo quyết định của hội nghị Ianta (2-1945), quốc gia nào cần phải trở thành một quốc gia thống nhất và dân chủ?',
    answers: [
      { text: 'Trung Quốc', correct:true  },
      { text: 'Đức', correct: false },
      { text: 'Mông Cổ', correct:false  },
      { text: 'Triều Tiên', correct: false }
    ]
  },
  {
    question: 'Hội nghị Ianta được triệu tập vào thời điểm nào của cuộc Chiến tranh thế giới thứ hai (1939 – 1945)?',
    answers: [
      { text: 'Chiến tranh thế giới thứ hai đã kết thúc', correct: false },
      { text: 'Chiến tranh thế giới thứ hai bùng nổ', correct: false },
      { text: 'Chiến tranh thế giới thứ hai bước vào giai đoạn ác liệt', correct: false },
      { text: 'Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc.', correct: true }
    ]
  },
  {
    question: 'Hội nghị Ianta (1945) có sự tham gia của các nước nào?',
    answers: [
      { text: 'Anh, Mỹ, Liên Xô', correct: true},
      { text: 'Anh, Pháp, Mỹ', correct: false },
      { text: 'Anh, Pháp, Đức', correct: false},
      { text:'Mỹ, Liên Xô, Trung Quốc', correct: false}
    ]
  }
]
