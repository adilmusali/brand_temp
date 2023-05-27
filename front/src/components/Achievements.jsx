import React from "react";

const Achievements = () => {
  return (
    <section>
      <div className="container">
        <div className="py-[100px]">
          <div className="text-center">
            <h2 className="text-[19px] uppercase text-gray-400 tracking-wide">
              Our Achievements
            </h2>
            <h2 className="text-[40px] w-[700px] mx-auto">
              The most exquisite agency for provide branding and design agency.
            </h2>
          </div>
          <div className="flex justify-between text-center mt-[60px]">
            <div className="w-[33%] flex flex-col gap-[15px]">
              <h2 className="text-[50px] font-bold">200</h2>
              <p className="text-[25px]">Branding Strategy</p>
              <p className="text-[19px] text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                consequatur cumque inventore omnis perferendis.
              </p>
            </div>
            <div className="w-[33%] flex flex-col gap-[15px]">
              <h2 className="text-[50px] font-bold">6000</h2>
              <p className="text-[25px]">Graphic Design</p>
              <p className="text-[19px] text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                consequatur cumque inventore omnis perferendis.
              </p>
            </div>
            <div className="w-[33%] flex flex-col gap-[15px]">
              <h2 className="text-[50px] font-bold">300</h2>
              <p className="text-[25px]">Digital Solutions</p>
              <p className="text-[19px] text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                consequatur cumque inventore omnis perferendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
