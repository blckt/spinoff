var mongoose=require('mongoose');
var User=mongoose.Schema;

var user=new User({
    id:String,
    email:String,
    token:String,
   name:String,
    gender:String,
    surname:String,
    bdate:Date,
    country:String,
    city:String,
    currentLocation:String,
    languages:[],
    sport:[],
    music:[],
    movies:[{title:String,genre:String}],
    tvShows:[],
    events:{
        future:[{
            title:String,
            date:Date,
            location:String
        }],
        past:[{
            title:String,
            date:Date,
            location:String
        }]
    }

});

module.exports=mongoose.model('User',user);