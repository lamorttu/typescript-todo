function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.getPosition = function() {
    return '(' + this.x + ', ' + this.y + ')';
}
var p1 = new Point(2, 3);
console.log(p1);
console.log(p1.getPosition());
var p2 = new Point(4, 5);
console.log(p2.getPosition());

class Point1 {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    getPosition() {
        return `(${this.x}, ${this.y})`
    }
}
const p3 = new Point1(1, 2);
console.log(p3);
console.log(p3.hasOwnProperty('x'));

var info = {
    _age: 18,
    set age (newAge) {
        if(newAge > 18) {
            console.log('old');
        } else {
            console.log('young');
        }
    },
    get age () {
        console.log('How old are you');
        return this._age;
    }
}
console.log(info.age);
info.age = 17;
info.age = 19;

class Info {
    constructor (age) {
        this.age = age;
    }
    set age (newAge) {
        console.log('My age is ' + newAge);
        this._age = newAge;
    }
    get age () {
        return this._age;
    }
}
const inf = new Info(17);

// const func = function() {};
// function func() {}

class Func {
    constructor() {}
}

// const Info = class c {
//     constructor() {}
// }
const testInfo = new Info();

class Point4 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getPosition() {
        return `(${this.x}, ${this.y})`
    }
    static getClassName() {
        return Point.name;
    }
}
const p = new Point4(1, 2);
console.log(p.getPosition());
console.log(Point4.getClassName());

class Point5 {
    constructor() {
        this.x = 0;
    }
}
Point5.y = 2;
// const p3 = new Point5();
console.log(p.x);
console.log(p.z);

// class Point {
//     #ownProp = 12;
// }

// function Point() {
//     console.log(new.target);
// }
// const p = new Point();
// const p2 = Point();

class Point2 {
    constructor() {
        console.log(new.target);
    }
}
// const p3 = new Point();

// class Parent {
//     constructor() {
//         if (new.target === Parent) {
//             throw new Error('不能实例化')
//         }
//     }
// }
// class child extends Parent {
//     constructor() {
//         super()
//     }
// }
// const parent = new Parent();
// const c = new child();


function Food() {
    this.type = 'food'
}
Food.prototype.getType = function() {
    return this.type
}
function Vegetables(name) {
    this.name = name;
}
Vegetables.prototype = new Food();
const tomato = new Vegetables('tomato');
console.log(tomato.getType());

class ParentObj {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Clildren extends ParentObj {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const childIns = new Clildren('Ronnie', 18);
console.log(childIns);
console.log(childIns.getName());
console.log(childIns instanceof Clildren);
console.log(childIns instanceof ParentObj);
console.log(Object.getPrototypeOf(Clildren) === ParentObj);

// super
class Parent {
    constructor() {
        this.type = 'parent';
    }
    getName() {
        return this.type;
    }
}
Parent.getType = () => {
    return 'is parent';
}
class Child extends Parent {
    constructor() {
        super();
        console.log('constructor: ' + super.getName());
    }
    getParentName() {
        console.log('getParentName: ' + super.getName());
    }
    static getParentType() {
        console.log('getParentType: ' + super.getType());
    }
}
const obj = new Child();
obj.getParentName();
Child.getParentType();


// prototype
// __proto__
var objs = new Object();
console.log(objs.__proto__ === Object.prototype);

// 子类的__proto__指向父类本身
// 子类的prototype属性__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

