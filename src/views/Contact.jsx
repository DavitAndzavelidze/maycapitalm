export default function Contact() {
  return (
    <>
      <div className="flex flex-col mt-[8rem] mb-[4rem] items-center h-full">
        <div className="text-[40px] self-center border-b-4 border-orange-400 mb-[4rem] cursor-default">
          Contact
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between w-[400px] px-[10px] md:w-[900px] gap-[2rem]">
          <div className="contact-text text-[20px] max-w-[250px] flex ml-[2rem] md:ml-[0px] flex-col gap-[20px]">
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
              <div className="flex flex-col ml-[2rem] md:ml-[0px] gap-[10px] w-[300px] md:w-[500px]">
                <div className="name">
                  <input
                    type="text"
                    className="form-input px-4 py-3 w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    className="form-input px-4 py-3 w-full"
                    placeholder="Your Email"
                  />
                </div>
                <div className="subject">
                  <input
                    type="text"
                    className="form-input px-4 py-3 w-full"
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
                    type="button"
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
