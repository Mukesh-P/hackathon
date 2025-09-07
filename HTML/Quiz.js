const quizData = [
    {
        question: "Which Indian city is known as the 'Yoga Capital of the World'?",
        options: ["Rishikesh", "Varanasi", "Haridwar", "Ayodhya"],
        answer: "Rishikesh"
},
{
        question: "Madhubani paintings are a traditional art form of which state?",
        options: ["Rajasthan", "Bihar", "West Bengal", "Madhya Pradesh"],
        answer: "Bihar"
},
{
        question: "Which state is famous for the Bihu festival?",
        options: ["Assam", "Punjab", "Gujarat", "Maharashtra"],
        answer: "Assam"
},
{
        question: "Which UNESCO World Heritage Site is known as the 'Pink City' of India?",
        options: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
        answer: "Jaipur"
},
{
        question: "Ratha Yatra is an important festival celebrated in which city?",
        options: ["Varanasi", "Puri", "Mathura", "Haridwar"],
        answer: "Puri"
},
{
        question: "Which Indian festival is also known as the 'festival of colors'?",
        options: ["Diwali", "Holi", "Navratri", "Onam"],
        answer: "Holi"
},
{
        question: "Ajanta and Ellora caves are located in which state?",
        options: ["Madhya Pradesh", "Maharashtra", "Odisha", "Rajasthan"],
        answer: "Maharashtra"
},
{
        question: "Which state is known as the God’s own country",
        options: ["Kerala", "Uttarakhand", "Karnataka", "Madhya Pradesh"],
        answer: "Kerala"
},
{
        question: "Which state is known as the Land of Braves",
        options: ["Himachal Pradesh", "Uttarakhand", "Uttar Pradesh", "Madhya Pradesh"],
        answer: "Himachal Pradesh"},
{
        question: "In which state is Kulluvi pattu worn as the traditional dress?",
        options: ["Uttarakhand", "Himachal Pradesh", "Karnataka", "Delhi"],
        answer: "Himachal Pradesh"},
{
        question: "Solung is a festival celebrated in which state?",
        options: ["Arunachal Pradesh", "Himachal Pradesh", "Assam", "Tripura"],
        answer: "Arunachal Pradesh "},
{
        question: "What is the festival of Bihar?",
        options: ["Holi", "Diwali", "Chaat Puja", "Baisakhi"],
        answer: "Chaat Puja "},
{
        question: "UP is famous for which art form?",
        options: ["Chikankari embroidery", "Rogan Art", "Chaat Puja", "Phulkari"],
        answer: "Chikankari embroidery "},
 
        {question: "What food is famous in Sikkim?",
        options: ["Litti choka", "Daal Bhati", "Fish Curry", "Momos"],
        answer: "Momos "},
{
        question: "What is Goa also hailed as?",
        options: ["Abode of clouds", "Land of Kings", "Tourist paradise on India", "Land of brave"],                                                                      
        answer: "Tourist paradise on India"},
{
        question: "West Bengal’s signature dance is?",
        options: ["Mask", "Manipuri", "Chhau", "Hojagiri"],
        answer: "Hojagiri"},
{
        question: "Yaoshang is the festival of which state?",
        options: ["Meghalya", "Manipur", "Puducherry", "Assam"],
        answer: "Manipur"},
{
        question: "Where is the Minicoy festival held?",
        options: ["Ladakh", "Manipur", "Punjab", "Lakshwadeep"],
        answer: "Lakshwadeep"},
{
        question: "What are the famous foods of Puducherry?",
        options: ["Coconut prawn curry", "Rajma and Aloo Dum", "Bamboo shoot dishes", "Croissants and Baguettes"],
        answer: "Croissants and Baguettes"     
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(quizData);
const selectedQuestions = quizData.slice(0, 10);

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const qhead = document.getElementById("qhead");
    const optionsDiv = document.getElementById("options");
    
    qhead.innerText = selectedQuestions[currentQuestion].question;
    optionsDiv.innerHTML = "";
    
    selectedQuestions[currentQuestion].options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(btn, option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(button, selected) {
    const options = document.querySelectorAll(".option-btn");
    const correctAnswer = selectedQuestions[currentQuestion].answer;

    options.forEach(btn => btn.disabled = true);

    if (selected === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        options.forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }

    document.getElementById("score").innerText = `Score: ${score}`;

    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("qhead").innerText = "🎉 Quiz Completed!";
        document.getElementById("options").innerHTML = "";

        setTimeout(() => {
            window.location.href = "Home.html"; 
        }, 2000);
    }
}

loadQuestion();
