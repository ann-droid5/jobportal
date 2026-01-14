import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup({ setRole }) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  // Simulated normal signup
  const handleSignup = () => {
    setRole("jobseeker");
    setSuccess(true);

    // Simulated email confirmation
    console.log(`
      📧 EMAIL SENT
      To: ${email}
      Subject: Registration Successful
      Body: You have registered successfully. Login here: http://localhost:3000/login
    `);

    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  // Simulated Google signup
  const handleGoogleSignup = () => {
    const googleEmail = "googleuser@gmail.com";

    setEmail(googleEmail);
    setRole("jobseeker");
    setSuccess(true);

    console.log(`
      📧 EMAIL SENT
      To: ${googleEmail}
      Subject: Google Sign-in Successful
      Body: You have signed up using Google successfully.
    `);

    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        <h1 className="signup-title">
          Sign-up and <span>apply for free</span>
        </h1>
        <p className="signup-subtitle">
          3,00,000+ companies hiring on Internshala
        </p>

        <div className="signup-card">
          <h5 className="text-center mb-3">Candidate sign up</h5>

          {!success ? (
            <>
              {/* Google signup */}
              <button className="google-btn" onClick={handleGoogleSignup}>
                <img
                  src="https://img.icons8.com/color/20/google-logo.png"
                  alt="google"
                />
                Sign up with Google
              </button>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Must be at least 6 characters"
                />
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label>First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label>Last Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <button className="signup-btn" onClick={handleSignup}>
                Sign up
              </button>
            </>
          ) : (
            <div className="alert alert-success text-center">
              ✅ Registered successfully <br />
              📧 Confirmation email sent
            </div>
          )}

          <p className="terms-text">
            By continuing as a candidate, you agree to our{" "}
            <a href="/">T&C</a>.
          </p>

          <p className="login-text">
            Already registered? <a href="/">Login</a>
          </p>
        </div>

        <div className="employer-signup">
          <a href="/">Employer sign up →</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
