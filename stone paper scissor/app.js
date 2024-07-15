let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = ()  => {
    
    msg.innerText = "Game was Draw.Play Again"
    msg.style.backgroundColor = "#3c096c";
};
const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win!  Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscorePara.innerText = compScore;
        
        msg.innerText = `You Lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("userChoice = ",userChoice);
    const computerChoice = genComputerChoice();
    console.log("comp choice = " , computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){

             userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false :  true;
        }else {
              userWin = computerChoice === "rock" ? false : true;


    }
    


showWinner(userWin,userChoice,computerChoice);
    
}; 


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    });
});
