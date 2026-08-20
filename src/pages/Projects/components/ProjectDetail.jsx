import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";

export default function ProjectDetail({
  logo,
  title,
  subtitle,
  description,
  stack = [],
  images = [],
  highlights = [],
  meta = [],
  githubUrl,
  demoUrl,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");

  const activeImage = images[activeImageIndex];

  function previousImage() {
    if (!images.length) return;

    setSlideDirection("previous");
    setActiveImageIndex(
      (current) => (current - 1 + images.length) % images.length,
    );
  }

  function nextImage() {
    if (!images.length) return;

    setSlideDirection("next");
    setActiveImageIndex((current) => (current + 1) % images.length);
  }

  function selectImage(index) {
    if (index === activeImageIndex) return;

    setSlideDirection(index > activeImageIndex ? "next" : "previous");
    setActiveImageIndex(index);
  }

  useEffect(() => {
    if (!zoomOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setZoomOpen(false);
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    }

    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("project-lightbox-open");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("project-lightbox-open");
    };
  }, [zoomOpen, images.length]);

  return (
    <>
      <section className="project-detail">
        <header className="project-detail-header">
          {logo && (
            <div className="project-detail-header__logo">
              <img src={logo} alt={title} />
            </div>
          )}

          <div className="project-detail-header__content">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          {(githubUrl || demoUrl) && (
            <div className="project-detail-header__links">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  <span>GitHub</span>
                  <FaExternalLinkAlt />
                </a>
              )}

              {demoUrl && (
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </a>
              )}
            </div>
          )}
        </header>

        {meta.length > 0 && (
          <div className="project-meta">
            {meta.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="project-meta__item"
                  style={{ "--meta-delay": `${index * 70}ms` }}
                >
                  {Icon && <Icon className="project-meta__icon" />}

                  <div>
                    <span>{item.label}</span>
                    <strong
                      className={
                        item.status ? "project-meta__status" : undefined
                      }
                    >
                      {item.status && (
                        <span className="project-meta__status-dot" />
                      )}
                      {item.value}
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {description && (
          <p className="project-detail-description">{description}</p>
        )}

        {highlights.length > 0 && (
          <div className="project-highlights">
            <span className="project-section-title">HIGHLIGHTS</span>

            <div className="project-highlights__grid">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;

                return (
                  <div
                    key={highlight.label ?? highlight}
                    className="project-highlight"
                    style={{ "--highlight-delay": `${index * 70}ms` }}
                  >
                    <span className="project-highlight__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {Icon && <Icon className="project-highlight__icon" />}
                    <strong>{highlight.label ?? highlight}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {stack.length > 0 && (
          <div className="project-stack-section">
            <span className="project-section-title">TECHNOLOGIES</span>

            <div className="project-stack">
              {stack.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="project-stack-item"
                    style={{
                      "--tech-color": tech.color ?? "#ffffff",
                      "--tech-delay": `${index * 55}ms`,
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="project-stack-item__icon"
                        aria-hidden="true"
                      />
                    )}

                    {tech.logo && (
                      <img
                        src={tech.logo}
                        alt=""
                        className="project-stack-item__logo"
                      />
                    )}

                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {images.length > 0 && (
          <div className="project-carousel">
            <div className="project-carousel__header">
              <span className="project-section-title">GALERIE</span>

              <div className="project-carousel__counter">
                <small>CAPTURE</small>
                <strong>{String(activeImageIndex + 1).padStart(2, "0")}</strong>
                <span>— {String(images.length).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="project-carousel__viewport">
              {images.length > 1 && (
                <button
                  type="button"
                  className="project-carousel__arrow project-carousel__arrow--left"
                  onClick={previousImage}
                  aria-label="Image précédente"
                >
                  <FaChevronLeft />
                </button>
              )}

              <button
                key={`${activeImage?.src ?? activeImage}-${activeImageIndex}`}
                type="button"
                className={`project-carousel__image-wrapper project-carousel__image-wrapper--${slideDirection}`}
                onClick={() => setZoomOpen(true)}
                aria-label="Agrandir l'image"
              >
                <img
                  src={activeImage?.src ?? activeImage}
                  alt={
                    activeImage?.title
                      ? `${title} - ${activeImage.title}`
                      : `${title} - capture ${activeImageIndex + 1}`
                  }
                />

                <span className="project-carousel__focus-corner project-carousel__focus-corner--tl" />
                <span className="project-carousel__focus-corner project-carousel__focus-corner--tr" />
                <span className="project-carousel__focus-corner project-carousel__focus-corner--bl" />
                <span className="project-carousel__focus-corner project-carousel__focus-corner--br" />

                <span className="project-carousel__zoom">
                  <FaSearchPlus />
                  AGRANDIR
                </span>
              </button>

              {images.length > 1 && (
                <button
                  type="button"
                  className="project-carousel__arrow project-carousel__arrow--right"
                  onClick={nextImage}
                  aria-label="Image suivante"
                >
                  <FaChevronRight />
                </button>
              )}
            </div>

            {(activeImage?.title || activeImage?.description) && (
              <div
                key={`caption-${activeImageIndex}`}
                className="project-carousel__caption"
              >
                <div className="project-carousel__caption-title">
                  <span>{String(activeImageIndex + 1).padStart(2, "0")}</span>

                  <div>
                    <small>FONCTIONNALITÉ</small>
                    <strong>
                      {activeImage.title ?? `Capture ${activeImageIndex + 1}`}
                    </strong>
                  </div>
                </div>

                {activeImage.description && <p>{activeImage.description}</p>}
              </div>
            )}

            {images.length > 1 && (
              <>
                <div
                  className="project-carousel__progress"
                  style={{ "--project-progress-count": images.length }}
                  aria-hidden="true"
                >
                  {images.map((image, index) => (
                    <button
                      key={`progress-${image?.src ?? image}`}
                      type="button"
                      className={`project-carousel__progress-segment ${
                        activeImageIndex === index
                          ? "project-carousel__progress-segment--active"
                          : ""
                      }`}
                      onClick={() => selectImage(index)}
                      tabIndex={-1}
                    />
                  ))}
                </div>

                <div className="project-carousel__thumbnails">
                  {images.map((image, index) => (
                    <button
                      key={image?.src ?? image}
                      type="button"
                      className={`project-carousel__thumbnail ${
                        activeImageIndex === index
                          ? "project-carousel__thumbnail--active"
                          : ""
                      }`}
                      style={{ "--thumbnail-delay": `${index * 45}ms` }}
                      onClick={() => selectImage(index)}
                      aria-label={`Afficher l'image ${index + 1}`}
                    >
                      <img
                        src={image?.src ?? image}
                        alt=""
                        aria-hidden="true"
                      />

                      <div className="project-carousel__thumbnail-overlay">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </section>

      {zoomOpen &&
        activeImage &&
        createPortal(
          <div
            className="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Aperçu de ${activeImage.title ?? title}`}
          >
            <button
              type="button"
              className="project-lightbox__backdrop"
              onClick={() => setZoomOpen(false)}
              aria-label="Fermer"
            />

            <div className="project-lightbox__content">
              <div className="project-lightbox__header">
                <div>
                  <span>
                    {String(activeImageIndex + 1).padStart(2, "0")}
                    {" / "}
                    {String(images.length).padStart(2, "0")}
                  </span>

                  <strong>{activeImage.title ?? title}</strong>
                </div>

                <button
                  type="button"
                  onClick={() => setZoomOpen(false)}
                  aria-label="Fermer l'aperçu"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="project-lightbox__image">
                {images.length > 1 && (
                  <button
                    type="button"
                    className="project-lightbox__arrow"
                    onClick={previousImage}
                    aria-label="Image précédente"
                  >
                    <FaChevronLeft />
                  </button>
                )}

                <div
                  key={`lightbox-${activeImageIndex}`}
                  className={`project-lightbox__image-frame project-lightbox__image-frame--${slideDirection}`}
                >
                  <img
                    src={activeImage.src ?? activeImage}
                    alt={activeImage.title ?? title}
                  />
                </div>

                {images.length > 1 && (
                  <button
                    type="button"
                    className="project-lightbox__arrow"
                    onClick={nextImage}
                    aria-label="Image suivante"
                  >
                    <FaChevronRight />
                  </button>
                )}
              </div>

              {activeImage.description && (
                <p className="project-lightbox__description">
                  {activeImage.description}
                </p>
              )}

              <div className="project-lightbox__controls">
                <span>
                  <b>← / →</b> Naviguer
                </span>

                <span>
                  <b>ESC</b> Fermer
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
