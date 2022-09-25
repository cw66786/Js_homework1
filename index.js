// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

let reverseNumExample = 32243;

const reverseNumber = (num) => {
  return typeof num === "number"
    ? [...(num + "")].reverse().join("")
    : "Not a number";
};

console.log("1: ", reverseNumber(reverseNumExample));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let palindromeStr = "nurses run";

const palindromeChecker = (str) => {
  if (typeof str !== "string") {
    return "Not a string";
  }

  let lowerStr = str.toLowerCase().replace(" ", "");
  let revStr = [...lowerStr].reverse().join("");

  return lowerStr === revStr ? true : false;
};

console.log("2:", palindromeChecker(palindromeStr));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

let combinationExampleStr = "dog";

const combinations = (str) => {
  if (typeof str !== "string") {
    return "Not a string";
  }

  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
};

console.log("3:", combinations(combinationExampleStr));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

let alphabeticalExample = "webmaster";

const alpabetical = (str) => {
  if (typeof str !== "string") {
    return "Not a string";
  }

  return [...str].sort();
};

console.log("4:", alpabetical(alphabeticalExample));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

let uppercaseExample = "the quick brown fox";

const uppercase = (str) => {
  if (typeof str !== "string") {
    return "Not a string";
  }

  let result = str.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].substring(1);
  }

  return result.join(" ");
};

console.log("5:", uppercase(uppercaseExample));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

let longestWordEx = "Web Development Tutorial";

const longestWord = (str) => {
  if (typeof str !== "string") {
    return "Not a string";
  }

  let result = str.split(" ").reduce(
    (acc, el) => (acc.length < el.length ? el : acc),

    ""
  );
  return result;
};

console.log("6:", longestWord(longestWordEx));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

let vowelEx = "The quick brown fox";

const vowelCount = (str) => {
  if (typeof str !== "string") {
    return "Not a string";
  }
  let vowels = /a|e|i|o|u/i;
  let result = 0;

  [...str].forEach((el) => {
    if (el.match(vowels)) {
      result++;
    }
  });
  return result;
};

console.log("7:", vowelCount(vowelEx));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

let primeEx = 3;

