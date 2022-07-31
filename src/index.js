let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let h = 'hundred'
module.exports = function toReadable(n) {

	if (n === 0) {
		return ones[0]
	} else if (n >= 1 && n < 10) {
		n = ones[n]

	} else if (n > 9 && n < 20) {
		n = teens[(n - 10)]
	} else if (n >= 20 && n < 100) {
		n = String(n)
		digitOfNumber = n.split('')
		let firstDigit = Number(digitOfNumber.shift())
		let secondDigit = Number(digitOfNumber.shift())
		n = tens[firstDigit] + ' ' + ones[secondDigit]
		if (secondDigit == 0) {
			n = tens[firstDigit]
		}
	} else if(n>99 && n<1000){
		n = String(n)
		digitOfNumber = n.split('')
		firstDigit = Number(digitOfNumber.shift())
		secondDigit = Number(digitOfNumber.shift())
		let thirdDigit = Number(digitOfNumber.shift())
		n = ones[firstDigit] + ' '+h+' '+ tens[secondDigit]+' '+ones[thirdDigit]
		if(secondDigit + thirdDigit == 0){
			n = ones[firstDigit]+' '+h
		}else if(thirdDigit ==0){
			n = ones[firstDigit] + ' '+h+' '+ tens[secondDigit]
		}else if(secondDigit ==1){
			n=ones[firstDigit] + ' '+h+' '+ teens[thirdDigit]
		}else if(secondDigit==0)
		n = ones[firstDigit] + ' '+h+' '+ ones[thirdDigit]

	}

		return n
	}

