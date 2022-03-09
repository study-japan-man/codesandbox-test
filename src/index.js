/**
 * const, let等の変数宣言
 */
// var val1 = "val変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// // var 再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "上書き";
// console.log(val2);

// // let再宣言はだめ
// let val2 = "再宣言";

// const val3 = "const変数";
// console.log(val3);

// // val3 = "上書き";

// const val3 = "const変数";

// const val4 = {
//   name: "NAME",
//   age: 10
// };
// console.log(val4);

// val4.name = "HOGE";
// val4.A = "AA";
// console.log(val4);

// /**
//  * テンプレート変数
//  */
// const name = "ほげ";
// const age = 28;

// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// /**
//  * アロー関数
//  */
// function func1(str) {
//   return str;
// }

// // console.log(func1("hoge"));

// const func2 = (str) => str;
// console.log(func2("hoge2"));

// /**
//  * 分割代入
//  */
// const myProfike = {
//   name: "あああ",
//   age: 24
// };

// const msg = `名前は${myProfike.name}です。年齢は${myProfike.age}歳です。`;
// //console.log(msg);

// const { name, age } = myProfike;
// const msg2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

// const myProfile = ["あああ", 24];

// const msg = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// //console.log(msg);
// const [name, age] = myProfile;
// const msg2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

// /**
//  * デフォルト値
//  */
// const sayHello = (name = "ゲスト") => console.log(`じんにちは！${name}さん`);
// sayHello();

// /**
//  * スプレッド構文 ...
//  */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(1,2);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, arr3);

// 配列コピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map, filter
 */
const nameArr = ["田中", "山田", "じゃけぇ"];

for (let i = 0; i < nameArr.length; i++) {
  //console.log(nameArr[i]);
}

const nameArr2 = nameArr.map((name) => console.log(name));
console.log(nameArr2);

const numArr = [1, 2, 3, 4, 5];
const kiArr = numArr.filter((num) => num % 2 === 1);
console.log(kiArr);
