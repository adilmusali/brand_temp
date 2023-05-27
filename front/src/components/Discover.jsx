import React from "react";

const Discover = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col">
        <div className="flex py-[100px] gap-[100px]">
          <div className="py-[10px] flex flex-col justify-between relative">
            <div className="flex flex-col ml-[200px]">
              <h2 className="text-[40px] w-[300px] font-bold">
                Original marketing solutions and branding.
              </h2>
              <p className="text-[19px] text-gray-400 leading-loose w-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostru exercitation.
              </p>
            <div>
              <button className="uppercase border-b-2 border-gray-300 py-2">
                discover more
              </button>
            </div>
            </div>
          </div>
          <div className="w-[750px] absolute right-0">
            <img
              src="https://mobirise.com/extensions/levelm4/assets/images/01.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex py-[100px] relative">
          <div className="w-[750px]">
            <img
              src="https://mobirise.com/extensions/levelm4/assets/images/02.jpg"
              alt=""
            />
          </div>
          <div className="py-[10px] flex flex-col justify-between absolute right-[200px]">
            <h2 className="text-[40px] w-[350px] font-bold">
              Concrete illustration design for digital branding.
            </h2>
            <p className="text-[19px] text-gray-400 leading-loose w-[350px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostru exercitation.
            </p>
            <div>
              <button className="uppercase border-b-2 border-gray-300 py-2">
                discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
