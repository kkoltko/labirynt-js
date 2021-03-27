/**
 * Data
 */
//% weight=100 color=#911f41 icon="\uf044"
namespace data {
    /**
     * Moja Krypta
     */
    //% block
    export function mojaKrypta(): dungeon.Krypta {
        let levels = myData.levels;
        let oKrypta = new dungeon.Krypta(myData.name)
        for (let i = 0; i < levels.length; i++) {
            let myLevel = levels[i];
            let oLv = new dungeon.Level(i, myLevel.roomStart, myLevel.roomEnd);
            for (let k = 0; k < myLevel.rooms.length; k++) {
                let myRoom = myLevel.rooms[k];
                oLv.addRoom(new dungeon.Room(myRoom.no, myRoom.doors, myRoom.score));
            }
            oKrypta.addLevel(oLv)
        }
        return oKrypta;
    }

}
let myData = {
    "name": "Moja krypta",
    "levels": [
        {
            "roomStart": 10,
            "roomEnd": 61,
            "rooms": [{ 'no': 11, 'doors': 'GPL', 'score': 1 }, { 'no': 12, 'doors': 'PL', 'score': 2 }, { 'no': 13, 'doors': 'PL', 'score': 3 }, { 'no': 14, 'doors': 'GL', 'score': 4 }, { 'no': 15, 'doors': 'GD', 'score': 5 }, { 'no': 21, 'doors': 'DP', 'score': 1 }, { 'no': 22, 'doors': 'GPL', 'score': 2 }, { 'no': 23, 'doors': 'L', 'score': 3 }, { 'no': 24, 'doors': 'GDP', 'score': 4 }, { 'no': 25, 'doors': 'GDL', 'score': 5 }, { 'no': 31, 'doors': 'P', 'score': 1 }, { 'no': 32, 'doors': 'DPL', 'score': 2 }, { 'no': 33, 'doors': 'L', 'score': 3 }, { 'no': 34, 'doors': 'GD', 'score': 4 }, { 'no': 35, 'doors': 'GD', 'score': 5 }, { 'no': 41, 'doors': 'GP', 'score': 1 }, { 'no': 42, 'doors': 'PL', 'score': 2 }, { 'no': 43, 'doors': 'PL', 'score': 3 }, { 'no': 44, 'doors': 'DL', 'score': 4 }, { 'no': 45, 'doors': 'GD', 'score': 5 }, { 'no': 51, 'doors': 'GDP', 'score': 1 }, { 'no': 52, 'doors': 'L', 'score': 2 }, { 'no': 53, 'doors': 'P', 'score': 3 }, { 'no': 54, 'doors': 'PL', 'score': 4 }, { 'no': 55, 'doors': 'DL', 'score': 5 }]
        }
    ]
}