var qualityDD = document.querySelector("#selectQuality");
qualityDD.selectedIndex = 0;

setTimeout(function() {
	var button;
	while((button = document.querySelector("a[onclick*='InitCloseButton()']")) != null) {
		button.click();
	}	
}, 3000);
