const Wreck = require('wreck');

const uri = 'https://www.haloapi.com/stats/h5/servicerecords/arena?players=vannila knight';
const options = { json: true,  headers: { 'Ocp-Apim-Subscription-Key': '344c56ed814d4418820f0c59e4f9d4da'} };


module.exports = () => {

  return new Promise((resolve, reject) => {
    Wreck.get(uri, options, (err, resp, payload) => {
      if(err) {
        return reject(err);
      }

      return resolve(payload);
    });
  });

};