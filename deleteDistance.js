function deletionDistance(str1, str2) {
    var index1 = 0;
    var index2 = 0;
    if (str1.length === 0){
        return str2.length;
    }
    if (str2.length === 0){
        return str2.length;
    }
    var deleteBothFirstChars = deletionDistance(str1.slice(1), str2.slice(1))
    if (str1[index1] === str2[index2]){
        return deleteBothFirstChars;
    }
    
    var deleteOneFirstChar = Math.min(deletionDistance(str1, str2.slice(1)), 
    																	deletionDistance(str1.slice(1), str2));
                    
    if (deleteOneFirstChar <= deleteBothFirstChars){
    	return 1 + deleteOneFirstChar;
    }
    else {
    	return 2 + deleteBothFirstChars;
    }
}

