const obj1 ={
    a: "a",
    b: "b",
    c: {
        d:"d",
        e: "e",
    },
    editA(){
        this.a = AAAAAAAAA;
    }
};

const stringifyComplexObj = JSON.stringify(obj1);  // de un objeto crea string
const obj2 = JSON.stringify(stringifyComplexObj);  // de un string crea un objeto

