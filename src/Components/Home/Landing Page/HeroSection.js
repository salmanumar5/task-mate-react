import { Link } from "react-router-dom";
import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
        Task Management System
        <span className="bg-gradient-to-r from-purple-500 to-violet-800 text-transparent bg-clip-text">
          {" "}
          for Students
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Collaborate effectively with your peers and manage tasks effortlessly using our intuitive group task management tools. Assign
      roles, track progress, and stay connected in real-time to turn teamwork into seamless success—get started today and transform your productivity!
      </p>
      <div className="flex justify-center my-10">
        <Link
          to={'/auth'}
          className="bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Start for free
        </Link>
        <Link className="py-3 px-4 mx-3 rounded-md border text-white">
          Documentation
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-violet-700 shadow-sm shadow-violet-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-violet-700 shadow-sm shadow-violet-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
