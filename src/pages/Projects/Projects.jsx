import kobiLogo from "../../styles/img/projects/kobi.png";
import backpacktfLogo from "../../styles/img/projects/backpacktf.png";

import virgoLogo from "../../styles/img/projects/virgo.png";
import nespoliLogo from "../../styles/img/projects/nespoli.jpg";
import quicksellLogo from "../../styles/img/projects/quicksell.svg";

const projects = [
  {
    id: "01",
    logo: kobiLogo,
    title: "Kobi Sport",
    stack: "React • GraphQL • TypeScript",
    description:
      "Challenges sportifs gamifiés, interfaces admin, dashboards, facturation automatique, tests E2E et outils internes.",
  },
  {
    id: "02",
    logo: backpacktfLogo,
    title: "TF2 Trading Helper",
    stack: "React • Node.js • MongoDB • Steam API • Backpack.tf API",
    description:
      "Plateforme complète de gestion de bots de trading TF2. Comprend un dashboard d'administration, la gestion de multiples bots Steam, le pricing automatique, le suivi du marché en temps réel, des outils de statistiques, un système d'alertes, la gestion des inventaires et plusieurs automatisations destinées aux traders.",
  },
  {
    id: "03",
    logo: quicksellLogo,
    title: "Quicksell",
    stack: "React • Node.js • MongoDB",
    description:
      "Marketplace avec plusieurs milliers d'utilisateurs par jour. Front-end complet et participation importante au back-end.",
  },
  {
    id: "04",
    logo: virgoLogo,
    title: "Virgo Wallet",
    stack: "React • Blockchain • Extension web",
    description:
      "Wallet crypto avec agenda, carnet de contacts, airdrops, intégration NFT et interface sous forme d'extension navigateur.",
  },
  {
    id: "06",
    logo: nespoliLogo,
    title: "Nespoli Group",
    stack: "Application métier",
    description:
      "Application interne de gestion des inventaires entre différentes usines, encore utilisée en production.",
  },
];

export default function Projects() {
  return (
    <section className="projects-list">
      {projects.map((project) => (
        <article key={project.id} className="project-card">
          <div className="project-logo">
            {project.logo ? (
              <img src={project.logo} alt={project.title} />
            ) : (
              <span>GH</span>
            )}
          </div>

          <div className="project-content">
            <h2>{project.title}</h2>
            <small>{project.stack}</small>
            <p>{project.description}</p>
          </div>

          <span className="project-id">{project.id}</span>
        </article>
      ))}
    </section>
  );
}
