console.log("hello")

let bagelsPerClick = 1;
let bagelCount = 0
let plainBagelPrice = 20
Number(bagelsPerClick);
Number(bagelCount);
Number(plainBagelPrice);

document.getElementById("bagelCount").innerHTML = bagelCount;
document.getElementById("plainBagelPrice").innerHTML = plainBagelPrice + " Bagels";

document.getElementById("theBagel").onclick = function() {
    bagelCount += bagelsPerClick;
    document.getElementById("bagelCount").innerHTML = bagelCount;
    
}

document.getElementById("plainBagelUpgrade").onclick=function() {
    if (bagelCount >= plainBagelPrice){
        bagelsPerClick += 1;
        bagelCount  -= plainBagelPrice;
        plainBagelPrice += 10;
        document.getElementById("bagelCount").innerHTML = bagelCount;
        document.getElementById("plainBagelPrice").innerHTML = plainBagelPrice + " Bagels";
    }
    
}