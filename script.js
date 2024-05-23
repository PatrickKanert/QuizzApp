let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams", 
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3   
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Computer Style Sheets",
        "answer_2": "Creative Style System",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "Colorful Style Sheets",
        "right_answer": 3
    },
    {
        "question": "Welches HTML-Element wird verwendet, um ein Bild einzufügen?",
        "answer_1": "&ltimage&gt",
        "answer_2": "&ltimg&gt",
        "answer_3": "&ltpicture&gt",
        "answer_4": "&ltphoto&gt",
        "right_answer": 2
    },
    {
        "question": "Welches Attribut in HTML wird verwendet, um einen Link zu einer anderen Webseite zu erstellen?",
        "answer_1": "href",
        "answer_2": "src",
        "answer_3": "link",
        "answer_4": "target",
        "right_answer": 1
    },
    {
        "question": "Welches HTML-Element wird verwendet, um eine Überschrift der ersten Ebene zu erstellen?",
        "answer_1": "&ltheading&gt",
        "answer_2": "&lth1&gt",
        "answer_3": "&lttitle&gt",
        "answer_4": "&ltheader&gt",
        "right_answer": 2
    }
];


let currentQuestion = 0;
let rightQuestions = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;  

    showQuestion()
}


function showQuestion() {
    if(currentQuestion >= questions.length) {
        document.getElementById('endScreen').classList.remove('d-none');
        document.getElementById('questionBody').classList.add('d-none');
        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    } else{

        let percent = (currentQuestion + 1) / questions.length; // currenQuestion wird durch questions.lengt geteilt
        percent = Math.round(percent * 100); 
        document.getElementById('progressBar').innerHTML = `${percent} %`;
        document.getElementById('progressBar').style = ` width: ${percent}%;`;

        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion]; // questions[0] an der stelle 0 //
    let selectedQuestionNumber = selection.slice(-1); //selection.slice ist nur der letzte buchstabe von answer_1-4 also in diesem fall eine Zahl //
    let idOfRigthAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); //.parentNode ist das übergeordnete element //
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRigthAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // wird z.B. von 0 auf 1 erhöht //
    document.getElementById('next-button').disabled = true;
    resetAnswerButton()
    showQuestion();
}


function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function showHtmlQuizz() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('questionBody').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none')
}


function restartGame() {
    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('questionBody').classList.remove('d-none');
    init();
}