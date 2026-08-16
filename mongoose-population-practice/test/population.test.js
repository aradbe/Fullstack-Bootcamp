const assert = require("node:assert/strict")
const test = require("node:test")
const { SolarSystem, Planet, Visitor } = require("../models")
const queries = require("../queries")

test("all relationships use ObjectId references", () => {
  assert.equal(SolarSystem.schema.path("planets").caster.options.ref, "Planet")
  assert.equal(Planet.schema.path("system").options.ref, "SolarSystem")
  assert.equal(Planet.schema.path("visitors").caster.options.ref, "Visitor")
  assert.equal(Visitor.schema.path("homePlanet").options.ref, "Planet")
  assert.equal(Visitor.schema.path("visitedPlanets").caster.options.ref, "Planet")
})

test("the five assignment queries configure correct population paths", () => {
  const id = "64b000000000000000000001"
  assert.ok(queries.visitedPlanets(id)._mongooseOptions.populate.visitedPlanets)
  assert.ok(queries.visitorsOnPlanet(id)._mongooseOptions.populate.visitors)
  assert.equal(queries.visitorsInSystem(id)._mongooseOptions.populate.planets.populate[0].path, "visitors")
  assert.equal(queries.homePlanetStar(id)._mongooseOptions.populate.homePlanet.populate[0].path, "system")
  const finalQuery = queries.planetSystemAndVisitors(id)
  assert.ok(finalQuery._mongooseOptions.populate.visitors)
  assert.equal(finalQuery._mongooseOptions.populate.system.select, "starName")
})
