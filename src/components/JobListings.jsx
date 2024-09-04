import React, { useState, useEffect } from "react";
import jobsData from "../jobs.json"; // تأكد من أن اسم الملف صحيح
import JobListing from "./JobListing";
import Spinner from "./Spinner";
function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchJobs() {
      const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-500 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        <div>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobListing key={job.id} job={job} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
