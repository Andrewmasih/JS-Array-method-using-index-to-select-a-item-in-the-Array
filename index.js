/* how do we get to the item that is neither at the start or at the end of an array, we simply select an item with the appropriate index and replace it with the data we want */


let myArray = ["milk", "cheese", "bread", "juice"];

myArray[0] = "steak";

/* milk was replaced by steak */

console.log (myArray);