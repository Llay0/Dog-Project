const game = () => {
    return {
        status: "menu", //menu, play, reveal, gameOver
        deck: dogs,
        deckSize: null,
        playerHand: [],
        computerHand: [],
        message: "",
        showMessage: false,

        deal() {
            const decks = dealCards(this.deck, this.deckSize);
            this.playerHand = decks.playerHand;
            this.computerHand = decks.computerHand;
        },
        reset() {
            this.status = "menu";
            return;
        },
        play(stat) {
            const playerCard = this.playerHand[0];
            const computerCard = this.computerHand[0];
            let winner = 0;
            switch(stat) {
                case "exercise":
                    winner = playerCard.exercise >= computerCard.exercise ? 1 : 2;
                    break;
                case "drool":
                    winner = playerCard.drool <= computerCard.drool ? 1 : 2;
                    break;
                case "intelligence":
                    winner = playerCard.intelligence >= computerCard.intelligence ? 1 : 2;
                    break;
                case "friendliness":
                    winner = playerCard.friendliness>= computerCard.friendliness ? 1 : 2;
                    break;
                default:
                    alert("Invalid stat")
                    return;
            }
            if (winner === 1) {
                this.message = `${playerCard.name} beat ${computerCard.name}!`;
            } else {
                this.message = `${computerCard.name} beat ${playerCard.name}!`;
            }
            this.showMessage = true;
            this.status = "reveal";
            setTimeout(() => {
                this.status = "play";
                this.showMessage = false;
                this.message = "";
                if (winner === 1) {
                    this.playerHand.push(playerCard);
                    this.playerHand.shift();
                    this.playerHand.push(computerCard);
                    this.computerHand.shift();
                    
                } else {
                    this.computerHand.push(playerCard);
                    this.computerHand.shift();
                    this.computerHand.push(computerCard);
                    this.playerHand.shift();
                }
                if (this.computerHand.length === 0) {
                    this.message = "Player wins!";
                    this.status = "gameOver";
                }
                if (this.playerHand.length === 0) {
                    this.message = "Computer wins!";
                    this.status = "gameOver";
                }   
            }, 2000)
        },
        start() {
            if (this.deckSize < 4 || this.deckSize > 30 || this.deckSize % 2 === 1) {
                alert("Invalid deck size, try again")
                return;
            }
            this.deal();
            this.status = "play";
        }


    };
}

function dealCards(dogsArr, deckSize) {
    const indexes = [];
    for (let card = 0; card < deckSize ; card++) {
      indexes.push(card)
    }
    for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    const player = indexes.slice(0, indexes.length / 2).map(dog => dogsArr[dog]);
    const computer = indexes.slice(indexes.length / 2).map(dog => dogsArr[dog])
    return { computerHand: computer, playerHand: player };
}