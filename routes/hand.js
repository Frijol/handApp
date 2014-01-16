//for everything related to the hand

exports.move = function (req, res) {
	res.send(req.query['num']);
}