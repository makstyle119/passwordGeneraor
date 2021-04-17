document
	.getElementById('generate')
	.addEventListener('click', function makePassword() {
		var collectionOfLetters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
		var generatedPassword = '';
		var size = collectionOfLetters.length;
		for (var i = 0; i < 12; ++i) {
			generatedPassword =
				generatedPassword +
				collectionOfLetters.charAt(Math.floor(Math.random() * size));
		}
		let password = document.getElementById('password');
		password.innerText = generatedPassword;
		console.log('click');
		return password;
	});
