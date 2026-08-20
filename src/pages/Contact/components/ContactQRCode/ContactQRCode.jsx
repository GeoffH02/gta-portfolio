import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const qrCodes = [
  {
    id: "linkedin",
    label: "LinkedIn",
    subtitle: "Voir mon profil professionnel",
    value: "https://www.linkedin.com/in/geoffrey-hallier-8ab971231/",
    displayValue: "linkedin.com/in/geoffrey-hallier",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    id: "github",
    label: "GitHub",
    subtitle: "Découvrir mes projets",
    value: "https://github.com/GeoffH02",
    displayValue: "github.com/GeoffH02",
    icon: FaGithub,
    color: "#ffffff",
  },
  {
    id: "email",
    label: "Email",
    subtitle: "M'envoyer un email",
    value: "mailto:geoffrey02@orange.fr",
    displayValue: "geoffrey02@orange.fr",
    icon: FaEnvelope,
    color: "#69c1df",
  },
];

export default function ContactQrCodes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQrCode = qrCodes[currentIndex];
  const Icon = currentQrCode.icon;

  function previous() {
    setCurrentIndex(
      (current) => (current - 1 + qrCodes.length) % qrCodes.length,
    );
  }

  function next() {
    setCurrentIndex((current) => (current + 1) % qrCodes.length);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="qr-page">
      <div className="qr-header">
        <span>QR CODES</span>

        <h2>Scannez pour me retrouver</h2>

        <p>
          Utilisez votre téléphone pour accéder directement à mon LinkedIn, mon
          GitHub ou m'envoyer un email.
        </p>
      </div>

      <div className="qr-carousel">
        <button
          type="button"
          className="qr-carousel__arrow"
          onClick={previous}
          aria-label="QR code précédent"
        >
          <FaChevronLeft />
        </button>

        <div key={currentQrCode.id} className="qr-carousel__content">
          <div className="qr-carousel__info">
            <div
              className="qr-carousel__icon"
              style={{
                "--qr-color": currentQrCode.color,
              }}
            >
              <Icon />
            </div>

            <span className="qr-carousel__counter">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(qrCodes.length).padStart(2, "0")}
            </span>

            <h3>{currentQrCode.label}</h3>

            <strong>{currentQrCode.subtitle}</strong>

            <p>{currentQrCode.displayValue}</p>
          </div>

          <div className="qr-carousel__code">
            <div className="qr-carousel__code-inner">
              <QRCodeSVG
                value={currentQrCode.value}
                size={220}
                level="H"
                bgColor="#ffffff"
                fgColor="#111111"
                marginSize={1}
              />
            </div>

            <span>SCAN</span>
          </div>
        </div>

        <button
          type="button"
          className="qr-carousel__arrow"
          onClick={next}
          aria-label="QR code suivant"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="qr-carousel__navigation">
        {qrCodes.map((qrCode, index) => {
          const NavigationIcon = qrCode.icon;

          return (
            <button
              key={qrCode.id}
              type="button"
              className={`qr-carousel__dot ${
                currentIndex === index ? "qr-carousel__dot--active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <NavigationIcon />
              <span>{qrCode.label}</span>
            </button>
          );
        })}
      </div>

      <div className="qr-carousel__hint">
        <span>← / →</span>
        Changer de QR code
      </div>
    </div>
  );
}
