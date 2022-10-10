// Places we can add svg to.
const canvas = document.getElementById("canvas");
const svg = document.getElementById("svgDisplay");
const mainPath = document.getElementById("mainPath");

// Places where we get the Paths from
const polarPath = document.getElementById("svgPath");
const rectPath = document.getElementById("rectPath");

const degreeUnit = "d";
const radiansUnit = "r";

polarPath.innerHTML = localStorage.getItem('CiSVGPolarPath') || "";
rectPath.innerHTML = localStorage.getItem('CiSVGRectPath') || "";
mainPath.setAttribute('d', rectPath.innerHTML != "" ? rectPath.innerHTML : "M 0 0 h 100 v 100 h -100 z");

function convertToRect() {
	// convert polarPath here;
	localStorage.setItem('CiSVGPolarPath', polarPath.innerHTML);
	let newPath = polarPath.innerHTML.replaceAll(/[0-9]+ \-*[0-9]+d/g, match => {
		const coordinates = match.split(" ");
		const mag = coordinates[0];
		const degreeAngle = coordinates[1].includes("d");
		const argImpure = +(coordinates[1].split("d").join(""));
		const arg = degreeAngle ? ((Math.PI/180)*argImpure):argImpure;
		// Round off to 3 decimals
		const x = +parseFloat(mag * Math.cos(arg)).toFixed(3); 
		const y = -parseFloat(mag * Math.sin(arg)).toFixed(3); // The minus was added because unlike a cartesian plane an SVG has positive y-axis under the origin. 
		return `${x} ${y}`;
	});

	//console.log(newPath);	
	rectPath.innerHTML = newPath;
	mainPath.setAttribute('d',newPath);
	localStorage.setItem('CiSVGRectPath', rectPath.innerHTML);
} 

function clearPath() {
	localStorage.removeItem('CiSVGPolarPath');
	localStorage.removeItem('CiSVGRectPath');
	polarPath.innerHTML = "";
	rectPath.innerHTML = "";
	mainPath.setAttribute('d',"");
}

