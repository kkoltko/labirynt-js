//============================================
function checkDown () {
    if (input.acceleration(Dimension.Y) < 0 - czulosc) {
        if (ludzikPosY > posMin) {
            ludzikPosY += -1
            return true
        }
    }
    return false
}
function checkUp () {
    if (input.acceleration(Dimension.Y) > czulosc) {
        if (ludzikPosY < posMax) {
            ludzikPosY += 1
            return true
        }
    }
    return false
}
function checkLeft () {
    if (input.acceleration(Dimension.X) < 0 - czulosc) {
        if (ludzikPosX > posMin) {
            ludzikPosX += -1
            return true
        }
    }
    return false
}
function checkRight () {
    if (input.acceleration(Dimension.X) > czulosc) {
        if (ludzikPosX < posMax) {
            ludzikPosX += 1
            return true
        }
    }
    return false
}
//============================================
// Pokoj
function displayRoom (room: dungeon.Room) {
    console.log(">>> displayRoom: " + room)
    if(!room){
        images.iconImage(IconNames.No).showImage(0)
    }else{
        images.createImage(`
            # # # # #
            # . . . #
            # . . . #
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
//============================================
function onStart () {
    ludzikPosX = randint(posMin, posMax)
    ludzikPosY = randint(posMin, posMax)
    led.plot(ludzikPosX, ludzikPosY)
}
//============================================
function goOverDoor(d: Door) {
    console.log(">>> goOverDoor:" + d)
    if(isEnd){
        images.iconImage(IconNames.Ghost).showImage(0)
    }else if(dungeon.nextRoom(d)){
        isEnd = true;
        images.iconImage(IconNames.Butterfly).showImage(0)
    }else{
        onEnterToRoom (d);
    }    
}
function onEnterToRoom (d: Door) {
    basic.clearScreen()
    ludzik = game.createSprite(2, 2)
    ludzik.set(LedSpriteProperty.Blink, 400)

    doorG = game.createSprite(2, 1)
    doorG.set(LedSpriteProperty.Brightness, jasnoscDrzwi)
    
    doorP = game.createSprite(3, 2)
    doorP.set(LedSpriteProperty.Brightness, jasnoscDrzwi)

    displayRoom(dungeon.currentRoom())    
}
//============================================
// INTERAKCJE
input.onButtonPressed(Button.A, function () {
   // INFO
})
input.onButtonPressed(Button.B, function () {
   /*
    time += 1
     if (Ludzikik.isTouching(doorUp)) {
        Ludzikik.delete()
        doorUp.delete()
        basic.showString("Up")
    } else if (Ludzikik.isTouching(doorRight)) {
        Ludzikik.delete()
        doorRight.delete()
        basic.showString("RIGHT")
    } else if (Ludzikik.isTouching(mySkarb)) {
        game.addScore(10)
        mySkarb.delete()
    } else {
    	
    }
    */
})

basic.forever(function () {
    if (checkUp() || checkDown() || checkLeft() || checkRight()) {
       ludzik.set(LedSpriteProperty.X, ludzikPosX) 
       ludzik.set(LedSpriteProperty.Y, ludzikPosY) 
    }    
})
//###########################################
//============================================
let isEnd = false;
//============================================
let jasnoscDrzwi:number = 5; 
let ludzik: game.LedSprite = null
let doorG: game.LedSprite = null
let doorD: game.LedSprite = null
let doorL: game.LedSprite = null
let doorP: game.LedSprite = null
//============================================
let time = 0
let ludzikPosX = 0
let ludzikPosY = 0
//---------------
// stale do poruszania sie
const posMin = 1
const posMax = 3
const czulosc = 200
const speed = 500
//---------------
//###########################################
//onStart()

//###########################################
console.log("+++++++++START++++++++++++++++++++++++")
basic.clearScreen()
console.log(">>> Dungeon init Start")
dungeon.init()
console.log(">>> Dungeon init OK")
console.log(">>> Aktualny level: " + dungeon.currentLevel())
console.log(">>> Aktualny room: " + dungeon.currentRoom())
onEnterToRoom (Door.L)

