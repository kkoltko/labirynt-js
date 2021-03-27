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
/*
declare module Dane{
    export interface Level {
        roomStart: string;
        roomEnd: string;
        rooms: Room[];
    }
    export interface Krypta {
        name: string;
        levels: Level[];
    }
    export interface Room {
        no: number;
        doors: string;
        score: number;
    }   
}
*/
/**
 * Krypta
 */
//% weight=100 color=#0fbc11 icon=""
namespace krypta {
    let _currentLevel: Level = null;
    let _currentRoom: Room = null;
    let _name: string = "";
    let _levels: Level[] = [];
    /**
     * Ustwawe
     * @param d Door, eg: R
     */
    //% block
    export function init(): void {
        _currentLevel = _levels[0];
        _currentRoom = _currentLevel.rooms[0];
    }
    //% block
    export function addLevel(level: Level): void {
        console.log("addLevel:" + level)
        _levels.push(level);
    }
    export function currentLevel(): Level {
        return _currentLevel;
    }
    export function currentRoom(): Room {
        return _currentRoom;
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
