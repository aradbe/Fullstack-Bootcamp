const express = require("express")

function createApp(Person) {
  const app = express()
  app.use(express.json())
  app.get("/people", async (_req, res, next) => { try { res.json(await Person.find()) } catch (e) { next(e) } })
  app.post("/person", async (req, res, next) => {
    try { res.status(201).json(await Person.create(req.body)) } catch (e) { next(e) }
  })
  app.put("/person/:id", async (req, res, next) => {
    try {
      const person = await Person.findByIdAndUpdate(req.params.id, { age: 80 }, { new: true, runValidators: true })
      if (!person) return res.status(404).json({ error: "Person not found" })
      res.json(person)
    } catch (e) { next(e) }
  })
  app.delete("/apocalypse", async (_req, res, next) => {
    try { const result = await Person.deleteMany({}); res.json({ deletedCount: result.deletedCount }) } catch (e) { next(e) }
  })
  app.use((err, _req, res, _next) => res.status(400).json({ error: err.message }))
  return app
}

module.exports = createApp
