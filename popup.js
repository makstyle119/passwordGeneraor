document
	.getElementById('generate')
	.addEventListener('click', function makePassword() {
		let collectionOfAlphabetsCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let generatedcollectionOfAlphabetsCapital = '';
		let collectionOfAlphabetCapitalSize = collectionOfAlphabetsCapital.length;
		for (let i = 0; i < 12; ++i) {
			generatedcollectionOfAlphabetsCapital =
				generatedcollectionOfAlphabetsCapital +
				collectionOfAlphabetsCapital.charAt(
					Math.floor(Math.random() * collectionOfAlphabetCapitalSize)
				);
		}
		let collectionOfAlphabetsSmalls = 'abcdefghijklmnopqrstuvwxyz';
		let generatedcollectionOfAlphabetsSmalls = '';
		let collectionOfAlphabetsSmallSize = collectionOfAlphabetsSmalls.length;
		for (let i = 0; i < 12; ++i) {
			generatedcollectionOfAlphabetsSmalls =
				generatedcollectionOfAlphabetsSmalls +
				collectionOfAlphabetsSmalls.charAt(
					Math.floor(Math.random() * collectionOfAlphabetsSmallSize)
				);
		}
		let collectionOfNumbers = '0123456789';
		let generatedcollectionOfNumbers = '';
		let collectionOfNumberSize = collectionOfNumbers.length;
		for (let i = 0; i < 12; ++i) {
			generatedcollectionOfNumbers =
				generatedcollectionOfNumbers +
				collectionOfNumbers.charAt(
					Math.floor(Math.random() * collectionOfNumberSize)
				);
		}
		let collectionOfSymbols = '!@#$%^&*/';
		let generatedcollectionOfSymbols = '';
		let collectionOfSymbolSize = collectionOfSymbols.length;
		for (let i = 0; i < 12; ++i) {
			generatedcollectionOfSymbols =
				generatedcollectionOfSymbols +
				collectionOfSymbols.charAt(
					Math.floor(Math.random() * collectionOfSymbolSize)
				);
		}
		let combinationOfAlphabets = generatedcollectionOfAlphabetsCapital.concat(
			'',
			generatedcollectionOfAlphabetsSmalls
		);
		let combinationOfAlphabetsAndNumber = combinationOfAlphabets.concat(
			'',
			generatedcollectionOfNumbers
		);
		let combinationOfAlphabetsAndSymbols = combinationOfAlphabets.concat(
			'',
			generatedcollectionOfSymbols
		);
		let combination = combinationOfAlphabetsAndNumber.concat(
			'',
			generatedcollectionOfSymbols
		);
		let collectionOfLetters;
		let number = document.getElementById('number').value;
		if (number === '') {
			number = '12';
		}
		let specialCharacter = document.getElementById('specialCharacter');
		let numberIncluded = document.getElementById('numberIncluded');
		if (specialCharacter.checked === true && numberIncluded.checked === true) {
			collectionOfLetters = combination;
		} else if (
			specialCharacter.checked === false &&
			numberIncluded.checked === true
		) {
			collectionOfLetters = combinationOfAlphabetsAndNumber;
		} else if (
			specialCharacter.checked === true &&
			numberIncluded.checked === false
		) {
			collectionOfLetters = combinationOfAlphabetsAndSymbols;
		} else if (
			specialCharacter.checked === false &&
			numberIncluded.checked === false
		) {
			collectionOfLetters = combinationOfAlphabets;
		}
		let generatedPassword = '';
		let size = collectionOfLetters.length;
		for (let i = 0; i < number; ++i) {
			generatedPassword =
				generatedPassword +
				collectionOfLetters.charAt(Math.floor(Math.random() * size));
		}
		let password = document.getElementById('password');
		password.innerText = generatedPassword;
		return password;
	});
