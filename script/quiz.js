const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

// On Load make Result To Zero   Do not forget 



window.onload=()=>{
    localStorage.setItem("result",JSON.stringify([]))
}
// index represent the Question Number
let index = 0;

// No of Correct answers
let correct = 0,
// no of InCorrect answers

incorrect = 0,
// Total number of Question

total = quizData.length;
let questionBox = document.getElementById("questionBox");
// selecting the all input by class name which gives us an array 
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    // if the last question is come then quizend will trigger
    return quizEnd()
}
// making input box values = false;
reset()
// getting index value and load that particular question present on that index
const data = quizData[index]
// inserting question number and question
questionBox.innerHTML = `${index + 1}) ${data.question}`
// inserting options from data of question
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}


document.querySelector("#skip").addEventListener("click",()=>{
    let result=JSON.parse(localStorage.getItem("result"))||[];
    const data = quizData[index]
    incorrect++;
        result.push({question:data.question, answer:data[data.correct],myans:"Not-Aswered"})
        localStorage.setItem(  "result",JSON.stringify(result));
        index++;
    loadQuestion()
})

document.querySelector("#submit").addEventListener(
"click",
 ()=> {
    let result=JSON.parse(localStorage.getItem("result"))||[];
    const data = quizData[index]
    console.log(data)
    const ans = getAnswer()
    console.log(data[ans])
    if (ans === data.correct) {
        result.push({question:data.question, answer:data[data.correct],myans:data[ans]})
        localStorage.setItem("result",JSON.stringify(result));
        correct++;
    } else {
        incorrect++;
        result.push({question:data.question, answer:data[data.correct],myans:data[ans]})
        localStorage.setItem(  "result",JSON.stringify(result));
    }
    index++;
    loadQuestion()
}
)



const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
 
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
    <a href="/result.html">result</a>
`
}

loadQuestion(index);