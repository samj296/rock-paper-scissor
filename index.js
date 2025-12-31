const express = require("express");
const {createGame, gameLogic, compChoice} = require("./logic")

const app = express();
app.use(express.json());
let game
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get("/api/game",(req,res) =>{
    game = createGame();
    res.send("Please enter you choice (Rock, Paper, Scissor)")
})

app.post("/api/game/play",(req,res) => {
    const {choice} = req.body;
    const valid = ["Rock", "Paper", "Scissor"]
    if(!choice || !valid.includes(choice)){
        return res.status(400).json({error: "Valid choice is required ('Rock', 'Paper', 'Scissor')"})
    }else{
        game.userChoice = choice
    }
    result = gameLogic(game)
    res.json({
        user: game.userChoice,
        computer: game.computerChoice,
        result: result,
        win: game.win,
        lost: game.lose,
        draw: game.draw
    })
    compChoice(game)
})