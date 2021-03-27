/**
 * dungeon
 */
//% weight=100 color=#0fbc11 icon=""
namespace dungeon {
    let _currentLevel: Level = null;
    let _currentRoom: Room = null;
    /**
     * Startowy level 
     * @param startLevel Level
     */
    //% block
    export function init(startLevel:Level): void {
        _currentLevel = startLevel;
        _currentRoom = _currentLevel.rooms[0];
    }
    //% block
    export function currentLevel(): Level {
        return _currentLevel;
    }
    //% block
    export function currentRoom(): Room {
        return _currentRoom;
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
