const trc20 = 'TEjJYatjMZCdxM5Xw9LcxuqqJg5rnC3atk';
const ton = 'UQD61uolNtQIOXRtJaRYbLktcnvGbQJtMs2gpqgrlWFKNO6K';
const btc = 'bc1qa7uqfahjrgzw7fuzptqpl340k6myhcamh0ju2x';
const eth = '0x471119465aE9fe11F92FF32Cd40e901C8a735e2A';

function copyText(crypto) {
	const inputElement = document.createElement("input");
	inputElement.value = crypto;
	document.body.appendChild(inputElement);
	inputElement.select();
	document.execCommand("copy");
	document.body.removeChild(inputElement);
	
	const notification = document.createElement("div");
	notification.className = "notification";
	notification.innerHTML = "Text copied ✅";
	document.body.appendChild(notification);

	setTimeout(function() {
		notification.classList.add("fade-out");
	}, 1500);
	setTimeout(function() {
		document.body.removeChild(notification);
	}, 2000);
}