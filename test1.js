const questions = [
  {
    question: "Bu durumda neye izin verilir? (4 puan)",
    points: 4,
    answers: ["Düz hareket etmek.", "Sola doğru hareket etmek.", "'U' dönüşü yapmak."],
    correct: [0, 1, 2],
    image: "1109.jpg"
  },
  {
    question: "Bu durumda neyi göz önünde bulundurmalısınız? (4 puan)",
    points: 4,
    answers: ["Bildiri levhası.", "Yayanın yürüme hızında sürüşe müsade edilen alan.", "Çocukların oyun oynayabileceği yol bölgesi."],
    correct: [0, 1, 2],
    image: "1108.jpg"
  },
  {
    question: "Önünüzdeki araç sol sinyalini kullanıyor, bu durumda onu sollamanıza müsade edilir mi? (4 puan)",
    points: 4,
    answers: ["Hayır.", "Evet, araç yavaş hareket ediyorsa.", "Evet, yolda yasaklandığına dair bir işaret yoksa."],
    correct: [0],
    image: "1120.jpg"
  },
  {
    question: "Bu durumda neyi göz önünde bulundurmalısınız? (4 puan)",
    points: 4,
    answers: ["Hareket hızımı yavaşlatırım.", "Vitesi veya hızımı ayarlarım.", "Ani fren yapmam."],
    correct: [0, 1, 2],
    image: "1079.jpg"
  },
  {
    question: "Bu trafik işareti neyi gösterir? (4 puan)",
    points: 4,
    answers: ["Taş sıçrama riski.", "Kaygan yol.", "Düz olmayan yol."],
    correct: [0, 1],
    image: "2023.png"
  },
  {
    question: "Bu trafik işareti neyi gösterir? (4 puan)",
    points: 4,
    answers: ["Bisikletçi yolu.", "Bisikletçi geçişi.", "Bisikletçiler için yasaklanan yol bölümü."],
    correct: [0, 1],
    image: "2203.jpg"
  },
  {
    question: "Bu trafik işareti neyi gösterir ve hangi işaret grubuna aittir? (4 puan)",
    points: 4,
    answers: ["Tehlike.", "Demiryolu geçidi korumasız veya yarı korumasızdır.", "Korumalı demiryolu geçidinin yakınlığı."],
    correct: [0, 1],
    image: "2036.png"
  },
  {
    question: "Bu trafik işareti neyi gösterir? (4 puan)",
    points: 4,
    answers: ["Atçı yolu.", "Atçı geçişi.", "Atçılar için yasaklanan yol bölümü."],
    correct: [0, 1],
    image: "2145.png"
  },
  {
    question: "Görseldeki trafik işaretine göre hangi yönlere doğru hareketinize izin verilir? (4 puan)",
    points: 4,
    answers: ["Düz.", "Sol.", "Sağ."],
    correct: [0, 1],
    image: "2151.png"
  },
  {
    question: "Görseldeki gibi bir araç sizi solladığında veya karşıdan geldiğinde nasıl hareket etmelisiniz? (4 puan)",
    points: 4,
    answers: ["Araca engel oluşturmamak için çok dikkatli bir şekilde sürmeye devam ederim.", "Hızımı azaltmalıyım.", "Yolun sağ kenarına yanaşmalı ve durmalıyım."],
    correct: [0, 1],
    image: "2406.png"
  },
  {
    question: "Aracın teknik durumu nasıl kontrol edilmelidir? (3 puan)",
    points: 4,
    answers: ["Lisanslı araç teknik kontrol merkezlerinde.", "Mobil teknik kontrol yoluyla.", "Herhangi bir araç tamir servisinde."],
    correct: [0, 1],
  },
  {
    question: "Dokuz yaşından küçük bir çocuk sessiz trafik bölgesinde bisiklet sürebilir mi? (3 puan)",
    points: 3,
    answers: ["Evet, 18 yaşından büyük bir kişinin gözetimi altındaysa.", "Hayir, hiçbir durumda.", "Evet, 16 yaşından büyük bir kişinin gözetimi altındaysa."],
    correct: [0, 1],

  },
  {
    question: "Sürüş sırasında araçlar arasındaki mesafe nasıl belirlenir? (3 puan)",
    points: 3,
    answers: ["Trafik kuralları ile.", "Trafik işaretleri ile.", "Yetkili kişi tarafından."],
    correct: [0, 1],

  },
  {
    question: "Hangi araçların sollanmasına izin verilmez? (3 puan)",
    points: 3,
    answers: ["Konvoyda hareket eden araçlar (araç konvoyu).", "Yayaya yol vermek için duran araç.", "Müdahale sırasındaki eskort aracı."],
    correct: [0, 1],

  },
  {
    question: "Yoldaki kış koşulları ne zaman dikkate alınır? (3 puan)",
    points: 3,
    answers: ["Yol karla kaplı olduğunda.", "Yolda buzlanma gerçekleştiğinde.", "Çamur nedeniyle yol kaygan olduğunda."],
    correct: [0, 1],

  },
  {
    question: "Nerelerde park etmek yasaktır? (3 puan)",
    points: 3,
    answers: ["Otopark giriş ve çıkışlarında.", '"Otobüs durağı" işaretinin önünde ve arkasında; 15 metreden daha az bir mesafede ise.', "Binalar arası geçişlerde, apartman bloklarının giriş veya çıkışlarında."],
    correct: [0, 1],

  },
  {
    question: "Tünelde izin verilmeyen faaliyetler nelerdir? (3 puan)",
    points: 3,
    answers: ["Aracı durdurmak ve park etmek.", "Yakını gösteren (kısa) ışıkların kullanmak.", '"U" dönüşü yapmak.'],
    correct: [0, 1],
  },
  {
    question: "Hangi durumlarda mesafenin korunmaması nedeniyle kaza riski bulunur? (3 puan)",
    points: 3,
    answers: ["Yol yağmurluysa.", "Trafik ve güvenlik kurallarının bilinmemesi.", "Defansif sürüş uygulanıyorsa."],
    correct: [0, 1],
  },
  {
    question: "Genç sürücüler ve deneyimsiz sürücülerin bilmeleri gereken en önemli şey nedir? (3 puan)",
    points: 3,
    answers: ["Tehlikeli durumlarda nasıl tepki verilir.", "Nasıl hızlı ve doğru tepki verilir.", "Önde bulunan araç şoförlerinin yaşlarının tahmini."],
    correct: [0, 1],
  },
  {
    question: 'Kavşaktan önce "DUR" levhası bulunuyor. Neler göz önünde bulundurulmalıdır? (3 puan)',
    points: 3,
    answers: ["Kavşaktan önce durmak zorunludur.", "Levhadan önce gerekiyorsa durmalıyım.", "Duhet t’i jap përparësi kalimi rrugës tërthore."],
    correct: [0, 1],
  },
  {
    question: "Sa mjete bashkangjitëse mund të tërhiqen në autoudhë? (3 puan)",
    points: 3,
    answers: ["Yükleme için iki.", "İnsanları taşımak için iki.", "Kargo taşımak için bir tane."],
    correct: [0, 1],
  },
  {
    question: "Genç ve deneyimsiz sürücülerin trafik kazalarına sebep olan hataları nelerdir? (3 puan)",
    points: 3,
    answers: ["Gerekli dikkati verememek.", "Sürüş deneyimsizliği.", "Özellikle hafta sonları alkolün etkisi altında araç kullanmak."],
    correct: [0, 1],
  },
  {
    question: "Araçlar arasındaki güvenlik mesafesi neye bağlıdır? (3 puan)",
    points: 3,
    answers: ["Araç yükü.", "Yolun durumu.", "Hava koşulları."],
    correct: [0, 1, 2],
  },
  {
    question: 'Işaretlerden hangisi "Otoyol" işaretidir? (4 puan)',
    points: 4,
    answers: ['<img style="display: flex;" src="2644a.png" alt="Dardan">', '<img src="2644b.png" class="answer-image" alt="Prizren">', '<img src="2644c.png" class="answer-image" alt="Ferizaj">'],
    correct: [0, 1],
  },
  {
    question: "Trafik levhasının anlamı nedir? (4 puan)",
    points: 4,
    answers: ["Taş sıçrama riski.", "Kaygan yol.", "Düz olmayan yol."],
    correct: [0, 1],
    image: "2023.png"
  },
  {
    question: "Trafik levhasının anlamı nedir? (4 puan)",
    points: 4,
    answers: ["Taş sıçrama riski.", "Kaygan yol.", "Düz olmayan yol."],
    correct: [0, 1],
    image: "2023.png"
  },
  {
    question: "Trafik levhasının anlamı nedir? (4 puan)",
    points: 4,
    answers: ["Taş sıçrama riski.", "Kaygan yol.", "Düz olmayan yol."],
    correct: [0, 1],
    image: "2023.png"
  },
  {
    question: "Trafik levhasının anlamı nedir? (4 puan)",
    points: 4,
    answers: ["Taş sıçrama riski.", "Kaygan yol.", "Düz olmayan yol."],
    correct: [0, 1],
    image: "2023.png"
  },
  {
    question: "Trafik levhasının anlamı nedir? (4 puan)",
    points: 4,
    answers: ["Taş sıçrama riski.", "Kaygan yol.", "Düz olmayan yol."],
    correct: [0, 1],
    image: "2023.png"
  },
  {
    question: "Trafik levhasının anlamı nedir? (4 puan)",
    points: 4,
    answers: ["Taş sıçrama riski.", "Kaygan yol.", "Düz olmayan yol."],
    correct: [0, 1],
    image: "2023.png"
  }
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;
let currentQuestionData;
let isEnded = false;
let isDisabled = false; 


const selectedAnswers = new Array(questions.length).fill([]);

const quizContainer = document.getElementById("quiz-content");
const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers-container");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const questionButtonsContainer = document.getElementById("question-buttons");



function showQuestion(questionIndex, isFinal = false) {
  // Clear the quizContainer of any previous content
  quizContainer.innerHTML = "";

  const questionAndAnswersContainer = document.createElement("div");
  questionAndAnswersContainer.classList.add("question-container");

  const questionOrderElement = document.getElementById("question-order");
  questionOrderElement.textContent = `Soru ${questionIndex + 1} / ${questions.length}`;

  currentQuestionData = questions[questionIndex];

  // Inside the showQuestion function
if (currentQuestionData.image) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const imageElement = document.createElement("img");
  imageElement.src = currentQuestionData.image;
  imageElement.alt = "Question Image";
  imageContainer.appendChild(imageElement);

  questionAndAnswersContainer.appendChild(imageContainer);
}


  const feedbackContainer = document.createElement("div");
  feedbackContainer.classList.add("feedback-container");

  if (isFinal) {
    finishButton.style.display = "block";
  } else {
    finishButton.style.display = "none";
  }

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const questionTitleElement = document.createElement("h3");
  questionTitleElement.textContent = currentQuestionData.question;
  textContainer.appendChild(questionTitleElement);

  const answersHTML = currentQuestionData.answers.map((answer, index) => {
    return `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="answer-${index}" value="${index}" ${isDisabled ? 'disabled' : ''}>
      <label class="form-check-label" for="answer-${index}" tabindex="0">
      ${isEnded ? (currentQuestionData.correct.includes(index) ? '✅' : '❌') : ''}

      ${answer}
      </label>
    </div>
    `;
  }).join('');

  textContainer.innerHTML += `
    <div id="answers-container">${answersHTML}</div>
  `;

  questionAndAnswersContainer.appendChild(textContainer);

  quizContainer.appendChild(questionAndAnswersContainer);

  // Restore selected answers for the current question
  selectedAnswers[questionIndex].forEach(index => {
    document.getElementById(`answer-${index}`).checked = true;
  });

  
  // Add feedback icons when the test is ended
  if (isEnded) {
    currentQuestionData.answers.forEach((_, index) => {
      const checkbox = document.getElementById(`answer-${index}`);
      const isCorrect = currentQuestionData.correct.includes(index);
      const feedbackIcon = document.createElement("span");
      feedbackIcon.classList.add("feedback-icon");
      // feedbackIcon.textContent = isCorrect ? "✅" : "❌";
      checkbox.nextElementSibling.appendChild(feedbackIcon);
      checkbox.nextElementSibling.classList.add(isCorrect ? "correct" : "incorrect");
    });
  }
}


