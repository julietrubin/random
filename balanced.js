function getBalanced(str){
	// Returns the string with balanced parenthesis 
	var charArray = str.split("")
	var isIncluded = charArray.map(function(){return false});
	// i tracks left parenthesis and j tracks right parenthesis
	var i = 0;
	var j = 0;
	
	while(j < charArray.length){
		if (charArray[i] === "("){
			while(j < charArray.length - 1){
				j++;
				if (charArray[j] === ")"){
					isIncluded[i] = true;
					isIncluded[j] = true;
					break;
				}
			}
		}
		else if (charArray[i] !== ")"){
			// including all non paranthesis 
			isIncluded[i] = true;
		}
		i++;
		if (j < i){
			j = i;
		}
	}
	return charArray.filter(function(e, i){return isIncluded[i]}).join("");
}

alert(getBalanced("()((((()"))
