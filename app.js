const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

 playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
 });
};
// play match 
const playMatch = () => {
    const options = document.querySelectorAll(".option button");
    const playerHand = document.querySelectorAll("player-hand");
    const computerHand = document.querySelectorAll(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach = (hand => {
        hand.addEventListener("animationend", function() {
            this.style.animation = "";
    
      });
    
    });
    // computer option 
    const computerOption = ["rock", "paper", "scissors"];
    options.forEach(option => {
        option.addEventListener("click", function() {
            // computer choice 
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOption[computerNumber];

        })
    })

    }
}



