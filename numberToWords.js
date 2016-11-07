
/*
https://leetcode.com/problems/integer-to-english-words/
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/
var digitToWord = {"1": "One", "2": "Two", "3": "Three", "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine"};
var teensToWord = {"10": "Ten", "11": "Eleven", "12": "Twelve", "13": "Thirteen", "14": "Fourteen", "15": "Fifteen", "16": "Sixteen", 
	"17": "Seventeen", "18": "Eighteen", "19": "Nineteen"};
var tensToWord = {"2": "Twenty", "3": "Thirty", "4": "Forty", "5": "Fifty", "6": "Sixty", "7": "Seventy", "8": "Eighty", "9": "Ninety"};
 
var addZerosFromMod = {0: '', 1: '00', 2: '0'};
var hundredsPlaces = {2: 'Thousand', 3: 'Million', 4: 'Billion'};

var numberToWords = function(num) {
		if (num === 0){
			return 'Zero';
		}
		
    var word = [];
    var numToString = num.toString();
    numToString = addZerosFromMod[numToString.length % 3] + numToString;
		var n = numToString.length/3;
		
		for (var i=0; i<=numToString.length-3; i+=3){
			var threeDigitWord = threeDigitNumToWord(numToString.substring(i, i+3))
      if (threeDigitWord){
      	word.push(threeDigitWord);
				if (hundredsPlaces[n]){
					word.push(hundredsPlaces[n])
				}
      }
			n--;
		}
		return word.join(' ')
};
var threeDigitNumToWord = function(str) {
	var word = [];
	if (str[0] !== '0'){
		word.push(digitToWord[str[0]]);
		word.push('Hundred');
	} 
	if (str[1] === '1'){
		word.push(teensToWord[str.substring(1)]);
	}
	else {
		if (str[1] !== '0'){
			word.push(tensToWord[str[1]])
		}
		if (str[2] !== '0'){
			word.push(digitToWord[str[2]])
		}
	}
	return word.join(' ')
};
