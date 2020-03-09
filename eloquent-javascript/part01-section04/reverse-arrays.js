/* Eloquent Javascript Part 01 Section 04 Exercise 02
 * Create two functions that take arrays as arguments and reverse them
 * One function creates a new array and the other does not
 * We cannot use the reverse() method for this exercise
*/

// 1. We need to loop over the array that is provided as an argument
// 2. We need to make the first item of the argument array the last
//    item of the new array
// 3. So, we need to make a new array to populate, first
// 4. Once we are done looping through the elements, we need to output

function reverseArray(array) {
    let outputArray = [];
    // the length of the array minus 1 is the index of its last element
    for (let i = array.length - 1; i >= 0; i--) {
        outputArray.push(array[i]);
    } 
    return outputArray;
}

// Reversing the array in place is trickier to loop over indexes
// 1. Like in the previous function, take the elements from the end of the argument array
// 2. Try to swap the last element for the first element
// 3. Try to swap the second to last element for the second to first element
// 4. Figure out how to avoid swapping the middle (what about even/ odd numbers indexes?)
// 5. Let's try Math.floor(array.length/2) as the loop conditional

function reverseArrayInPlace(array) {
    for (i = 0; i <= Math.floor(array.length / 2); i++) {
        let swap = array[i];
	array[i] = array[array.length - 1 - i];
	array[array.length - 1 - i] = swap;
    }
	return array;
}
