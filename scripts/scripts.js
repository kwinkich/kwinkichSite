const trc20 = 'THFzAewHcyyr21QByVGYYNw7uzHLwtoyE3';
const ton = 'UQD61uolNtQIOXRtJaRYbLktcnvGbQJtMs2gpqgrlWFKNO6K';

function notification() {
	const notification = document.createElement('div');

	notification.className = 'notification';
	notification.innerHTML = 'Text copied ✅';
	document.body.appendChild(notification);

	setTimeout(function () {
		notification.classList.add('fade-out');
	}, 1500);

	setTimeout(function () {
		document.body.removeChild(notification);
	}, 2000);
}

function copyText(crypto) {
	const inputElement = document.createElement('input');
	inputElement.value = crypto;
	document.body.appendChild(inputElement);
	inputElement.select();
	document.execCommand('copy');
	document.body.removeChild(inputElement);

	notification();
}
