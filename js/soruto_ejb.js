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
function So_SetVal(i,s){
	document.getElementById(i).value = s;
}
function So_GetVal(i){
	var v = document.getElementById(i).value;
	return v;
}
function So_cl(s){
	console.log(s);
}
function So_getDT(){
var dm = new Date();
var da;//da変数を定義
var da[0] = dm.getYear();
var da[1] = dm.getMonth() + 1;
var da[2] = dm.getDate();
var da[3] = dm.getHours();
var da[4] = dm.getMinutes();
var da[5] = dm.getSeconds();
return da;
}
function So_sub(n){
	eval("document."+ n +".submit();");
}
function So_IdFoc(i){
	eval("document.getElementById(\""+i+"\").focus();");
}
