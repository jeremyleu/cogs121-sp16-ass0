var models = require('../models');

exports.view = function(req, res) {
	models.Message
		.find()
		.exec(renderMessages);
	function renderMessages(err, messages)
	{
	    var data = {data: messages};
	    res.render("index", data);
	}
}
