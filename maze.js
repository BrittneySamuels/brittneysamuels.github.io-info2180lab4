// JavaScript File
var player = false;  // if player has hit a wall

window.onload = function() {
    $("start").onclick = clickstart;
    $("end").onmouseover = end;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = passboundary;
        boundaries[i].onmouseleave = cheat;
    }
};

function passboundary() { // if player mouse touches the boundary
    player = true;
    $("status").textContent = "You Lose, try not to touch the boundaries, click S to restart";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}


function clickstart() { // restart maze
    player = false;
    $("status").textContent = "Try to get from S to E without touching the sides.";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function cheat(){
    player = false;
    $("status").textContent = "You Lose, try not try to cheat now, click S to restart";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function end() { // if player reaches the end.
    if(!player) {
        $("status").textContent = "You win! :)"; // if player wins 
    }
}