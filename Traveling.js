var WinnieThePooh = { character: "Winnie the Pooh" };
var Piglet = { character: "Piglet" };
var Bees = { character: "Bees" };
var ChristopherRobin = { character: "Christopher Robin" };
var Owl = { character: "Owl" };
var Rabbit = { character: "Rabbit" };
var Gopher = { character: "Ghoper" };
var Kanga = { character: "Kanga" };
var Eeyore = { character: "Eeyore" };
var Heffalumps = { character: "Heffalumps" };
var Tigger = { character: "Tigger" };


Heffalumps.north = null
Heffalumps.south = null
Heffalumps.west = Eeyore
Heffalumps.east = null

Eeyore.north = null
Eeyore.south = Kanga
Eeyore.west = null
Eeyore.east = Heffalumps

Kanga.north = Eeyore
Kanga.south = ChristopherRobin
Kanga.west = null
Kanga.east = null

ChristopherRobin.north = Kanga
ChristopherRobin.south = WinnieThePooh
ChristopherRobin.west = Owl
ChristopherRobin.east = Rabbit

Rabbit.north = null
Rabbit.south = Bees
Rabbit.west = ChristopherRobin
Rabbit.east = Gopher

Gopher.north = null
Gopher.south = null
Gopher.west = Rabbit
Gopher.east = null

Bees.north = Rabbit
Bees.south = null
Bees.west = WinnieThePooh
Bees.east = null

WinnieThePooh.north = ChristopherRobin
WinnieThePooh.south = Tigger
WinnieThePooh.west = Piglet
WinnieThePooh.east = Bees

Tigger.north = WinnieThePooh
Tigger.south = null
Tigger.west = null
Tigger.east = null

Piglet.north = Owl
Piglet.south = null
Piglet.west = null
Piglet.east = WinnieThePooh

Owl.north = null
Owl.south = Piglet
Owl.west = null
Owl.east = ChristopherRobin



let player = {
    location: Tigger
}

function travel(direction){

if (direction == "north"){
    if(player.location.north == null){
        console.log("The is not anybody there!")
        return
    }
    player.location = player.location.north
    console.log("You are in " + player.location.character + "'s house");
}

if (direction == "south"){
    if(player.location.south == null){
        console.log("The is not anybody there!")
        return
    }
    player.location = player.location.south
    console.log("You are in " + player.location.character + "'s house");
}

if (direction == "west"){
    if(player.location.west == null){
        console.log("The is not anybody there!")
        return
    }
    player.location = player.location.west
    console.log("You are in " + player.location.character + "'s house");
}

if (direction == "east"){
    if(player.location.east == null){
        console.log("The is not anybody there!")
        return
    }
    player.location = player.location.east
    console.log("You are in " + player.location.character + "'s house");
}

}

travel("north");
travel("north");
travel("west");
travel("east");