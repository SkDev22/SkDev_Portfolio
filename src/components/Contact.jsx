import note from "../images/note.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () =>
    toast.info("🤝 Thank you! I'll contact you soon.", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c18qarc",
        "template_02pkbb6",
        form.current,
        "FjL6iLhlUISza-9SY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="w-full lg:h-screen md:h-screen h-auto font-Poppins bg-gradient-to-b from-[#14213d] to-[#000]"
      id="Contact"
    >
      <div className="w-full pt-[10px] md:pt-16 md:flex grid md:justify-between text-center px-0 md:px-20 md:items-center">
        <div className="flex-1 p-5 text-white">
          <h1 className="md:text-5xl text-4xl font-bold">Let's Talk</h1>
          <img
            className="md:w-[600px] w-[600px] md:h-[400px] md:mx-auto md:py-0"
            src={note}
            alt=""
          />

          <div className="font-semibold text-lg">
            <h2>071 637 8320</h2>
            <h2>kalharasahan78@gmail.com</h2>
            <p>Kadewaththa, Talvita, via Kurunegala</p>
          </div>
        </div>
        <div className="flex-1 p-5 md:p-8">
          <div className="bg-gradient-to-b from-[#000] to-[#14213d] md:p-10 p-8 rounded-2xl  md:w-[500px] md:mx-auto mx-0">
            <form className="grid gap-5" ref={form} onSubmit={sendEmail}>
              <input
                className="w-full px-3 py-2 rounded-lg"
                type="text"
                placeholder="Your Name"
                name="user_name"
                required
              />
              <input
                className="w-full px-3 py-2 rounded-lg"
                type="email"
                placeholder="Your Email"
                name="user_email"
                required
              />
              <textarea
                className="w-full px-3 py-2 rounded-lg"
                name="message"
                placeholder="Your Message"
                cols="30"
                rows="6"
                required
              ></textarea>
              <input
                className="w-[50%] mx-auto text-white bg-[#fb8b24] px-3 py-2 rounded-lg cursor-pointer"
                onClick={notify}
                type="submit"
                value="SEND"
              />
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
