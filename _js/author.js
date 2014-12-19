// WINNER
	$(function () {
	    setInterval(function () {
		    $('#box p').fadeOut(150).delay(120).fadeIn(300).fadeOut(150).delay(120);
	        $('#box p').fadeOut(300).fadeIn(120).fadeOut(120).delay(120);
	        $('#box p').fadeOut(150).delay(120).fadeIn(300).fadeOut(150).delay(120);
	        $('#box p').fadeOut(700).fadeIn(300).fadeOut(160).delay(120);
	    }, 1);
    });


// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
	$( "#qrScanBtn" ).click(function() {
  		doScan();
	});
}

function doScan(){
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			alert("We got a barcode\n" +
				"Result: " + result.text + "\n" +
				"Format: " + result.format + "\n" +
				"Cancelled: " + result.cancelled);
	  	}, 
	  	function (error) {
			alert("Scanning failed: " + error);
	  	}
	);	
}