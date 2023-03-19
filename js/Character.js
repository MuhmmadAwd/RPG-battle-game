import {
    getDiceRollArray,
    getPercentage
} from "./utils.js"



export default function Character(data) {

    Object.assign(this, data)
    this.maxHealth = this.health

    this.getDiceHtml = function (diceCount) {
        this.currentDiceScore = getDiceRollArray(diceCount)
        return this.currentDiceScore.map(function (num) {
            return `<div class="dice placeholder-dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function (data) {
        const {
            elementId,
            name,
            avatar,
            health,
            diceCount,
            currentDiceScore
        } = this;
        const diceHtml = this.getDiceHtml(diceCount, currentDiceScore)
        const healthBar = this.getHealthBarHtml()
        return `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b> ${healthBar}</div>
                <div class="dice-container">    
                    ${diceHtml}
                </div>
            </div>`;
    }

    this.takeDamages = function (currentDiceScore) {
        const TotalDamages = currentDiceScore.reduce((total, currentValue) => {
            return total + currentValue
        })
        this.health -= TotalDamages
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)

        const dangerClass = percent < 30 ? "danger" : ""
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${dangerClass}" 
                        style="width: ${percent}%; margin-bottom:5px">
                        
                    </div>
                    ${percent.toFixed(2)}%
                </div>`
    }
}