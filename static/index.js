console.log("why are you in the log?");

let username;
document.getElementById("name").innerHTML = "Hello,";

document.getElementById("nameButton").onclick = function() {
    
    username = document.getElementById("nameText").value;
    document.getElementById("name").innerHTML = "Hello, " + username;
}
    