console.log("+++++++++START++++++++++++++++++++++++")
basic.clearScreen()
console.log(">>> Start init")
images.iconImage(IconNames.Heart)
//dungeon.init()
console.log(">>> End init")
input.onButtonPressed(Button.A, function () {
     console.log(">>> onButtonPressed A")
})
input.onButtonPressed(Button.B, function () {
    console.log(">>> onButtonPressed B")
})
/*
console.log("Aktualny level: " + dungeon.currentLevel())
console.log("Aktualny room: " + dungeon.currentRoom())
displayRoom(dungeon.currentRoom())
*/


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