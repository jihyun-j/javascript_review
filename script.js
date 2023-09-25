/******************************************************************************
 
////// ! 1. Values and Variable
// * 변수 = 값
// 변수는 값을 저장하는 상자
// 변수 이름은 카멜케이스
// 첫 글자에 대문자와 숫자는 안됨
// 예약어 안됨
// _와 $외에 특수 문자 안됨
// 명확한 변수이름
let firstName = "Jihyun";
let $function = 27;
let last_name = "Jeon";
let person = "Jihyun";
let PI = 3.14;
let job1 = "programmer";
let currentJob = "progremmer";

*****************************************************************************/

/******************************************************************************

////// ! 2. Data Type
// * Number
let age = 23;

// * String
let firstName = "Jihyun";

// * Boolean
let hasCar = false;
let javaScriptIsFun = true;

// * undefined
let children;

// * null
// Empty value

// * symbol

// * bigInt

// * typeof
console.log(typeof true); // boolean
console.log(typeof javaScriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof "Jihyun"); //string
console.log(children); // undefined
console.log(typeof null); // object (This is error in Javascript)

// * Reassign value
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun); // string

*****************************************************************************/

/******************************************************************************

////// ! 3. const, let, var
// * let 
// mutable(변경이 가능한)
let age = 30;
age = 31;
console.log(age); // 31 (Reassigned value)

// * const
// immutable(변경이 불가능한)
// 항상 const를 사용하는 것이 좋다
const birthYear = 1991;
//birthYear = 1990; // Error: Uncaught TypeError: Assignment to constant variable.

// * var 
// let과 비슷하다
// 가장 오래된 방법. 사용하지 않는 것이 좋다
var job = "teacher";

*****************************************************************************/

/******************************************************************************

////// ! 4. Basic Operator (기본 연산자)
// * Minus (빼기)
const now = 2037;
const ageJihyun = now - 1991;
const ageSarah = now - 2018;
console.log(ageJihyun, ageSarah);

// * Multiply (곱하기)
console.log(ageJihyun * ageSarah);

// * Divide (나누기)
console.log(ageJihyun / ageSarah);

// * Power (제곱)
console.log(2 ** 3);

// * Plus (더하기)
// 숫자에서는 더하기 계산, 문자열은 문자들을 병합 함
const firstName = "Jihyun";
const lastName = "Jeon";
console.log(firstName + " " + lastName);

// * Assignment Operator (할당 연산자)
let a = 1 + 5; // 6
a += 20; // a = a + 20 = 26
console.log(a); // 26

a++; // a = a + 1 = 27
console.log(a);

// * Comparison Operator (비교 연산자)
console.log(ageJihyun > ageSarah); // ture
console.log(ageJihyun >= 40); // true

// 실무에서는 비교한 값을 변수에 저장해 두고 사용한다.
const isFullAge = ageJihyun >= 18;

// 자바스크립는 수학 연산자를 먼저 계산하고 다음으로 비교연산자를 계산한다
console.log(now - 1991 > now - 2018);

*****************************************************************************/

/******************************************************************************

////// ! 5. Operator Precedence (연산자 우선순위)
// TODO: Check MDN documentation

const now = 2037;
const ageJihyun = now - 1991;
const ageSarah = now - 2018;

// 자바스크립는 수학 연산자를 먼저 계산하고 다음으로 비교연산자를 계산한다
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averagerAge_first = ageJihyun + ageSarah / 2; // 나누기 먼저 그 다음 덧셈
const averagerAge_seconde = (ageJihyun + ageSarah) / 2; // 괄호 안에 변수 먼저 계산하고 나눔
console.log(averagerAge_first, averagerAge_seconde);

*****************************************************************************/

/******************************************************************************

////// ! 6. Strings and Tmeplate Literals
const firstName = "Jihyun";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// * Using tmeplate literals
const jihyun = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(jihyun);

*****************************************************************************/

/******************************************************************************

////// ! 7. If statement

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license. 🔥");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😭`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*****************************************************************************/

