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
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    
    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
    options.forEach(option => {
        option.addEventListener("click", function() {
            // computer choice 
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `img/${this.textContent}.png`;
                computerHand.src = `img/${computerChoice}.png`;
              }, 2000);
              //Animation
              playerHand.style.animation = "shakePlayer 2s ease";
              computerHand.style.animation = "shakeComputer 2s ease";
            });
          });
        };
      
    };