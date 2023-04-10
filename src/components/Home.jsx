import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import HomeHero from "./HomeHero";
import Category from "./Category";
import { key } from "localforage";
import Job from "./Job";

const Home = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div>
      {/* Hero section */}
      <div className="bg-gray-100">
        <HomeHero />
      </div>
      {/* Job Category List scetion */}
      <div>
        <h1 className="text-center text-4xl font-bold mt-14 mb-2 font-mono">
          Job Category List
        </h1>
        <p className="text-center text-xl my-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="my-container grid md:grid-cols-2 gap-7 lg:grid-cols-4">
          {categorys.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>
      {/* Featured Jobs section */}
      <div>
        <h1 className="text-center text-4xl font-bold mt-3 mb-2 font-mono">
          Featured Jobs
        </h1>
        <p className="text-center text-xl my-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="my-container grid lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
