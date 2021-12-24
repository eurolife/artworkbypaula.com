import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container py-4">
        <Link href="/" passHref={true}>
          <a>
            <Image
              src="/images/logo_sq2.png"
              alt="Artwork by Paula logo"
              width="110"
              height="45"
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
