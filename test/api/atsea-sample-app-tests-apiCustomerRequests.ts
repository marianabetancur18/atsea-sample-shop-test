// Imported all dependencies needed
import { get, post, del } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';

// Host for all requests
const host = `http://ec2-18-189-66-33.us-east-2.compute.amazonaws.com:8080`;

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


// Customer tests
describe('Atsea shop API Endpoint Customer Requests', () => {

    // Variables needed for the code to be easily read
    let response;
    let customerId;
    let customerName;
    let customerUsername;

    // First test
  describe('Create Customer', () => {
    before(async () => {
      response = await post(`${host}/api/customer/`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json')
        .send(register);
      customerId = response.body.customerId;
    });

    it('Then the register should be posted and the costumer should be created', () => {
      expect(response.status).to.equal(StatusCodes.CREATED);
    });
  });

  // Second test
  describe('Get Customer', () => {
    before(async () => {
      response = await get(`${host}/api/customer/${customerId}`)
        .set('User-Agent', 'agent');
        customerName = response.body.name;
        customerUsername = response.body.username;
    });

    it('Then a customer should be obtained', () => {
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body.email).to.equal('sally@example.com');
      expect(response.body.username).to.equal('sallyv');
      expect(response.body.customerIf).to.equal(customerId);
    });
  });

    // Third test
    describe(`Get Customer by Name`, () => {
        before(async () => {
          response = await get(`${host}/api/customer/name=${customerName}`)
            .set('User-Agent', 'agent');
        });
    
        it('Then a customer should be obtained', () => {
          expect(response.status).to.equal(StatusCodes.OK);
          expect(response.body.email).to.equal('sally@example.com');
          expect(response.body.username).to.equal(customerUsername);
          expect(response.body.name).to.equal(customerName);
        });
      });

    // Fourth test
    describe('Get Customer by Username', () => {
        before(async () => {
          response = await get(`${host}/api/customer/username=${customerUsername}`)
            .set('User-Agent', 'agent');
        });
    
        it('Then a customer should be obtained', () => {
          expect(response.status).to.equal(StatusCodes.OK);
          expect(response.body.email).to.equal('sally@example.com');
          expect(response.body.username).to.equal(customerUsername);
          expect(response.body.name).to.equal(customerName);
        });
      });

  // Fifth test
  describe('Delete all Customers', () => {
    before(async () => {
      response = await del(`${host}/api/customer/`);
    });

    it('Then all customers should be deleted', () => {
      expect(response.status).to.equal(StatusCodes.NO_CONTENT);
    });
  });
});
