function ManageJobs() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TCS", status: "Approved" },
    { id: 2, title: "Fake Job Offer", company: "Unknown", status: "Reported" }
  ];

  return (
    <div className="container mt-4">
      <h3>Manage Job Postings</h3>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <td>
                <button className="btn btn-sm btn-outline-danger">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageJobs;
