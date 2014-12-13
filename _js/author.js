// take photo on Camera
function takePhoto() {
	navigator.camera.getPicture(onSuccess, onFail,{quality: 100, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.CAMERA, encodingType: Camera.EncodingType.JPEG})
}
function onSuccess(imageURI) {
	var image = document.getElementbyID('ticketImage');
	image.src = imageURI;
	image.style.display = 'block';
}
function onFail(message) {
	alert('Failed because: ' + message);
}

// ALERT WINNER***************************

if (x === 'match') {
	alert('#box p');
}
else {
	alert('Sorry');
// ****************************************