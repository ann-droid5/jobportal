function Applicants() {
  const applicants = [
    { id: 1, name: "Ann Maria", job: "Frontend Developer", status: "Applied" },
    { id: 2, name: "John Doe", job: "Backend Developer", status: "Shortlisted" }
  ];

  return (
    <div className="container mt-4">
      <h3>Applicants</h3>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>

        <tbody>
          {applicants.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.job}</td>
              <td>{a.status}</td>
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
