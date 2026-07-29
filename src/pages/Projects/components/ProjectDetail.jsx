export default function ProjectDetail({
  logo,
  title,
  subtitle,
  description,
  stack = [],
  images = [],
}) {
  return (
    <section className="project-detail">
      <header className="project-detail-header">
        {logo && <img src={logo} alt={title} />}

        <div>
          <span>PROJECT</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </header>

      <p className="project-detail-description">{description}</p>

      <div className="project-stack">
        {stack.map((tech) => (
          <div key={tech.name} className="project-stack-item">
            <img src={tech.logo} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <div className="project-gallery">
        {images.map((image) => (
          <img key={image} src={image} alt={title} />
        ))}
      </div>
    </section>
  );
}
