function addFunc(arg1: number, arg2: number): number {
    return arg1 + arg2;
}
const addFunc2 = (arg1: number, arg2: number) => arg1 + arg2;
let addFunc3: (x: number, y: number) => number;
addFunc3 = (arg1: number, arg2: number): number => arg1 + arg2;
// addFunc3 = (arg1: string, arg2: number): number => arg1 + arg2;
