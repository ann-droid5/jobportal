import ApplicationStatusBadge from "../../components/ApplicationStatusBadge";

function Applications() {
  const applications = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "TCS",
      status: "Applied"
    },
    {
      id: 2,
      jobTitle: "Backend Developer",
      company: "Infosys",
      status: "Viewed"
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      company: "Startup Inc",
      status: "Shortlisted"
    },
    {
      id: 4,
      jobTitle: "React Developer",
      company: "Wipro",
      status: "Interview Scheduled"
    },
    {
      id: 5,
      jobTitle: "Software Engineer",
      company: "Google",
      status: "Rejected"
    }
  ];

  return (
    <div className="container mt-4">
      <h3>My Applications</h3>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.jobTitle}</td>
              <td>{app.company}</td>
              <td>
                <ApplicationStatusBadge status={app.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;
