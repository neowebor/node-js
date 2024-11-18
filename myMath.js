class MyMath {
  static sum = (...nums) => nums.reduce((acc, num) => acc + num);
}

class MyTrigonometryMath {
  static func1 = () => {};
}

class MyBoolAlgebra {
  static func2 = () => {};
}

// експорт даних з модуля

// 1. експорт за замовченням - може використовуватися один раз за модуль
export default MyMath;

// 2. іменний експорт
export {
  MyBoolAlgebra,
  MyTrigonometryMath
};

export const PIValue = 3.14;

export function testFunction () {
  console.log('testFunction')
}