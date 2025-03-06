const playerBox = document.querySelector('.player1'); // Das ist das Div in dem die infos stehen
const box1 = document.querySelector('.box1'); // Test box1
const controlls = document.querySelector('.controlls');
var box2 = document.querySelector('.box2'); // Zwite test box wird nicht benutztz


box1.addEventListener('click', (event) => { // Funktion für die Test box1
console.log('Box 1 Clicked')}
);


function Enemy(name){ // wird noch nicht benutzt, kommt später
    this.name = name;
    this.health = 100;
    this.strength = 5;
    this.defence = 5;
    this.mana = 5;
    this.energy = 5;
    this.level = 1;
}

const enemy = new Enemy('Dragon');


const playerStats = { // Einfaches Objekt mit default werten
    health : 100,
    strength : 5,
    defence : 5,
    mana : 5,
    energy : 5,
    level : 1,

    allStats : function(){
        let allStats = "Leben: " + this.health + "<br>" +
            "Stärke: " + this.strength + "<br>" +
            "Verteidigung: " + this.defence + "<br>" +
            "Mana: " + this.mana + "<br>" +
            "Energie: " + this.energy + "<br>" +
            "Level: " + this.level + "<br>";
        return allStats; // Rückgabe der statistiken als string
    },

    allSpells : function(){
        if(this.hasOwnProperty('spells')){
            let spellList = [];
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


function addMagic() { // Funktion für den Button im index
    if (!playerStats.hasOwnProperty('spells')) { // Wenn das playerStats objekt das Attribut spells nicht besitzt
        playerStats.spells = []; // Das Attribut wird als Liste erstellt
        alert('Magic unlocked.'); 
        alert('"Fireball learned.');
    }

    if (!playerStats.spells.includes("Feuerball")) { // Wenn der Zauberspruch Feuerball nicht esistiert
        const feuerBallBtn = document.createElement('button'); // Der Zauberspruch Feuerball wird hinzugefügt
        feuerBallBtn.textContent = "Feuerball"; // Der Textihnalt wird Hinzugefügt
        feuerBallBtn.id = "feuerball-button";  //  Der Knopft bekommt eine einzigartige id

        feuerBallBtn.addEventListener('click', function() {
            //  was wenn der button geckilckt wird?
            console.log("Feuerball benutzt!");
            // OPTIM: Hier kann noch mehr eingefügt werden
        });

        controlls.appendChild(feuerBallBtn); // Der button wird in controlls eingefügt
        const learnMagicBtn = document.querySelector('#learn_magic'); // Es wird der button referenciert 
        if (learnMagicBtn) { // wenn er existiert
            controlls.removeChild(learnMagicBtn); //der button wird entfernt
        }
        playerStats.spells.push("Feuerball"); // Der button wird in die spells liste im playerstats Attribut eingefügt
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

let showspells = false;
function showAllSpells(){
    if(!showspells){
        box2.innerHTML = playerStats.allSpells();
        showspells = true;
    }else if(showspells){
        box2.innerHTML = "";
        showspells = false;
    }
}

function showEnemies(){
    
    box1.innerHTML = "Es gibt momentan keine Gegner.";
}