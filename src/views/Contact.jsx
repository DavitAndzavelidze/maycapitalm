import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <span className="self-end text-[green] text-[14px]">
      Your message sent successfully
    </span>
  );
};

export default function Contact() {
  const form = useRef();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n7lbxxv",
        "template_2d09obx",
        form.current,
        "8IaCGP6NCfLn3hkgN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          showResult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  setTimeout(() => {
    showResult(false);
  }, 3000);
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col ml-[2rem] md:ml-[0px] gap-[10px] w-[300px] md:w-[500px]">
                <div className="name">
                  <input
                    type="text"
                    name="user_name"
                    className="form-input px-4 py-3 w-full"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    name="user_email"
                    className="form-input px-4 py-3 w-full"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="subject">
                  <input
                    type="text"
                    name="subject"
                    className="form-input px-4 py-3 w-full"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="textarea">
                  <textarea
                    className="w-full h-[150px] resize-none pl-[20px]"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="submit self-end bg-orange-300  hover:bg-orange-400 hover:text-[#fff] cursor-pointer duration-[200ms]">
                  <input
                    className="px-[40px] py-[10px]"
                    type="submit"
                    value="Send"
                  />
                </div>
                <div className="self-end"> {result ? <Result /> : null} </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
