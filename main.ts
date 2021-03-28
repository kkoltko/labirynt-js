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
function displayRoomSciany (room: dungeon.Room) {
    console.log(">>> displayRoom: " + room)
    if(!room){
        return
    }
    openDoor(roomWallSpirits[20],room.hasDoor(Door.G))
    openDoor(roomWallSpirits[24],room.hasDoor(Door.D))
    openDoor(roomWallSpirits[42],room.hasDoor(Door.P))
    openDoor(roomWallSpirits[2],room.hasDoor(Door.L))
}
function openDoor(door: game.LedSprite, isOpen: boolean) {
   //isOpen?door.setBrightness(0):door.setBrightness(roomWallSpiritsJasnosc)
   if(isOpen){door.setBrightness(0)}else{door.setBrightness(roomWallSpiritsJasnosc)}
}
function initRoomSciany () {
    for(let x=0;x<5;x++){       
        for(let y=0;y<5;y++){
            if(x==0 || x==4 || y==0 || y==4){
                let sciana = game.createSprite(x, y)
                sciana.set(LedSpriteProperty.Brightness, 50)
                let index = parseInt(x+""+y);
                roomWallSpirits.set(index,sciana);
            }
        } 
    }
}

function initRoomDoors() {
    roomDoorSpirits.set(Door.G, game.createSprite(2, 1))
    roomDoorSpirits.set(Door.D, game.createSprite(2, 3))
    roomDoorSpirits.set(Door.P, game.createSprite(3, 2))
    roomDoorSpirits.set(Door.L, game.createSprite(1, 2))
    for(let x=0;x<roomDoorSpirits.length;x++){
        roomDoorSpirits[x].set(LedSpriteProperty.Brightness, 0)
    }    
}
function initLudzik() {
    ludzik = game.createSprite(ludzikPosX, ludzikPosY)
    ludzik.set(LedSpriteProperty.Brightness, 180)
    ludzik.set(LedSpriteProperty.Blink, 500)
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
        onEnterToRoom(d);
    }    
}
function onEnterToRoom (d: Door) {
    game.pause()        
    //basic.clearScreen()
    displayRoomSciany(dungeon.currentRoom())
    resetLudzikPosition()
    game.resume()
}
function ludzikMove() {
    ludzik.setX(ludzikPosX) 
    ludzik.setY(ludzikPosY)
    basic.pause(opoznienie)
}
//============================================
// INTERAKCJE
input.onButtonPressed(Button.A, function () {
   // INFO
   ludzikGoOverDoor()
})
input.onButtonPressed(Button.B, function () {
   ludzikGoOverDoor()
})
function ludzikGoOverDoor() {    
    if (ludzik.isTouching(roomDoorSpirits[Door.G])) {
        goOverDoor(Door.G)
    } else if (ludzik.isTouching(roomDoorSpirits[Door.D])) {
        goOverDoor(Door.D)
    } else if (ludzik.isTouching(roomDoorSpirits[Door.P])) {
        goOverDoor(Door.P)
    } else if (ludzik.isTouching(roomDoorSpirits[Door.L])) {
        goOverDoor(Door.L)
    }
}
function resetLudzikPosition(){
    ludzikPosX = 2
    ludzikPosY = 2
}

basic.forever(function () {
    if (checkUp() || checkDown() || checkLeft() || checkRight()) {
        ludzikMove()        
    }
})
//###########################################
//============================================
let isEnd = false;
//============================================
let ludzik: game.LedSprite = null
let roomDoorSpiritsJasnosc:number = 5; 
let roomDoorSpirits : game.LedSprite[] = []
let roomWallSpiritsJasnosc:number = 50; 
let roomWallSpirits : game.LedSprite[] = []
//============================================
let ludzikPosX = 2
let ludzikPosY = 2
//---------------
// stale do poruszania sie
const posMin = 1
const posMax = 3
const czulosc = 300
const speed = 500
const opoznienie = 750
//---------------
//###########################################
console.log("+++++++++START++++++++++++++++++++++++")
basic.clearScreen()
console.log(">>> Dungeon init Start")
dungeon.init()
console.log(">>> Dungeon init OK")
console.log(">>> Aktualny level: " + dungeon.currentLevel())
console.log(">>> Aktualny room: " + dungeon.currentRoom())
initRoomDoors()
initRoomSciany()
resetLudzikPosition()
initLudzik()
onEnterToRoom (Door.P)
