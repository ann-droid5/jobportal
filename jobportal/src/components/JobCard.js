import { useNavigate } from "react-router-dom";


import "./JobCard.css";

function JobCard({ job }) {
   const navigate = useNavigate();
  return (
    <div className="job-card">
      <h5 className="job-title">{job.title}</h5>
      <p className="company-name">{job.company}</p>

      <p className="job-meta">
        <i className="bi bi-geo-alt"></i> {job.location} | <i class="bi bi-briefcase"></i> {job.experience}
      </p>

      <p className="job-skills">
        Skills: {job.skills.join(", ")}
      </p>

     

    <button
      className="apply-btn text-decoration-none"
      onClick={() => navigate("/applications")}
    >
      Apply Now
    </button>

    </div>
  );
}

export default JobCard;
