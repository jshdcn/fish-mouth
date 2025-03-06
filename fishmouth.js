// Copyright 2013 UC Mobile Ltd. All Rights Reserved.

/* This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.

 * You may obtain a copy of the license at
 * http://www.gnu.org/licenses/
 */


/**
 * @author
 * Pablo Han, handong@ucweb.com
 *
 * @fileoverview
 * This library is designed to distinguish UC Browser and non-UC Browser
 * for different displaying.
 */

var attr = document.getElementById("fish-mouth");
var src = attr.src;
var pub = src.substring(src.indexOf('pub=')+4);

var language = window.navigator.language;
if(!language){language = window.navigator.browserLanguage;}
language = language.toLowerCase().substring(0,2);

var width = document.documentElement.clientWidth;
if(!width){width = document.body.clientWidth;}
if(!width){width = window.screen.width;}

var height = document.documentElement.clientHeight;
if(!height){height = document.body.clientHeight;}
if(!height){height = window.screen.height;}

if(width>=728&height>=90){width=728;height=90;}
else if(width>=468&height>=60){width=468;height=60;}
else if(width>=352&height>=288){width=352;height=288;}
else if(width>=320&height>=50){width=320;height=50;}
else if(width>=320&height>=48){width=320;height=48;}
else if(width>=300&height>=250){width=300;height=250;}
else if(width>=300&height>=100){width=300;height=100;}
else if(width>=300&height>=75){width=300;height=75;}
else if(width>=300&height>=50){width=300;height=50;}
//else if(width>=264&height>=54){width=264;height=54;}
else if(width>=216&height>=162){width=216;height=162;}
else if(width>=216&height>=36){width=216;height=36;}
else if(width>=168&height>=126){width=168;height=126;}
else if(width>=168&height>=42){width=168;height=42;}
else if(width>=168&height>=28){width=168;height=28;}
else if(width>=120&height>=90){width=120;height=90;}
else if(width>=120&height>=30){width=120;height=30;}
else {width=120;height=20;}

var num = "0"+Math.floor((Math.random()*7)+1);

var lnglist = "es,fa,id,pt,ru,vi";
if (lnglist.indexOf(language)==-1)
{language="en";}

var promotion;
switch (language){
case "en":
promotion = "Download UC Browser!";
break;
case "es":
promotion = "Descarga UC Browser!";
break;
case "fa":
promotion = "دانلود مرورگر UC!";
break;
case "id":
promotion = "Ambil UC Browser!";
break;
case "pt":
promotion = "Baixar UC Browser!";
break;
case "ru":
promotion = "Скачать UC Browser!";
break;
case "vi":
promotion = "Tải về UC Browser!";
}
document.write(language);

var type;
if (navigator.platform.indexOf("Win")!=-1){type=".png";}
else if (navigator.platform.indexOf("Linux")!=-1){type=".svg";}
else if (navigator.platform.indexOf("iP")!=-1){type=".gif";}
else {type=".jpg";}

if (navigator.userAgent.indexOf("UCBrowser") != -1){
document.write("");
}
else {
document.write("<a href='http://down3.ucweb.com/ucbrowser/en/?bid=444&amp;pub="+pub+"'><img src='http://down3.ucweb.com/images/"+language+"/"+width+"x"+height+"/"+num+type+"' width='"+width+"' height='"+height+"' alt='"+promotion+"'/></a>");
}
