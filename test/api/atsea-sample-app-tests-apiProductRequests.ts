// Imported all dependencies needed
import { get } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import { expect } from 'chai';

// Host for all requests
const host = `http://localhost:8080`;

// Product Tests
describe('Atsea shop API Endpoint Product Requests', () => {

  // Variables needed for the code to be easily read
  let response;
  let singleProduct;

  // First test
  describe('Get All Products', () => {
    before(async () => {
      response = await get(`${host}/api/product/`);
    });
    
    it('Then all products should be listed', () => {
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body.length).to.equal(9);
    });
  });

  // Second test
  describe('Get One Single Product', () => {
    before(async () => {
      response = await get(`${host}/api/product/1`);
      singleProduct = response.body;
    });
    
    it('Then product with the productId:1 should be obtained', () => {
      expect(singleProduct.productId).to.equal(1);
      expect(singleProduct.name).to.equal('Unusable Security');
      expect(singleProduct.price).to.equal(25.0);
    });
  });
});