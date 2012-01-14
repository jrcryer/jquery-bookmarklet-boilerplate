(function() {

	var bookmarklet = {
		init: function() {
			$('a').remove();
			$('article').append($('<p>Bookmarklet loaded</p>'));
		}	
	};
	if (typeof jQuery=='undefined') {
   		jq = document.createElement( 'script' ); jq.type = 'text/javascript'; jq.async = true;
   		jq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';  
    	jq.onload=bookmarklet.init;  
    	document.body.appendChild(jq);  
	}  
	else {  
    	bookmarklet.init();  
	}	
})(); 