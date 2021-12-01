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

describe('Atsea shop API Endpoint Customer Requests', () => {

    // Variables needed for the code to be easily read
    let response;
    let customerId;

  describe('Creating a customer user', () => {
    before(async () => {
      response = await post(`${host}/api/customer/`)
        .set('User-Agent', 'agent')
        .set('Content-Type', 'application/json')
        .send(register);
      customerId = response.body.customerId;
    });
    it('Then an user should be created', () => {
      expect(response.status).to.equal(StatusCodes.CREATED);
    });
  });
  describe('Getting a customer', () => {
    before(async () => {
      response = await get(`${host}/api/customer/${customerId}`)
        .set('User-Agent', 'agent');
    });

    it('Then a customer should be obtained', () => {
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body.email).to.equal('gfreeman@gmail.com');
      expect(response.body.username).to.equal('gordonf');
      expect(response.body.customerIf).to.equal(customerId);
    });
  });

  describe('Deleting a customer', () => {
    before(async () => {
      response = await del(`${host}/api/customer/${customerId}`);
    });
    it('Then an customer should be deleted', () => {
      expect(response.status).to.equal(StatusCodes.NO_CONTENT);
    });
  });
});