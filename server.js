import mongoose from 'mongoose'
const MONGO_URI = "mongodb+srv://carlosMongoDb:mongodb1987@cluster0.tbniw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log("connection successfull"))
.catch((err) => console.log('connection mistake', err))