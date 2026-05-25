document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-4a635190' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-f5b427b7' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-a2222435' );
});
var selector = document.querySelectorAll( '.uagb-block-8e3ab5ff' );
if ( selector.length > 0 ) {

	var blockquote__tweet = selector[0].getElementsByClassName("uagb-blockquote__tweet-button");

	if ( blockquote__tweet.length > 0 ) {

		blockquote__tweet[0].addEventListener("click",function(){	
			var request_url = "https://twitter.com/intent/tweet?text=%C2%AB+La+technologie+est+%C3%A0+son+meilleur+quand+elle+rassemble+les+gens.+%C2%BB+%E2%80%94+%E2%80%94+%3Cstrong%3EMatt+Mullenweg%3C%2Fstrong%3E+%28Cr%C3%A9ateur+de+WordPress%29&url=http%3A%2F%2Fwebfaciles.local%2F";
			window.open( request_url );
		});
	}
}
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"23025e28","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSiteKeyV3":"","afterSubmitToEmail":"contactwebfaciles@gmail.com","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Soumission du formulaire","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Veuillez remplir le captcha ci-dessus.","confirmationUrl":""}, '.uagb-block-23025e28', 13 );
});
 });