const getArray = <T>(val: T, times: number  = 5): T[] => {
    return new Array(times).fill(val);
}

globalThis.console.log(getArray<number>(2, 3));

// tslint:disable-next-line:array-type
const getArray2 = <T, K>(param1: T, param2: K, times: number): Array<[T, K]> => {
    return new Array(times).fill([param1, param2]);
}
let getArray3: <T>(arg: T, times: number) => T[];
getArray3 = (arg: any, times: number) => {
    return new Array(times).fill(arg);
}
getArray3(123, 3).map(item => item.toString());
type GetArray = <T>(arg: T, times: number) => T[];
let getArray4: GetArray = (arg: any, times: number) => {
    return new Array(times).fill(arg);
}
interface GetArray2 {
    // tslint:disable-next-line:callable-types
    <T>(arg: any, times: number): T[]
}
interface GetArray3<T> {
    // tslint:disable-next-line:callable-types
    (arg: T, times: number): T[],
    array: T[]
}
interface ValWithLength {
    length: number
}
const getArray5 = <T extends ValWithLength>(arg: T, times: any): T[] => {
    return new Array(times).fill(arg);
}
getArray5('1', 2);
const getProps = <T, K extends keyof T>(obj: T, propName: K) => {
    return obj[propName];
}
const obj1 = {
    a: 'a',
    b: 'b'
}
getProps(obj1, 'a');
getProps(obj1, 'b');