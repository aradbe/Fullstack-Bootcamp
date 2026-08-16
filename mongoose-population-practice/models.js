const mongoose = require("mongoose")
const { Schema } = mongoose

const solarSystemSchema = new Schema({
  starName: { type: String, required: true },
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
})
const planetSchema = new Schema({
  name: { type: String, required: true },
  system: { type: Schema.Types.ObjectId, ref: "SolarSystem", required: true },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
})
const visitorSchema = new Schema({
  name: { type: String, required: true },
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet", required: true },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
})

module.exports = {
  SolarSystem: mongoose.models.SolarSystem || mongoose.model("SolarSystem", solarSystemSchema),
  Planet: mongoose.models.Planet || mongoose.model("Planet", planetSchema),
  Visitor: mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema),
}
