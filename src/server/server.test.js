const app = require('./server')
const supertest  = require('supertest')

test('Testing the server in a basic way', async() => {
    const res = await supertest(app).get('/test')
    expect(res.status).toBe(200)
})
