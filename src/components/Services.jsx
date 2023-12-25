import {
  faLaptopCode,
  faMobileAndroid,
  faObjectGroup,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      className="w-full lg:h-screen md:h-screen h-auto font-Poppins bg-gradient-to-b from-[#14213d] to-[#000]"
      id="Services"
    >
      <div className="md:pt-16 text-center">
        <h1 className="text-4xl font-bold text-slate-300">My Services</h1>
      </div>

      <div
        className="w-full flex flex-wrap gap-8 mt-16 justify-center"
        data-aos="fade-down-right"
      >
        <ServiceCard
          icon={faLaptopCode}
          title="Web Development"
          content="Web development refers to the process of building and maintaining websites or web applications. It encompasses a range of activities, including web design, coding, programming, and content creation. "
        />

        <ServiceCard
          icon={faMobileAndroid}
          title="Mobile Application Development"
          content="Mobile app development involves the creation of software applications specifically designed to run on mobile devices such as smartphones and tablets."
        />

        {/* data-aos="fade-down-right" */}

        <ServiceCard
          icon={faObjectGroup}
          title="UI/UX Design"
          content="UI/UX design merges aesthetic appeal with seamless functionality. UI (User Interface) design focuses on visual elements, while UX (User Experience) design enhances overall interaction."
        />

        {/* data-aos="fade-right" */}

        <ServiceCard
          icon={faPalette}
          title="Graphic design"
          content="Graphic design is the art of visual communication, combining creativity and technology to convey messages through images, typography, and layout."
        />
      </div>
    </div>
  );
};

export default Services;
