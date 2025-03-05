const playerBox = document.querySelector('.player1'); // Das ist das Div in dem die infos stehen

const box1 = document.querySelector('.box1'); // Test box1
box1.addEventListener('click', (event) => { // Funktion für die Test box1
console.log('Box 1 Clicked') }
);

const controlls = document.querySelector('.controlls');

var box2 = document.querySelector('.box2'); // Zwite test box wird nicht benutztz



function player(name){ // wird noch nicht benutzt, kommt später
    this.name = name;
    this.health = 100;
    this.strength = 5;
    this.defence = 5;
    this.mana = 5;
    this.energy = 5;
    this.level = 1;
}

const playerStats = { // Einfaches Objekt mit default werten
    health : 100,
    strength : 5,
    defence : 5,
    mana : 5,
    energy : 5,
    level : 1,

    allStats : function(){ // Eine Funtion um sich alle Werte ansehen zu können
        let allStats = "Leben: " + this.health + "<br>" +
            "Stärke: " + this.strength + "<br>" +
            "Verteidigung: " + this.defence + "<br>" +
            "Mana: " + this.mana + "<br>" +
            "Energie: " + this.energy + "<br>" +
            "Level: " + this.level + "<br>";
        
        return allStats; // Rückgabe der statistiken als string
    },

    allSpells : function(){ // Alle sprüche falls es sie gibt
        if(this.hasOwnProperty('spells')){
            let spellList = "";
            for(let i = 0; i < this.spells.length; i++){
                spellList += this.spells[i];
                spellList += "<br>";
            }
            return spellList;
        }else{
            return "Kein Zaubersprüche gelernt verfügbar.";
        }
    }
}


function addMagic(){
    if(!playerStats.hasOwnProperty('spells')){
        playerStats.spells = [];
        alert('Magie freigeschaltet.')
    }
    if(!playerStats.spells.includes("Feuer_Ball")){
        controlls.appendChild(document.createElement('button')).textContent = "Fire Ball"; // Button wird angelegt und dem html hinzugefügt
        controlls.removeChild(document.querySelector('#learn_magic')); // Button wird gelöscht)
        playerStats.spells.push("Feuer Ball"); // Zauber wird hinzugefügt
    }
}

playerBox.addEventListener('mouseover', (event) =>{ // mouseover event
    playerBox.innerHTML = "Dieser Player hat noch" + playerStats.health + " leben." // In innerHtml um den inhalt zu ändern
    if(playerStats.health > 50){ // Die farbe wenn die lebene über 50 sind
        playerBox.style.backgroundColor = "green"; // Die farbe 
    }else if(playerStats.health <= 50){ // wenn es 50 oder darunter sind
        playerBox.style.backgroundColor = "yellow"; 
    }
    playerBox.style.border = "1px solid black";// Der rand
})

playerBox.addEventListener('mouseout', (event) => { // mouseout event
    playerBox.innerHTML = ""; // box wird geleert
    playerBox.style.border = "1px black dotted"; // rand wird geändert
    playerBox.style.backgroundColor = "white"; // hintegrund wir geändert
})

let show = false; // Variable um zu schauen ob die stats angezeigt werden sollen
function showAllStats(){
    if(!show){
        box1.innerHTML = playerStats.allStats();
        show = true;
    }else if(show){
        box1.innerHTML = "";
        show = false;
    }
}

function showAllSpells(){
    if(!show){
        box2.innerHTML = playerStats.allSpells();
        show = true;
    }else if(show){
        box2.innerHTML = "";
        show = false;
    }
}
