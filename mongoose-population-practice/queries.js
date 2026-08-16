const { SolarSystem, Planet, Visitor } = require("./models")

module.exports = {
  visitedPlanets: visitorId => Visitor.findById(visitorId).populate("visitedPlanets"),
  visitorsOnPlanet: planetId => Planet.findById(planetId).populate("visitors"),
  visitorsInSystem: systemId => SolarSystem.findById(systemId).populate({ path: "planets", populate: { path: "visitors" } }),
  homePlanetStar: visitorId => Visitor.findById(visitorId).populate({ path: "homePlanet", populate: { path: "system", select: "starName" } }),
  planetSystemAndVisitors: planetId => Planet.findById(planetId).populate("visitors").populate({ path: "system", select: "starName" }),
}
