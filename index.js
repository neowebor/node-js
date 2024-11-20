// імпорт даних з інших модулей

// 1. імпорт за замовченням
import MyMath from "./myMath.js";


// 2. іменний імпорт
import { PIValue, testFunction as newTestFunc, MyBoolAlgebra, MyTrigonometryMath } from './myMath.js';

// 3. Комбінований імпорт

console.log('Hello from Node');

console.log(0.1 + 0.2);

console.log(PIValue);

newTestFunc();

const numbers = [1, 2, 3, 4, 5, 6];

console.log(MyMath.sum(...numbers));