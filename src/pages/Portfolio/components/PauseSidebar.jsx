export default function PauseSidebar({ items, activeItem, setActiveItem }) {
  return (
    <aside className="pause-sidebar">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className={activeItem === item.key ? "active" : ""}
          onClick={() => setActiveItem(item.key)}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
}
