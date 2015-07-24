define('event', ['jquery'], function($) {
	return {
		fire: function(a) {
			console.log($(a).html());
			console.log("Event fired");
		}
	};
});

