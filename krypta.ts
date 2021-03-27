/**
 * dungeon
 */
//% weight=100 color=#34a1eb icon="\uf279" block="Dungeon"
namespace dungeon {
    let _krypta: Krypta = null;
    let _currentLevel: Level = null;
    let _currentRoom: Room = null;
    /**
     * Aktulany Level
     */
    //% block
    export function currentLevel(): Level {
        return _currentLevel;
    }
    /**
     * Aktulany Room
     */
    //% block
    export function currentRoom(): Room {
        return _currentRoom;
    }
     /**
     * Aktulany Room
     */
    //% block
    export function nextRoom(goOverDoor:string): Room {
        if(goOverDoor==""){
            return _currentRoom;    
        }
        if(!_currentRoom.hasDoor(goOverDoor)){
            return _currentRoom;    
        }
        return _currentRoom;
    }
    /**
     * Incjacja mojej Krypty
     */
    //% block
    export function init() {
        _krypta = new dungeon.Krypta("Moja krypta")        
        for (let i = 0; i < levels.length; i++) {
            let myLevel = levels[i];
            console.log("myLevel.roomStart")
            console.log(myLevel["roomStart"])
            console.log("myLevel.rooms")
            let myRooms = myLevel["rooms"] 
            console.log(myRooms.length)
            let oLv = new Level(i+1, myLevel["roomStart"], myLevel["roomEnd"]);
            for (let k = 0; k < myRooms.length; k++) {
                let myRoom = myRooms[k];
                console.log("myRoom.no")
                console.log(myRoom["no"])
                oLv.addRoom(new Room(myRoom["no"], myRoom["doors"], myRoom["score"]));
            }
            _krypta.addLevel(oLv)
        }       
        _currentLevel = _krypta.levels[0];
        _currentRoom = _currentLevel.rooms[0];       
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Krypta{
        name: string;       
        levels: Level[];
        constructor(name: string) {
            this.name = name;
            this.levels = [];
        }
        addLevel(level:Level) {
            this.levels.push(level);
        }
        toString() {
            return "name:" + this.name + ", levels:" + this.levels.length;
        }
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Level{
        id: number;
        roomStart: number;
        roomEnd: number;
        rooms: Room[];
        constructor(id: number,roomStart: number,roomEnd: number) {
            this.id = id;
            this.roomStart = roomStart;
            this.roomEnd = roomEnd;
            this.rooms = [];
        }
        addRoom(room:Room) {
            this.rooms.push(room);
        }
        findRoom(no:number) {
            return this.rooms.find(room => room.no === no)
        }
        toString() {
            return "id:" + this.id + ", rooms:" + this.rooms.length;
        }
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Room{
        no: number;
        doors: string;
        score: number;
        constructor(no: number,doors: string, score: number) {
            this.no = no;
            this.doors = doors;
            this.score = score;
        }
        hasDoor(d:string) {
            if(!d || d=="X"){
                return false;
            }
            return this.doors.indexOf(d) > -1;
        }
        nextRoomNo(d:string) {
            if(!this.hasDoor(d)){
                return this.no;
            }
            if(d=="L"){
                return this.no-1;
            }else if(d=="P"){
                return this.no+1;
            }else if(d=="G"){
                return this.no+10;
            }else if(d=="D"){
                return this.no-10;
            }
            return this.no;
        }
        toString() {
            return "no:" + this.no + ", doors:" + this.doors + ", score" + this.score;
        }
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}
let levels = [
                {
                    "roomStart": 10,
                    "roomEnd": 61,
                    "rooms": [{ 'no': 10, 'doors': 'P','score': 0},{'no': 11, 'doors': 'GPL', 'score': 1 }, { 'no': 12, 'doors': 'PL', 'score': 2 }, { 'no': 13, 'doors': 'PL', 'score': 3 }, { 'no': 14, 'doors': 'GL', 'score': 4 }, { 'no': 15, 'doors': 'GD', 'score': 5 }, { 'no': 21, 'doors': 'DP', 'score': 1 }, { 'no': 22, 'doors': 'GPL', 'score': 2 }, { 'no': 23, 'doors': 'L', 'score': 3 }, { 'no': 24, 'doors': 'GDP', 'score': 4 }, { 'no': 25, 'doors': 'GDL', 'score': 5 }, { 'no': 31, 'doors': 'P', 'score': 1 }, { 'no': 32, 'doors': 'DPL', 'score': 2 }, { 'no': 33, 'doors': 'L', 'score': 3 }, { 'no': 34, 'doors': 'GD', 'score': 4 }, { 'no': 35, 'doors': 'GD', 'score': 5 }, { 'no': 41, 'doors': 'GP', 'score': 1 }, { 'no': 42, 'doors': 'PL', 'score': 2 }, { 'no': 43, 'doors': 'PL', 'score': 3 }, { 'no': 44, 'doors': 'DL', 'score': 4 }, { 'no': 45, 'doors': 'GD', 'score': 5 }, { 'no': 51, 'doors': 'GDP', 'score': 1 }, { 'no': 52, 'doors': 'L', 'score': 2 }, { 'no': 53, 'doors': 'P', 'score': 3 }, { 'no': 54, 'doors': 'PL', 'score': 4 }, { 'no': 55, 'doors': 'DL', 'score': 5 }]
                }
            ];