// const obj1 ={
//     a: "a",
//     b: "b",
//     c: {
//         d:"d",
//         e: "e",
//     },
//     editA(){
//         this.a = AAAAAAAAA;
//     }
// };

// const stringifyComplexObj = JSON.stringify(obj1);  // de un objeto crea string
// const obj2 = JSON.stringify(stringifyComplexObj);  // de un string crea un objeto

// function recursiva(){
//     if(/* validacion */){
//         // llamados recursivos
//     }else {
//         //llamados normales, sin recursividad
//     }
// }
const numeritos = [0,1,2,3,4,5,6,7,8,9,43,2,45,6,6,4];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++){
//     numerito = numeritos[index];
//     console.log({index, numerito});
// }

function recursiva(numbersArray){
    if (numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray);
    }else {

    }
}