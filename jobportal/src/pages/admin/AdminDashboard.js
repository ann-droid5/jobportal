function AdminDashboard() {
  return (
    <div className="container mt-4">
      <h3>Admin Dashboard</h3>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Total Users</h6>
            <h3>1,250</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h6>Total Jobs</h6>
            <h3>320</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h6>Total Applications</h6>
            <h3>4,560</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
