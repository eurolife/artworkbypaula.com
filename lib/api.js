import Cors from 'cors';
import axios from 'axios';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  console.log(req, res);
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export async function makeRequest(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  const resp = await getData();
  res.json(resp);
}

export async function getData() {
  try {
    let res = await axios({
      // this pulls the colouring book section items
      url: 'https://openapi.etsy.com/v2/shops/23419135/sections/34717543/listings/active?api_key=pdxsk5k85onbvfqxmutfn0km',
      method: 'get',
      timeout: 8000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return res.data.results;
  } catch (err) {
    console.error(err);
  }
}
