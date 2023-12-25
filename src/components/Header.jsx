import i02 from "../images/i02.jpg";
import {
  faAndroid,
  faFacebookSquare,
  faFigma,
  faGithubSquare,
  faInstagramSquare,
  faJava,
  faLinkedin,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div
      className="w-full lg:h-screen md:h-screen h-[1100px] bg-gradient-to-b from-[#14213d] font-Poppins to-[#000]"
      id="Home"
    >
      {/* Header div */}
      <div className=" absolute mt-20 md:mt-32 md:flex md:justify-between block px-5 md:px-36 md:items-center md:gap-5">
        {/* text div */}
        <div
          className="text-center md:text-left md:flex-1" data-aos="fade-down"
        >
          <h3 className="font-semibold text-white text-xl">Hello, Welcome</h3>
          <h1 className=" text-5xl md:text-[60px] text-[#fb8b24] font-bold my-5">
            I'm Sahan Kalhara
          </h1>
          <h2 className="text-white text-3xl font-semibold pb-5">
            Full Stack Developer
          </h2>
          <p className="text-white md:pr-40">
            An inherently inspired programmer, driven by a profound love for the
            craft, who is constantly seeking out new opportunities to learn,
            grow, and create solutions that push the limits of technology and
            empower other people.
          </p>
          <div className="flex gap-5 mt-8 text-5xl text-white justify-center md:justify-start ">
            <a href="https://www.linkedin.com/in/sahan-kalhara-04b068216/">
              {" "}
              <FontAwesomeIcon
                className="shadow-xl hover:text-[#fb8b24]"
                icon={faLinkedin}
              />
            </a>
            <a href="https://github.com/SkDev22">
              {" "}
              <FontAwesomeIcon
                className="shadow-xl hover:text-[#fb8b24]"
                icon={faGithubSquare}
              />
            </a>
            <a href="https://web.facebook.com/sahan.kalhara.3572">
              <FontAwesomeIcon
                className="shadow-xl hover:text-[#fb8b24]"
                icon={faFacebookSquare}
              />
            </a>
            <a href="https://www.instagram.com/__sahan_kalhara__/">
              {" "}
              <FontAwesomeIcon
                className="shadow-xl hover:text-[#fb8b24]"
                icon={faInstagramSquare}
              />
            </a>
          </div>
          <h1 className=" text-white font-semibold md:text-lg text-xl mt-8">
            Technologies
          </h1>
          <div className="flex gap-5 mt-3 text-4xl text-white justify-center md:justify-start ">
            <FontAwesomeIcon className="shadow-xl" icon={faReact} />
            <FontAwesomeIcon className="shadow-xl" icon={faNodeJs} />
            <FontAwesomeIcon className="shadow-xl" icon={faJava} />
            <FontAwesomeIcon className="shadow-xl" icon={faAndroid} />
            <FontAwesomeIcon className="shadow-xl" icon={faFigma} />

            <FontAwesomeIcon className="shadow-xl" icon={faPenNib} />
          </div>
        </div>
        {/* image div */}
        <div data-aos="fade-up">
          <img
            className="md:w-[400px] w-[370px] md:h-[500px] h-[420px] grayscale-50 md:ml-auto mx-auto rounded-xl shadow-xl shadow-slate-800 mt-10 md:mt-0"
            src={i02}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
