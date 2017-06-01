var items = require('../question2.json');
var answer_file = require("../q2_response.json");
var fs = require('fs');
var mongoose = require('mongoose');

exports.view = function (req, res) {
    res.render('question2', items);
};

exports.addAnswer = function (req, res){
	var answer = req.query.answer;
    var time = req.query.mytime;
	//console.log(answer);
	answer_file.answers.push(answer);
    answer_file.time.push(time);

    var questionSchema = mongoose.Schema({
        answer: String,
        time: Number
      });
    var question2_response = mongoose.model('treatment question2 response', questionSchema);
    var q2_response = new question2_response({
        answer: answer,
        time: time
    });
    //console.log(q1_response.answer); // 'Silence'
    q2_response.save(function(err, q2_response){
        if (err) return console.error(err);
        else console.log("saved to db for q2!");
    });

	var json = JSON.stringify(answer_file);
	fs.writeFile("q2_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            res.render('questionnaire2');
        }
    });
}
