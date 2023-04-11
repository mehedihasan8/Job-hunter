import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilitis/fake";
import AppliedJobDetails from "./AppliedJobDetails";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const datas = useLoaderData();
  const [findData, setFindData] = useState([]);
  const [jobData, setJobData] = useState([]);
  console.log(jobData);
  useEffect(() => {
    const strodeData = getShoppingCart();
    let savedCart = [];
    for (const id in strodeData) {
      const addedJob = datas.find((aJob) => aJob.id === id);
      if (addedJob) {
        savedCart.push(addedJob);
      }
    }
    setJobData(savedCart);
    setFindData(savedCart);
  }, [datas]);

  const handelRemoteJob = () => {
    const filterJobRemote = findData.filter(
      (data) => data.remoteOrOnsite === "Remote"
    );
    setJobData(filterJobRemote);
  };

  const handelOnSideJob = () => {
    const filterJobOnsite = findData.filter(
      (data) => data.remoteOrOnsite === "Onsite"
    );
    setJobData(filterJobOnsite);
  };

  return (
    <div className="my-container">
      <h1 className="text-3xl text-center mb-5 font-bold">Applied Jobs </h1>
      <div className="text-right">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="flex items-center h-7 bg-slate-200 p-5 rounded m-1"
          >
            <span>Filter By</span>
            <ChevronDownIcon className="h-6 w-6 text-blue-500" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handelRemoteJob}>See Remote job</a>
            </li>
            <li>
              <a onClick={handelOnSideJob}>See OnSide job</a>
            </li>
          </ul>
        </div>
      </div>
      {jobData.map((singleJob) => (
        <AppliedJobDetails
          singleJob={singleJob}
          key={singleJob.id}
        ></AppliedJobDetails>
      ))}
    </div>
  );
};

export default AppliedJobs;
