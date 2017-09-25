document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});

var churchill = {
	author: "Winston Churchill",
	year: 1940,
	bce: false
};

var ghandi = {
	author: "Ghandi",
	year: 1942,
	bce: false
};

var demosthenes = {
	author: "Demosthenes",
	year: 342,
	bce: true
};

var speeches = [
	churchill,
	ghandi,
	Demosthenes
];

var yearsApartCalc = ghandi.year - churchill.year;

console.log("Ghandi's speech and Churchill's speech are [yearsApartCalc] years apart.")