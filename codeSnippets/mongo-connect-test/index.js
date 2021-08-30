import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connection works!")).then((err) => console.log(err))



