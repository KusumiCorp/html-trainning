// 演習
// 年齢によって、テーマパークの入場料を出し分けてコンソールに出力するプログラム。
// 仕様は下記とする
// 大人 （12歳以上の者）5,000円
// 中人（6歳以上12歳未満の者)2,500円
// 小人 （6歳未満の者） 1,000円
var age = 11;
var priceadult = 5000;
var priceboy = 2500;
var pricechild = 1000;

if (age >= 12){
  console.log('入場料は'+ priceadult +'円です。');
} else if (age >= 6){
  console.log('入場料は'+ priceboy +'円です。');
} else if (age >= 0){
  console.log('入場料は'+ pricechild +'円です。');
} else{
  console.log('年齢の入力に誤りがあります。')
}

// テスト
// 年齢ageの値を変えてテストしましょう。
// テストする時は、主に、境界値（条件分岐する値の前後の値）をつかってテストします
// 12
// 11
// 6
// 5
