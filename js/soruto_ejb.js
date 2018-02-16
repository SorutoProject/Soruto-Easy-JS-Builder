/*Soruto Easy JS Builder 0.4 beta
*caution:This script is beta version, so this script may have bugs and useless.
*Please understand it.
*(C)2018 Soruto Project.
*/
var so = new Object;//make so object
so.modal = new Object;
////////////////////////////////////////////////
//Soruto EJB General
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
var v = "0.3.1 beta";//when you change the source code,you have to change the version number.
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
//Added ver 0.4 beta
//Soruto EJB Confirm
so.cof = function(s){
	var c = window.confirm(s);
	return c;
}
//Soruto EJB Confirm and Page Move
so.cofPMov = function(s,u){
	if(window.confirm(s)){
		location.href = u;
	}
}
//Soruto EJB Confirm and Page Open on New tab
so.cofPON = function(s,u){
	if(window.confirm(s)){
		window.open(u,"_blank");
	}
}
//Soruto EJB console Error message
so.coEr = function(s){
	console.error(s);
}
so.display = function(i){
	document.getElementById(i).style.display = "block";
}
so.displayNone = function(i){
	document.getElementById(i).style.display = "none";
}
//Soruto EJB Display Change
so.displayCh = function(b,a){
	document.getElementById(b).style.display = "none";
	document.getElementById(a).style.display = "block";
}
////////////////////////////////////////////////
//Soruto EJB Modal
//soruto EJB modal alert
so.modal.al = function(t,s){
	//get so-modal div.
    var modiv = document.getElementById("so-modal");
	//set modiv
	modiv.style.display = "block";
	modiv.style.background = "rgba(193,193,193,0.7)";
	modiv.style.position = "absolute";
	modiv.style.top=0;
	modiv.style.right=0;
	modiv.style.left=0;
	modiv.style.bottom=0;
	modiv.style.margin = "auto";
	modiv.style.cursor = "default";
	//create a div
	var pob = document.createElement("div");
	pob.style.display = "block";
	pob.innerHTML = "<b><center>" + t + '</center></b><hr color="#bababa">' + s + '<br><center><hr color="#bababa"><input type="button" value="OK" onclick="so.modal.close();" id="sorutoejbmodalclose" style="width:64px;height:27px;"></center>';
	//set the div
	pob.style.position = "absolute";
	pob.style.top=0;
	pob.style.right=0;
	pob.style.left=0;
	pob.style.bottom=0;
	pob.style.margin = "auto";
    pob.style.width="300px";
	pob.style.height="200px";
	pob.style.background = "#fff";
	pob.style.overflow = "auto";
	pob.style.boxShadow = "0px 0px 10px";
	pob.style.color = "#000";
	modiv.appendChild(pob);
	//focus move to the close button
	document.getElementById("sorutoejbmodalclose").focus();
}
//Soruto EJB modal message
so.modal.ms = function(t,s){
	//get so-modal div.
    var modiv = document.getElementById("so-modal");
	//set modiv
	modiv.style.display = "block";
	modiv.style.background = "rgba(193,193,193,0.7)";
	modiv.style.position = "absolute";
	modiv.style.top=0;
	modiv.style.right=0;
	modiv.style.left=0;
	modiv.style.bottom=0;
	modiv.style.margin = "auto";
	modiv.style.cursor = "default";
	//create a div
	var pob = document.createElement("div");
	pob.style.display = "block";
	pob.innerHTML = "<b><center>" + t + '</center></b><hr color="#bababa">' + s;
	//set the div
	pob.style.position = "absolute";
	pob.style.top=0;
	pob.style.right=0;
	pob.style.left=0;
	pob.style.bottom=0;
	pob.style.margin = "auto";
    pob.style.width="300px";
	pob.style.height="200px";
	pob.style.background = "#fff";
	pob.style.overflow = "auto";
	pob.style.boxShadow = "0px 0px 10px";
	pob.style.color = "#000";
	modiv.appendChild(pob);
}
so.modal.custom = function(s){
		//get so-modal div.
    var modiv = document.getElementById("so-modal");
	//set modiv
	modiv.style.display = "block";
	modiv.style.background = "rgba(193,193,193,0.7)";
	modiv.style.position = "absolute";
	modiv.style.top=0;
	modiv.style.right=0;
	modiv.style.left=0;
	modiv.style.bottom=0;
	modiv.style.margin = "auto";
	modiv.style.cursor = "default";
	//create a div
	var pob = document.createElement("div");
	pob.style.display = "block";
	pob.innerHTML = s;
	//set the div
	pob.style.position = "absolute";
	pob.style.top=0;
	pob.style.right=0;
	pob.style.left=0;
	pob.style.bottom=0;
	pob.style.margin = "auto";
    pob.style.width="300px";
	pob.style.height="200px";
	pob.style.background = "#fff";
	pob.style.overflow = "auto";
	pob.style.boxShadow = "0px 0px 10px";
	pob.style.color = "#000";
	modiv.appendChild(pob);
}
so.modal.cofPMov = function(t,s,u){
//get so-modal div.
    var modiv = document.getElementById("so-modal");
	//set modiv
	modiv.style.display = "block";
	modiv.style.background = "rgba(193,193,193,0.7)";
	modiv.style.position = "absolute";
	modiv.style.top=0;
	modiv.style.right=0;
	modiv.style.left=0;
	modiv.style.bottom=0;
	modiv.style.margin = "auto";
	modiv.style.cursor = "default";
	//create a div
	var pob = document.createElement("div");
	pob.style.display = "block";
	pob.innerHTML = "<b><center>" + t + '</center></b><hr color="#bababa">' + s + '<br><center><hr color="#bababa"><input type="button" value="Yes" onclick="so.pMov(\'' + u + '\');so.modal.close();" style="width:64px;height:27px;">&nbsp;<input type="button" value="No" onclick="so.modal.close();" style="width:64px;height:27px;"></center>';
	//set the div
	pob.style.position = "absolute";
	pob.style.top=0;
	pob.style.right=0;
	pob.style.left=0;
	pob.style.bottom=0;
	pob.style.margin = "auto";
    pob.style.width="300px";
	pob.style.height="200px";
	pob.style.background = "#fff";
	pob.style.overflow = "auto";
	pob.style.boxShadow = "0px 0px 10px";
	pob.style.color = "#000";
	
	modiv.appendChild(pob);
}

so.modal.close = function(){
	var parent = so.getId("so-modal");
	parent.style.display = "none";
	var chs = parent.childNodes[0];
	parent.removeChild(chs);
}
so.modal.cTime = function(t){
	setTimeout("so.modal.close();",t);
}