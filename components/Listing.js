import Image from 'next/image';

const Listing = ({ item }) => {
  const shortTitle = (title) => {
    const char = title.indexOf('|') > -1 ? '|' : ',';
    return title.substr(0, title.indexOf(char));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {console.log(item)}
      <Image
        src={item.images[0].url_170x135}
        alt={item.title}
        width={170}
        height={135}
      />
      <p>{shortTitle(item.title)}</p>
      <p></p>
    </div>
  );
};
export default Listing;
