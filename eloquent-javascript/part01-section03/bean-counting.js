function countChar(word, ch) {
	let counted = 0;
	for (let i = 0; i < word.length; i++)
		if (string[i] == ch) {
			++counted;
		}
}
return counted;
}

function countBs(word) {
	return countChar(word, "B");
}

console.log(countBs("BBC"));
//-> 2
console.log(countChar("kakkerlak", "k"));
// -> 4
