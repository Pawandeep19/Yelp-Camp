var mongoose=require("mongoose");
var Campgrounds=require("./models/campgrounds.js");
var Comment=require("./models/comments.js");
var data=[
        {name:"manali",image:"http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg"},
        {name:"kasol",image:"https://champ.d.umn.edu/sites/champ.d.umn.edu/files/styles/hero_interior_880x404/public/umd_interior_home/campground_image.jpg?itok=Gwxo4bUd"},
        {name:"kheerganga",image:"https://www.wivb.com/wp-content/uploads/sites/97/2020/06/OhanaCampground2016_CMeleedy_01_web-2.jpeg"},
        {name:"manali",image:"http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg"},
        {name:"kasol",image:"https://champ.d.umn.edu/sites/champ.d.umn.edu/files/styles/hero_interior_880x404/public/umd_interior_home/campground_image.jpg?itok=Gwxo4bUd"},
        {name:"kheerganga",image:"https://www.wivb.com/wp-content/uploads/sites/97/2020/06/OhanaCampground2016_CMeleedy_01_web-2.jpeg"}
    ];
function seedDB(){
    Campgrounds.remove({},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("campground removed");
            //add new campground
            data.forEach(function(seed){
                Campgrounds.create(seed,function(err,camp){
                    if(err){
                        console.log(err);
                    } else{
                        console.log("campground added");
                        Comment.create({
                            text:"Amazing campground must say",
                            author:"arshdeep singh"
                        },function(err,comment){
                            if(err){
                                console.log(err);
                            }
                            else{
                                camp.comments.push(comment);
                                camp.save();
                                console.log("comment added");
                            }
                            
                        });
                    }
                });
            });
        }
    });    
}

module.exports=seedDB;