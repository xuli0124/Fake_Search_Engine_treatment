var answer_file = require("../q1_response.json");
var items = require('../question2.json');
var fs = require('fs');

exports.view = function (req, res) {
    res.render('questionnaire');
};

exports.addAnswer = function (req, res) {
	var usefulness = req.query.usefulness;
	var efficiency = req.query.efficiency;
	var improvement = req.query.improvement;
	var confident = req.query.confident;
	var questionnaire_1 = {
		"usefulness": usefulness,
		"efficiency": efficiency,
		"improvement": improvement,
		"confident": confident
	};
	console.log(questionnaire_1);
	answer_file.questionnaires.push(questionnaire_1);

	var mongoose = require('mongoose');
	var questionnaireSchema = mongoose.Schema({
		usefulness: Number,
        efficiency: Number,
        confident: Number,
		improvement: String
	});
	var questionnaire1_response = mongoose.model('treatment questionnaire1 response', questionnaireSchema);
	var q1_response = new questionnaire1_response({
	    usefulness: usefulness,
		efficiency: efficiency,
		confident: confident,
		improvement: improvement
	});
	      //console.log(q1_response.id); // 'Silence'
	q1_response.save(function(err, q1_response){
	    if (err) return console.error(err);
	    else console.log("saved to db for questionnaire1!");
	});

	var json = JSON.stringify(answer_file);
	fs.writeFile("q1_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            //gotoQuestion2();
            res.render('question2', items);
        }
    });
}
