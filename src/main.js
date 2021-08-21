function isObject(subject){
    return typeof subject == "object";
}
function isArray(subject){
    return Array.isArray(subject);
}

function  deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject){
        copySubject = {};
    }else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray){
                copySubject.push(subject[key]);
            } else{
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject
}

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};


// const juan = deepCopy(studentBase);
// Object.seal(juan);
// Onkect.isSealed(juan);
// juan.name = "Juanito";

function requiredParam(param){
    throw new Error(param + " es obligatorio.");
};

function createLearningPath({
    name = requiredParam("name"),
    courses = []
}){
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name(){
            return private["_name"];
        },
        set name(newName){
            if (newName.length != 0){
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
        },
        get courses(){
            return private["_courses"];
        },
    };
    return public;
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {} ){
    const private = {
        "_name": name,
        "_learningPaths": learningPaths,
    };

    const public = {
        age,
        email,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name(){
            return private["_name"];
        },
        set name(newName){
            if (newName.length != 0){
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
        },
        get learningPaths(){
            return private["_learningPaths"];
        },
        set learningPaths(newLP){
            if (newLP.name){
                console.warn("Tu LP no tiene courses");
                return;
            }
            if (!newLP.courses){
                console.warn("Tu LP no tiene la propiedad name");
                return;
            }
            if (!isArray(newLP.courses)){
                console.warn("Tu LP no es una lista (de cursos).");
                return;
            }
            
            private["_learningPaths"].push(newLP);
        },


        // readName(){
        //     return private["_name"];
        // },
        // changeName(newName){
        //     private["_name"] = newName;
        // },
    };

    // Object.defineProperty(public, "readName", {
    //     configurable: false,
    //     writable: false,
    // },);
    // Object.defineProperty(public, "changeName", {
    //     configurable: false,
    //     writable: false,
    // },);

    return public
};


const juan = createStudent({
    name:"Juanito",
    age: 18,
    email: "juanito@gmail.com",
    twitter: "fjuandc",
});