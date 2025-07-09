const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const display = document.getElementById('status');
const displayBattle = document.getElementById('display-battle')
const win = document.getElementById('win')
const lose = document.getElementById('lose')
const draw = document.getElementById('draw')

// inisialize
let arr = ['rock', 'paper', 'scissor']
let randomGenerate;
let rocks = '✊'
let papers = '🖐'
let scissors = '✌'
let drawCount = 0
let winCount = 0
let loseCount = 0

function userRock(){
    randomGenerate = Math.floor(Math.random() * arr.length)

    if (arr[randomGenerate] === 'rock') {
        display.innerText = 'Draw!'
        displayBattle.innerText = `${rocks} vs ${rocks}`
        draw.innerText = 'draw : ' + drawCount++
    }
    
    if (arr[randomGenerate] === 'scissor') {
        display.innerText = 'You Win!'
        displayBattle.innerText = `${rocks} vs ${scissors}`
        win.innerText = 'win : ' + winCount++
    }
    
    if (arr[randomGenerate] === 'paper') {
        display.innerText = 'You Lose!'
        displayBattle.innerText = `${rocks} vs ${papers}`
        lose.innerText = 'lose : ' + loseCount++
    }
    
    return arr[randomGenerate]
}

function userPaper(){
    randomGenerate = Math.floor(Math.random() * arr.length)
    
    if (arr[randomGenerate] === 'scissor') {
        display.innerText = 'You Lose!'
        displayBattle.innerText = `${papers} vs ${scissors}`
        lose.innerText = 'lose : ' + loseCount++
    }
    
    if (arr[randomGenerate] === 'paper') {
        display.innerText = 'Draw!'
        displayBattle.innerText = `${papers} vs ${papers}`
        draw.innerText = 'draw : ' + drawCount++
    }
    
    if (arr[randomGenerate] === 'rock') {
        display.innerText = 'You Win!'
        displayBattle.innerText = `${papers} vs ${rocks}`
        win.innerText = 'win : ' + winCount++
    }
}

function userScissor(){
    randomGenerate = Math.floor(Math.random() * arr.length)

    if (arr[randomGenerate] === 'scissor') {
        display.innerText = 'Draw!'
        displayBattle.innerText = `${scissors} vs ${scissors}`
        draw.innerText = 'draw : ' + drawCount++
    }
    
    if (arr[randomGenerate] === 'paper') {
        display.innerText = 'You Win!'
        displayBattle.innerText = `${scissors} vs ${papers}`
        win.innerText = 'win : ' + winCount++
    }
    
    if (arr[randomGenerate] === 'rock') {
        display.innerText = 'You Lose!'
        displayBattle.innerText = `${scissors} vs ${rocks}`
        lose.innerText = 'lose : ' + loseCount++
    }
    
    return arr[randomGenerate]
}

function reset(){
    drawCount -= drawCount
    winCount -= winCount
    loseCount -= loseCount
    draw.innerText = 'draw : ' + drawCount
    win.innerText = 'win : ' + winCount
    lose.innerText = 'lose : ' + loseCount
}