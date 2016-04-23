var tabSelected = null;

function addTabURL(urlStr, tabName) {

	//var fuseAction = getQueryVariable('fa')//.toLowerCase();
	var fuseAction = tabName;
	if (fuseAction == null){
		tabSelected = "homeTab";
	} else if (fuseAction.toLowerCase() == urlStr) {
		tabSelected = tabName;
	}
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
}

var m=0;
var sm=0;
var cm=0;
var sp=0;
var mI=new Array;
var sI=new Array;
var cI=new Array;

function addMainItem(ma,mb,mc,md){
	sm=0;
	if(!mb||mb==""){mb="&nbsp;";}
	if(!mc||mc==""){mc="_self";}
	if(!md||md==""){md="m"+m;}
	mI[m]=new Array(ma,mb,mc,md);
	m++;
}

function addSubmenuItem(sma,smb,smc){
	cm=0;
	if(!sma||sma==""){sma="#";}
	if(!smb||smb==""){smb="&nbsp;";}
	if(!smc||smc==""){smc="_self";}
	if (!sI[(m-1)]){sI[(m-1)]=new Array;}
	sI[(m-1)][sm]=new Array(sma,smb,smc);
	sm++;
}

function addChildmenuItem(cma,cmb,cmc){
	
	if(!cma||cma==""){cma="#";}
	if(!cmb||cmb==""){cmb="&nbsp;";}
	if(!cmc||cmc==""){cmc="_self";}
	if (!cI[(m-1)]) {
		cI[(m-1)] = new Array;
	}
	if (!cI[(m-1)][(sm-1)]) {
		cI[(m-1)][(sm-1)] = new Array;
	}
	
	cI[(m-1)][(sm-1)][cm]=new Array(cma,cmb,cmc);
	cm++;
}



function generateTabs() {
	
	var tabStr =  "<span class=\"nonStds\"> &nbsp; </span>";
	
	for (var m = 0; m < mI.length; m++) {
		tabStr += "<a class=\"";
		//alert("tab: "+tabSelected + " m:"+mI[m][3]);
		if (tabSelected == mI[m][3]) {
			tabStr += "menuButtonSelected";
		} else {
			tabStr += "menuButton";
		}
		
		tabStr += "\" href=\"";
		tabStr += mI[m][1];
		tabStr += "\" target=\"";
		tabStr += mI[m][2];
		
		if (sI[m]) {
			tabStr += "\" onmouseover=\"return buttonClick(event, '";
			tabStr += mI[m][3];
			tabStr += "');";
		}
			
		tabStr += "\" onmouseout=\"autoOff();\">";
		tabStr += mI[m][0];
		tabStr += "</a>";
		
		if (m < mI.length - 1) {
			tabStr += "<span class=\"nonStds\"> | </span>";
		}
	}
	
	document.writeln(tabStr);
}

function generateMenus() {
	//document.writeln("<pre>");

	for (var m = 0; m < mI.length; m++) {
		
		var chStr = "";
		
		document.writeln("<div id=\"" + mI[m][3] + "\" class=\"menu\" onmouseover=\"menuMouseover(event)\">");
		
		if (sI[m]) {
			for (var s = 0; s < sI[m].length; s++) {
				if (sI[m][s]) {
					
					var linkString = "<a class=\"mi\" ";
					linkString += "href = \"" + sI[m][s][1] + "\" ";
					linkString += "target=\"";
					linkString += sI[m][s][2];
					linkString += "\" ";
					if ((cI[m]) && (cI[m][s])) {
						linkString += "onmouseover=\"menuItemMouseover(event, '";
						linkString += "tab" + m + "s" + s + "');\"";
						linkString += "\" onmouseout=\"autoOff();\">";
						linkString += "<span class=\"miText\">";
						linkString += sI[m][s][0];
						linkString += "</span><span class=\"miArrow\">&#9654;</span></a>";
					} else {
						linkString += "onmouseover=\"autoOn();\" onmouseout=\"autoOff();\">";
						linkString += sI[m][s][0] + "</a>";
					}
					
					document.writeln( linkString );
					
					if ((cI[m]) && (cI[m][s])) {
						
						chStr += "<div id=\"tab" + m + "s" + s + "\" class=\"menu\" onmouseover=\"menuMouseover(event)\">";
						
						for (var c = 0; c < cI[m][s].length; c++) {
							if (cI[m][s][c]) {
								chStr += "<a class=\"mi\" ";
								chStr += "href = \"" + cI[m][s][c][1] + "\" ";
								chStr += "target=\"";
								chStr += cI[m][s][c][2];
								chStr += "\" ";
								chStr += "onmouseover=\"autoOn();\" onmouseout=\"autoOff();\">";
								chStr += cI[m][s][c][0] + "</a>";
								
							}
						}
						
						chStr += "</div>";
					}
					
				}
			}
		}
		
		document.writeln("</div>");
		
		document.writeln(chStr);
	}
	
	//document.writeln("</pre>");
}


