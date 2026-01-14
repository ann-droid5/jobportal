import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ setRole }) {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    // simulated admin login
    setRole("admin");
    setSuccess(true);

    setTimeout(() => {
      navigate("/admin");
    }, 1000);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center mb-3">Admin Login</h4>

      {!success ? (
        <>
          <input
            className="form-control mb-2"
            placeholder="Admin Email"
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <button
            className="btn btn-dark w-100"
            onClick={handleAdminLogin}
          >
            Login as Admin
          </button>
        </>
      ) : (
        <div className="alert alert-success text-center">
          Admin login successful
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
