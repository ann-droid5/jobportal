import { useParams, Link } from "react-router-dom";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  // Dummy job data (frontend-only)
  const job = {
    id,
    title: "E-commerce Sales Executive",
    company: "603 CoWorking",
    location: "Mumbai",
    salary: "₹2 – 2.2 LPA",
    experience: "0–2 years",
    skills: ["Sales", "Communication", "CRM"],
    description:
      "We are looking for an enthusiastic sales executive to manage online sales and customer relationships.",
    responsibilities: [
      "Handle inbound customer queries",
      "Manage sales pipeline",
      "Achieve monthly targets"
    ],
    perks: ["Certificate", "Flexible hours", "Performance bonus"]
  };

  return (
    <div className="container job-details-page mt-4">
      <Link to="/jobs" className="back-link">
        ← Back to jobs
      </Link>

      <div className="job-details-card">
        <span className="badge hiring-badge">Actively hiring</span>

        <h3>{job.title}</h3>
        <p className="company">{job.company}</p>

        <div className="job-meta">
          <span><i className="bi bi-geo-alt"></i> {job.location}</span>
          <span><i class="bi bi-briefcase"></i> {job.experience}</span>
          <span><i className="bi bi-cash-stack"></i> {job.salary}</span>
        </div>

        <hr />

        <h5>Job description</h5>
        <p>{job.description}</p>

        <h5>Key responsibilities</h5>
        <ul>
          {job.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <h5>Skills required</h5>
        <div className="skills">
          {job.skills.map((s, i) => (
            <span key={i} className="skill-pill">{s}</span>
          ))}
        </div>

        <h5>Perks</h5>
        <ul>
          {job.perks.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <Link to="/applications" className="apply-btn">
          Apply now
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;
