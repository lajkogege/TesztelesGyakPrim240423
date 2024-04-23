import {  fugvenyem2} from "./fugveny.js";

export function tesztEstek(){
    const szamLista=[
        {
            szam:0,
            vart:"Hibás szám"
        },
        {
            szam:2,
            vart:true
        },
        {
            szam:1,
            vart:true
        },
        {
            szam:6,
            vart:false
        },
        {
            szam:4.5,
            vart:"Nem egész szám"
        },
        {
            szam:101,
            vart:true
        },
        {
            szam:2147483647,
            vart:true
        },
        {
            szam:-3.5,
            vart:"Hibás szám"
        },
       
    ]
    szamLista.forEach(function(teszt){
        console.log(`Megadott szám:${teszt.szam} Várt:${teszt.szam}`),
        console.assert(teszt.vart===fugvenyem2(teszt.szam),
       `Megadott szám:${teszt.szam} Várt:${teszt.szam} Kapott szám: ${fugvenyem2(teszt.szam)}`
    )
    });
}