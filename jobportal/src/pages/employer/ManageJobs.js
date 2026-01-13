function ManageJobs() {
  const jobs = [
    { id: 1, title: "Frontend Developer", applicants: 12 },
    { id: 2, title: "Backend Developer", applicants: 8 }
  ];

  return (
    <div className="container mt-4">
      <h3>Manage Jobs</h3>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Applicants</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.applicants}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2">
                  Edit
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  Delete
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
