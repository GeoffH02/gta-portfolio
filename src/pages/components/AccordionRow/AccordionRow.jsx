import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function AccordionRow({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion-row">
      <button
        className={`pause-row accordion-header ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>

        <ChevronRight
          size={18}
          className={`accordion-arrow ${open ? "open" : ""}`}
        />
      </button>

      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}
