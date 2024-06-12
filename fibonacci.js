// generate fibonacci numbers with FOR LOOP
function fibs(n){
let arrayFibs = [0,1];
    for (let i=2; i<=(n-1) ; ++i) {
      let b =  arrayFibs[i-2] + arrayFibs[i-1];
      console.log(b);
      arrayFibs.push(b);
    }
    console.log(arrayFibs);
return arrayFibs;
}

// RECURSIVE method for the fibonacci numbers and then a for loop to save the result in the array

function fibonacci(n){
    if(n<2){ 
        return n;
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }  
};

function fibsRec(n){
    let array = [];
    for (let i=0; i<=(n-1) ; ++i){
        array.push(fibonacci(i));
    } 
console.log(array);
}
fibsRec(10);
