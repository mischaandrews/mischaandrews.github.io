/*********************** MISC FUNCTIONS ***********************/





/*********************** DOCUMENT READY ***********************/

$(document).ready(function() {  

	var openExternalLinksInNewTab = false;




	/* EXTERNAL LINK CLASS */
	
	// Make all external links open in a new window, and mark them with the 'external' class
	// ASSUMPTION: No internal links are relative (i.e. do not begin with 'http')
	if ( openExternalLinksInNewTab ) {
		$("a").each(function(){
			if ( $(this).attr('href') !== undefined && $(this).attr("href").substring(0, 4) === "http" ) {
				$(this).attr("target", "_blank");
				$(this).addClass("external");
			}
		});
	}
	
});