import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaSkype,
} from "react-icons/fa";

const Stay = () => {
  return (
    <section className="bg-gray-900">
      <div className="container">
        <div className="flex flex-col gap-[50px] text-center justify-center items-center py-[70px]">
          <h2 className="uppercase text-[40px] text-white">stay in touch</h2>
          <p className="text-gray-400 text-[19px] w-[500px]">
            Contact us to give life to awesome ideas or make suggestions on
            improvements to be made.
          </p>
          <form className="flex w-[750px] mx-auto">
            <input
              className="w-[75%] px-3 py-4"
              type="text"
              placeholder="Enter your Email"
            />
            <button
              className="uppercase w-[25%] bg-gray-400 text-white"
              type="sumbit"
            >
              subscribe
            </button>
          </form>
          <div className="flex gap-[30px] text-white text-[25px]">
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaDribbble />
            <FaSkype />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;
