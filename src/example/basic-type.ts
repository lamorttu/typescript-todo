// Boolean
let bool: boolean = true;
// bool = 123;


// Number
let num: number = 123;
// num = '123';
num = 0b1111011;
num = 0o173;
num = 0x7b;


// String
let str: string = "abc";
str = `My name is ${str}`;
console.log(str);


// Array
let arr: number[] = [1, 2, 3];
// arr = [5, '2'];
let arr2: number[] = [1, 2, 3];
// arr2 = ['3'];
let arr3: (string | number)[] = [1, 2, '3'];


// Tuple
let tuple: [string, number, boolean] = ['1', 2, true];


// Enum
enum Roles {
    SUPER_ADMIN,
    ADMIN = 3,
    USER = 7
};

console.log(Roles);
let role = 0;
if (role === Roles.SUPER_ADMIN) {
    console.log(Roles.USER);
}


// Any
let val: any = 'abc';
val = 123;


// Void
const consoleText = (text: string): void => {
    console.log(text);
}
let v: void;
v = undefined;
// v = null;
consoleText('123');


// Null && Undefined
let u: undefined;
u = undefined;
let n: null;
n = null;


// Never
const errorFunc = (msg: string): never => {
    throw new Error(msg);
}
errorFunc('123');
const infiniteFunc = (): never => {
    while(true){}
}
let neverVal = (() => {
    while(true){}
})()
num = neverVal


// Object
let obj = {
    name: 'Ronnie'
}
let obj2 = obj;
obj2.name = 'Ro';
console.log(obj);
function getObject(obj: Object): void {
    console.log(obj);
}
getObject(obj2);


// Type Assertion
const getLength = (target: string | number): number => {
    if ((target as string).length || (target as string).length === 0) {
        return (target as string).length;
    } else {
        return target.toString().length;
    }
}