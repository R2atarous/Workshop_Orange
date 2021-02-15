function fizzBuzz(num) 
    {    
        result = num % 3 === 0 && num % 5 === 0 ? "FizzBuzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : "" ;
        return result
    } 
    
console.log(fizzBuzz(num));