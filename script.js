function prikaziReg() {
	document.getElementById('reg').style.display = "block";
	document.getElementById('log').style.display = "none";
}

function prikaziLog() {
	document.getElementById('reg').style.display = "none";
	document.getElementById('log').style.display = "block";
}

function prikaziText() {
	document.getElementById('textarea').style.display = "block";
}

function prikaziHWP() {
	document.getElementById('hwproblems').style.display = "block";
	document.getElementById('swproblems').style.display = "none";
	document.getElementById('netproblems').style.display = "none";
	document.getElementById('miscproblems').style.display = "none";
}

function prikaziSWP() {
	document.getElementById('swproblems').style.display = "block";
	document.getElementById('hwproblems').style.display = "none";
	document.getElementById('netproblems').style.display = "none";
	document.getElementById('miscproblems').style.display = "none";
}

function prikaziNETP() {
	document.getElementById('netproblems').style.display = "block";
	document.getElementById('swproblems').style.display = "none";
	document.getElementById('hwproblems').style.display = "none";
	document.getElementById('miscproblems').style.display = "none";
}

function prikaziMISCP() {
	document.getElementById('miscproblems').style.display = "block";
	document.getElementById('netproblems').style.display = "none";
	document.getElementById('swproblems').style.display = "none";
	document.getElementById('hwproblems').style.display = "none";
}