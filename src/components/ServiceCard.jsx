import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ icon, title, content }) => {
  return (
    <div>
      <div className="md:w-[600px] w-[300px] md:h-[200px] h-[350px] md:flex block justify-between md:p-10 p-5 items-center gap-10 rounded-xl bg-[#14213d] shadow-lg hover:bg-[#fb8b24]">
        <FontAwesomeIcon
          className="md:text-8xl text-5xl text-white"
          icon={icon}
        />
        <div>
          <h1 className="text-2xl font-bold md:mt-0 mt-5  text-white">
            {title}
          </h1>
          <p className="text-left text-[15px] py-2 text-slate-200">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
