import React from "react";
import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage";
import JobPage, { jobLoader } from "./Pages/JobPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import NotFoundPages from "./Pages/NotFoundPages";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";

function App() {
  //Add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });
    return;
  };
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    return;
  };
  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage UpdateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
