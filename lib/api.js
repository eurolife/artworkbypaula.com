import axios from 'axios';

const fetchData = async (req) => {
  try {
    let res = await axios({
      // this pulls the colouring book section items
      url: `${req}?api_key=${process.env.ETSY_API_KEY}`,
      method: 'get',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    return res.data.results;
  } catch (err) {
    console.error(err);
  }
};

const getItemImages = async (sectionId, item) => {
  return await fetchData(
    `https://openapi.etsy.com/v2/listings/${item.listing_id}/images/`
  );
  // try {
  //   let res = await axios({
  //     // this pulls the colouring book section items
  //     url: `https://openapi.etsy.com/v2/listings/${item.listing_id}/images/?api_key=${process.env.ETSY_API_KEY}`,
  //     method: 'get',
  //     timeout: 10000,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   if (res.status == 200) {
  //     // test for status you want, etc
  //     console.log(res.status);
  //   }
  //   // Don't forget to return something
  //   // item.images = res.data.results;
  //   return res.data.results;
  //   // return res.data.results;
  // } catch (err) {
  //   console.error(err);
  // }
};

export async function getListings(sectionId) {
  const results = await fetchData(
    `https://openapi.etsy.com/v2/shops/23419135/sections/${sectionId}/listings/active`
  );

  let newResults = [];
  for (const result of results) {
    const images = await getItemImages(sectionId, result);
    const newresult = { ...result, images };
    newResults = [...newResults, newresult];
  }
  // Don't forget to return something
  return newResults;
  // try {
  //   let res = await axios({
  //     // this pulls the colouring book section items
  //     url: `https://openapi.etsy.com/v2/shops/23419135/sections/${sectionId}/listings/active?api_key=${process.env.ETSY_API_KEY}`,
  //     method: 'get',
  //     timeout: 10000,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   if (res.status == 200) {
  //     // test for status you want, etc
  //     console.log(res.status);
  //   }
  //   let results = res.data.results;
  //   let newResults = [];
  //   for (const result of results) {
  //     const images = await getItemImages(sectionId, result);
  //     const newresult = { ...result, images };
  //     newResults = [...newResults, newresult];
  //   }
  //   // Don't forget to return something
  //   return newResults;
  // } catch (err) {
  //   console.error(err);
  // }
}
