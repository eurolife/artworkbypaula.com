import Link from 'next/link';

const HomeCategories = () => {
  return (
    <>
      <div className="w-full p-4 bg-gray-200 mb-4">
        <Link href="/greeting-cards">
          <a>
            <h1 className="inline-block bg-black p-3 text-white">
              Greeting Cards
            </h1>
          </a>
        </Link>
      </div>
      <div className="md:flex md:space-x-4 mb-4">
        <Link href="/colouring-books">
          <a className="mb-4 md:mb-0 md:w-1/2 p-4 bg-gray-200">
            <h1 className="inline-block bg-black p-3 text-white">
              Colouring Books
            </h1>
          </a>
        </Link>

        <Link href="/original-artwork">
          <a className="mb-4 md:mb-0 md:w-1/2 p-4 bg-gray-200">
            <h1 className="inline-block bg-black p-3 text-white">
              Original Artwork
            </h1>
          </a>
        </Link>
      </div>
      <div className="md:flex md:space-x-4">
        <Link href="/art-prints">
          <a className="mb-4 md:mb-0 md:w-1/2 p-4 bg-gray-200">
            <h1 className="inline-block bg-black p-3 text-white">Art Prints</h1>
          </a>
        </Link>
        <Link href="/original-artwork">
          <a className="mb-4 md:mb-0 md:w-1/2 p-4 bg-gray-200">
            <h1 className="inline-block bg-black p-3 text-white">T-shirts</h1>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomeCategories;
