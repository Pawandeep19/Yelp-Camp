var express      =require("express");
var app          =express();
var bodyParser   =require("body-parser");
var mongoose     =require("mongoose");
var campG        =require("./models/campgrounds.js");
const seedDB = require("./seeds.js");


app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/Pawan_Yelp_Camp",{ useNewUrlParser: true, useUnifiedTopology: true, });
seedDB();



// var campgrounds=[
//     {name:"manali",image:"http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg"},
//     {name:"kasol",image:"https://champ.d.umn.edu/sites/champ.d.umn.edu/files/styles/hero_interior_880x404/public/umd_interior_home/campground_image.jpg?itok=Gwxo4bUd"},
//     {name:"kheerganga",image:"https://www.wivb.com/wp-content/uploads/sites/97/2020/06/OhanaCampground2016_CMeleedy_01_web-2.jpeg"},
//     {name:"manali",image:"http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg"},
//     {name:"kasol",image:"https://champ.d.umn.edu/sites/champ.d.umn.edu/files/styles/hero_interior_880x404/public/umd_interior_home/campground_image.jpg?itok=Gwxo4bUd"},
//     {name:"kheerganga",image:"https://www.wivb.com/wp-content/uploads/sites/97/2020/06/OhanaCampground2016_CMeleedy_01_web-2.jpeg"}
// ];

//home route
app.get("/",function(req,res){
    res.render("landingPage.ejs");
});


// campground page
app.get("/campground",function(req,res){
    campG.find({},function(err,campgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campGroundPage.ejs",{campgrounds:campgrounds});
        }
    });
});



//post route of campground
app.post("/campground",function(req,res){
     var campname=req.body.name;
     var imageurl=req.body.image;
     var descriptionC=req.body.description;
     var camp={
         name:campname,
         image:imageurl,
         description:descriptionC
     }
     campG.create(camp,function(err,camps){
         if(err){
             console.log(err);
         }
         else{
            res.redirect("/campground");
         }
     });
});


//add new campgorund
app.get("/campground/new",function(req,res){
    res.render("newCamp.ejs");
});


//more info page-show page
app.get("/campground/:id",function(req,res){
    campG.findById(req.params.id).populate("comments").exec(function(err,foundcamp){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundcamp);
            res.render("showPage.ejs",{foundcamp:foundcamp});
        }
    });
    
});

//listen
app.listen(3000,function(){
    console.log("server is starting");
});
