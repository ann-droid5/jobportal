import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h5 className="job-title">{job.title}</h5>
      <p className="company-name">{job.company}</p>

      <p className="job-meta">
        📍 {job.location} | 💼 {job.experience}
      </p>

      <p className="job-skills">
        Skills: {job.skills.join(", ")}
      </p>

      <button className="apply-btn">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