/******************************************************************************

////// ! 8. Type Conversion and Coercion
// * Type Conversion: manually convert type to another type

// Convert string to number
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991-숫자, "1991"-문자열;
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009
console.log(Number("Jihyun")); // NaN
console.log(typeof NaN); // number - invaild number

// Covert number to string
console.log(String(23), 23);

// * Type Coercion: automatically convert type
console.log("I am " + 23 + " years old"); // I am 23 years old (convert number to string)
console.log("23" - "10" - 3); // 10 (Minus operator convert to number)
console.log("23" / "10"); // 2.3 (Divide operator convert to number)

let n = "1" + 1; // 11
n = n - 1; // 11 - 1
console.log(n); // 10
console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15

*****************************************************************************/

/******************************************************************************

////// ! 9. Truthy and Falsy Value
// * Falsy Values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jihyun")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 0; // falsy value
// Javascript convert to boolean value
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height; // undefined is falsy value
if (height) {
  console.log("YAY! height is defined! ");
} else {
  console.log("Height is UNDEFINED!");
}

*****************************************************************************/

/******************************************************************************

////// ! 10. Equality Operator == vs. ===

// * Strict equality operator (===, !==)
// 형변환이 일어나지 않음
// 비교문을 쓸때 ===을 쓰는 것이 좋다
const age = "18";
if (age === 18) {
  console.log("You just became an adult (strict)"); // 콘솔에 나타나지 않음. 데이터 타입이 다르기 때문.
}

// * Loose equality operator (==, !=)
// 형변환이 일어남
if (age == 18) {
  console.log("You just became an adult (loose)");
}

*****************************************************************************/

/******************************************************************************

////// ! 11. Boolean Logic
// * AND (&&)
// true && true = true
// true && false = false
// false && ture = false
// false && false = false

// * OR (||)
// true || true = true
// true || false = true
// false || ture = true
// false || false = false

// * NOT (!)
// Invert true / false

*****************************************************************************/

/******************************************************************************

////// ! 12. Logical Operator

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasDriversLicense); // true
console.log(hasDriversLicense || hasDriversLicense); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Able to drive");
} else {
  console.log("Someone else should drive");
}
*****************************************************************************/

/******************************************************************************

////// ! 13. switch

const day = "sunday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
  //break; // break없으면 Plan course structure, Go to coding meetup, Prepare theory videos
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// * switch문을 If문으로 바꾸기
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

*****************************************************************************/

/******************************************************************************

////// ! 14. Statement and Expression
// * Expression: produce value. word to make sentence
// 3 + 4;
// 1991
// true && false && !false

// * Statement: bigger piece of code. Completed sentence
// * 아래의 if문 value를 생성하지 않음
if (23 > 10) {
  const str = "23 is bigger"; // 'str'은 expression
}

*****************************************************************************/

/******************************************************************************

////// ! 15. Conditional (Ternary) Operator
// If문 간결하게 표현
// * condition ? true : false
const age = 23;
age > 18
  ? console.log("I like to dring wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

*****************************************************************************/

/******************************************************************************
 
////// ! 16. Strict Mode
// * strict 모드를 활성화 시키지 위해서 제일 상단에 위치 시킨다
// strict 모드는 개발자들의 우발적 오류를 피하기 쉽게 만들어 준다

*****************************************************************************/

/******************************************************************************

////// ! 17. Function
//  * 함수 선언
function logger() {
  console.log("logger"); // 아무것도 리턴 하지 않고 개발자를 위해 콘솔에만 보여준다
}

// * 함수 호출 (calling / running / invoking function)
logger();

// * Parameters(인자) 사용
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// * Arguments(인수)를 포함한 함수 호출하기
const appleJuice = fruitProcessor(5, 0); 
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

fruitProcessor(); // 인자는 있지만 인수가 없다면 undefined가 결과값이 된다

*****************************************************************************/

/******************************************************************************

////// ! 18. Function Declaration vs. Expression
// * Function Declaration
// 함수가 선언되기 전에 호출할 수 있다. (호이스팅)
function calAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calAge1(1991);
console.log(age1);

// * Function Expression
// 함수가 선언되고 나서 호출할 수 있다.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

*****************************************************************************/

