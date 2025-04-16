const randNum = Math.round(Math.random()*100 +1)
const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessField")
const preGuess = document.querySelector(".guesses")
const lastRes = document.querySelector(".lastResult")
const decision = document.querySelector(".lowOrHi")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    }) 
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid number.")
    }
    else if(guess<1){
        alert("Please Enter a number more than 1.")
    }
    else if(guess>100){
        alert("Please Enter a number less than 100.")
    }else{
        preGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
            
        }
    }

 
}

function checkGuess(guess){

}
function displayGuess(guess){

}

function displayMessage(message){

}

function endGame(){
    
}

function newGame(){
    
}
