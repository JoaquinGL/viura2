jQuery(window).load(function() {

	var url = purl();
	var section = url.param('section');	
  	var idSection="#"+ section + " a";
  
	jQuery(idSection).first().click();
	
});