/******************************************************************************

////// ! 19. Arrow Function
// * return 키워드 없이 화살표 이후로 자동으로 결과값이 반환된다

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// * 여러줄의 코드를 써야할 때 (more than one line of code)
// {}를 사용해서 코드를 감싸주고 return 키워드를 적어준다
const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));

// * 매개변수가 두 개 이상일 때 괄호로 묶어 준다
const yearsUntilRetirementWithName = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirementWithName(1991, "Jihyun"));

*****************************************************************************/

/******************************************************************************

////// ! 20. Callback Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3)); // 'Juice with 8 piece of apple and 12 pieces of orange'

*****************************************************************************/

/******************************************************************************

////// ! 21. Array
// * 배열 만들기
// 'const'로 변수를 선언하고 배열을 값으로 했을 때, 배열 전체를 바꿀수는 없지만 안에 내용은 바꿀 수 있다.
const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // ['Michael', 'Steven', 'Peter']

// * Array function을 사용한 배열 만들기
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// * 배열 요소 접근하기
console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

// * 배열 길이
console.log(friends.length); // 3

// * 배열의 마지막 요소 가져오기
console.log(friends[friends.length - 1]); // Peter

// * 배열 요소 바꾸기
friends[2] = "Jay";
console.log(friends); //["Michael", "Steven", "Jay"];

// * 다양한 데이터 타입의 배열 요소
const jihyun = ["Jihyun", "Jeon", 2037 - 1991];
console.log(jihyun);

const firstName = "Jihyun";
const jihyun2 = [firstName, "Jeon", 2037 - 1991, "teacher", friends];
console.log(jihyun2);

*****************************************************************************/

/******************************************************************************

////// ! 21. Array Methods

const friends = ["Michael", "Steven", "Peter"];

// * push: 요소를 맨 끝에 추가
friends.push("Jay");
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']

// * unshift: 요소를 맨 앞에 추가
friends.unshift("John");
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// * pop: 맨 뒤 요소 제거
friends.pop();
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// * shift: 맨 앞 요소 제거
friends.shift();
console.log(friends); //['Michael', 'Steven', 'Peter']

// * indexOf
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1

// * includes
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false

if (friends.includes("Peter")) {
  console.log("You have friend Peter");
} else {
  console.log("You do not have friend Peter");
}

*****************************************************************************/

/******************************************************************************

////// ! 22. Object
// * 배열
const arrJihyun = [
  "Jihyun",
  "Jeon",
  2037 - 1991,
  "teacher",
  ["John", "Michael", "Steven", "Peter"],
];

// * 객체
const objJihyun = {
  firstName: "Jihyun",
  lasrName: "Jeon",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["John", "Michael", "Steven", "Peter"],
};

*****************************************************************************/

/******************************************************************************

////// ! 23. Dot vs. Bracket Notation
const objJihyun = {
  firstName: "Jihyun",
  lastName: "Jeon",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["John", "Michael", "Steven", "Peter"],
};

console.log(objJihyun);

// * Dot Notation
console.log(objJihyun.lastName);

// * Bracket Notation
// Dot notation 보다 유연하다
console.log(objJihyun["lastName"]);
// 계산된 프로퍼티를 사용할 수 있다
const nameKey = "Name";
console.log(objJihyun["first" + nameKey]);
console.log(objJihyun["last" + nameKey]);

// * prompt input 값으로 프로퍼티 키를 가져올 수 있다
const interestedIn = prompt(
  "What do you want to know about Jihyun? age? job? lastName? or friends?"
);
if (objJihyun[interestedIn]) {
  console.log(objJihyun[interestedIn]);
} else {
  console.log("Wrong request");
}

// * 새로운 프로퍼티 추가하기
objJihyun.location = "South Korea";
objJihyun["email"] = "jihyun@gmail.com";
console.log(objJihyun);

*****************************************************************************/

