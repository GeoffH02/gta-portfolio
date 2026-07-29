export default function StackIcon({
  icon: Icon,
  label,
  title,
  color = "#ffffff",
  large = false,
}) {
  if (!Icon) return null;

  return (
    <div
      className={`stack-icon ${large ? "stack-icon--large" : ""}`}
      title={title ?? label}
      style={{ "--stack-icon-color": color }}
    >
      <span className="stack-icon__visual" aria-hidden="true">
        <Icon />
      </span>
      <span className="stack-icon__label">{label}</span>
    </div>
  );
}
