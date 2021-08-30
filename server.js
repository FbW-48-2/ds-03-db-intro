import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://lnferrari:lnferrari@cluster0.zbbq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('DB Connection works!'))
.catch(err => console.log('[ERROR] DB Connection failed:', err))

