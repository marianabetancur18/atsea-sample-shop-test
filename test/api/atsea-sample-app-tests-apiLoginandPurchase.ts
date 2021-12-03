// Imported all dependencies needed
import { get, post, del } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';

// Host for all requests
const host = `http://localhost:8080`;

// Customer to create 
const register = {
    customerId: 0,
    name: "Sally Vallery",
    address: "144 Townsend, San Francisco 99999",
    email: "sally@example.com",
    phone: "513 222 5555",
    username: "sallyv",
    password: "sallypassword",
    enabled: "true",
    role: "USER"
};

const loginRegister = {
    username: "sallyv",
    password: "sallypassword",
};


// Login & Purchase tests
describe('Atsea shop API Endpoint Login & Purchase Requests', () => {

    // Variables needed for the code to be easily read
    let response;
    let logInToken;

    // First test
    describe('Create Customer', () => {
        before(async () => {
            response = await post(`${host}/api/customer/`)
                .set('User-Agent', 'agent')
                .set('Content-Type', 'application/json')
                .send(register);
        });

        it('Then the register should be posted and the costumer should be created', () => {
            expect(response.status).to.equal(StatusCodes.CREATED);
        });
    });

    // Second test
    describe('Login', () => {
        before(async () => {
            response = await post(`${host}/login/`)
                .set('User-Agent', 'agent')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(loginRegister);
            logInToken = response.body.token;
        });

        it('Then the customer should be logged in', () => {
            expect(response.status).to.equal(StatusCodes.OK);
        });
    });

    // Third test
    describe(`Purchase ${logInToken}`, () => {
        before(async () => {
            response = await get(`${host}/purchase/`)
                .set('User-Agent', 'agent')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${logInToken}`)
        });

        it('Then the purchase should be done', () => {
            expect(response.status).to.equal(StatusCodes.OK);
        });
    });

    // Fourth test
    describe('Delete all Customers', () => {
        before(async () => {
            response = await del(`${host}/api/customer/`);
        });

        it('Then all customers should be deleted', () => {
            expect(response.status).to.equal(StatusCodes.NO_CONTENT);
        });
    });
});
