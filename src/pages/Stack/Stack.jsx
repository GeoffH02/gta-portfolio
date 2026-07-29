import SkillBar from "../components/SkillBar/SkillBar";

const stack = [
  {
    label: "Frontend",
    level: 95,
  },
  {
    label: "Backend",
    level: 90,
  },
  {
    label: "Database",
    level: 85,
  },
  {
    label: "Outils",
    level: 70,
  },
];

export default function Stack() {
  return (
    <div className="stack-overview">
      {stack.map((item, index) => (
        <div
          key={item.label}
          className="pause-row stack-overview__row"
          style={{
            "--row-delay": `${index * 90}ms`,
          }}
        >
          <span>{item.label}</span>

          <div className="stack-content">
            <SkillBar level={item.level} animationDelay={index * 90} />
          </div>
        </div>
      ))}
    </div>
  );
}
