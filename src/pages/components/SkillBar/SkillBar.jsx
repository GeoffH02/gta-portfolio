export default function SkillBar({
  level = 0,
  segments = 10,
  animationDelay = 0,
}) {
  const normalizedLevel = Math.max(0, Math.min(100, level));

  const filledSegments = Math.round((normalizedLevel / 100) * segments);

  return (
    <div
      className="skill-bar skill-bar--animated"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={normalizedLevel}
      aria-label={`Niveau ${normalizedLevel}%`}
    >
      {Array.from({ length: segments }, (_, index) => {
        const isFilled = index < filledSegments;

        return (
          <span
            key={index}
            className={`skill-bar__segment ${
              isFilled ? "skill-bar__segment--active" : ""
            }`}
            style={{
              animationDelay: `${animationDelay + index * 45}ms`,
            }}
          />
        );
      })}
    </div>
  );
}
