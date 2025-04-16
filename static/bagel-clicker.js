//This code belongs to Jackson Kidwell 2023-2025.
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
let amount_random_bagel = bagelsPerCritClick * 18;
let randomBagelChance = 10;
let bagels_per_second = 0;
//Plain Bagel
let plainBagelPrice = 20;
let plainBagelUpgrades = 0;
//Cream Cheese
let creamCheesePrice = 500;
let creamCheeseUpgrades = 0;
//Bagel Sandwich
let bagelSandwichPrice= 1000;
let bagelSandwichUpgrades=0;
// Bagel Grandma
let bagel_grandma_price = 10000;
let bagel_grandma_upgrades = 0;

//Animations
const CRITCLICKS = document.getElementById("critClick");
const randomBagel = document.getElementById("randomBagel");
theBagel = document.getElementById("theBagel");


 
//Making Sure Everything Is Drawn
document.getElementById("bagelCount").innerHTML = bagelCount.toLocaleString("en-US");
document.getElementById("plainBagelPrice").innerHTML = `${plainBagelPrice.toLocaleString("en-US")} Bagels / You Own: ${plainBagelUpgrades}`;
document.getElementById("BagelsPerClick").innerHTML = `Bagels Per Click: ${bagelsPerClick}`;
document.getElementById("bagels_per_second").innerHTML = `Bagels Per Second: ${bagels_per_second}`;
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
}}, 5000);

//Random Bagel Click
document.getElementById("randomBagel").onclick=function() {
    randomBagel.style.width = 0;
    bagelCount += amount_random_bagel;
}


