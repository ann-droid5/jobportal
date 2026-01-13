function ManageUsers() {
  const users = [
    { id: 1, name: "Ann Maria", role: "Job Seeker", status: "Active" },
    { id: 2, name: "John Recruiter", role: "Employer", status: "Blocked" }
  ];

  return (
    <div className="container mt-4">
      <h3>Manage Users</h3>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button className="btn btn-sm btn-outline-danger">
                  {user.status === "Active" ? "Block" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;
