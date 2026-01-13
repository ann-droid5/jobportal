import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployerRegisterModal({ setRole }) {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmployerRegister = () => {
    setSuccess(true);
    setRole("employer");

    setTimeout(() => {
      navigate("/employer");  // ✅ redirect to employer dashboard
    }, 1500);
  };

  return (
    <div className="modal fade" id="employerModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Employer Sign Up</h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            {!success ? (
              <>
                <input className="form-control mb-2" placeholder="Company Name" />
                <input className="form-control mb-2" placeholder="Email" />
                <input
                  className="form-control mb-3"
                  placeholder="Password"
                  type="password"
                />
                <button className="btn btn-primary w-100" onClick={handleEmployerRegister}>
                  Create Employer Account
                </button>
              </>
            ) : (
              <div className="alert alert-success text-center">
                 Employer registered successfully
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default EmployerRegisterModal;
