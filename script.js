function shortcut(s1, s2) {
if(!s1 || !s2){
	return ''
}
	const extractValue = s1[0] + s2[0];
	return extractValue
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
