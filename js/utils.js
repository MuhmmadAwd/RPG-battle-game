export function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return Math.floor(Math.random() * 6) + 1
    })
}

export const getPercentage = (remainingHealth, maxHealth) =>
    (100 * remainingHealth) / maxHealth