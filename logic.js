
function createGame(){
    const game = {
        "computerChoice": "",
        "userChoice": "",
        "win" : 0, 
        "lose": 0,
        "draw": 0
    }
    compChoice(game);
    return game;
}

function compChoice(game){
    let compChoice = Math.floor((Math.random()* 3) + 1 )
    switch(compChoice){
        case 1:
            game.computerChoice = "Rock";
             break;
        case 2:
            game.computerChoice = "Paper";
            break;
        case 3:
            game.computerChoice = "Scissor";
            break;
    }

    return game;
}

function gameLogic(game){
    const input = game.userChoice
    const compChoice = game.computerChoice
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
            game.lose++
            return "Computer win"
        }
}

module.exports = {createGame, gameLogic, compChoice};