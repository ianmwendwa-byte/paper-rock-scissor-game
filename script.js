const computerChoiceDisplay =document.getElementById('computer-choice')
const userChoiceDisplay =document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e) =>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResults()

}))
function generateComputerChoice(){
    const randomNumber =Math.floor(Math.random()*possibleChoices.length)+1
    if(randomNumber===1){
        computerChoice='rock'
    }
    if(randomNumber===2){
        computerChoice='scissors'
    }
    if(randomNumber===3){ 
        computerChoice='paper'
    }


computerChoiceDisplay.innerHTML=computerChoice

}

function getResults(){
    if(computerChoice===userChoice){
        result='you draw!'
    }
    if(computerChoice==='rock'&& userChoice==='paper'){
        result='you loss!'
    }

    if(computerChoice==='paper'&& userChoice==='rock'){
        result='you win!'
    }

    if(computerChoice==='paper'&& userChoice==='scissors'){
        result='you win!'
    }
    if(computerChoice==='scissors'&& userChoice==='paper'){
        result='you loss!'
    }
    if(computerChoice==='rock'&& userChoice==='scissors'){
        result='you loss!'
    }
    if(computerChoice==='scissors'&& userChoice==='rock'){
        result='you win!'
    }

resultDisplay.innerHTML=result

}