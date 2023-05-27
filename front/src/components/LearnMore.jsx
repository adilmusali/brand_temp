import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const LearnMore = () => {
  return (
    <section>
      <div className="flex justify-center items-center relative bg-no-repeat bg-fixed bg-cover bg-center h-[90vh] bg-[url('https://mobirise.com/extensions/levelm4/assets/images/mbr-3-1920x1280.jpg')]">
        <div className="container">
          <div className="flex justify-between text-white items-center px-[100px]">
            <div className="w-[700px] flex flex-col gap-[40px]">
              <h2 className="text-[50px] font-bold">
                The most up to date branding strategies
              </h2>
              <p className="text-[19px] text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="flex gap-3 items-center mt-[30px]">
                <div className="h-[1px] bg-gray-400 w-[60px]"></div>
                <span className="uppercase">learn more</span>
              </div>
            </div>
            <div><AiOutlinePlayCircle className="mx-auto text-[120px] transform hover:scale-110 transition duration-400" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
