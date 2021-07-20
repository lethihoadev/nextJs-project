import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>Oooops...</p>
      <p>
        This page not found, comback <Link href="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
