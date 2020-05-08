// export const name = 'Ronnie';
// export const age = 18;
// export const address = 'chengdu';

const name = 'Ronnie';
const age = 18;
const address = 'chengdu';
export { name, age, address };
export function func () {}
export class A {}
function fun () {}
class B {};
const b = '';
export {
    fun as Fun,
    B as ClassB,
    b as StringB
}
