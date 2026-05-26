function Skills({ categories }) {
  return (
    <section className="cv-section skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {categories.map((group) => (
          <div key={group.category} className="skill-category">
            <h3 className="skill-category-title">{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
