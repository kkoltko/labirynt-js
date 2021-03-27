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
     * Incjacja mojej Krypty
     */
    //% block
    export function init() {
        let levels = myData.levels;
        _krypta = new dungeon.Krypta(myData.name)
        for (let i = 0; i < levels.length; i++) {
            let myLevel = levels[i];
            let oLv = new dungeon.Level(i, myLevel.roomStart, myLevel.roomEnd);
            for (let k = 0; k < myLevel.rooms.length; k++) {
                let myRoom = myLevel.rooms[k];
                oLv.addRoom(new dungeon.Room(myRoom.no, myRoom.doors, myRoom.score));
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
            return this.doors.indexOf(d) > -1;
        }
        toString() {
            return "no:" + this.no + ", doors:" + this.doors + ", score" + this.score;
        }
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}
