import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://shinhee:******@shinhee.fglsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority+srv://shinhee:******@shinhee.fglsw.mongodb.net/test";

mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((console.log("up & running, shinhee")))
.catch(error => console.log("epic failed", error))