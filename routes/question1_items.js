var data = require('../question1.json');

exports.view = function (req, res) {
	var id = req.params.id;
	console.log("The item id is: " + id);

	for (i = 0; i < data.food.length; i++){
      if (data.food[i].id == id){
            var content = data.food[i].content;
            console.log(content);
        }
    }

    for (i = 0; i < data.places.length; i++){
      if (data.places[i].id == id){
            var content = data.places[i].content;
            console.log(content);
        }
    }

    for (i = 0; i < data.accommodation.length; i++){
      if (data.accommodation[i].id == id){
            var content = data.accommodation[i].content;
            console.log(content);
        }
    }

    res.render('question1_items', {
    	'content': content
    });
};