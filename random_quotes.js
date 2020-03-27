//random_quotes.js:

Module.register("random_quotes",{
	// Default module config.
	defaults: {
		text: "Random Quote!"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});