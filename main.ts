console.log("+++++++++START++++++++++++++++++++++++")
console.log(">>> Load data")
/*
let levels = dane.levels;
for (let i = 0; i < levels.length; i++) {
    let myLevel = levels[i];
    let oLv = new krypta.Level(i, myLevel.roomStart, myLevel.roomEnd);
    for (let k = 0; k < myLevel.rooms.length; k++) {
        let myRoom = myLevel.rooms[k];
        oLv.addRoom(new krypta.Room(myRoom.no, myRoom.doors, myRoom.score));
    }
    krypta.addLevel(oLv)
}
//Dane.
console.log(">>> Init")
krypta.init();
*/
console.log("Aktualny level: " + dungeon.currentLevel())
console.log("Aktualny room: " + dungeon.currentRoom())

//import * from "krypta.json";
/*
function displayRoom (room: Room) {
    console.log(myNumber)
    console.log(room)
    if(!room){
        console.log("Heart")
        images.iconImage(IconNames.No).showImage(0)
    }else{
        console.log("Room")
        images.createImage(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `).showImage(0)
        if (room.hasDoor("G")) {
            led.plotBrightness(2, 0, 0)
        }
        if (room.hasDoor("D")) {
            led.plotBrightness(2, 4, 0)
        }
        if (room.hasDoor("P")) {
            led.plotBrightness(4, 2, 0)
        }
        if (room.hasDoor("L")) {
            led.plotBrightness(0, 2, 0)
        }
    }
}

input.onButtonPressed(Button.A, function () {
    displayRoom(roomInfo(myNumber))
    myNumber++
    if(myNumber>21){
        myNumber=10
    }
})
input.onButtonPressed(Button.B, function () {
    displayRoom(roomInfo(myNumber))
    myNumber--
    if(myNumber<10){
        myNumber=10
    }
})
let myString = "Oskar"
let myNumber = 10
let myListStr = ["a", "b", "c"]
let myListNo = [1, 2, 3]
let myBoolean = true
let myRooms: Room[] = []
myRooms.push(new Room(11,'GP',2))
myRooms.push(new Room(12,'LP',1))
myRooms.push(new Room(13,'LP',1))
myRooms.push(new Room(14,'LG',1))
myRooms.push(new Room(15,'G',5))
myRooms.push(new Room(21,'DP',1))
images.iconImage(IconNames.Happy).showImage(0)
*/