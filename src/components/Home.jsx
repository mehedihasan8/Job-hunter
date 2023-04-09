import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
  const job = useLoaderData();
  console.log(job, jobs);
  return (
    <div>
      <h1>Home section</h1>
    </div>
  );
};

export default Home;
