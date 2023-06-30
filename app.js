console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/* const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(arr){
  let sum = 0;
  arr.forEach(function (element, index, array){
    console.log(element);
  });
  return sum;
}

console.log(arraySum(numbers)); */

const array1 = [2, 22, 12, 17, 18, 39, 129];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

/* function arraySum(numbers){
    let sum = 0;
    return sum
} */

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

/* const book = {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    pages: 216,
    readCount: 1,
  }; */

  // object, not a variable. So use const, not let

const book = {};
  book.title = "Don't Make Me Think";
  book.author = "Steve Krug";
  book.pages = 216;
  book.readCount = 1;
  book.info = function (){
  return `My favorite book is ${this.title} by ${this.author}. It has ${this.pages} pages. I have read it ${this.readCount} time(s).`;
};

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

/* let sentence = "The quick brown fox jumps over the lazy dog";
let words = [The, quick, brown, fox, jumps, over, the, lazy, dog]
for (let sentence){
  console.log(words); 
} */

// Exercise 3 Alternate Solution

function sentence(words){
  return words.split("").reverse().join("").split(" ").reverse().join(" ")  
  }
  console.log(sentence('The quick brown fox jumps over the lazy dog'));

  // Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let dataPairs = csvData.split("\n");
console.log(dataPairs);
let headers = dataPairs[0].split(",");
console.log(headers);

const resultArr = [];

for (let i = 1; i < dataPairs.length; i++){
  const data = dataPairs[i].split(",");
  console.log(data);

  const rowObj = {};
  rowObj.name = data[0];
  rowObj.age = data[i];

  console.log(rowObj);
  resultArr.push(rowObj);
}

console.log(resultArr);