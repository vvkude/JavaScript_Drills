// snippet is for eloquent javasript part 01 chapter 04
// write a function that accepts start, end and step value that creates
// an array of those numbers, inclusive and increases by the step
// Can't use higher order functions like Array.of


function range(start, end, step = start < end ? 1 : -1) {
	let array = [];
	if (step > 0) {
		for (let i = start; i <= end; i += step) array.push(i);
	} else {
		for (let i = start; i >= end; i += step) array.push(i);
	}
	return array;
}
