const Questions = [{
    id: 0,
    q: "How long did the Inca Emipre Lasted?",
    a: [{ text: "1162-1631", isCorrect: false },
        { text: "132BC-670AD", isCorrect: false },
        { text: "1425-1532", isCorrect: true },
        { text: "1290-1425", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Who created the Inca Empire?",
    a: [{ text: "Cuzco", isCorrect: false, isSelected: false },
        { text: "Chimu", isCorrect: false },
        { text: "Francisico Pizarro", isCorrect: false },
        { text: "Viracocha", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What was the capital of the Inca Empire?",
    a: [{ text: "Lima", isCorrect: false },
        { text: "Quito", isCorrect: false },
        { text: "Cuzco", isCorrect: true },
        { text: "Tawa", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Who began the rule of the Inca Empire?",
    a: [{ text: "Pachacuti", isCorrect: true },
        { text: "Viracocha", isCorrect: false },
        { text: "Francisico Pizarro", isCorrect: false },
        { text: "Tupac Yupanqui", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What was created on the top of the high Andes?",
    a: [{ text: "statue", isCorrect: false },
        { text: "temple", isCorrect: false },
        { text: "chan chan", isCorrect: false },
        { text: "Machu Picchu", isCorrect: true }
    ]

},
{
    id: 5,
    q: "Which leader cause the Inca Emipre to double its size?",
    a: [{ text: "Virachocha", isCorrect: false },
        { text: "Tupac Yupanqui", isCorrect: true },
        { text: "Huayna Capac", isCorrect: false },
        { text: "Pachacuti", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Who ended the Inca Empire?",
    a: [{ text: "Fransico Pizarro", isCorrect: true },
        { text: "Atahualpa", isCorrect: false },
        { text: "Waskar", isCorrect: false },
        { text: "Cajamarca", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Who was the Creator God of the Inca?",
    a: [{ text: "Supay", isCorrect: false },
        { text: "Mama Quilla", isCorrect: false },
        { text: "Inti", isCorrect: false },
        { text: "Viracocha", isCorrect: true }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "yellow";
    op2.style.backgroundColor = "lightgreen";
    op3.style.backgroundColor = "lightgreen";
    op4.style.backgroundColor = "lightgreen";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgreen";
    op2.style.backgroundColor = "yellow";
    op3.style.backgroundColor = "lightgreen";
    op4.style.backgroundColor = "lightgreen";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgreen";
    op2.style.backgroundColor = "lightgreen";
    op3.style.backgroundColor = "yellow";
    op4.style.backgroundColor = "lightgreen";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgreen";
    op2.style.backgroundColor = "lightgreen";
    op3.style.backgroundColor = "lightgreen";
    op4.style.backgroundColor = "yellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Good Job";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Failure";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 7) {
    id++;
    iterate(id);
    console.log(id);
}

})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }