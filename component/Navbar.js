import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Welcome User</h1>
      </div>
      <Link href="/"> Home</Link>
      <Link href="/about">About</Link>
      <Link href="/user">User</Link>
    </nav>
  );
};

export default Navbar;
