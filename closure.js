/* closure is a term that we can access any variable or function from child function but we can't access any variable or function from parent function declaration in child function */

function parent() {
    const x = 10;
    function child() {
        const y = 5;
        console.log(x); //inside of parent function
    }
    console.log(y); //inside of child function
}