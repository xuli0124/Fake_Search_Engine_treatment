var data = require('../question1.json');

exports.view = function (req, res) {
	var id = req.params.id;
	console.log("The item id is: " + id);
	for (i = 0; i < data.places.length; i++){
		if (data.places[i].id == id){
					var content = data.places[i].content;
					var image = data.places[i].image;
					var link = data.places[i].link;
					//console.log(content);
			}
	}
	for (i = 0; i < data.food.length; i++){
      if (data.food[i].id == id){
            var content = data.food[i].content;
						var image = data.food[i].image;
            var link = data.food[i].link;
            //console.log(content);
        }
    }



		for (i = 0; i < data.accommodation.length; i++){
      if (data.accommodation[i].id == id){
            var content = data.accommodation[i].content;
						var image = data.accommodation[i].image;
            var link = data.accommodation[i].link;
            //console.log(content);
        }
    }

    res.render('question1_items', {
    	'content': content,
			'image': image,
      'link': link
    });
};
