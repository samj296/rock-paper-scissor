const express = require("express");
const {createGame, gameLogic} = require("./logic")

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
    result = gameLogic(choice,game.computerChoice,game)
    res.json({
        user: choice,
        computer: game.computerChoice,
        result: result,
        win: game.win,
        lost: game.loose,
        draw: game.draw
    })
    game = createGame();
})