import {
  faAngleDown,
  faBarsStaggered,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "Home" },
    { name: "About Me", link: "About" },
    { name: "Services", link: "Services" },
    { name: "Projects", link: "Projects" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="w-full h-16 flex justify-between fixed z-20 top-0 bg-transparent font-Poppins filter backdrop-blur-lg items-center px-8">
        <h1 className="text-white text-xl md:text-2xl font-bold cursor-pointer">
          <Link to="Home" spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faShieldHalved} /> SkDev
          </Link>
        </h1>

        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-xl md:hidden text-white"
          key={Links.name}
        >
          {open ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} />
          )}
        </div>
        <ul
          className={`text-white md:bg-none text-[18px] bg-gradient-to-b from-[#14213d] to-[#000] md:gap-10 md:flex py-7 md:py-0 absolute md:static md:items-center md:z-auto z-[-1] text-right right-0 w-full md:w-auto md:pr-0 pr-8 ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="pb-5 md:pb-0 cursor-pointer hover:text-[#fb8b24]">
              <Link
                to={link.link}
                onClick={() => setOpen(!open)}
                spy={true}
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="text-white px-4 py-1 rounded-xl hover:bg-[#fb8b24] bg-[#14213d]">
            <Link to="Contact" spy={true} smooth={true} duration={500}>
              Contact Me
            </Link>
          </button>
        </ul>
      </nav>
    </div>

    // <div className="w-full md:w-full h-16 bg-transparent fixed z-10 top-0 text-white flex justify-between items-center px-10 filter backdrop-blur-xl shadow-lg">
    //   <h1 className="font-bold text-2xl">SkDev 🤓</h1>
    //   <ul className="hidden md:flex gap-7 uppercase">
    //     <li className="cursor-pointer hover:bg-[#14213d] bg-transparent px-3 py-1 rounded-2xl">
    //       <Link to="Home" spy={true} smooth={true} duration={500}>
    //         Home
    //       </Link>
    //     </li>
    //     <li className="cursor-pointer hover:bg-[#14213d] bg-transparent px-3 py-1 rounded-2xl">
    //       <Link to="About" spy={true} smooth={true} duration={500}>
    //         About Me
    //       </Link>
    //     </li>
    //     <li className="cursor-pointer hover:bg-[#14213d] bg-transparent px-3 py-1 rounded-2xl">
    //       <Link to="Services" spy={true} smooth={true} duration={500}>
    //         Services
    //       </Link>
    //     </li>
    //     <li className="cursor-pointer hover:bg-[#14213d] bg-transparent px-3 py-1 rounded-2xl">
    //       <Link to="Skills" spy={true} smooth={true} duration={500}>
    //         Skills
    //       </Link>
    //     </li>
    //     <li className="cursor-pointer hover:bg-[#14213d] bg-transparent px-3 py-1 rounded-2xl">
    //       <Link to="Projects" spy={true} smooth={true} duration={500}>
    //         Projects
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Navbar;
