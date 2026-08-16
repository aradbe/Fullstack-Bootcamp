const mongoose = require("mongoose")
const Person = require("./person")
const createApp = require("./app")

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/peopleDB"
mongoose.connect(uri).then(() => createApp(Person).listen(3000, () => console.log("Listening on 3000"))).catch(err => { console.error(err); process.exitCode = 1 })
