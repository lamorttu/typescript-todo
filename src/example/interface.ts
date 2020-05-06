interface NameInfo {
    firstName: string,
    lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo) => {
    return `${firstName} ${lastName}`;
}

getFullName({
    firstName: 'Ronnie',
    lastName: "Higgens"
});

interface Vegetables {
    color?: string,
    readonly type: string,
    [prop: string]: any
}

const getVegetables = ({ color, type}: Vegetables) => {
    return `A ${color ? (color + '') : ''} ${type}`;
}

globalThis.console.log(getVegetables({
    type: 'tomato',
    color: 'red'
}));

interface ArrTemp {
    0: number,
    1: string
}
let arr1: ArrTemp = [1, '1'];
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (n1, n2) => n1 + n2;

// interface RoleDic {
//     [id: number]: string
// }
// const role1: RoleDic = {
//     0: 'ADMIN'
// }
interface RoleDic {
    [id: string]: string
}
const role2: RoleDic = {
    0: 'ADMIN',
    '2': 'USER'
}
interface Vegetables1 {
    color: string
}
interface Tomato extends Vegetables1{
    radius: number
}
interface Carrot extends Vegetables1{
    length: number
}
const tomato: Tomato = {
    radius: 1,
    color: 'red'
}
const carrot: Carrot = {
    color: 'red',
    length: 2
}
interface Counter {
    (): void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => { c.count++ }
    c.count = 0;
    return c;
}
const counter: Counter = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
counter();
console.log(counter.count);