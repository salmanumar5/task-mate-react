import { Link } from "react-router-dom";

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
      <div className="flex h-80 gap-10 mt-10 justify-center overflow-hidden">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/task-mate-c37c5.appspot.com/o/landing-page%2FScreenshot%202024-08-27%20at%208.55.47%E2%80%AFPM.png?alt=media&token=e466097e-aef7-422c-9a80-ec1a04687d70"
          alt="error"
          className="h-auto w-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/task-mate-c37c5.appspot.com/o/landing-page%2FScreenshot%202024-08-27%20at%208.55.47%E2%80%AFPM.png?alt=media&token=e466097e-aef7-422c-9a80-ec1a04687d70"
          alt="error"
          className="h-auto w-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
        /> 
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-violet-700 shadow-sm shadow-violet-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default HeroSection;
