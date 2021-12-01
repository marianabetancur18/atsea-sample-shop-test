// Since some test need the information of an user (order request for example) this script creates temporarily an user
import { post, del } from 'superagent';
import { expect } from 'chai';
import { StatusCodes } from 'http-status-codes';

// Host for all requests
const host = `http://localhost:8080`;

// This function creates an user
export function customerRegistration() {
    
// Variables needed for the code to be easily read   
    let response;
    let customerIf;
    let register = {
      customerId: 0,
      name: 'Luisa martinez',
      address:'NISWANDEE SMALLSYS INC 795 E',
      email: 'Lumar@gmail.com',
      phone: '123 456 7809',
      username: '1234567',
      password: '1234567',
      enabled: 'true',
      role: 'USER'
    };
    describe('Create an Order', () => {
      before(async () => {
        response = await post(`${host}/api/customer/`)
          .set('User-Agent', 'agent')
          .set('Content-Type', 'application/json')
          .send(register);
        customerIf = response.body.customerIf;
      });
      it('Customer created successfully', () => {
        expect(response.status).to.equal(StatusCodes.CREATED);
      });
    });
    register.customerId = customerIf;
    return register;
  };

// This function delates an user
export function customerDelete() {
// Variables needed for the code to be easily read
    let response;
    
    describe('Delate temporarily customer', () => {
      before(async () => {
        response = await del(`${host}/api/customer/`)
        .set('User-Agent', 'agent')
      });
      it('temporarily customer successfully delated ', () => {
        expect(response.status).to.equal(StatusCodes.NO_CONTENT);
      });
    });
  
  };