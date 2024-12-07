import codeImg from "../../../assets/code.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { checklistItems } from "../../../Constants/ListItems";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-white">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text">
          Tasks and Group workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 text-xl mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <FaRegCircleCheck className="" />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-white">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
