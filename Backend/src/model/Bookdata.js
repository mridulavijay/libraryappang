const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/libappang",{
   useNewUrlParser:true,
   useUnifiedTopology:true
});
//mongoose.connect("mongodb://localhost:27017/librarycase")
//mongoose.connect("mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/libappcase?retryWrites=true&w=majority");
const Schema=mongoose.Schema;
const BookSchema= new Schema({
    title:String,
    author:String,
    genre:String,
    image:String,
    desc:String
});
var Bookdata=mongoose.model("bookdata",BookSchema);
module.exports=Bookdata;