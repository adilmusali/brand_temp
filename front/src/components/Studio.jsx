import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Studio = () => {
  return (
    <section>
      <div className='flex justify-center items-center bg-cover bg-center bg-no-repeat h-[130vh] bg-[url("https://mobirise.com/extensions/levelm4/assets/images/photo-1516560304088-b1a005e86962-1951x1301.jpg")]'>
        <div className="text-white text-center">
          <i className="text-[20px]">BRANDING AGENCY</i>
          <h2 className="text-[60px]">Brand Studio</h2>
          <div className="mt-[40px]">
            <AiOutlinePlayCircle className="mx-auto text-[120px] transform hover:scale-110 transition duration-400" />
          </div>
          <p className="text-[20px] w-[650px] mt-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Studio;
