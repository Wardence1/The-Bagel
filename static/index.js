console.log("why are you in the log?");

let username;
document.getElementById("name").innerHTML = "The Bagel";

document.getElementById("nameButton").onclick = function() {
    
    username = document.getElementById("nameText").value;
    if (username == 69) 
    {username = "(;"} 
    else if (username == "I like bagels")
    {username = "I Like Bagels Too"}
    else if (username == "Jeb_")
    {username = "add toilets to Minecraft!!!"}
    else if (username == "Jackson Kidwell")
    {username = "Me"}
    else if (username == "Silas Kidwell")
    {username = "and get off my site bro!"}

    document.getElementById("name").innerHTML = "Hello, " + username;
}
    