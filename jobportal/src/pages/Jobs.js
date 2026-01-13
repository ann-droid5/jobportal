import { useState } from "react";
import JobCard from "../components/JobCard";

function Jobs() {
  const allJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TCS",
      location: "Bangalore",
      experience: "0-2",
      skills: ["React", "JavaScript", "CSS"]
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Infosys",
      location: "Hyderabad",
      experience: "2-4",
      skills: ["Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Startup Inc",
      location: "Remote",
      experience: "1-3",
      skills: ["Figma", "Design Systems"]
    }
  ];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const filteredJobs = allJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location) &&
      (experience === "" || job.experience === experience)
    );
  });

  return (
    <div className="container mt-4">
      <h3>Available Jobs</h3>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by job title or skill"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">All Experience</option>
            <option value="0-2">0–2 Years</option>
            <option value="1-3">1–3 Years</option>
            <option value="2-4">2–4 Years</option>
          </select>
        </div>
      </div>

      {/* Job List */}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
}

export default Jobs;
