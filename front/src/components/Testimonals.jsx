import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Testimonals = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/brand");
    setData(res.data);
  };

  const delData = async (id) => {
    await axios.delete(`http://localhost:8080/brand/${id}`);
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="py-[50px]">
          <h2 className="text-[40px] text-center mb-[40px]">Testimonals</h2>
          <div className="flex justify-between flex-wrap gap-y-[50px]">
            {data.map((d) => {
              return (
                <div className="bg-gray-100 w-[48%] p-[30px]" key={d._id}>
                  <div className="flex justify-between">
                    <div className="flex gap-5 mb-[30px]">
                      
                        <img
                          className="w-[80px] rounded-full"
                          src={d.image}
                          alt=""
                        />
                      <div>
                        <h3 className="text-[25px]">{d.name}</h3>
                        <span className="uppercase text-gray-500">{d.job}</span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => delData(d._id)}
                        className="px-[30px] py-2 bg-red-500 text-white hover:bg-red-600 mr-[10px]"
                      >
                        Delete
                      </button>
                      <Link to={`/${d._id}`}>
                      <button
                        className="px-[30px] py-2 bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Details
                      </button>
                      </Link>
                    </div>
                  </div>
                  <i className="text-[19px] text-gray-600 leading-loose">
                    {d.desc}
                  </i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
