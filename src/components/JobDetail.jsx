import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../utilitis/fake";

const JobDetail = () => {
  const jobId = useParams();
  const data = useLoaderData();

  const findData = data.find((singelJob) => singelJob.id === jobId.id);
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    phone,
    email,
    jobLocation,
    id,
  } = findData;
  const handelApplayJobs = (id) => {
    addToDb(id);
  };
  return (
    <div className="my-container text-gray-800">
      <h1 className="text-3xl text-center mb-5 font-bold">Job Details</h1>
      <div className="md:flex items-center justify-between">
        <div className="md:w-2/4">
          <p className="text-gray-800 my-6">
            <span className="font-semibold  text-xl    ">Job Description</span>{" "}
            :{jobDescription}
          </p>
          <p className="text-gray-800 my-6">
            <span className="font-semibold  text-xl    ">
              Job Responsibility
            </span>{" "}
            :{jobResponsibility}
          </p>
          <p className="text-gray-800 my-6">
            <span className="font-semibold  text-xl    ">
              Educational Requirements
            </span>{" "}
            :
            <br /> {educationalRequirements}
          </p>
          <p className="text-gray-800 my-6">
            <span className="font-semibold  text-xl    ">Experiences</span>:{" "}
            <br />
            {experiences}
          </p>
        </div>
        <div className="">
          <div className="p-5 bg-slate-100 rounded-md">
            <h4 className="text-lg font-semibold">Job Details</h4>
            <hr className="my-3" />
            <div className="flex items-center mb-3">
              <CurrencyDollarIcon className="h-6 w-6 mr-2 text-purple-300" />
              <p>
                <span className="font-semibold">Salary</span>: {salary}
              </p>
            </div>
            <div className="flex items-center mb-3">
              <CalendarIcon className="h-6 w-6 mr-2 text-purple-300" />
              <p>
                <span className="font-semibold">Job Title</span>: {jobTitle}
              </p>
            </div>
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <hr className="my-3" />
            <div className="flex items-center mb-3">
              <PhoneIcon className="h-6 w-6 mr-2 text-purple-300" />
              <p>
                <span className="font-semibold">Phone</span>: {phone}
              </p>
            </div>
            <div className="flex items-center mb-3">
              <CalendarIcon className="h-6 w-6 mr-2 text-purple-300" />
              <p>
                <span className="font-semibold">Email</span>: {email}
              </p>
            </div>
            <div className="flex items-center mb-3">
              <MapPinIcon className="h-6 w-6 mr-2 text-purple-300" />
              <p>
                <span className="font-semibold">Address</span>: {jobLocation}
              </p>
            </div>
          </div>
          <Link onClick={() => handelApplayJobs(id)} to="/appliedjob">
            <button className="btn mt-5 w-full"> Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
