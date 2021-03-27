/**
 * Data
 */
//% weight=100 color=#0fbc11 icon=""
namespace data {    
    /**
     * Pobierz dane
     */
    //% block
    export function getData(): any {
        return {
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
    }

}
