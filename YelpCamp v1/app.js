var express =require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


var campgrounds=[
    {name:"manali",image:"http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg"},
    {name:"kasol",image:"https://champ.d.umn.edu/sites/champ.d.umn.edu/files/styles/hero_interior_880x404/public/umd_interior_home/campground_image.jpg?itok=Gwxo4bUd"},
    {name:"kheerganga",image:"https://www.wivb.com/wp-content/uploads/sites/97/2020/06/OhanaCampground2016_CMeleedy_01_web-2.jpeg"},
    {name:"manali",image:"http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg"},
    {name:"kasol",image:"https://champ.d.umn.edu/sites/champ.d.umn.edu/files/styles/hero_interior_880x404/public/umd_interior_home/campground_image.jpg?itok=Gwxo4bUd"},
    {name:"kheerganga",image:"https://www.wivb.com/wp-content/uploads/sites/97/2020/06/OhanaCampground2016_CMeleedy_01_web-2.jpeg"}
];

//home route
app.get("/",function(req,res){
    res.render("landingPage.ejs");
});


// campground page
app.get("/campground",function(req,res){
   res.render("campGroundPage.ejs",{campgrounds:campgrounds});
});



//post route of campground
app.post("/campground",function(req,res){
     var campname=req.body.name;
     var imageurl=req.body.image;
     var camp={
         name:campname,
         image:imageurl
     }
     campgrounds.push(camp);
     res.redirect("/campground");
});


//add new campgorund
app.get("/campground/new",function(req,res){
    res.render("newCamp.ejs");
});
//listen
app.listen(3000,function(){
    console.log("server is starting");
});
