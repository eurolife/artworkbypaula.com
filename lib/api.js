import axios from 'axios';

export async function getData() {
  try {
    let res = await axios({
      // this pulls the colouring book section items
      url: `https://openapi.etsy.com/v2/shops/23419135/sections/34717543/listings/active?api_key=${process.env.ETSY_API_KEY}`,
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
