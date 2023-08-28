//js
var incc=0;
function increment(){
	incc ++;
	document.getElementById("dispp").innerHTML=incc;
}
function resetter(){
	document.getElementById("dispp").innerHTML=0;
}
function decrement(){
	incc --;
	document.getElementById("dispp").innerHTML=incc;
}
//document.getElementsByTagName("h1").style.fontsize="2em";
console.log(document.getElementsByTagName("h1").value);