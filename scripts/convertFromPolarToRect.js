
const canvas = document.getElementById("canvas");
const polarPath = document.getElementById("svgPath");
const mainPath = document.getElementById("mainPath");
function convertToRect() {
	// convert polarPath here;
	mainPath.setAttribute('d',polarPath.innerHTML);
} 

