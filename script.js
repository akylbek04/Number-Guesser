//<input type="number" aria-label="Guess number" class="form-control" id="guess-number-input"/>
//<button class="btn btn-primary" id="make-guess-btn">Make Guess</button>

const userNumber = document.getElementById("guess-number-input");
const makeGuess = document.getElementById("make-guess-btn");

const lowerBound = document.querySelector("#lower-bound");
const upperBound = document.querySelector("#upper-bound");

const form = document.querySelector("form");

const statusTxt = document.querySelector(".status strong");

const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");

lowerBound.value = 1;
upperBound.value = 10;
let lastGuess = "none";

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let random = getRandomNumber(+upperBound.value, +lowerBound.value);


userNumber.max = upperBound.value;
userNumber.min = lowerBound.value;

txt1.innerText = `Guess a number between ${lowerBound.value} and ${upperBound.value}`
txt2.innerText = `Last guess: ${lastGuess}`

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    userNumber.max = upperBound.value;
    userNumber.min = lowerBound.value;
    
    txt1.innerText = `Guess a number between ${lowerBound.value} and ${upperBound.value}`
    txt2.innerText = `Last guess: ${lastGuess}`;

    random = getRandomNumber(+upperBound.value, +lowerBound.value);
    console.log(random);
});

console.log(random);


makeGuess.addEventListener("click", function(){
    let status; // your message on how will you play?
    const num = +userNumber.value;
    if(num){
        if(num === random){
            status = "You got it!";
        } else if (num > random){
            status = "Try lower!"
        } else {
            status = "Try higher!"
        }
    } else {
        status = "PLease enter a number!"
    }
    
    statusTxt.innerHTML = status;
    
    setTimeout(() => {
        statusTxt.innerHTML = "";
    } ,1500)
})