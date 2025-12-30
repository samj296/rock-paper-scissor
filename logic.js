
function createGame(){
    const game = {
        "computer choice": "",
        "user choice": "",
        "Win" : 0, 
    }
    let compChoice = Math.floor(Math.random()* 3 )
    switch(compChoice){
        case 1:
            game["computer choice"] = "Rock";
            return game;
        case 2:
            game["computer choice"] = "Paper";
            return game;
        case 3:
            game["computer choice"] = "Scissor";
            return game
    }
}

function gameLogic(input, compChoice){
    const result = {}
        if (input === compChoice){
            return "Draw"
        }
        if (input === "Rock" && compChoice === "Scissor"
             || input === "Paper" && compChoice === "Rock"
             || input ==="Scissor" && compChoice === "Paper"){
            return result = {

            }
        }else {
            return "Computer win"
        }
}

module.exports = {createGame, gameLogic};