import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img src="../images/logo.svg" alt="ChampLook" />
      </a>
    </Link>
  );
};

export default Logo;
