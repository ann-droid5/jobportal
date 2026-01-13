import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({ setRole }) {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setSuccess(true);
    setRole("jobseeker");

    setTimeout(() => {
      navigate("/jobs");       // ✅ redirect
    }, 1500);
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-body">
            {!success ? (
              <>
                <input className="form-control mb-2" placeholder="Email" />
                <input className="form-control mb-3" type="password" placeholder="Password" />
                <button className="btn btn-primary w-100" onClick={handleLogin}>
                  Login
                </button>
              </>
            ) : (
              <div className="alert alert-success text-center">
                 Logged in successfully
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginModal;
