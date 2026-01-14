import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfile({
      ...profile,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully (UI only)");
  };

  // Profile completeness calculation
  const filledFields = Object.values(profile).filter(
    (value) => value && value !== ""
  ).length;

  const totalFields = Object.keys(profile).length;
  const completionPercent = Math.round(
    (filledFields / totalFields) * 100
  );

  return (
    <div className="container mt-4 profile-page">
      <h3 className="mb-3">My Profile</h3>

      {/* Profile Completeness */}
      <div className="card mb-4 profile-meter">
        <div className="card-body">
          <p className="mb-1 fw-semibold">
            Profile completeness: {completionPercent}%
          </p>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${completionPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Details */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="section-title">Basic Details</h5>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="section-title">Education</h5>
            <input
              type="text"
              className="form-control"
              name="education"
              placeholder="B.Tech / BCA / MCA"
              value={profile.education}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Experience */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="section-title">Experience</h5>
            <input
              type="text"
              className="form-control"
              name="experience"
              placeholder="Fresher / 0–2 years"
              value={profile.experience}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Skills */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="section-title">Skills</h5>
            <input
              type="text"
              className="form-control"
              name="skills"
              placeholder="React, JavaScript, SQL"
              value={profile.skills}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Resume Upload */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="section-title">Resume</h5>
            <input
              type="file"
              className="form-control"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
            />
            <small className="text-muted">
              Supported formats: PDF, DOC, DOCX
            </small>
          </div>
        </div>

        <button type="submit" className="btn btn-primary px-4">
          Save / Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
