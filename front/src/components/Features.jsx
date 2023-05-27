import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FiEdit,FiSettings } from "react-icons/fi";
import { MdOutlineSwipe } from "react-icons/md";

const Features = () => {
  return (
    <section>
      <div className="container">
        <div className="py-[100px]">
          <h2 className="text-center text-[40px]">Our Features</h2>
          <div className="flex justify-between text-center mt-[40px]">
            <div className="w-[23%] flex flex-col gap-[25px]">
                <FaRegLightbulb className="text-[70px] mx-auto"/>
                <p className="text-[19px]">Creative Always</p>
                <div className="h-[1px] w-full bg-gray-300"></div>
                <p className="text-[19px] text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="w-[23%] flex flex-col gap-[25px]">
                <FiEdit className="text-[70px] mx-auto"/>
                <p className="text-[19px]">Express Customization</p>
                <div className="h-[1px] w-full bg-gray-300"></div>
                <p className="text-[19px] text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="w-[23%] flex flex-col gap-[25px]">
                <FiSettings className="text-[70px] mx-auto"/>
                <p className="text-[19px]">Premium Integrations</p>
                <div className="h-[1px] w-full bg-gray-300"></div>
                <p className="text-[19px] text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="w-[23%] flex flex-col gap-[25px]">
                <MdOutlineSwipe className="text-[70px] mx-auto"/>
                <p className="text-[19px]">Real-time Editing</p>
                <div className="h-[1px] w-full bg-gray-300"></div>
                <p className="text-[19px] text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
