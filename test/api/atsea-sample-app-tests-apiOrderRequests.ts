// Imported all dependencies needed
import { get, post, del} from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';


// Host for all requests
const host = `http://localhost:8080`;

// Obtaining current date 
const today = new Date();
today.setTime(today.getTime() + 300 * 60 * 1000);
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const currentDate = `${today.getFullYear()}-${month}-${today.getDate()}`;


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

// Order informartion 
let order = {
    orderId: 0,
    orderDate: currentDate,
    customerId:customerIf,
    productsOrdered: { 1: 1, 2: 2, 3: 3 }
  };


  describe('Atsea shop API Endpoint Order Request', () => {
    let orderId;
    let response;
// Since some test need the information of an user (order request for example) this script creates temporarily an user
    describe('Create an temporily customer', () => {
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

// Create an order
    describe('Creating an order', () => {
      before(async () => {
        response = await post(`${host}/api/order/`)
          .set('User-Agent', 'agent')
          .set('Content-Type', 'application/json')
          .send(order);
        orderId = response.body.orderId;
        order.orderId = orderId;
      });
      it('Then an order should be created', () => {
        expect(response.status).to.equal(StatusCodes.CREATED);
      });
    });
// Look for an specific order
    describe('Get Order by Id', () => {
      before(async () => {
        response = await get(`${host}/api/order/${orderId}`)
          .set('User-Agent', 'agent')
          .set('Content-Type', 'application/json');
      });
      it('Then an order should be obtained', () => {
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body.orderId).to.equal(order.orderId);
        expect(response.body.customerId).to.equal(order.customerId);
      });
    });
    describe('Delate temporarily customer', () => {
        before(async () => {
          response = await del(`${host}/api/customer/`)
          .set('User-Agent', 'agent')
        });
        it('temporarily customer successfully delated ', () => {
          expect(response.status).to.equal(StatusCodes.NO_CONTENT);
        });
      });

  });