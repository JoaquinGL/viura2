
function updateURLParameter(url, param, paramVal){
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (i=0; i<tempArray.length; i++){
            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}


 var setTheURL = function(sectionID, menuItemID, backID) {
    
	if (jQuery(sectionID)[0]) { 
		var url = purl();
		var lang= url.param('lang');	
		var urlBack = jQuery(sectionID + backID);
		var urlBackAttr = "";
		if (lang==null) 
		{
			lang="es";
			urlBackAttr = urlBack.attr('href') + "?section=" + menuItemID + "&lang=" + lang;
		}else
		{
	
			urlBackAttr = urlBack.attr('href') + "?section=" + menuItemID;
			
			urlBackAttr = urlBackAttr.replace('?lang=en','');
			urlBackAttr = urlBackAttr + "&lang=" + lang;
		}
		
		
		
		
		urlBack.attr("href",urlBackAttr);
	}
  
  }
  
jQuery(window).load(function() {	

	
	
	
	var sectionID = ".postid-3203";
	var menuItemID = "menu-item-3053";
	var backID = " #menu-item-3038 a";
	
	setTheURL(sectionID,menuItemID,backID);
	
	sectionID=".postid-2988";
	
	setTheURL(sectionID,menuItemID,backID);
	
	sectionID = ".postid-2774";
	setTheURL(sectionID,menuItemID,backID);
	
	
	sectionID=".postid-3207";
	menuItemID ="menu-item-3042";
	setTheURL(sectionID,menuItemID,backID);
	sectionID=".postid-3209";
	setTheURL(sectionID,menuItemID,backID);
	sectionID=".postid-3101";
	setTheURL(sectionID,menuItemID,backID);
	sectionID=".postid-3210";
	setTheURL(sectionID,menuItemID,backID);
	
	sectionID=".single-post";
	menuItemID="menu-item-3040";
	setTheURL(sectionID,menuItemID,backID);
	
});