import { FaArrowRight } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-[#270045] min-h-screen">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <img src="https://i.ibb.co/hyPghGk/gto-hero-4-img-1-1.png" alt="" />
        </div>
        <div className="w-1/2">
          <div className="text-[#055555] flex gap-3 items-center">
            <FaArrowRight />
            <div>WELCOME TO JYTHU</div>
          </div>
          <div className="text-7xl font-bold text-white">
            A Marketing <span className="text-[#055555] underline">Agency</span>{" "}
            To Grow Your Business
          </div>
          <p className="text-justify text-white pr-10 mt-5 mb-6">
            We are 100+ professional software engineers with more than 10 year
            of experience in delivering superior products Believe it because you
            have seen it. Here are real numbers
          </p>
          <div className="flex justify-around items-center">
            <div className="">
                <button className="btn btn-outline rounded-full">Get started</button>
                <button className="btn rounded-full ml-3 bg-[#00C397] outline-0"><MdArrowOutward /></button>
            </div>
            <div className="flex items-center gap-6 text-2xl">
                <div className="text-5xl "><FaPlayCircle /></div>
                <div className="text-white">watch video</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
