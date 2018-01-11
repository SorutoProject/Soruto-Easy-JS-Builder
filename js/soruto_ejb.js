/*Soruto Easy JS Builder beta
*caution:This script is beta version, so this script may have bugs.
*Please understand it.
*(C)2018 Soruto Project.
*/
function So_al(s){
alert(s);
}
function So_gId(s){
var r = document.getElementById(s);
return r;
}
function So_setVal(i,s){
	document.getElementById(i).value = s;
}
function So_getVal(i){
	var v = document.getElementById(i).value;
	return v;
}
function So_cl(s){
	console.log(s);
}
function So_getDT(){
var dm = new Date();
var ye = dm.getFullYear();
var mo = dm.getMonth() + 1;
var date= dm.getDate();
var ho = dm.getHours();
var min = dm.getMinutes();
var sec = dm.getSeconds();
var day = dm.getDay();
var dat = ye + " " + mo + " " + date + " " + ho + " " + min + " " + sec + " " + day;
var da = dat.split(" ");
return da;
}
function So_sub(n){
	eval("document."+ n +".submit();");
}
function So_foc(i){
	eval("document.getElementById(\""+i+"\").focus();");
}
