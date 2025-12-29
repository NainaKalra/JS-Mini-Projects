let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourScore = document.querySelector("#you");
const compScore = document.querySelector("#computer");

const genbotChoice =() =>{
    //randomly choose 1 from - rock/paper/scissor- willuse math.random n math.floor
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        //got the id for what user chose
        playGame(userChoice);
    });

});

const showWinner = (userWin,userChoice,botChoice) =>{
    if(userWin){
        userScore++;
        yourScore.innerText = userScore;
        console.log("Congratulations, you win!")
        msg.innerText = `You Win! Your ${userChoice} beats ${botChoice}.`;
        msg.style.backgroundColor = "green";
        
    }
    else {
        botScore++;
        compScore.innerText = botScore;
        console.log("You lose, Bot wins!")
        msg.innerText = `Bot wins! ${botChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }

}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was Draw! Play again!"
    msg.style.backgroundColor = "rgb(4, 13, 40)";
}

const playGame = (userChoice) =>{
    console.log("user choice - ",userChoice)
    const botChoice = genbotChoice();
    console.log("bot choice - ",botChoice)

    if(userChoice === botChoice){
        //game draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = botChoice === "paper" ? false : true;
            //used ternary operator to check win
        } else if (userChoice === "paper"){
            userWin = botChoice === "scissors" ? false : true;
        } else {
            userWin = botChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
}

