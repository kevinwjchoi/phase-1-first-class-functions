function receivesAFunction(greeting){
    greeting();
}

function returnsANamedFunction(){
    console.log("What to do today.");
}

function playVideoGames(){
    console.log("Lets play games.");
}
function playOutside(){
    console.log("Lets play outside.");
}


function returnsANamedFunction(){
    return function thingsToDo(){
        playVideoGames();
        playOutside();
    }
}
function returnsAnAnonymousFunction(){
    return function() {
    console.log("hi")
}
}