const assert = require("node:assert/strict")
const test = require("node:test")
const request = require("supertest")
const createApp = require("../app")

function fakeModel() {
  const records = []
  return {
    find: async () => records,
    create: async data => { const record = { _id: String(records.length + 1), ...data }; records.push(record); return record },
    findByIdAndUpdate: async (id, update) => { const record = records.find(p => p._id === id); if (record) Object.assign(record, update); return record || null },
    deleteMany: async () => { const deletedCount = records.length; records.length = 0; return { deletedCount } },
  }
}

test("POST, GET, PUT, and DELETE routes complete the CRUD exercises", async () => {
  const app = createApp(fakeModel())
  const created = await request(app).post("/person").send({ firstName: "Ada", lastName: "Lovelace", age: 36 }).expect(201)
  assert.equal(created.body.age, 36)
  const people = await request(app).get("/people").expect(200)
  assert.equal(people.body.length, 1)
  const updated = await request(app).put(`/person/${created.body._id}`).expect(200)
  assert.equal(updated.body.age, 80)
  const deleted = await request(app).delete("/apocalypse").expect(200)
  assert.equal(deleted.body.deletedCount, 1)
  const empty = await request(app).get("/people").expect(200)
  assert.deepEqual(empty.body, [])
})
