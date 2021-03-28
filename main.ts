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
const snipe = 3;
function displayCelownik () {
    game.createSprite(2, 0)
    game.createSprite(2, 1)
    led.plotBrightness(2, 2, snipe)
    led.plotBrightness(2, 3, snipe)
    led.plotBrightness(2, 4, snipe)
    led.plotBrightness(0, 2, snipe)
    led.plotBrightness(1, 2, snipe)
    led.plotBrightness(3, 2, snipe)
    led.plotBrightness(4, 2, snipe)
}
function displayRoom (room: dungeon.Room) {
    console.log(">>> displayRoom: " + room)
    if(!room){
        return
    }
    for(let x=0;x<5;x++){
        for(let y=0;y<5;y++){
            if (room.hasDoor(Door.G)) {
                if(x==2 && y==0)continue;
            }
            if (room.hasDoor(Door.D)) {
                if(x==2 && y==4)continue;
            }
            if (room.hasDoor(Door.P)) {
                if(x==4 && y==2)continue;
            }
            if (room.hasDoor(Door.L)) {
                if(x==0 && y==2)continue;
            }
            if(x==0 || x==4 || y==0 || y==4){
                let sciana = game.createSprite(x, y)
                sciana.set(LedSpriteProperty.Brightness, 100)
            }
        } 
    }
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

function initRoomDoor () {
    let doorG = game.createSprite(2, 1)
    doorG.set(LedSpriteProperty.Brightness, roomDoorSpiritsJasnosc)
    roomDoorSpirits.set(Door.G, doorG)

    let doorD = game.createSprite(2, 3)
    doorD.set(LedSpriteProperty.Brightness, roomDoorSpiritsJasnosc)
    roomDoorSpirits.set(Door.D, doorD)
    
    let doorP = game.createSprite(3, 2)
    doorP.set(LedSpriteProperty.Brightness, roomDoorSpiritsJasnosc)
    roomDoorSpirits.set(Door.L, doorP)
    
    let doorL = game.createSprite(1, 2)
    doorL.set(LedSpriteProperty.Brightness, roomDoorSpiritsJasnosc)
    roomDoorSpirits.set(Door.L, doorL)
}

function onEnterToRoom (d: Door) {
    //basic.clearScreen()
    
    ludzik = game.createSprite(2, 2)
    ludzik.off()
    ludzik.set(LedSpriteProperty.Brightness, 180)
    ludzik.set(LedSpriteProperty.Blink, 500)

 
    displayRoom(dungeon.currentRoom())
    ludzik.setX(roomDoorSpirits.get(d).x())
    ludzik.setY(roomDoorSpirits.get(d).y())
    ludzik.on()
    //displayCelownik ()
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
    if(ludzik){
        if (checkUp() || checkDown() || checkLeft() || checkRight()) {
            ludzik.set(LedSpriteProperty.X, ludzikPosX) 
            ludzik.set(LedSpriteProperty.Y, ludzikPosY)        
        }
    }
})
//###########################################
//============================================
let isEnd = false;
//============================================
let ludzik: game.LedSprite = null
let roomDoorSpiritsJasnosc:number = 5; 
let roomDoorSpirits : game.LedSprite[] = []
//============================================
let time = 0
let ludzikPosX = 0
let ludzikPosY = 0
//---------------
// stale do poruszania sie
const posMin = 1
const posMax = 3
const czulosc = 500
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
initRoomDoor();
onEnterToRoom (Door.L)

