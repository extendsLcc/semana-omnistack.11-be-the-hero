const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connectionDatabase')

describe('ONG', () => {

    beforeEach( async () => {

        await connection.migrate.rollback();
        await connection.migrate.latest();

    });

    afterAll( async () => {

        await connection.destroy();

    });

    it('should be able to create a new ONG', async () => {

        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong XYZ",
                email: "contato@xyz.com",
                whatsapp: "9999999999",
                city: "Umuarama",
                uf: "PR"
            });

        expect( response.body ).toHaveProperty('id');
        expect( response.body.id ).toHaveLength(8);

    })
});