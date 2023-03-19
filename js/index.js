import data from "../js/data.js"
import Character from "../js/Character.js";

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;

function attack() {
    if (!isWaiting) {
        wizard.takeDamages(monster.currentDiceScore);
        monster.takeDamages(wizard.currentDiceScore)
        renderCharacter()
        showDice()

        if (wizard.dead) {
            endGame()
        } else if (monster.dead) {
            isWaiting = true
            if (monstersArray.length > 0) {
                setTimeout(() => {
                    monster = getNewMonster()
                    renderCharacter()
                    showDice()
                    isWaiting = false
                }, 1000)
            } else {
                endGame()
            }
        }
    }

}

function getNewMonster() {
    const nextMonsterData = data[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function endGame() {
    const endMessage = wizard.dead && monster.dead ?
        "No victors - all creatures are dead" :
        wizard.dead ? "The monster Wins" :
        "The wizard is Victorious"
    const endEmoji = wizard.dead ? "☠️" : " 🔮"
    setTimeout(() => {
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2> 
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>
            `
    }, 1500)
}

function renderCharacter() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

function showDice() {
    document.querySelectorAll(".dice").forEach((diceEl) => {
        diceEl.classList.remove("placeholder-dice")
    })
}

function init() {
    renderCharacter()

    document.getElementById("attack-button").addEventListener("click", attack)
}

const wizard = new Character(data.hero);
let monster = getNewMonster();

document.addEventListener("DOMContentLoaded", init)