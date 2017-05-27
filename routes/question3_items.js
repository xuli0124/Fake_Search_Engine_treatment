var data = require('../question3.json');

exports.view = function (req, res) {
	var id = req.params.id;
	console.log("The item id is: " + id);

	for (i = 0; i < data.premium.length; i++){
        if (data.premium[i].id == id){
            var price = data.premium[i].price;
		    var image = data.premium[i].img;
            //var link = data.food[i].link;
            //console.log(content);
        }
    }
    for (i = 0; i < data.suv.length; i++){
        if (data.suv[i].id == id){
            var price = data.suv[i].price;
            var image = data.suv[i].img;
                    //var link = data.places[i].link;
                    //console.log(content);
            }
    }
	for (i = 0; i < data.economy.length; i++){
        if (data.economy[i].id == id){
            var price = data.economy[i].price;
			var image = data.economy[i].img;
            //var link = data.economy[i].link;
            //console.log(content);
        }
    }
    for (i = 0; i < data.convertible.length; i++){
        if (data.convertible[i].id == id){
            var price = data.convertible[i].price;
            var image = data.convertible[i].img;
            //var link = data.economy[i].link;
            //console.log(content);
        }
    }
    for (i = 0; i < data.compact.length; i++){
        if (data.compact[i].id == id){
            var price = data.compact[i].price;
            var image = data.compact[i].img;
            //var link = data.economy[i].link;
            //console.log(content);
        }
    }
    for (i = 0; i < data.less_than_40.length; i++){
        if (data.less_than_40[i].id == id){
            var price = data.less_than_40[i].price;
            var image = data.less_than_40[i].img;
            //var link = data.economy[i].link;
            //console.log(content);
        }
    }
    for (i = 0; i < data._40_to_50.length; i++){
        if (data._40_to_50[i].id == id){
            var price = data._40_to_50[i].price;
            var image = data._40_to_50[i].img;
            //var link = data.economy[i].link;
            //console.log(content);
        }
    }
    for (i = 0; i < data._50_to_60.length; i++){
        if (data._50_to_60[i].id == id){
            var price = data._50_to_60[i].price;
            var image = data._50_to_60[i].img;
            //var link = data.economy[i].link;
            //console.log(content);
        }
    }
    for (i = 0; i < data.more_than_60.length; i++){
        if (data.more_than_60[i].id == id){
            var price = data.more_than_60[i].price;
            var image = data.more_than_60[i].img;
            //var link = data.economy[i].link;
            //console.log(content);
        }
    }
    res.render('question3_items', {
    	'price': price,
		'image': image
        //'link': link
    });
};
