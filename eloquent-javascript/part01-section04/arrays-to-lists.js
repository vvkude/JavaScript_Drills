/* Eloquent Javascript Part 01 Chapter 04 Exercise 03
 * Create a function that creates a list from an array
 * Create a function that creates arrays from a list
 * Create helper functions that prepend lists
*/

// Try looping backwards like in the last exercise

function arrayToList(array) {
    let list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}
