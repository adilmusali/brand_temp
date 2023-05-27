import React from "react";

const PricingTable = () => {
  return (
    <section className="bg-gray-900">
      <div className="container">
        <div className="flex flex-col gap-[50px] relative top-[100px] shadow-lg mb-[150px]">
          <h2 className="text-[40px] text-center text-white tracking-wider">Pricing Tables</h2>
          <div className="flex text-center bg-white">
            <div className="p-[50px]">
              <span className="text-[25px]">Classic</span>
              <div className="mb-[20px]"><span className="text-[20px]">$</span><span className="text-[50px]">20.00</span><i className="text-gray-400"> /month</i></div>
              <p className="mb-[30px] text-gray-400">
                Lorem ipsum dolor sit aet, in dicant tamquam adodum pri, eiusmod
                cum tibique anti.
              </p>
              <div>
                <button
                  className="uppercase px-[40px] py-3 bg-transparent 
              hover:bg-black hover:text-white transition duration-300 border-2 border-black"
                >
                  get started
                </button>
              </div>
            </div>
            <div className="p-[50px]">
              <span className="text-[25px]">Standard</span>
              <div className="mb-[20px]"><span className="text-[20px]">$</span><span className="text-[50px]">70.00</span><i className="text-gray-400"> /month</i></div>
              <p className="mb-[30px] text-gray-400">
                Lorem ipsum dolor sit aet, in dicant tamquam adodum pri, eiusmod
                cum tibique anti.
              </p>
              <div>
                <button
                  className="uppercase px-[40px] py-3 bg-transparent 
              hover:bg-black hover:text-white transition duration-300 border-2 border-black"
                >
                  get started
                </button>
              </div>
            </div>
            <div className="p-[50px]">
              <span className="text-[25px]">Premium</span>
              <div className="mb-[20px]"><span className="text-[20px]">$</span><span className="text-[50px]">90.00</span><i className="text-gray-400"> /month</i></div>
              <p className="mb-[30px] text-gray-400">
                Lorem ipsum dolor sit aet, in dicant tamquam adodum pri, eiusmod
                cum tibique anti.
              </p>
              <div>
                <button
                  className="uppercase px-[40px] py-3 bg-transparent 
              hover:bg-black hover:text-white transition duration-300 border-2 border-black"
                >
                  get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
