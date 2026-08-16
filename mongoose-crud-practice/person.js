const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 0 },
}, { timestamps: true })

module.exports = mongoose.models.Person || mongoose.model("Person", personSchema)
