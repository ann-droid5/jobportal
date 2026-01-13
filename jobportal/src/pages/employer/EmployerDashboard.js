import { Link } from "react-router-dom";

function EmployerDashboard() {
  return (
    <div className="container mt-4">
      <h3>Employer Dashboard</h3>

      <div className="list-group mt-3">
        <Link to="/employer/post-job" className="list-group-item list-group-item-action">
          Post a New Job
        </Link>

        <Link to="/employer/manage-jobs" className="list-group-item list-group-item-action">
          Manage Posted Jobs
        </Link>

        <Link to="/employer/applicants" className="list-group-item list-group-item-action">
          View Applicants
        </Link>
      </div>
    </div>
  );
}

export default EmployerDashboard;
