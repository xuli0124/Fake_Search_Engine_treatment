var items = require('../question1.json');
var answer_file = require("../q1_response.json");
var fs = require('fs');
var mongoose = require('mongoose');

exports.view = function (req, res) {
    res.render('question1', items);
};

exports.addAnswer = function (req, res){
  var answer = req.query.answer;
  var time = req.query.mytime;
	//console.log(answer);
	answer_file.answers.push(answer);
  answer_file.time.push(time);

  mongoose.connect('mongodb://cse216project:cse216project@ds117348.mlab.com:17348/cse216project');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
      // we're connected!
      console.log("connected!!");
      var questionSchema = mongoose.Schema({
        answer: String,
        time: Number
      });
      var question1_response = mongoose.model('treatment question1 response', questionSchema);
      var q1_response = new question1_response({
        answer: answer, 
        time: time 
        });
      //console.log(q1_response.answer); // 'Silence'
      q1_response.save(function(err, q1_response){
        if (err) return console.error(err);
        else console.log("saved to db for q1!");
      });
  });

	var json = JSON.stringify(answer_file);
	fs.writeFile("q1_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            res.render('questionnaire1');
        }
    });
}