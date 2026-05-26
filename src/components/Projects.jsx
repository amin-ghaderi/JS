function Projects({ projects }) {
  return (
    <section className="cv-section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">
              <span className="project-tech-label">Technologies</span>
              {project.technologies}
            </p>
            <a
              href={project.github}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
