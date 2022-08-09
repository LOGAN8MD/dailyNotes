const mongoose=require('mongoose');
//mongodb+srv://book:<password>@book.ilssjda.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/inotebook
const mongoURI="mongodb+srv://book:book@book.ilssjda.mongodb.net/book?retryWrites=true&w=majority";

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports=connectToMongo;