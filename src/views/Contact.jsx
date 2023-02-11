import { Link } from "react-router-dom";

export default function Contact() {
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
        <div className="flex justify-between w-[900px]">
          <div className="contact-text text-[20px] w-[350px] flex flex-col gap-[20px]">
            <div>
              <h3>Mobile</h3>
              <p className="text-[18px]">+90 535 508 56 97</p>
            </div>
            <div>
              <h3>Email</h3>
              <p className="text-[18px]">info@maycapitalmakine.com</p>
            </div>
            <div>
              <h3>Address</h3>
              <p className="text-[18px]">
                ESENTEPE MAH. KORE ŞEHİTLERİ CAD. ISTANBLOOM NO:16/1 IC KAPI NO:
                54SISLI/ İSTANBUL/TURKEY
              </p>
            </div>
          </div>
          <div>
            <form>
              <div className="flex flex-col gap-[10px] w-[500px]">
                <div className="name">
                  <input
                    type="text"
                    class="form-input px-4 py-3 w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    class="form-input px-4 py-3 w-full"
                    placeholder="Your Email"
                  />
                </div>
                <div className="subject">
                  <input
                    type="text"
                    class="form-input px-4 py-3 w-full"
                    placeholder="Subject"
                  />
                </div>
                <div className="textarea">
                  <textarea
                    className="w-full h-[150px] resize-none pl-[20px]"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="submit self-end">
                  <button
                    className="px-[40px] py-[10px] bg-orange-300 btn-fm"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
