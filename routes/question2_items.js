var data = require('../question2.json');

exports.view = function (req, res) {
	var id = req.params.id;
	console.log("The item id is: " + id);
	for (i = 0; i < data.east.length; i++){
		if (data.east[i].id == id){
					var content = data.east[i].content;
					var image = data.east[i].image;
					var link = data.east[i].link;
					//console.log(content);
			}
	}
	for (i = 0; i < data.west.length; i++){
      if (data.west[i].id == id){
            var content = data.west[i].content;
						var image = data.west[i].image;
            var link = data.west[i].link;
            //console.log(content);
        }
    }



		for (i = 0; i < data.middle.length; i++){
      if (data.middle[i].id == id){
            var content = data.middle[i].content;
						var image = data.middle[i].image;
            var link = data.middle[i].link;
            //console.log(content);
        }
    }

		for (i = 0; i < data.cs.length; i++){
      if (data.cs[i].id == id){
            var content = data.cs[i].content;
						var image = data.cs[i].image;
            var link = data.cs[i].link;
            //console.log(content);
        }
    }
		for (i = 0; i < data.math.length; i++){
      if (data.math[i].id == id){
            var content = data.math[i].content;
						var image = data.math[i].image;
            var link = data.math[i].link;
            //console.log(content);
        }
    }
		for (i = 0; i < data.finance.length; i++){
      if (data.finance[i].id == id){
            var content = data.finance[i].content;
						var image = data.finance[i].image;
            var link = data.finance[i].link;
            //console.log(content);
        }
    }

    res.render('question2_items', {
    	'content': content,
			'image': image,
      'link': link
    });
};
