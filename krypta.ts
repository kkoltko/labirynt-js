enum Door {
    //% block="Left"
    Left,
    //% block="Right"
    Right,
    //% block="Top"
    Top,
    //% block="Bottom"
    Bottom
}
declare module namespace {
    export interface Room {
        no: number;
        doors: string;
        score: number;
    }
    export interface Level {
        roomStart: string;
        roomEnd: string;
        rooms: Room[];
    }
    export interface Krypta {
        name: string;
        levels: Level[];
    }
}
/**
 * Krypta
 */
//% weight=100 color=#0fbc11 icon=""
namespace krypta1 {
    let _currentLevel: Level = null;
    let _currentRoom: Room = null;
    let _levels: Level[] = [];
    /**
     * Ustwawe
     * @param d Door, eg: R
     */
    //% block
    export function addLevel(level: Level): void {
        console.log("addLevel")
    }
    //% block
    export function start(level: number,room: number): void {
        console.log("Start")
    }
    export function currentLevel(): Level {
        return _currentLevel;
    }
    export function currentRoom(): Room {
        return _currentRoom;
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    class Level{
        id: number;
        rooms: Room[];
        constructor(id: number) {
            this.id = id;
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
    class Room{
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
