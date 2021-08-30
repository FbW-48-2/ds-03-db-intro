import mongoose from 'mongoose'

// const MONGODB_URI = "mongodb+srv://user246:user246@cluster0.l0ouj.mongodb.net/test" 
// mongoose.connect( `mongodb://localhost/test`, {
//     useNewUrlParser: true.value,
//     useUnifiedTopology: true
// })
// .then(()=> console.log("connection ok"))
// .catch(()=> console.log("no conn"))

main().catch(err=> console.log('WHOOPS SOMETHING WENT WRONG',err))

async function main() {
    await mongoose.connect(`mongodb://localhost/test`)

    const petSchema = new mongoose.Schema({
        name: String,
        age: Number,
        cute: Boolean,
    })

    const Dogs = mongoose.model('Dogs', petSchema)

    const hasso = new Dogs({name: "Hasso", age: 4, cute: true})
    const lea = new Dogs({name: "Lea", age: 1, cute: true})

    // __v is version key, only after saved ;)
    // await hasso.save()
    // await lea.save()
    const doggos = await Dogs.find()

    console.log(doggos)
}