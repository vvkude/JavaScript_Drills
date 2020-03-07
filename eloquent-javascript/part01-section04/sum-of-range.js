// snippet is for eloquent javasript part 01 chapter 04
// write a function that accepts start, end and step value that creates
// an array of those numbers, inclusive and increases by the step

let vals = [];
function range (start, end, step = 1) {
	for (let i = 0; i < end; i++) {
		vals.push(start + i)
	}
	return vals;
}