// function addQuestionOrderAndRestoreAnswers(questionIndex) {
//   const previousQuestionOrderElement = document.querySelector(".question-order");
//   if (previousQuestionOrderElement) {
//     previousQuestionOrderElement.remove();
//   }

//   const questionOrderElement = document.createElement("h5");
//   questionOrderElement.classList.add("question-order");
//   const staticText = document.createElement("span");
//   staticText.classList.add('test-no');
//   staticText.textContent = "Test 1";
//   const dynamicText = document.createElement("span");
//   dynamicText.classList.add('answer-order');
//   dynamicText.textContent = `Soru ${questionIndex + 1} / ${questions.length}`;
//   questionOrderElement.appendChild(staticText);
//   questionOrderElement.appendChild(dynamicText);
//   quizContainer.insertBefore(questionOrderElement, quizContainer.firstChild);

//   // Restore selected answers for the current question
//   selectedAnswers[questionIndex].forEach(index => {
//     document.getElementById(`answer-${index}`).checked = true;
//   });
// }


function createQuestionButtons() {
  const questionButtonsContainer = document.getElementById("question-buttons");

  questionButtonsContainer.innerHTML = questions.map((_, index) => `
    <button class="question-button" onclick="goToQuestion(${index})">${index + 1}</button>
  `).join('');

  const buttonElements = questionButtonsContainer.getElementsByTagName('button');
  for (let i = 9; i < buttonElements.length; i += 10) {
    buttonElements[i].insertAdjacentHTML('afterend', '<br>');
  }
}

