function addFunc(arg1: number, arg2: number): number {
    return arg1 + arg2;
}
const addFunc2 = (arg1: number, arg2: number) => arg1 + arg2;
let addFunc3: (x: number, y: number) => number;
addFunc3 = (arg1: number, arg2: number): number => arg1 + arg2;
// addFunc3 = (arg1: string, arg2: number): number => arg1 + arg2;

type Add = (x: number, y: number) => number;
type isString = string;
let addFunc4: Add
addFunc4 = (arg1: number, arg2: number) => arg1 + arg2;
// addFunc4 = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 ? arg3 : 0);

type AddFunc2 = (arg1: number, arg2: number, arg3?: number) => number;
// let addFunc5: AddFunc2;
// addFunc5 = (x: number, y: number) => x + y;
// addFunc5 = (x: number, y: number, z: number) => x + y + z;
let addFunc5 = (x: number, y = 3) => x + y;
// addFunc5(1, '2');

const handleData = (arg1: number, ...args: number[]) => {
    // ...
}

function overLoaded(x: string): string[];
function overLoaded(x: number): number[];
function overLoaded(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('')
    }
}
overLoaded('abc');
overLoaded(1);