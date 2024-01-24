const server = require('../src/server.js');
const request = require('supertest');
const agent = request(server);

describe ("Route's tests", () => {
    describe ('GET /drivers/:id', () => {
        it ('Should reply with status code 400 if ID is not found', async () => {
            const res = await agent.get('/drivers/900');
            expect(res.statusCode).toBe(400);
        });

        it ('Should reply with status code 200 if ID is found', async () => {
            const res = await agent.get('/drivers/10');
            expect(res.statusCode).toBe(200);
        });

        it ('Should reply with an object with the following properties: "driver_id", "driver_name", "lastname", "image", "nationality", "dob", "description", and "teams" and "origin"', async () => {
            const { body } =  await agent.get('/drivers/10');
            expect(body[0]).toHaveProperty('driver_id' && 'driver_name' && 'lastname' && 'image' && 'nationality' && 'dob' && 'description' && 'teams' && 'origin');
        });

    });

    describe('GET /drivers?query', () => {
        it ('The reply status should be 200 if the given query is founded.', async () => {
            const res = await agent.get('/drivers?name=schumacher');
            expect(res.statusCode).toBe(200);
        });

        it ('The reply should contain the given query', async () => {
            const { body } = await agent.get('/drivers?name=schumacher');
            expect(body[0].lastname).toBe('Schumacher');
        });

        it ('The reply status should be 404 if the given query is not founded.', async () => {
            const res = await agent.get('/drivers?name=alfredo');
            expect(res.statusCode).toBe(404);
        });
    });

    describe('GET /teams', () => {
        it ('Should reply with an array of 200 elements', async () => {
            const { body } = (await agent.get('/teams'));
            expect(body.length).toBe(200);
        })
    });

    describe ('POST /drivers', () => {
        it ('Should reply with status code 400 if body data is missing', async () => {
            const res = await agent.post('/drivers');
            expect(res.statusCode).toBe(400);
        });

        it ('Should reply with status 200 if all body data fields are sent', async () => {
            const res = await agent.post('/drivers').send({driver_name: "alfrel", lastname: "casero", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Alfredo-en-mallorca.jpg", nationality: "argentine", dob: "1962-11-12", description: "Alfredo Ángel Casero es un actor, comediante y cantante argentino.", teams: ['Ferrari', 'Mercedes', 'Aston Martin']});
            expect(res.statusCode).toBe(200);
        });
    })
});