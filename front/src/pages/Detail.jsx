import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Detail = () => {
  const [data, setData] = useState("");
  const params = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:8080/brand/${params.id}`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail Page</title>
      </Helmet>
      <div className="container">
        <div className="bg-gray-100 w-full p-[30px] my-[150px]">
          <div className="flex">
            <div className="flex justify-between mb-[30px]">           
          <Link to={"/"}>
            <Button colorScheme="blue" size="lg">
              Back
            </Button>
          </Link>
                <img className="w-[300px] rounded-full ml-[100px]" src={data.image} alt="" />
              <div className="mt-[100px] ml-[200px]">
                <h3 className="text-[50px]">{data.name}</h3>
                <span className="uppercase text-gray-500 text-[25px]">{data.job}</span>
              </div>
            </div>
          </div>
          <i className="text-[19px] text-gray-600 leading-loose">{data.desc}</i>
        </div>
      </div>
    </section>
  );
};

export default Detail;
