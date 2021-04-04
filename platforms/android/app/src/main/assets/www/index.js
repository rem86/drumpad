var hihat = "";
var snare = "";
var tom1 = "";
var kick = "";
var clap = "";
var crashl = "";
var crashr = "";
var crashc = "";
var ride = "";
var hatopen = "";
var low = "";
var rim= "";
var sublow = "";
var tom2 = "";
var tom3 = "";
var app = {

	// Application Constructor
	initialize: function () {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function () {
		document.addEventListener("deviceready", this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function () {
		// Set AdMobAds options:
		admob.setOptions({
			publisherId: "ca-app-pub-4596688289461003", // Required
			interstitialAdId: "ca-app-pub-4596688289461003/7383209929", // Optional
			autoShowBanner: false, // Optional
			autoShowRInterstitial: true, // Optional
			autoShowRewarded: false, // Optional
		});

		admob.requestInterstitialAd();

		app.receivedEvent("deviceready");
		console.log("deviceready");
		screen.lockOrientation("landscape");
		window.screen.orientation.lock("landscape");
		document.addEventListener(admob.events.onAdLoaded, this.onAdLoaded);
	},

	onAdLoaded: function (e) {
		admob.showInterstitialAd();
	},

	// Update DOM on a Received Event
	receivedEvent: function (id) {
		if (window.plugins && window.plugins.NativeAudio) {
			var items = [
				"hi-hat",
				"snare",
				"tom1",
				"kick",
				"clap",
				"crashr",
				"crashl",
				"crashc",
				"hat-open",
				"low",
				"rim",
				"sub-low",
				"tom2",
				"tom3",
				"hi-hatX",
				"snareX",
				"tom1X",
				"kickX",
				"clapX",
				"crashrX",
				"crashlX",
				"crashcX",
				"hat-openX",
				"lowX",
				"rimX",
				"sub-lowX",
				"tom2X",
				"tom3X",
				"hi-hatY",
				"snareY",
				"tom1Y",
				"kickY",
				"clapY",
				"crashlY",
				"crashrY",
				"crashcY",
				"hat-openY",
				"lowY",
				"rimY",
				"sub-lowY",
				"tom2Y",
				"tom3Y",
				"ride",
				"rideX",
				"rideY",
			];
			for (var i = 0; i < items.length; i++) {
				var asset = "assets/" + items[i] + ".mp3";
				window.plugins.NativeAudio.preloadComplex(
					items[i],
					asset,
					1,
					1,
					0,
					function (msg) {
						console.info(msg);
					},
					function (msg) {
						console.error("Error: " + msg);
					},
				);
			}
		}
	},

	play: function (drum) {

		var switchBuffer = this.buscoBuffer(drum);
		window.plugins.NativeAudio.play(
			drum + switchBuffer,
			(function () {
				return false;
			})(),
			(function () {
				return false;
			})(),
		);

	},
	closew: function () {
		navigator.app.exitApp();
		window.close();
	},

	buscoBuffer: function (drum) {
		switch (drum) {
			case "hi-hat": hihat = this.evaluaBuffer(hihat); return hihat;
			case "ride": ride = this.evaluaBuffer(ride); return ride;
			case "snare": snare = this.evaluaBuffer(snare); return snare;
			case "tom1": tom1 = this.evaluaBuffer(tom1); return tom1;
			case "kick": kick = this.evaluaBuffer(kick); return kick;
			case "clap": clap = this.evaluaBuffer(clap); return clap;
			case "crashr": crashr = this.evaluaBuffer(crashr); return crashr;
			case "crashl": crashl = this.evaluaBuffer(crashl); return crashl;
			case "crashc": crashc = this.evaluaBuffer(crashc); return crashc;
			case "hat-open": hatopen = this.evaluaBuffer(hatopen); return hatopen;
			case "low": low = this.evaluaBuffer(low); return low;
			case "rim": rim = this.evaluaBuffer(rim); return rim;
			case "sub-low": sublow = this.evaluaBuffer(sublow); return sublow;
			case "tom2": tom2 = this.evaluaBuffer(tom2); return tom2;
			case "tom3": tom3 = this.evaluaBuffer(tom3); return tom3;
		}
	},

	evaluaBuffer: function (drumBuffer) {
		switch (drumBuffer) {
			case "X":
				drumBuffer = "Y";
				break;
			case "Y":
				drumBuffer = "";
				break;
			default:
				drumBuffer = "X";
				break;
		}
		return drumBuffer;
	},

	hand: function () {
		var x = document.getElementById("leftHand");
		var xT = document.getElementById("leftHandT");
		var y = document.getElementById("rightHand");
		var yT = document.getElementById("rightHandT");
		if (x.style.display === "none") {
			x.style.display = "block";
			y.style.display = "none";
			xT.style.display = "block";
			yT.style.display = "none";
		} else {
			x.style.display = "none";
			y.style.display = "block";
			xT.style.display = "none";
			yT.style.display = "block";
		}
	},
};
