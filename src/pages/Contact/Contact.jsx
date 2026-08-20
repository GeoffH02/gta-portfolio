import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaCode,
  FaLaptopHouse,
  FaCalendarCheck,
} from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "geoffrey02@orange.fr",
    href: "mailto:geoffrey02@orange.fr",
    icon: FaEnvelope,
    action: "ÉCRIRE",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Geoffrey Hallier",
    href: "https://www.linkedin.com/in/geoffrey-hallier-8ab971231/",
    icon: FaLinkedin,
    action: "OUVRIR",
    external: true,
  },
  {
    label: "GitHub",
    value: "GeoffH02",
    href: "https://github.com/GeoffH02",
    icon: FaGithub,
    action: "OUVRIR",
    external: true,
  },
];

const jobInformations = [
  {
    label: "Poste recherché",
    value: "Développeur Full Stack",
    icon: FaBriefcase,
  },
  {
    label: "Environnement",
    value: "Frontend • Backend • Applications métier",
    icon: FaCode,
  },
  {
    label: "Organisation",
    value: "Présentiel • Hybride • Télétravail",
    icon: FaLaptopHouse,
  },
  {
    label: "Disponibilité",
    value: "Immédiate",
    icon: FaCalendarCheck,
    status: true,
  },
];

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <span className="contact-header__eyebrow">CONTACT</span>

        <h2>Travaillons ensemble</h2>

        <p>
          Une opportunité, un projet ou simplement envie d'échanger ? Vous
          pouvez me contacter via les différents liens ci-dessous.
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-section__title">
          <span>ME CONTACTER</span>
        </div>

        {contactLinks.map((contact, index) => {
          const Icon = contact.icon;

          return (
            <a
              key={contact.label}
              className={`pause-row contact-row contact-row--link `}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              style={{
                "--contact-delay": `${index * 70}ms`,
              }}
            >
              <span className="contact-row__label">
                <Icon />
                {contact.label}
              </span>

              <div className="contact-row__link-value">
                <strong>{contact.value}</strong>

                <span className="contact-row__open">
                  {contact.action}

                  <span className="contact-row__arrow">
                    {contact.external ? "↗" : "→"}
                  </span>
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="contact-section contact-section--availability">
        <div className="contact-section__title">
          <span>RECHERCHE ACTUELLE</span>
        </div>

        {jobInformations.map((information, index) => {
          const Icon = information.icon;

          return (
            <div
              key={information.label}
              className="pause-row contact-row"
              style={{
                "--contact-delay": `${(contactLinks.length + index) * 70}ms`,
              }}
            >
              <span className="contact-row__label">
                <Icon />
                {information.label}
              </span>

              {information.status ? (
                <strong className="contact-status">
                  <span className="contact-status__dot" />
                  {information.value}
                </strong>
              ) : (
                <strong>{information.value}</strong>
              )}
            </div>
          );
        })}
      </div>

      <div className="contact-cta">
        <div>
          <span>UNE OPPORTUNITÉ ?</span>
          <strong>Je serais ravi d'en discuter.</strong>
        </div>

        <a href="mailto:geoffrey02@orange.fr">
          ME CONTACTER
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
