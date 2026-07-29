import SkillBar from "../SkillBar/SkillBar";

export default function StackRow({
  title,
  subtitle,
  level,
  active = false,
  onClick,
  children,
}) {
  return (
    <button
      type="button"
      className={`stack-row ${active ? "active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <div className="stack-row__header">
        <span className="stack-row__title">{title}</span>
        {subtitle && <span className="stack-row__subtitle">{subtitle}</span>}
      </div>

      <div className="stack-row__icons">{children}</div>

      <div className="stack-row__progress">
        <SkillBar level={level} active={active} />
      </div>
    </button>
  );
}
