const questions =[
    {
        question: "Which is larget animal in the world?",
        answer:[
            
                {text:"shark", correct:false},
                {text:"blue whale", correct:true},
                {text:"Elephant", correct:false},
                {text:"Giraffe", correct:false},
 ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer:[
            
                {text:"Vatican city", correct:true},
                {text:"Bhutan", correct:false},
                {text:"Nepal", correct:false},
                {text:"Shri lanka", correct:false},
 ]
    },
    {
        question: "if a=4 and b=6 , what is a+b?",
        answer:[
            
               { text:"10", correct:"true"},
                {text:"4", correct:"false"},
                {text:"46", correct:"false"},
                {text:"2", correct:"false"},
              ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
 let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
nextButton.innerHTML="Next";
showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
            
        }
        button.addEventListener("click",selectAnswer);

        
    });
}
function resetstate(){
       nextButton.style.display = "none";
       while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
       }
}
function selectAnswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct ==="true";
    if (iscorrect){
        selectedbtn.classList.add("correct");
        score++;

    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disable = true;
        
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length ){
        handleNextButton();
    }else{
        startQuiz();
    }
});
    startQuiz();
