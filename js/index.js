import data from "./data.js"
import Character from "./character.js";

function renderCharacter() {
    document.getElementById("hero").innerHTML = wizerd.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

const wizerd = new Character(data.hero);
const orc = new Character(data.monster)

renderCharacter()