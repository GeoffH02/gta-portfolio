export default function CareerPanel({
  title,
  subtitle,
  description,
  rows = [],
  watermark,
}) {
  return (
    <section className="career-panel">
      {watermark && (
        <img
          className="career-panel__watermark"
          src={watermark}
          alt=""
          aria-hidden="true"
        />
      )}

      <header className="career-panel__header">
        <span>{subtitle}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>

      <div className="career-panel__rows">
        {rows.map((row, index) => (
          <div
            key={`${row.label}-${row.value}`}
            className={`pause-row career-panel__row ${index === 0 ? "active" : ""}`}
            style={{ "--career-row-delay": `${index * 70}ms` }}
          >
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
