function Applicants() {
  const applicants = [
    {
      id: 1,
      name: "Ann Maria",
      job: "Frontend Developer",
      status: "Applied",
      resume: "/resumes/ann-maria-resume.pdf"
    },
    {
      id: 2,
      name: "John Doe",
      job: "Backend Developer",
      status: "Shortlisted",
      resume: "/resumes/john-doe-resume.pdf"
    }
  ];

  return (
    <div className="container mt-4">
      <h3>Applicants</h3>

      <table className="table table-bordered mt-3 align-middle">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Status</th>
            <th>Resume</th>
            <th>Update Status</th>
          </tr>
        </thead>

        <tbody>
          {applicants.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.job}</td>
              <td>
                <span className="badge bg-secondary">{a.status}</span>
              </td>

              {/* RESUME ACTIONS */}
              <td>
                <a
                  href={a.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary me-2"
                >
                  Preview
                </a>

                <a
                  href={a.resume}
                  download
                  className="btn btn-sm btn-outline-success"
                >
                  Download
                </a>
              </td>

              {/* STATUS UPDATE */}
              <td>
                <select className="form-select form-select-sm">
                  <option>Applied</option>
                  <option>Viewed</option>
                  <option>Shortlisted</option>
                  <option>Interview Scheduled</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applicants;
