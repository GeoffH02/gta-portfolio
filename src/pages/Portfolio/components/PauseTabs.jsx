export default function PauseTabs({
  menu,
  categories,
  activeCategory,
  changeCategory,
  goPrevious,
  goNext,
}) {
  return (
    <nav className="pause-tabs" aria-label="Navigation du portfolio">
      <button
        type="button"
        className="pause-tab-arrow pause-tab-arrow--left"
        onClick={(event) => {
          event.currentTarget.blur();
          goPrevious();
        }}
        aria-label="Catégorie précédente"
      >
        ‹
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`pause-tab ${activeCategory === category ? "active" : ""}`}
          onClick={(event) => {
            event.currentTarget.blur();
            changeCategory(category);
          }}
        >
          {menu[category].label}
        </button>
      ))}

      <button
        type="button"
        className="pause-tab-arrow pause-tab-arrow--right"
        onClick={(event) => {
          event.currentTarget.blur();
          goNext();
        }}
        aria-label="Catégorie suivante"
      >
        ›
      </button>
    </nav>
  );
}
