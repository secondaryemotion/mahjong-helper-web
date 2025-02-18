import man1 from "./assets/man1.svg"
import man2 from "./assets/man2.svg"
import man3 from "./assets/man3.svg"
import man4 from "./assets/man4.svg"
import man5 from "./assets/man5.svg"
import man6 from "./assets/man6.svg"
import man7 from "./assets/man7.svg"
import man8 from "./assets/man8.svg"
import man9 from "./assets/man9.svg"
import pin1 from "./assets/pin1.svg"
import pin2 from "./assets/pin2.svg"
import pin3 from "./assets/pin3.svg"
import pin4 from "./assets/pin4.svg"
import pin5 from "./assets/pin5.svg"
import pin6 from "./assets/pin6.svg"
import pin7 from "./assets/pin7.svg"
import pin8 from "./assets/pin8.svg"
import pin9 from "./assets/pin9.svg"
import sou1 from "./assets/sou1.svg"
import sou2 from "./assets/sou2.svg"
import sou3 from "./assets/sou3.svg"
import sou4 from "./assets/sou4.svg"
import sou5 from "./assets/sou5.svg"
import sou6 from "./assets/sou6.svg"
import sou7 from "./assets/sou7.svg"
import sou8 from "./assets/sou8.svg"
import sou9 from "./assets/sou9.svg"
import honor1 from "./assets/honor1.svg"
import honor2 from "./assets/honor2.svg"
import honor3 from "./assets/honor3.svg"
import honor4 from "./assets/honor4.svg"
import honor5 from "./assets/honor5.svg"
import honor6 from "./assets/honor6.svg"
import honor7 from "./assets/honor7.svg"

const tilesArr = Array(34);

export default function getTile(number){
    return (<img width="15%"  height="100%" src={tilesArr[number]} alt={"Error"}/>)
}
export function getWaitTile(number){
    return (<img width="10%" height="75%" src={tilesArr[number]} alt={"Error"}/>)
}

tilesArr[0] = man1;
tilesArr[1] = man2;
tilesArr[2] = man3;
tilesArr[3] = man4;
tilesArr[4] = man5;
tilesArr[5] = man6;
tilesArr[6] = man7;
tilesArr[7] = man8;
tilesArr[8] = man9;

tilesArr[9] = pin1;
tilesArr[10] = pin2;
tilesArr[11] = pin3;
tilesArr[12] = pin4;
tilesArr[13] = pin5;
tilesArr[14] = pin6;
tilesArr[15] = pin7;
tilesArr[16] = pin8;
tilesArr[17] = pin9;

tilesArr[18] = sou1;
tilesArr[19] = sou2;
tilesArr[20] = sou3;
tilesArr[21] = sou4;
tilesArr[22] = sou5;
tilesArr[23] = sou6;
tilesArr[24] = sou7;
tilesArr[25] = sou8;
tilesArr[26] = sou9;

tilesArr[27] = honor1;
tilesArr[28] = honor2;
tilesArr[29] = honor3;
tilesArr[30] = honor4;
tilesArr[31] = honor5;
tilesArr[32] = honor6;
tilesArr[33] = honor7;


