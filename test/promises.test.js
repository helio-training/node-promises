// const code = require('code');
// const expect = code.expect;

const { expect } = require('code');
const Halo = require('../src');

describe('Promises', () => {

  it('retrieves data from api', () => {

    return Halo()
      .then((data) => {
        expect(data.Results).to.not.be.empty();
      })
      .catch((err) => {
        
      });

    // Halo((err, resp, payload) => {
    //   console.log(payload);
    //   expect(payload.Results).to.not.be.empty();
    //   done();
    // });
  })

});