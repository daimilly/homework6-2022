var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("I want to slow the video!");
	video.playbackRate *= 0.95;
	console.log("speeed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speeding up");
	video.playbackRate /= 0.95;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skipping ahead!");
	console.log("video original time is", video.currentTime);
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("video current time is", video.currentTime);
});

// if (document.querySelector("#mute").textcontent = "Mute") {
// 		document.querySelector("#mute").addEventListener("click", function() {
// 			console.log("mute video");
// 			video.muted = true;
// 			document.querySelector("#mute").textContent = "Unmute";
// 		});
// } else {
// 		document.querySelector("#mute").addEventListener("click", function() {
// 			console.log("unmute video");
// 			video.muted = false;
// 			document.querySelector("#mute").textContent = "Mute";
// 		});
// 	}

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		console.log("mute video");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		console.log("Unmute video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.getElementById("slider").addEventListener('change', function() {
    video.volume = this.value / 100;
	console.log("Volume is", video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	// document.getElementsByClassName("video").className = "oldSchool";
	// document.getElementsByClassName("video").classList.add("oldSchool");
	for(var i = 0; i < document.getElementsByClassName("video").length; i++)
	{
    	document.getElementsByClassName("video")[i].classList.add("oldSchool");
	}
	console.log("style changes to oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	// document.getElementsByClassName("video").classList.remove("oldSchool");
	for(var i = 0; i < document.getElementsByClassName("video").length; i++)
	{
    	document.getElementsByClassName("video")[i].classList.remove("oldSchool");
	}
	console.log("style changes back to original");
});