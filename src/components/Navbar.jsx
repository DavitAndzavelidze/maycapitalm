export default function Navbar() {
  return (
    <>
      <div className="bg-orange-300">
        <nav className="absolute top-0 left-0 z-50 w-full bg-orange-400">
          <ul className="flex justify-center items-center gap-[30px] cursor-pointer py-[1rem] text-[24px]">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