/******************************************************************************

////// ! 24. Object Methods
const objJihyun = {
  firstName: "Jihyun",
  lastName: "Jeon",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["John", "Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

// * Dot Notation으로 메서드 호출
console.log(objJihyun.calcAge(1991));

// * Bracket Notation 으로 메서드 호출
console.log(objJihyun["calcAge"](1991));

// * this 키워드 사용하기
const objJihyunThis = {
  firstName: "Jihyun",
  lastName: "Jeon",
  birthYear: 1991,
  job: "teacher",
  friends: ["John", "Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAge: function () {
    // * this는 objJihyunThis를 의미한다
    return 2037 - this.birthYear;
  },

  // * this 키워드로 프로퍼티 추가하기
  calcAge2: function () {
    this.age = 2047 - this.birthYear;
    return this.age;
  },
};

console.log(objJihyunThis.calcAge2());

******************************************************************************/

/******************************************************************************

////// ! 25. for loop
console.log("Lifting weight repetition 1");
console.log("Lifting weight repetition 2");
console.log("Lifting weight repetition 3");
console.log("Lifting weight repetition 4");
console.log("Lifting weight repetition 5");
console.log("Lifting weight repetition 6");
console.log("Lifting weight repetition 7");
console.log("Lifting weight repetition 8");
console.log("Lifting weight repetition 9");
console.log("Lifting weight repetition 10");

// * for loop keeps running while condition is TRUE (조건이 ture일동안 실행된다.)
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

******************************************************************************/

/******************************************************************************

////// ! 26. Looping Array, Breaking and Continuing
const arrJihyun = [
  "Jihyun",
  "Jeon",
  2037 - 1991,
  "teacher",
  ["John", "Michael", "Steven", "Peter"],
  true,
  32,
];
const types = [];

for (let i = 0; i < arrJihyun.length; i++) {
  // Reading from arrJihyun array
  console.log(arrJihyun[i]);

  // Filling types array
  //types[i] = typeof arrJihyun[i];
  types.push(typeof arrJihyun[i]);
}
console.log(types);

const years = [1991, 1983, 1985, 1994];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// continue
console.log("--------- ONLY STRING ---------");
// 문자열일 때만 console.log에 보여준다. 즉 문자 타입이 아닌 다른 타입들은 건너뛴다.
for (let i = 0; i < arrJihyun.length; i++) {
  if (typeof arrJihyun[i] !== "string") continue;

  console.log(arrJihyun[i], typeof arrJihyun[i]);
}

// break
console.log("--------- ONLY BREAKING ---------");
// 반복문 전체를 종료 시킨다.
// types = ['string', 'string', 'number', 'string', 'object', 'boolean', 'number']
// types 배열에서 첫번째 'number' 까지만 실행시키고 종료 시킨다.
for (let i = 0; i < arrJihyun.length; i++) {
  if (typeof arrJihyun[i] === "number") break;

  console.log(arrJihyun[i], typeof arrJihyun[i]);
}

******************************************************************************/

/******************************************************************************

////// ! 27. Looping Backwards and Loops in Loops

const arrJihyun = [
  "Jihyun",
  "Jeon",
  2037 - 1991,
  "teacher",
  ["John", "Michael", "Steven", "Peter"],
];

// * for loop을 이용해 배열 뒤집기
for (let i = arrJihyun.length - 1; i >= 0; i--) {
  console.log(i, arrJihyun[i]);
}

// * Loop inside another Loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}-------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

/* Loop inside another Loop 결과값

------- Starting exercise 1-------
Lifting weight repetition 1
Lifting weight repetition 2
Lifting weight repetition 3
Lifting weight repetition 4
Lifting weight repetition 5
------- Starting exercise 2-------
Lifting weight repetition 1
Lifting weight repetition 2
Lifting weight repetition 3
Lifting weight repetition 4
Lifting weight repetition 5
------- Starting exercise 3-------
Lifting weight repetition 1
Lifting weight repetition 2
Lifting weight repetition 3
Lifting weight repetition 4
Lifting weight repetition 5

******************************************************************************/

/******************************************************************************

////// ! 28. while loop

let rep = 1;
while (rep <= 10) {
  console.log(`While loop: Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}

******************************************************************************/

// ? Coding Challenge

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(totals);
