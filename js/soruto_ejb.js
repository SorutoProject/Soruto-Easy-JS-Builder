/*Soruto Easy JS Builder 0.3 beta
*caution:This script is beta version, so this script may have bugs and useless.
*Please understand it.
*(C)2018 Soruto Project.
*/
var so = new Object;//make so object
//Soruto EJB alert
so.al = function(s){
alert(s);
}
//Soruto EJB getId
so.getId = function(s){
var r = document.getElementById(s);
return r;
}
//Soruto EJB set value
so.setVal = function(i,s){
	document.getElementById(i).value = s;
}
//Soruto EJB get value
so.getVal = function(i){
	var v = document.getElementById(i).value;
	return v;
}
//Soruto EJB console log
so.coL = function(s){
	console.log(s);
}
//Soruto EJB get the Date and the Time
so.getDT = function(){
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
//Soruto EJB submit
so.sub = function(n){
	eval("document."+ n +".submit();");
}
//Soruto EJB focus
so.foc = function(i){
	eval("document.getElementById(\""+i+"\").focus();");
}
//Soruto EJB page move
so.pMov = function(u){
	location.href = u;
}
//Soruto EJB page url
so.pUrl = function(){
	var d = location.href;
	return d;
}
//Soruto EJB page reload
so.pRl = function(){
	location.reload();
}
//Soruto EJB page back
so.pBk = function(){
	history.back();
}
//Soruto EJB page forward
so.pFw = function(){
	history.forward();
}
//Soruto EJB version
so.ver = function(){
var v = "0.3 beta";//when you change the source code,you have to change the version number.
return v;
}
//Soruto EJB set Img Url
so.setImgUrl = function(i,u){
	document.getElementById(i).src = u;
}
//Soruto EJB page move replace
so.pMovR = function(u){
	location.replace(u);
}
//Soruto EJB get the text of the Date and the Time 
so.getDTT = function(){
var dm = new Date();
var ye = dm.getFullYear();
var mo = dm.getMonth() + 1;
var date= dm.getDate();
var ho = dm.getHours();
var min = dm.getMinutes();
var sec = dm.getSeconds();
var day = dm.getDay();
var dayen = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ][day] ;
var dat = ye + "/" + mo + "/" + date + "(" + dayen + ") " +ho + ":" + min + ":" + sec;
return dat;
}
//Soruto EJB page top
so.pTop = function(){
	scrollTo(0,0);
}
//Soruto EJB div innerHTML
so.divIH = function(i,c){
	document.getElementById(i).innerHTML = c;
}
//Soruto EJB div innerHTML place
so.divIHP = function(i,c){
	document.getElementById(i).innerHTML = document.getElementById(i).innerHTML + c;
}
//Soruto EJB div innerHTML top
so.divIHT = function (i,c){
	document.getElementById(i).innerHTML = c + document.getElementById(i).innerHTML;
}