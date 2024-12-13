//Write a function named calculateDifference that takes two arguments and 
//returns the difference between the first and second arguments.

const calculateDifference =(x,y)=>{
    return y-x;

} 
  
const result= calculateDifference(5,8);
console.log("output" + " " + result);


//Write a function named isOdd that takes one argument and returns true 
//if the number is odd,and false if it is not.

function ODD(x){
    if (x%2==0){
        return false;
    }
    else{
        return true;
    }

}

console.log(ODD(5))

// Write a function named findMin that takes an array of numbers 
//and returns the smallest number from the array.

function findMin(numarray){
    let result=Math.min(...numarray);//passing every Value of the array
    return result
}
var numarray= [4,5,6,7,8,9,2,10];
console.log(findMin(numarray));


//Task 4

function filterEvenNumbers(arr){
    var i;
    const newarr=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
         newarr.push(arr[i]);
        }

    }
    return newarr;

}

let arr= [2,3,6,7,8,20,16];
console.log(filterEvenNumbers(arr));



//Task 5

function sortArrayDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const Numarr = [7, 8, 20, 45, 5, 6, 7, 2, 3];
console.log(sortArrayDescending(Numarr));


//task 6

function lowercaseFirstLetter(string){
    const firstChar = string.charAt(0).toLowerCase();
    const rep = string.replace(string.charAt(0),firstChar);
    return rep;
}
const string3="BanglaDeSh";
console.log(lowercaseFirstLetter(string3));

////task 7

function findAverage(avgarr){
    let sum=0;
    for(let i=0 ; i<avgarr.length ; i++){
        sum = sum+avgarr[i];
    }

    const avg = sum/avgarr.length;
    return Math.round(avg);


}

const array = [2,5,6,7,8,9];
console.log(findAverage(array));

//Task 8

function isLeapYear(year){

    if(year % 4 == 0 && year % 100 !== 0 ){
        return true;

    }

    if (year % 400 == 0){
        return true;
    }

    else{
        return false;
    }
        
}

const year=2023;
console.log(isLeapYear(year));
    