//Plain Bagel Upgrade
document.getElementById("plainBagelUpgrade").onclick=function() {
    if (bagelCount >= plainBagelPrice){
        bagelsPerClick += 1;
        bagelCount -= plainBagelPrice;
        plainBagelUpgrades += 1;
        plainBagelPrice *= 1.25;
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
        creamCheesePrice *= 1.35;
        if (critClickChance < 100){
            critClickChance += 2;
        }
        if (critClickChance > 100){
            critClickChance = 100;
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
        if (randomBagelChance < 100){
            randomBagelChance += 4;
        }
        bagelsPerCritClick = bagelsPerClick * 2.5;
        bagelsPerCritClick = Math.round(bagelsPerCritClick);
        bagelSandwichPrice = Math.floor(bagelSandwichPrice);
    }
    
}

// Bagel Grandma Upgrade
document.getElementById("bagel_grandma_upgrade").onclick=function() {
    if (bagelCount >= bagel_grandma_price){
        bagelCount -= bagel_grandma_price;
        bagel_grandma_upgrades += 1;
        bagel_grandma_price *= 2;
	
        bagels_per_second++;
    }
}


//Updates Every Millisecond
setInterval(function() {
    amount_random_bagel = bagelsPerCritClick * 18;
    document.getElementById("criticalClickBagel").innerHTML = `Bagels Per Crit-Click: ${bagelsPerCritClick}`;
    document.getElementById("bagelCount").innerHTML = bagelCount.toLocaleString("en-US");
    document.getElementById("plainBagelPrice").innerHTML = `${plainBagelPrice.toLocaleString("en-US")} Bagels / You Own: ${plainBagelUpgrades}`;
    document.getElementById("BagelsPerClick").innerHTML = `Bagels Per Click: ${bagelsPerClick}`;
    document.getElementById("creamCheesePrice").innerHTML = `${creamCheesePrice.toLocaleString("en-US")} Bagels / You Own: ${creamCheeseUpgrades}`;
    document.getElementById("bagelSandwichPrice").innerHTML = `${bagelSandwichPrice.toLocaleString("en-US")} Bagels / You Own: ${bagelSandwichUpgrades}`;
    document.getElementById("criticalClickChance").innerHTML= `Crit-Click Chance: ${critClickChance}%`
    document.getElementById("randomClickBagel").innerHTML= `Bagels Per Random Bagel: ${amount_random_bagel}`
    document.getElementById("bagel_grandma_price").innerHTML= `${bagel_grandma_price.toLocaleString("en-US")} Bagels / You Own: ${bagel_grandma_upgrades}`;
    document.getElementById("bagels_per_second").innerHTML= `Bagels Per Second: ${bagels_per_second}`
}, 100);

//Updates Every Second
setInterval(function() {
    bagelCount += bagels_per_second;
}, 1000);

//Cookies
const SAVEBUTTON = document.querySelector("#saveButton");
const RESETBUTTON = document.querySelector("#resetButton");

SAVEBUTTON.addEventListener("click", () => {
    //Basics
    setCookie("bagelCount", bagelCount);
    setCookie("bagelsPerClick", bagelsPerClick);
    setCookie("bagelsPerCritClick", bagelsPerCritClick);
    setCookie("critClickChance", critClickChance);
    setCookie("randomBagelChance", randomBagelChance);
    setCookie("bagels_per_second", bagels_per_second)
    //Plain Bagel
    setCookie("plainBagelPrice", plainBagelPrice);
    setCookie("plainBagelUpgrades", plainBagelUpgrades);
    //Cream Cheese
    setCookie("creamCheesePrice", creamCheesePrice);
    setCookie("creamCheeseUpgrades", creamCheeseUpgrades);
    //Bagel Sandwich
    setCookie("bagelSandwichPrice", bagelSandwichPrice);
    setCookie("bagelSandwichUpgrades", bagelSandwichUpgrades);
    // Bagel Grandma
    setCookie("bagel_grandma_price", bagel_grandma_price);
    setCookie("bagel_grandma_upgrades", bagel_grandma_upgrades);

    window.alert("Your bagels were saved successfully.")
});



RESETBUTTON.addEventListener("click", () => {
    const cookieResponse = confirm("Are you sure you wanna reset your progress?")
    if (cookieResponse){
        //Basics
        setCookie("bagelCount", 0);
        setCookie("bagelsPerClick", 1);
        setCookie("bagelsPerCritClick", 2);
        setCookie("critClickChance", 5);
        setCookie("randomBagelChance", 10);
	setCookie("bagels_per_second", 0);
        //Plain Bagel
        setCookie("plainBagelPrice", 20);
        setCookie("plainBagelUpgrades", 0);
        //Cream Cheese
        setCookie("creamCheesePrice", 500);
        setCookie("creamCheeseUpgrades", 0);
        //Bagel Sandwich
        setCookie("bagelSandwichPrice", 1000);
        setCookie("bagelSandwichUpgrades", 0);
	// Bagel Grandma
	setCookie("bagel_grandma_price", 10000);
	setCookie("bagel_grandma_upgrades", 0);
	
        location.reload()
    }
});

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`
}

function deleteCookie(name) {
    const cookieResponse = confirm("Are you sure you wanna reset your progress?")
    if (cookieResponse){
        setCookie(name, null, null);
    }
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length+1)
        }
	
    })
    return result;
}

/* Cookies Drawn */
//Basic
bagelCount = getCookie("bagelCount") * 1;
bagelsPerClick = getCookie("bagelsPerClick") * 1;
bagelsPerCritClick = getCookie("bagelsPerCritClick") * 1;
critClickChance = getCookie("critClickChance") * 1;
randomBagelChance = getCookie("randomBagelChance") * 1;
bagels_per_second = getCookie("bagels_per_second") * 1;
//Plain Bagel
plainBagelPrice = getCookie("plainBagelPrice") * 1;
plainBagelUpgrades = getCookie("plainBagelUpgrades") * 1;
//Cream Cheese
creamCheesePrice = getCookie("creamCheesePrice") * 1;
creamCheeseUpgrades = getCookie("creamCheeseUpgrades") * 1;
//Bagel Sandwich
bagelSandwichPrice = getCookie("bagelSandwichPrice") * 1;
bagelSandwichUpgrades = getCookie("bagelSandwichUpgrades") * 1;
// Bagel Grandma
bagel_grandma_price = getCookie("bagel_grandma_price") * 1;
bagel_grandma_upgrades = getCookie("bagel_grandma_upgrades") * 1;

        
    if (getCookie("firstTime") == null){
        setCookie("firstTime", 1)
        //Basics
        setCookie("bagelCount", 0);
        setCookie("bagelsPerClick", 1);
        setCookie("bagelsPerCritClick", 2);
        setCookie("critClickChance", 5);
        setCookie("randomBagelChance", 10);
	setCookie("bagels_per_second", 0)
        //Plain Bagel
        setCookie("plainBagelPrice", 20);
        setCookie("plainBagelUpgrades", 0);
        //Cream Cheese
        setCookie("creamCheesePrice", 500);
        setCookie("creamCheeseUpgrades", 0);
        //Bagel Sandwich
        setCookie("bagelSandwichPrice", 1000);
        setCookie("bagelSandwichUpgrades", 0);
        location.reload()
    }     
