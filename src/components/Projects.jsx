import ProjectCard from "./ProjectCard";
import lab from "../images/lab.jpg";
import movie from "../images/movie.jpg";
import schedule from "../images/schedule.jpg";
import book from "../images/book.jpg";
import event from "../images/event.jpg";
import guide from "../images/guide.jpg";
import gallery from "../images/gallery.jpg";
import write from "../images/write.jpg";

const Projects = () => {
  return (
    <div
      className="w-full md:h-auto h-auto font-Poppins bg-gradient-to-b from-[#000] to-[#14213d]"
      id="Projects"
    >
      <div className="pt-16 text-center">
        <h1 className="text-4xl font-bold text-slate-300">My Projects</h1>
      </div>

      <div className=" py-10 flex items-center justify-center ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ProjectCard
            title="Schedule Management System"
            description="This web application developed for cleaning service to manage their orders, customer details, labor details, financial details and manage administration department."
            img={schedule}
            link="https://github.com/SkDev22/Schedule_Management_System"
          />

          <ProjectCard
            title="Lab Info Management System"
            description="This website developed for laboratory to manage their laboratory information, customer details, upload and download test reports, online booking system and blog page."
            img={lab}
            link="https://github.com/SkDev22/Lab_Info_Management_System"
          />

          <ProjectCard
            title="Event Planning System"
            description="This web application developed for event planning business to manage their events, schedule events, customer details, blog and administration department."
            img={event}
            link="https://github.com/SkDev22/Event_Planning_System"
          />

          <ProjectCard
            title="Tourist Guide Mobile App"
            description="This mobile application developed for both local and foreign tourists to find best locations to travel in Sri Lanka, online bookings, payment methods, event page and administration part."
            img={guide}
            link="https://github.com/SkDev22/Tourist_Guide_Mobile_App"
          />

          <ProjectCard
            title="Image Gallery"
            description="This is my simple individual project. I like to do simple small projects like this. So that I can learn many coding skills."
            img={gallery}
            link="https://github.com/SkDev22/Image_Gallery"
          />

          <ProjectCard
            title="Movie Detail Website"
            description="This is my simple individual project. Using this website users can search movies using movie name and find it's released date and other details. (Still developping)"
            img={movie}
            link="https://github.com/SkDev22"
          />

          <ProjectCard
            title="Book Detail Website"
            description="This is my simple individual project. Using this website users can search their favorite books and get knowledge about that book. (Still developping)"
            img={book}
            link="https://github.com/SkDev22"
          />
          <ProjectCard
            title="Story Writing Website"
            description="Using this website writers can write their stories without using pen. And also they can share it with all users. Users can chat with writers. I will add more functinalities. (Still developping)"
            img={write}
            link="https://github.com/SkDev22"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
