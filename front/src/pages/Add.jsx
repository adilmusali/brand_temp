import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/schema";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Add = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postData = async () => {
    const values = getValues();
    await axios.post("http://localhost:8080/brand", {
      image: values.image,
      name: values.name,
      job: values.job,
      desc: values.desc,
    });
  };

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
      <div className="container">
        <div className="py-[120px] px-[250px] flex justify-center">
          <Link to={"/"}>
            <Button colorScheme="blue" size="lg">
              Back
            </Button>
          </Link>
          <form
            onSubmit={handleSubmit(postData)}
            className="w-[500px] border-2 rounded-xl p-5 mx-auto bg-white"
          >
            <FormControl className="flex flex-col gap-2">
              <FormLabel>Image</FormLabel>
              <Input type="text" {...register("image")} />
              {errors.image?.message && (
                <p className="text-red-500">{errors.image?.message}</p>
              )}
              <FormLabel>Name</FormLabel>
              <Input type="text" {...register("name")} />
              {errors.name?.message && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
              <FormLabel>Job</FormLabel>
              <Input type="text" {...register("job")} />
              {errors.job?.message && (
                <p className="text-red-500">{errors.job?.message}</p>
              )}
              <FormLabel>Description</FormLabel>
              <Input type="text" {...register("desc")} />
              {errors.desc?.message && (
                <p className="text-red-500">{errors.desc?.message}</p>
              )}
              <Button
                colorScheme="teal"
                size="lg"
                type="submit"
                className="mt-[30px]"
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Add;
