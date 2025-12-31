
function createGame(){
    const game = {
        "computerChoice": "",
        "userChoice": "",
        "win" : 0, 
        "loose": 0,
        "draw": 0
    }
    let compChoice = Math.floor((Math.random()* 3) + 1 )
    switch(compChoice){
        case 1:
            game["computerChoice"] = "Rock";
             break;
        case 2:
            game["computerChoice"] = "Paper";
            break;
        case 3:
            game["computerChoice"] = "Scissor";
            break;
    }

    return game;
}

function gameLogic(input, compChoice, game){
    const result = {}
        if (input === compChoice){
            game.draw++
            return "Draw";
        }
        if ((input === "Rock" && compChoice === "Scissor")
             || (input === "Paper" && compChoice === "Rock")
             || (input ==="Scissor" && compChoice === "Paper")){
                game.win++
            return "User win"
        }else {
            game.loose++
            return "Computer win"
        }
}

module.exports = {createGame, gameLogic};