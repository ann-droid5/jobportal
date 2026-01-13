import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    education: "",
    experience: "",
    skills: ""
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully (UI only)");
  };

  return (
    <div className="container mt-4">
      <h3>My Profile</h3>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Education</label>
          <input
            type="text"
            className="form-control"
            name="education"
            placeholder="B.Tech / BCA / MCA"
            value={profile.education}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Experience</label>
          <input
            type="text"
            className="form-control"
            name="experience"
            placeholder="0–2 years"
            value={profile.experience}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Skills</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            placeholder="React, JavaScript, SQL"
            value={profile.skills}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
