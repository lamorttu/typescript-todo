import { time } from './b';
import { name, age } from './c';
import './d';

setInterval(() => {
    console.log(time)
}, 1000);
console.log(name, age);