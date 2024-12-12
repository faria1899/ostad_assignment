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