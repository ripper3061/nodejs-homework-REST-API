// const app = require('./app')
const mongoose = require('mongoose')

const DB_HOST = 'mongodb+srv://ripper3061:2RDT3Cd1EaF1KYEw@db-contacts.ucmkhi8.mongodb.net/db-contacts?retryWrites=true&w=majority'
mongoose.connect(DB_HOST).then(()=>{console.log("Database connection successful")}).catch((err) => {console.error(err.message)})

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
