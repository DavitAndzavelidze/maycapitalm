import { Link } from "react-router-dom";
import productImage1 from "../assets/pic-1.jpg";
import productImage2 from "../assets/pic-2.png";
import productImage3 from "../assets/pic-3.png";
import productImage4 from "../assets/pic-4.png";
import productImage5 from "../assets/pic-5.png";
import productImage6 from "../assets/pic-6.png";
import productImage7 from "../assets/pic-7.png";
import productImage8 from "../assets/pic-8.png";
import productImage9 from "../assets/pic-9.png";
import productImage10 from "../assets/pic-10.png";
import productImage11 from "../assets/pic-11.png";
import productImage12 from "../assets/pic-12.png";

export default function Products() {
  return (
    <div className="horisontal-x-hidden">
      <div className="bg-orange-300">
        <nav className="absolute top-0 left-0 z-50 w-full bg-orange-400/[.8]">
          <ul className="flex justify-center items-center gap-[30px] cursor-pointer py-[20px] text-[20px]">
            <Link to="/">
              <li className="navlink">Home</li>
            </Link>
            <Link to="/products">
              <li className="navlink activeCl">Products</li>
            </Link>
            <Link to="/about">
              <li className="navlink">About us</li>
            </Link>
            <Link to="/contact">
              <li className="navlink">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="w-[1500px] flex flex-col mx-auto mt-[8rem] pl-[20px]">
        <div className="text-[40px] self-center border-b-4 border-orange-400 mb-[6rem] cursor-default">
          Our Products
        </div>
        <div className="flex">
          <ul className="text-[22px] cursor-default leading-[40px]">
            <li>REBAR</li>
            <li>WIRE ROD</li>
            <li>EQUAL ANGLE</li>
            <li>I BEAM</li>
            <li>U CHANNEL</li>
            <li>PROFILES</li>
            <li>PIPES</li>
            <li>SHEETS</li>
            <li>FLAT, ROUND, SQUARE BARS</li>
            <li>PRE-PAINTED HOT DIPPED GALVANIZED COILS</li>
            <li>HOT DIPPED GALVANIZED COILS</li>
          </ul>

          <div className="flex flex-wrap w-[1000px] justify-center mx-auto gap-[20px] mb-[2rem]">
            <img className="productImg" src={productImage1} alt="..." />
            <img className="productImg" src={productImage2} alt="..." />
            <img className="productImg" src={productImage3} alt="..." />
            <img className="productImg" src={productImage4} alt="..." />
            <img className="productImg" src={productImage5} alt="..." />
            <img className="productImg" src={productImage6} alt="..." />
            <img className="productImg" src={productImage7} alt="..." />
            <img className="productImg" src={productImage8} alt="..." />
            <img className="productImg" src={productImage9} alt="..." />
            <img className="productImg" src={productImage10} alt="..." />
            <img className="productImg" src={productImage11} alt="..." />
            <img className="productImg" src={productImage12} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
