import {
  FaDownload,
  FaExternalLinkAlt,
  FaFilePdf,
  FaEye,
} from "react-icons/fa";

import cvPdf from "../../../../styles/cv/CV_GH.pdf";
import cvPreview from "../../../../styles/cv/cv-preview.png";

export default function ContactCV() {
  return (
    <div className="cv-page">
      <div className="cv-header">
        <span className="cv-header__eyebrow">CURRICULUM VITAE</span>

        <h2>Mon CV</h2>

        <p>
          Consultez un aperçu de mon parcours ou ouvrez la version complète au
          format PDF.
        </p>
      </div>

      <div className="cv-content">
        <a
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-preview"
          title="Ouvrir le CV"
        >
          <div className="cv-preview__toolbar">
            <div className="cv-preview__file">
              <FaFilePdf />

              <div>
                <strong>CV_GH.pdf</strong>
                <span>Curriculum Vitae</span>
              </div>
            </div>

            <div className="cv-preview__toolbar-right">
              <span className="cv-preview__badge">PDF</span>

              <span className="cv-preview__open">
                <FaEye />
                APERÇU
              </span>
            </div>
          </div>

          <div className="cv-preview__document">
            <img
              src={cvPreview}
              alt="Aperçu du CV de Geoffrey Hallier"
              className="cv-preview__image"
            />

            <div className="cv-preview__overlay">
              <div className="cv-preview__overlay-content">
                <FaExternalLinkAlt />

                <span>CONSULTER</span>

                <strong>Ouvrir le CV complet</strong>
              </div>
            </div>

            <div className="cv-preview__corner">
              <span>CV</span>
              <strong>2026</strong>
            </div>
          </div>
        </a>

        <aside className="cv-actions">
          <div className="cv-actions__info">
            <FaFilePdf />

            <span>DOCUMENT</span>

            <h3>Geoffrey Hallier</h3>

            <p>Développeur Full Stack</p>
          </div>

          <div className="cv-actions__meta">
            <div>
              <span>TYPE</span>
              <strong>Curriculum Vitae</strong>
            </div>

            <div>
              <span>FORMAT</span>
              <strong>PDF</strong>
            </div>

            <div>
              <span>LANGUE</span>
              <strong>Français</strong>
            </div>

            <div>
              <span>MISE À JOUR</span>
              <strong>2026</strong>
            </div>
          </div>

          <div className="cv-actions__buttons">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-action"
            >
              <div className="cv-action__icon">
                <FaExternalLinkAlt />
              </div>

              <div className="cv-action__content">
                <span>CONSULTER</span>
                <strong>Ouvrir le CV</strong>
              </div>

              <span className="cv-action__arrow">↗</span>
            </a>

            <a
              href={cvPdf}
              download="CV_Geoffrey_Hallier.pdf"
              className="cv-action"
            >
              <div className="cv-action__icon">
                <FaDownload />
              </div>

              <div className="cv-action__content">
                <span>TÉLÉCHARGER</span>
                <strong>Format PDF</strong>
              </div>

              <span className="cv-action__arrow">↓</span>
            </a>
          </div>

          <div className="cv-actions__hint">
            <span>PDF</span>
            Version complète de mon curriculum vitae
          </div>
        </aside>
      </div>
    </div>
  );
}
