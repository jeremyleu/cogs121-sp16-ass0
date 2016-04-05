var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
    var newMessage = new models.Message(
	{
		'email': req.body.email,
		'content': req.body.content,
		'created': new Date()
	});
	console.log(newMessage);
	newMessage.save(afterSaving);

	function afterSaving(err)
	{
		if(err) console.log(err);
		console.log("new message sent with email " + newMessage.email + " and content " + newMessage.content + " on date " + newMessage.created);
    	res.redirect('/');
	}
};