function addNumbers(num1, num2) {
    console.log(sum); //  Hoisting Demo: This will log 'undefined' because of hoisting

    var sum ;
    sum = num1 + num2; // Variable declaration using 'var'
    
    return sum;
}

console.log(addNumbers(5, 10)); 
