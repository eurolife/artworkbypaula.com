import Head from 'next/head';
import Layout from '../../components/Layout';
import Listing from '../../components/Listing';
import { getListings } from '../../lib/api';

const Main = ({ listings = [] }) => {
  return (
    <div className="h-full">
      <Head>
        <title>
          Artwork by Paula - Music and pop culture inspired artwork, cards,
          colouring books, and t-shirts
        </title>
        <meta
          name="description"
          content="Original art, prints, cards, colouring books, and t-shirts inspired by music, the arts, pop culture and much more."
        />
      </Head>
      <Layout>
        <div className="container">
          <section>
            <div className="container md:grid md:grid-cols-4 gap-4">
              {listings.map((item, index) => (
                <Listing key={index} item={item} />
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Main;

export async function getStaticProps() {
  // Run API calls in parallel
  const [listings] = await Promise.all([getListings('34717543')]);

  return {
    props: { listings },
  };
}
