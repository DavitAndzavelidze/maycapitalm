import { Link } from "react-router-dom";
import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <>
      <div className="bg-orange-300">
        <nav className="absolute top-0 left-0 z-50 w-full bg-orange-400/[.8]">
          <ul className="flex justify-center items-center gap-[30px] cursor-pointer py-[20px] text-[20px]">
            <Link to="/">
              <li className="navlink">Home</li>
            </Link>
            <Link to="/products">
              <li className="navlink">Products</li>
            </Link>
            <Link to="/about">
              <li className="navlink activeCl">About us</li>
            </Link>
            <Link to="/contact">
              <li className="navlink">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col mt-[8rem] items-center h-full">
        <div className="text-[40px] self-center border-b-4 border-orange-400 mb-[4rem] cursor-default">
          About us
        </div>
        <div className="flex justify-between items-center w-[1000px] mx-auto leading-[35px] text-[20px]">
          <div className="w-[450px]">
            <p>
              MAY CAPITAL MAKINE EKIPMANLARI KIMYA URUNLERISANAYI VE TICARET
              LIMITED SIRKETI company is a leader in distribution of steel long
              and flat products from Europe and Turkey. We are exclusively
              selling rebars, wire rods, merchant bar, steel profiles ,
              Prepainted hot dipped galvanized coils and galvanized hot dipped
              coils from the main steel mills. Our experience as global traders
              enable us to link customers with a wide range of suppliers. We
              also guarantee to assist our customers to find the products that
              suits the best for their needs.
            </p>
          </div>
          <div className="img-box">
            <img className="rounded-[10px]" src={AboutImg} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
