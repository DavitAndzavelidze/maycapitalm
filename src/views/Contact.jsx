import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="bg-orange-300">
        <nav className="absolute top-0 left-0 z-50 w-full bg-orange-400">
          <ul className="flex justify-center items-center gap-[30px] cursor-pointer py-[20px] text-[20px]">
            <Link to="/">
              <li className="navlink">Home</li>
            </Link>
            <Link to="/products">
              <li className="navlink">Products</li>
            </Link>
            <Link to="/about">
              <li className="navlink">About us</li>
            </Link>
            <Link to="/contact">
              <li className="navlink activeCl">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col mt-[8rem] items-center h-full">
        <div className="text-[40px] self-center border-b-4 border-orange-400 mb-[4rem] cursor-default">
          Contact
        </div>
        <div className="contact-text">
          <p className="text-[20px]">
            Address: ESENTEPE MAH. KORE ŞEHİTLERİ CAD. ISTANBLOOM NO:16/1 IC
            KAPI NO: 54SISLI/ İSTANBUL/TURKEY
          </p>
        </div>
      </div>
    </>
  );
}
