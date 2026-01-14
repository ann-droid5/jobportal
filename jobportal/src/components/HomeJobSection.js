import { useState } from "react";

import { Link } from "react-router-dom";

function HomeJobSection() {
  const categories = [
    "All",
    "Big brands",
    "Work from home",
    "MBA",
    "Engineering",
    "Media",
    "Design",
    "Data Science"
  ];

  const jobs = [
    { id: 1, title: "E-commerce Sales Executive", company: "603 CoWorking", location: "Mumbai", salary: "₹2–2.2 LPA", category: "Big brands" },
    { id: 2, title: "Customer Service Associate", company: "Bharti AXA", location: "Chandigarh", salary: "₹2–2.5 LPA", category: "Big brands" },
    { id: 3, title: "Accountant", company: "ZUCOL", location: "Jaipur", salary: "₹2–2.5 LPA", category: "MBA" },
    { id: 4, title: "Frontend Developer", company: "Tech Mahindra", location: "Bangalore", salary: "₹3–4 LPA", category: "Engineering" },
    { id: 5, title: "UI/UX Designer", company: "Creative Minds", location: "Remote", salary: "₹2.5–3.5 LPA", category: "Design" },
    { id: 6, title: "Data Analyst Intern", company: "Analytics Hub", location: "Remote", salary: "₹20k/month", category: "Data Science" },
    { id: 7, title: "HR Recruiter", company: "Talent Bridge", location: "Pune", salary: "₹2–2.6 LPA", category: "MBA" },
    { id: 8, title: "Java Developer", company: "Infosys", location: "Hyderabad", salary: "₹3.5–4.5 LPA", category: "Engineering" },
    { id: 9, title: "Content Writer", company: "WriteSmart", location: "WFH", salary: "₹18k/month", category: "Work from home" }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJobs =
    activeCategory === "All"
      ? jobs
      : jobs.filter(job => job.category === activeCategory);

  // Split jobs into chunks of 4 for carousel slides
  const chunkSize = 4;
  const slides = [];
  for (let i = 0; i < filteredJobs.length; i += chunkSize) {
    slides.push(filteredJobs.slice(i, i + chunkSize));
  }

  return (
    <div className="container home-job-section my-5 ">
      <h2 className="fw-bold mb-3">What are you looking for today?</h2>
      <h4 className="mb-4">Fresher Jobs</h4>

      {/* Pills */}
      <div className="mb-4 d-flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn btn-sm rounded-pill ${
              activeCategory === cat ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div id="jobCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row g-3">
                {slide.map(job => (
                  <div key={job.id} className="col-12 col-sm-6 col-lg-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <span className="badge bg-primary mb-2">Actively hiring</span>
                        <h6 className="fw-semibold mt-2">{job.title}</h6>
                        <p className="text-muted mb-1">{job.company}</p>
                        <p className="small mb-1"><i className="bi bi-geo-alt"></i> {job.location}</p>
                        <p className="small"><i className="bi bi-cash-stack"></i> {job.salary}</p>
                      </div>
                      <div className="card-footer bg-white border-0 d-flex justify-content-between">
                        <span className="badge bg-light text-dark">Job</span>
                        <Link to={`/jobs/${job.id}`}className="text-primary fw-semibold text-decoration-none">View details ›</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#jobCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#jobCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default HomeJobSection;
