import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginModal.css";

function LoginModal({ setRole }) {
  const [activeTab, setActiveTab] = useState("student"); // student | employer
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [step, setStep] = useState("login");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const handleLogin = () => {
    setSuccess(true);

    if (activeTab === "student") {
      setRole("jobseeker");
    } else {
      setRole("employer");
    }

    setTimeout(() => {
      navigate(activeTab === "student" ? "/jobs" : "/employer");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setSuccess(true);
    setRole(activeTab === "student" ? "jobseeker" : "employer");

    console.log(`Google login successful for ${activeTab}`);

    setTimeout(() => {
      navigate(activeTab === "student" ? "/jobs" : "/employer");
    }, 1500);
  };
  const handleSendOTP = () => {
  console.log(`
    📧 OTP SENT
    To: ${email}
    OTP: 123456
  `);
  setStep("otp");
};

const handleVerifyOTP = () => {
  if (otp === "123456") {
    setStep("resetSuccess");
  } else {
    alert("Invalid OTP");
  }
};

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content login-modal">

          <button
            className="btn-close login-close"
            data-bs-dismiss="modal"
          ></button>

          <div className="login-tabs">
            <span
              className={activeTab === "student" ? "active" : ""}
              onClick={() => setActiveTab("student")}
            >
              Student
            </span>
            <span
              className={activeTab === "employer" ? "active" : ""}
              onClick={() => setActiveTab("employer")}
            >
              Employer / T&P
            </span>
          </div>

          <div className="modal-body">

          {/* LOGIN FORM */}
          {step === "login" && !success && (
            <>
              <button className="google-login-btn" onClick={handleGoogleLogin}>
                <img
                  src="https://img.icons8.com/color/20/google-logo.png"
                  alt="google"
                />
                Login with Google
              </button>

              <div className="divider"><span>OR</span></div>

              <label>Email</label>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                className="form-control mb-2"
                placeholder="********"
              />

              <div
                className="forgot-password"
                onClick={() => setStep("forgot")}
              >
                Forgot password?
              </div>

              <button className="btn login-submit-btn" onClick={handleLogin}>
                Login
              </button>

              <p className="register-text">
                New to Internshala? Register{" "}
                <Link to="/signup"><span>Student / Company</span></Link>
              </p>
            </>
          )}

          {/* FORGOT PASSWORD – EMAIL */}
          {step === "forgot" && (
            <>
              <h6 className="text-center mb-3">Reset Password</h6>

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="btn login-submit-btn" onClick={handleSendOTP}>
                Send OTP
              </button>
            </>
          )}

          {/* OTP VERIFICATION */}
          {step === "otp" && (
            <>
              <h6 className="text-center mb-3">Verify OTP</h6>

              <input
                className="form-control mb-3"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="New Password"
              />

              <button className="btn login-submit-btn" onClick={handleVerifyOTP}>
                Verify OTP & Reset
              </button>
            </>
          )}

          {/* RESET SUCCESS */}
          {step === "resetSuccess" && (
            <div className="alert alert-success text-center">
              ✅ Password reset successful <br />
              Please login again
            </div>
          )}

          {/* LOGIN SUCCESS */}
          {success && (
            <div className="alert alert-success text-center">
              ✅ Login successful
            </div>
          )}

        </div>


        </div>
      </div>
    </div>
  );
}

export default LoginModal;
