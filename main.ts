console.log("+++++++++START++++++++++++++++++++++++")
basic.clearScreen()
console.log(">>> Dungeon init Start")
dungeon.init()
console.log(">>> Dungeon init OK")
console.log(">>> Aktualny level: " + dungeon.currentLevel())
console.log(">>> Aktualny room: " + dungeon.currentRoom())
displayRoom(dungeon.currentRoom())
//============================================
input.onButtonPressed(Button.A, function () {
   goOverDoor(Door.L)
})
input.onButtonPressed(Button.B, function () {
    goOverDoor(Door.P)
})
input.onButtonPressed(Button.AB, function () {
    goOverDoor(Door.D)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	goOverDoor(Door.G)
})
function goOverDoor(d: Door) {
    console.log(">>> goOverDoor:" + d)
    if(isEnd){
        images.iconImage(IconNames.Ghost).showImage(0)
    }else if(dungeon.nextRoom(d)){
        isEnd = true;
        images.iconImage(IconNames.Butterfly).showImage(0)
    }else{
        displayRoom(dungeon.currentRoom())
    }    
}
let isEnd = false;
//============================================
function displayRoom (room: dungeon.Room) {
    console.log(">>> displayRoom: " + room)
    if(!room){
        images.iconImage(IconNames.No).showImage(0)
    }else{
        images.createImage(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `).showImage(0)
        if (room.hasDoor(Door.G)) {
            led.plotBrightness(2, 0, 0)
        }
        if (room.hasDoor(Door.D)) {
            led.plotBrightness(2, 4, 0)
        }
        if (room.hasDoor(Door.P)) {
            led.plotBrightness(4, 2, 0)
        }
        if (room.hasDoor(Door.L)) {
            led.plotBrightness(0, 2, 0)
        }
    }
}