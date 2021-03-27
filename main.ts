function displayRoom (room: dungeon.Room) {
    console.log(">>> displayRoom" + room)
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
    
})
input.onButtonPressed(Button.B, function () {
    
})
console.log("+++++++++START++++++++++++++++++++++++")
console.log(">>> Init")
dungeon.init()
console.log("Aktualny level: " + dungeon.currentLevel())
console.log("Aktualny room: " + dungeon.currentRoom())
displayRoom(dungeon.currentRoom())
