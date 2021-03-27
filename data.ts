/**
 * Data
 */
//% weight=100 color=#911f41 icon="D"
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
                    "rooms": [
                        {
                            "no": 11,
                            "doors": "GP",
                            "score": 1
                        },
                        {
                            "no": 12,
                            "doors": "LP",
                            "score": 1
                        }
                    ]
                }
            ]
        }