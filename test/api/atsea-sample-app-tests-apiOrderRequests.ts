// Imported all dependencies needed
import { get, post} from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';
import { customerRegistration, customerDelete } from '../TestCostumerData';

// Host for all requests
const host = `http://localhost:8080`;

// Obtaining current date 
const today = new Date();
today.setTime(today.getTime() + 300 * 60 * 1000);
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const currentDate = `${today.getFullYear()}-${month}-${today.getDate()}`;


// Order informartion 
let order = {
    orderId: 0,
    orderDate: currentDate,
    customerId: customerRegistration().customerId,
    productsOrdered: { 1: 1, 2: 2, 3: 3 }
  };

  describe('Atsea shop API Endpoint Order Request', () => {
    let orderId;
    let response;
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
    customerDelete();
  });