import { useState } from "react";

function PostJob() {
  const [job, setJob] = useState({
    title: "",
    skills: "",
    salary: "",
    description: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted successfully (UI only)");
  };

  return (
    <div className="container mt-4">
      <h3>Post Job</h3>

      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="skills"
          placeholder="Required Skills"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="salary"
          placeholder="Salary Range"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Job Description"
          rows="4"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;
