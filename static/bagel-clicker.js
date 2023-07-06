//This code belongs to Jackson Kidwell 2023.
console.log("Welcome to the log for Bagel Clicker.")
/*
Welcome to the code of bagel clicker.
This is obviously a cookie clicker fan game.
I'm going to try and make this one more click intensive though.

THINGS TO ADD:
Random bagel that spawns in and gives you a fraction of the bagels you have currently
A upgrade that gives you bagels based on time. Instead of giving you extra bagels per click.
A saving feature

IDEAS FOR UPGRADES:

Better Dough: 
Oven: bakes 10 bagels every second

UNLOCKS:
Bakers stove: Once you unlock it you have to click on the oven for it to start baking. after it's done it will give you bagels based on the current amount of bagels you have.
You will get a few unlocks that increase critical click chance.

UI:
add a states feature on the side so you can see how many bagels your getting per click and how many bagels per second.

STUFF:
Critical Clicks: give you 5 bagels per critical hit, default chance is 5%.
Add animations for the each bagel and critical clicks.
Import/export system.
*/

//Basics
let bagelsPerClick = 1;
let bagelCount = 0;
let bagelsPerCritClick = 2;
let critClickChance = 5;
let randomBagelChance = 10;
//Plain Bagel
let plainBagelPrice = 20;
let plainBagelUpgrades = 0;
//Cream Cheese
let creamCheesePrice = 500;
let creamCheeseUpgrades = 0;
//Bagel Sandwich
let bagelSandwichPrice= 1000;
let bagelSandwichUpgrades=0;
//Animations
const CRITCLICKS = document.getElementById("critClick");
const randomBagel = document.getElementById("randomBagel");
theBagel = document.getElementById("theBagel");
//random

 
//Making Sure Everything Is Drawn
document.getElementById("bagelCount").innerHTML = bagelCount.toLocaleString("en-US");
document.getElementById("plainBagelPrice").innerHTML = `${plainBagelPrice.toLocaleString("en-US")} Bagels / You Own: ${plainBagelUpgrades}`;
document.getElementById("BagelsPerClick").innerHTML = `Bagels Per Click: ${bagelsPerClick}`;
document.getElementById("criticalClickBagel").innerHTML = `Bagels Per Crit-Click: ${bagelsPerCritClick}`;
document.getElementById("creamCheesePrice").innerHTML = `${creamCheesePrice.toLocaleString("en-US")} Bagels / You Own: ${creamCheeseUpgrades}`;
document.getElementById("bagelSandwichPrice").innerHTML = `${bagelSandwichPrice.toLocaleString("en-US")} Bagels / You Own: ${bagelSandwichUpgrades}`;
document.getElementById("criticalClickBagel").innerHTML = `Bagels Per Crit-Click: ${bagelsPerCritClick}`;

//The Bagel
document.getElementById("theBagel").onclick = function() {
    bagelCount += bagelsPerClick;
    document.getElementById("bagelCount").innerHTML = bagelCount.toLocaleString("en-US");

  

    //Crit-Click
    critClick = Math.floor(Math.random() * 100) + 1;
    if (critClick <= critClickChance) {
        bagelCount += bagelsPerCritClick;
        bagelCount -= bagelsPerClick;
        document.getElementById("bagelCount").innerHTML = bagelCount.toLocaleString("en-US");
        document.getElementById("critClick").innerHTML = `CRIT-CLICK`;
        CRITCLICKS.style.transitionDuration="0s"
        CRITCLICKS.style.opacity = 1;
    } else {
        CRITCLICKS.style.transitionDuration="1s"
        CRITCLICKS.style.opacity = 0;
    }

}

//Random Bagel
setInterval(function(){randBagel = Math.floor(Math.random() * 100) + 1;
if (randBagel <= randomBagelChance){
    randomBagel.style.width = "5%";
        let randX = Math.floor(Math.random() * 100) + 1;
        let randY = Math.floor(Math.random() * 100) + 1;
     randomBagel.style.top=randY + "%";
    randomBagel.style.left=randX + "%";
    console.log("test")
}}, 5000);

//Random Bagel Click
document.getElementById("randomBagel").onclick=function() {
    randomBagel.style.width = 0;
    bagelCount += bagelsPerCritClick * 2;
}


//Plain Bagel Upgrade
document.getElementById("plainBagelUpgrade").onclick=function() {
    if (bagelCount >= plainBagelPrice){
        bagelsPerClick += 1;
        bagelCount -= plainBagelPrice;
        plainBagelUpgrades += 1;
        plainBagelPrice *= 1.5;
        bagelsPerCritClick = bagelsPerClick * 2.5;
        bagelsPerCritClick = Math.floor(bagelsPerCritClick);
        plainBagelPrice = Math.floor(plainBagelPrice);
    }
    
}

//Cream Cheese Upgrade
document.getElementById("creamCheeseUpgrade").onclick=function() {
    if (bagelCount >= creamCheesePrice){
        bagelCount -= creamCheesePrice;
        creamCheeseUpgrades += 1;
        creamCheesePrice *= 2.5;
        if (critClickChance < 100){
            critClickChance += 1;
        }
        bagelsPerCritClick = bagelsPerClick * 2.5;
        bagelsPerCritClick = Math.round(bagelsPerCritClick);
        creamCheesePrice = Math.floor(creamCheesePrice);
    }
    
}

//Bagel Sandwich Upgrade
document.getElementById("bagelSandwichUpgrade").onclick=function() {
    if (bagelCount >= bagelSandwichPrice){
        bagelCount -= bagelSandwichPrice;
        bagelSandwichUpgrades += 1;
        bagelSandwichPrice *= 2;
        randomBagelChance += 3;
        bagelsPerCritClick = bagelsPerClick * 2.5;
        bagelsPerCritClick = Math.round(bagelsPerCritClick);
        bagelSandwichPrice = Math.floor(bagelSandwichPrice);
    }
    
}



//Updates Every Millisecond
setInterval(function() {
    document.getElementById("criticalClickBagel").innerHTML = `Bagels Per Crit-Click: ${bagelsPerCritClick}`;
        document.getElementById("bagelCount").innerHTML = bagelCount.toLocaleString("en-US");
        document.getElementById("plainBagelPrice").innerHTML = `${plainBagelPrice.toLocaleString("en-US")} Bagels / You Own: ${plainBagelUpgrades}`;
        document.getElementById("BagelsPerClick").innerHTML = `Bagels Per Click: ${bagelsPerClick}`;
        document.getElementById("creamCheesePrice").innerHTML = `${creamCheesePrice.toLocaleString("en-US")} Bagels / You Own: ${creamCheeseUpgrades}`;
        document.getElementById("bagelSandwichPrice").innerHTML = `${bagelSandwichPrice.toLocaleString("en-US")} Bagels / You Own: ${bagelSandwichUpgrades}`;
        document.getElementById("criticalClickChance").innerHTML= `Crit-Click Chance: ${critClickChance}%`
        document.getElementById("randomClickBagel").innerHTML= `Bagels Per Random Bagel: ${bagelsPerCritClick * 2}`
        hide = true;
}, 100);