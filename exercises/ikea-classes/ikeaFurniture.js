// building a constructor function
//
//let Couch = function(name, color, type) {
//    this.name = name;
//    this.color = color;
//    this.type = type;
//    this.massage = function() {
//        console.log("vibe");
//    }
//}
//
//let myCouch = new Couch("Hip Couch", "purple", "sitting couch");
//let my2ndCouch = new Couch("Sofa", "chartruse", "futton");
//
//console.log(myCouch.name);
//my2ndCouch.massage();

// building a class in es-6

//class Couch {
//    constructor(name, color, type) {
//        this.name = name;
//        this.color = color;
//        this.type = type;
//    }
//    massage() {
//        console.log("vibe")
//    }
//}

//class Dresser {
//    constructor(name, color, width, depth) {
//        this.name = name;
//        this.color = color;
//        this.width = width;
//        this.depth = depth;
//    }
//    locking() {
//        console.log("lockable")
//    }
//    glassDoors() {
//        console.log("transparent")
//    }
//    viewInfo()
//    console.log(`This is a ${this.name} ${this.color} color.`)
//}

//class Plant {
//    constructor() {
//        this.trapSun = true;
//        this.makeOxy = true;
//    }
//}
//
//class Evergreen extends Plant {
//    constructor() {
//        super();
//        this.trees =  true;
//        this.winterGreenLeaves = true;
//    }
//}
//
//let treeOne = new 

// spread operator in es-6 is 3 dots preceeding each added array

let grocer1 = ["apple", "cherry"];
let grocer2 = ["milk", "eggs", "bacon"];

let oneList = [...grocer2, 2, 4, 1, ...grocer1, 7, 10, 3, 507]
console.log(oneList);