const primeCheck = (num) => {
  if (typeof num !== "number") {
    return "Not a number";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log("8:", primeCheck(primeEx));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

let typeEx = "I'm a string";

const typeCheck = (arg) => {
  return typeof arg;
};

console.log("9:", typeCheck(typeEx));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
console.log("10:")

const matrix = (num) => {
  let row;
  let col;

  for (row = 0; row < num; row++) {
    for (col = 0; col < num; col++) {
      if (row === col) {
        console.log(1)
        document.write(1 + " ");
      } else {
        console.log(0);
        document.write(0 +" ");
      }
    }
    console.log("-------");
    document.write("/n"+"<br>");
  }
  return 0;
};
matrix(3);


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

let elevenEx = [1, 2, 3, 4, 5];

const secondLh = (arr) => {
  let sorted = arr.sort((a, b) => a - b);

  return [sorted[1], sorted[sorted.length - 2]];
};

console.log("11:", secondLh(elevenEx));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

let perfectEx = 28;

const perfectCheck = (num) => {
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum === num && (sum + num) / 2 === num) {
    return true;
  } else {
    return false;
  }
};

console.log("12:", perfectCheck(perfectEx));

// 13. Write a JavaScript function to compute the factors of a positive integer.

let factorEx = 6;

const getFactors = (num) => {
  let factors = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

console.log("13:", getFactors(factorEx));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

const amountTocoins = (num, arr) => {
  if (num <= 0){
     return [];
  }
    if (num >= arr[0]) {
      let newAmount = num - arr[0];
      return [arr[0]].concat(amountTocoins(newAmount, arr));
    } else {
      arr.shift();
      return amountTocoins(num, arr);
    }
  
};

console.log("14:",amountTocoins(46, [25, 10, 5, 2, 1]));
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

const powerOf = (base,exponent)=>{
  return Math.pow(base,exponent);
}

console.log("15:",powerOf(7,2))

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

const exractUnique = (str)=>{
  
  let uniqueStr = "";

  for(let i =0;i<str.length;i++){
    if(uniqueStr.indexOf(str[i]) === -1){
      uniqueStr += str[i]
    }
  }
  return uniqueStr;
}

console.log("16:",exractUnique("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

const countOccurences = (str)=> {
  return [...str].reduce(
    (acc, el) => {
      if(acc.hasOwnProperty(el)){
        acc[el]++;
      }else{
        acc[el] = 1;
      return acc;
    }
  }, {})
}

console.log("17:",countOccurences("thequickbrown"))


// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

const binarySearch = (arr, item)=>{
  let firstIndex  = 0,
      lastIndex   = arr.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex)/2);

  while(arr[middleIndex] != item && firstIndex < lastIndex)
  {
     if (item < arr[middleIndex])
      {
          lastIndex = middleIndex - 1;
      } 
    else if (item > arr[middleIndex])
      {
          firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }

return (arr[middleIndex] != item) ? "not found" : "at index " +middleIndex;
}

console.log("18:",binarySearch([1, 2, 3, 4, 5, 7, 8, 9],7))

// 19. Write a JavaScript function that returns array elements larger than a number.

const isLarger = (arr,num) =>{
  let results = [];
  for(let i =0;i<arr.length;i++){
    if(arr[i]> num){
      results.push(arr[i]);
    }
  }
  return results;
}

console.log("19:",isLarger([1,2,3,4,5,6,7,8,9],5));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const generateId = (num)=>{
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  if(num === 0){
    return "length must be greater then 0";
  }
  for(let i =0;i< num;i++){
    id += char[Math.floor(Math.random()*char.length)];
  }
  return id;

}

console.log("20:",generateId(5));



// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]



// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

const getLetterCount = (str,letter)=>{
  let count = 0;

  for(let i = 0; i<str.length;i++){
    if(str[i].toLowerCase() === letter.toLowerCase()){
      count++;
    }
  }
  return count;
}

console.log("22:",getLetterCount('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

const firstNonRepeat = (str)=>{
  let count = 0;
let result = "";

  for(let i=0;i<str.length;i++){
    if(count === 1){
      result += str[i-1];
      break;
      
    }else{
      count = 0;
    }
   
    for(let j = 0;j<str.length;j++){
      if(str[i] === str[j]){
        count++;
      }

      

      
    }
  }
  return result;
}

console.log("23:",firstNonRepeat('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

let bubbleEx = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

const bubbleSort = (arr)=>{
  for(let i = 0;i<arr.length-1;i++){
    for(let j =0;j<arr.length-1;j++){
      if(arr[j] < arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

  }
  return arr;
}
console.log("24:",bubbleSort(bubbleEx))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

const longestCountry = (arr)=>{

  return arr.reduce(
    (acc, el) => {
      if(acc.length < el.length){
        acc = el;
      }
       
      return acc;
    })

}

console.log("25:",longestCountry(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

const longestSubstring = (str)=>{
  let currentStr = "",
      maxStr = "";
   

  for (i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      
      if (currentStr.indexOf(char) !== -1) {
         
          currentStr = currentStr.substring(currentStr.indexOf(char) + 1);
      }
      if(maxStr.length < currentStr.length){
        maxStr += currentStr;
      }
      currentStr += char;
     
      
  }
  return {substring: maxStr,length: maxStr.length}
}

console.log("26:",longestSubstring("thequickbrownfoxjumpsoverthelazydog"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.


  
 const longestPalindrome = (str)=>{
  
  let maxLength = 0,
  longest = '';
  
  for(let i=0; i < str.length; i++) 
  {
  let sub = str.substr(i, str.length);
  
  for(let j=sub.length; j>=0; j--) 
  {
  let subSub = sub.substr(0, j);
  if (subSub.length <= 1)
  continue;
  
  if (palindromeChecker(subSub))
  {
  if (subSub.length > maxLength) 
  {
  maxLength = subSub.length;
  longest = subSub;
  }
  }
  }
  }
  
  return longest;
  }
  console.log("27:",longestPalindrome("abracadabra"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

const twoNum= (a,b)=>{
  return a+b;
}

const thirdNumber = (num,paramFunc)=> {
  return num + paramFunc;
 
}

console.log("28:",thirdNumber(1,twoNum(1,1)))



// 29. Write a JavaScript function to get the function name.

const getFunctionName = function(){
console.log("29:",arguments.callee.name);

}

getFunctionName();