function updateButtons() {
  prevButton.disabled = currentQuestion === 0;
  nextButton.disabled = currentQuestion === questions.length - 1;
  if (currentQuestion === questions.length - 1) {
    finishButton.style.display = "block";
  } else {
    finishButton.style.display = "none";
  }
}

// Function to update question button styles
function updateQuestionButtonStyles() {
  const questionButtons = document.querySelectorAll(".question-button");
  
  questionButtons.forEach((button, index) => {
    if (index === currentQuestion) {
      button.style.backgroundColor = "#5d66e3"; // Set the background color for the current question
    } else {
      button.style.backgroundColor = ""; // Set the background color for other questions
    }
  });
}

// Call the function to update button styles when the page loads
window.addEventListener('load', () => {
  updateQuestionButtonStyles();
});

// Call the function to update button styles whenever you change the current question
function goToQuestion(questionIndex) {
  const checkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
  selectedAnswers[currentQuestion] = Array.from(checkboxes).map(checkbox => parseInt(checkbox.value));

  currentQuestion = questionIndex;
  showQuestion(currentQuestion);
  updateButtons();
  updateQuestionButtonStyles(); // Call the function to update button styles
}



function calculateScore() {
  score = 0;
  questions.forEach((question, index) => {
    const isCorrect = JSON.stringify(selectedAnswers[index].sort()) === JSON.stringify(question.correct.sort());
    if (isCorrect) {
      score += question.points;
    }
  });
  return score;
}

prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    goToQuestion(currentQuestion - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    goToQuestion(currentQuestion + 1);
  }
});

// Function to display feedback icons for answers
function someFunctionWhereYouNeedCurrentQuestionData(currentQuestionData) {
  currentQuestionData.answers.forEach((_, index) => {
    const checkbox = document.getElementById(`answer-${index}`);
    const isCorrect = currentQuestionData.correct.includes(index);
    const feedbackIcon = document.createElement("span");
    feedbackIcon.classList.add("feedback-icon");
    feedbackIcon.textContent = isCorrect ? "✅" : "❌";
    checkbox.nextElementSibling.appendChild(feedbackIcon);
    checkbox.nextElementSibling.classList.add(isCorrect ? "correct" : "incorrect");
  });
}

// Function to save currentQuestionData to localStorage
function saveCurrentQuestionData() {
  localStorage.setItem('currentQuestionData', JSON.stringify(currentQuestionData));
}

// Function to load currentQuestionData from localStorage when the page is loaded
window.addEventListener('load', () => {
  const storedData = localStorage.getItem('currentQuestionData');
  if (storedData) {
    currentQuestionData = JSON.parse(storedData);
  }
});

finishButton.addEventListener("click", () => {
  // Calculate the score
  selectedAnswers[currentQuestion] = Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`)).map(checkbox => parseInt(checkbox.value));
  // Set the currentQuestionData for the current question
  currentQuestionData = questions[currentQuestion];
  
  // Call the function to display feedback icons for answers when the test is ended
  if (!isEnded) {
    someFunctionWhereYouNeedCurrentQuestionData(currentQuestionData);
    isEnded = true; // Test sona erdi olarak işaretle
  }
  
  isDisabled = true; // Seçenekleri devre dışı yap
  
  // Disable all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  (document.querySelectorAll(`input[type="checkbox"]:checked`)).forEach(checkbox => {
    checkbox.disabled = true;
  });

  showQuestion(currentQuestion, true);

  
  // Display the score and hide buttons
  const finalScore = calculateScore();
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `Puanınız: ${finalScore}<br> Geçme Puanı: 85 <br> Puan Sayısı: 100`;
  resultContainer.style.display = "block";
  finishButton.style.display = "none";

  // Save the currentQuestionData after updating it
  saveCurrentQuestionData();
});



createQuestionButtons();
showQuestion(currentQuestion);
updateButtons();