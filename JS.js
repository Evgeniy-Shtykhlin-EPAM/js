/*Task 1 
    Please, define variable with value "I can eat bananas all day".
    Use the slice method to return the word "bananas".
    Then convert it to upper case and alert the result.  
*/
let str = "I can eat bananas all day";

var bananaWord = str.slice(9, 16);
console.log(bananaWord);
console.log(bananaWord.toUpperCase());

/*
    Task 2 
    Please, define array with the following values "Saab", "Volvo", "BMW". Then perform the next operations by using JavaScript: 

        get "BMW" value 
        change the first item of cars 
        remove last item in the array 
        add "Audi" to the array 
        splice "Volvo" and "BMW"  
*/

let brands = ["Saab", "Volvo", "BMW"];

console.log( brands[2] );
brands[0]= "Opel"
brands.pop()
brands.push("Audi")
brands.splice(1, 1, "BMW");