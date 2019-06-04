// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.

var number = 4;

function firstFactorial (num){
// console.log (num);
for (i = num-1;i>0;i--){
    num *=i;
}
return num
}

console.log(firstFactorial (number));
// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

function simpleAdding (num){
    // console.log (num);
    for (i = num-1;i>0;i--){
        num +=i;
    }
    return num
    }
    
    console.log(simpleAdding (number));

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

var string = 'hello world!'

function letterCapitalize(str){
    var arr = str.split(" ");
    console.log (arr);
    var newArr = [];
    for (i=0;i<arr.length;i++){
        // console.log(arr[i]);
        var newStr = arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
        console.log(newStr);
        newArr.push(newStr);
    }
    console.log(newArr);
    return newArr.join (' ');
}

console.log(letterCapitalize(string));

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

var arrayTwoNum = [1, 4];

var arrayTwoNum2 = [4,1];
function rangeRover (arr){
    var num = 0;
    if (arr[0]<arr[1]){
        for (i=arr[0];i<arr[1]+1;i++){
            // console.log (i);
            num+=i;
        }
        return num;
    }else if(arr[0]>arr[1]){
        for (i=arr[0];i>arr[1]-1;i--){
            // console.log (i);
            num+=i;
        }
        return num;
    }
}

console.log(rangeRover (arrayTwoNum));
console.log(rangeRover (arrayTwoNum2));

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

alphabetSoup = 'abce';
alphabetSoupless = 'bcde';

function missingLetter (str){
    perfectAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    var perAlphaSec = perfectAlphabet.slice(perfectAlphabet.indexOf(str[0]),str.length);
    // console.log(perAlphaSec);

    for (i=0;i<str.length;i++){
        // console.log(str[i]);
        // console.log(perAlphaSec[i]);
        if (str[i]!==perAlphaSec[i]){
            console.log (perAlphaSec[i]);
        }
    }
}

missingLetter (alphabetSoup);
// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

randoNum = 39;

function hailCaesar (num){
var ten = "X";
var five = 'V';
var ones = "I";
var romanNumerals = '';

var tenz = Math.floor (num/10);

for (i=0;i<tenz;i++){
    romanNumerals += ten;
}

var fivez = Math.floor(num%10/5);

for (i=0;i<fivez;i++){
    romanNumerals += five;
}

// console.log((num%10)%5/1);
var onez = Math.floor((num%10)%5/1)

for (i=0;i<onez;i++){
    romanNumerals += ones;
}

console.log(romanNumerals);



}

hailCaesar (randoNum);
// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.
