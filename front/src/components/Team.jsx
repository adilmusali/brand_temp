import React from "react";

const Team = () => {
  return (
    <section className="bg-gray-900">
      <div className="container">
        <div className="py-[50px]">
          <h2 className="text-center text-[40px] text-white mb-[40px]">
            Our Team
          </h2>
          <div className="flex justify-between pb-[50px]">
            <div className="w-[32%] overflow-hidden">
              <img
                className="transform hover:scale-105 hover:opacity-50 transition duration-300"
                src="https://mobirise.com/extensions/levelm4/assets/images/face1.jpg"
                alt=""
              />
            </div>
            <div className="w-[32%] overflow-hidden">
              <img
                className="transform hover:scale-105 hover:opacity-50 transition duration-300"
                src="https://mobirise.com/extensions/levelm4/assets/images/face2.jpg"
                alt=""
              />
            </div>
            <div className="w-[32%] overflow-hidden">
              <img
                className="transform hover:scale-105 hover:opacity-50 transition duration-300"
                src="https://mobirise.com/extensions/levelm4/assets/images/face3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
