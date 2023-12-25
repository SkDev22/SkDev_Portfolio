import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Resume from "../images/Resume.pdf";
import { Link } from "react-scroll";
import i01 from "../images/i01.jpg";
import i02 from "../images/i02.jpg";
import i03 from "../images/i03.jpg";
import i04 from "../images/i04.jpg";
import i05 from "../images/i05.jpg";
import i06 from "../images/i06.jpg";
import i07 from "../images/i07.jpg";
import i08 from "../images/i08.jpg";
import i09 from "../images/i09.jpg";
import i10 from "../images/i10.jpg";
import i11 from "../images/i11.jpg";
import i13 from "../images/i13.jpg";
const About = () => {
  const itemData = [
    {
      img: [i01],
      title: "Breakfast",
    },
    {
      img: [i02],
      title: "Burger",
    },
    {
      img: [i03],
      title: "Camera",
    },
    {
      img: [i04],
      title: "Coffee",
    },
    {
      img: [i05],
      title: "Hats",
    },
    {
      img: [i06],
      title: "Honey",
    },
    {
      img: [i07],
      title: "Basketball",
    },
    {
      img: [i08],
      title: "Fern",
    },
    {
      img: [i09],
      title: "Mushrooms",
    },
    {
      img: [i10],
      title: "Tomato basil",
    },
    {
      img: [i11],
      title: "Sea star",
    },
    {
      img: [i13],
      title: "Bike",
    },
  ];

  return (
    <div
      className="w-full lg:h-screen md:h-screen h-[1100px] font-Poppins bg-gradient-to-b from-[#000] to-[#14213d]"
      id="About"
    >
      <div className=" pt-[80px] md:pt-20 text-center">
        <h1 className="text-4xl font-bold text-slate-300">More About Me</h1>
      </div>

      <div className="md:flex block justify-between items-center w-full mt-16 md:px-28 px-5">
        <div className="flex-1 text-center" data-aos="flip-left">
          <h1 className="text-5xl font-bold text-white">Hi there 👋</h1>
          {/* TODO: Change Text */}
          <p className=" text-base font-medium text-white py-8">
            After doing my A/L examination I was entered into the faculty of
            computing in the Sri Lanka Institute of Information Technology
            (SLIIT) in Malabe. At the moment I am a 3rd year student of B.sc
            (Hons) in Information technology specializing in Information
            Technology degree program. I am always more interested in learning
            new things. I am committed to doing the assigned work as accurately
            as possible. Able to work well with a team. I hope to advance in the
            field of IT.
          </p>
          <div className="flex gap-10 justify-center">
            <a href={Resume} download="Resume.pdf">
              <button className="text-white px-4 py-2 rounded-xl hover:bg-[#fb8b24] bg-[#14213d]">
                Download CV
              </button>
            </a>

            <button className="text-white px-4 py-2 rounded-xl hover:bg-[#fb8b24] bg-[#14213d]">
              <Link to="Contact" spy={true} smooth={true} duration={500}>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1" data-aos="flip-right">
          {/* TODO: Add My Images */}
          <ImageList
            className="md:ml-auto mx-auto grayscale-50 md:rounded-l-3xl rounded-none md:w-[500px] w-[325px] md:h-[450px] h-[330px] md:my-0 my-10"
            cols={3}
            rowHeight={164}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default About;
