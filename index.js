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
    