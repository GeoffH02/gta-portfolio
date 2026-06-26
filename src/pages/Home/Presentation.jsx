import AccordionRow from "../../pages/components/AccordionRow/AccordionRow";

export default function Presentation() {
  return (
    <>
      <AccordionRow title="Introduction" defaultOpen>
        <p>
          Bonjour ! Je m'appelle Geoffrey Hallier, originaire de la Thiérache
          dans l'Aisne (02). Pour les connaisseurs, j'habitais à côté de
          Marly-Gomont !
        </p>
      </AccordionRow>

      <AccordionRow title="2014 — Premiers pas">
        <p>
          J'ai commencé à apprendre le développement en 2014, en commençant par
          le C#. Rien de grandiose à cette époque : je passais mon temps sur
          Stack Overflow à récupérer du code intéressant et à l'intégrer dans
          mes projets, sans réellement comprendre pourquoi c'était fait comme
          ça, ni même pourquoi ça ne fonctionnait pas parfois.
        </p>
      </AccordionRow>

      <AccordionRow title="2015 — Arma 3">
        <p>
          En 2015, j'ai fait la connaissance d'une personne sur Arma 3 qui m'a
          motivé à créer un serveur de jeu. Celui-ci nécessitait le
          développement de nombreux scripts : c'était mes premiers vrais pas
          dans la programmation.
        </p>

        <p>
          J'y ai appris à utiliser une documentation, à faire des recherches, à
          apprendre de mes erreurs et à adopter une véritable méthodologie de
          travail.
        </p>

        <p>
          Je suis resté plus d'un an sur ce projet, à développer quasiment nuit
          et jour. Au fil des mois, j'ai commencé à créer des scripts vraiment
          complets et complexes, avec des algorithmes assez poussés. Par
          exemple, j'avais développé un GPS capable de calculer des itinéraires
          en suivant les routes de la carte grâce à un algorithme que j'avais
          conçu moi-même.
        </p>
      </AccordionRow>

      <AccordionRow title="Application interne">
        <p>
          Par la suite, l'entreprise dans laquelle je travaillais m'a demandé de
          développer une application permettant de gérer les inventaires entre
          leurs différentes usines.
        </p>

        <p>
          J'ai accepté le défi, et aujourd'hui encore, cette application
          fonctionne parfaitement.
        </p>
      </AccordionRow>

      <AccordionRow title="Virgo">
        <p>
          Quelques années plus tard, j'ai rejoint Epitech en WAC. Durant ces
          deux années, j'ai intégré l'entreprise Virgo, qui travaillait sur le
          développement d'une cryptomonnaie.
        </p>

        <p>
          J'étais principalement en charge du design du wallet, sous forme
          d'extension web, ainsi que d'une partie du back-end. J'y ai développé
          un agenda, un carnet de contacts, un système d'airdrops permettant à
          d'autres cryptomonnaies de distribuer leurs tokens via le wallet, et
          j'ai également commencé l'intégration des NFT.
        </p>

        <p>
          Malheureusement, je n'ai pas poursuivi l'aventure puisque mon contrat
          d'alternance arrivait à son terme.
        </p>
      </AccordionRow>

      <AccordionRow title="Quicksell">
        <p>
          J'ai ensuite été sélectionné pour poursuivre mes études en MSC à
          Epitech. Entre-temps, j'ai rejoint Quicksell.store, où j'étais
          responsable de toute la partie front-end ainsi que d'une partie
          importante du back-end.
        </p>

        <p>
          C'était l'un de mes plus gros projets : la plateforme accueillait
          plusieurs milliers d'utilisateurs chaque jour.
        </p>
      </AccordionRow>

      <AccordionRow title="Kobi Sport">
        <p>
          Pendant mon MSC, j'ai quitté cette entreprise pour rejoindre Kobi,
          dont les bureaux étaient basés à Lille, ce qui était beaucoup plus
          pratique que mon précédent poste situé en Russie.
        </p>

        <p>
          J'y suis resté deux ans et demi. Au départ simple alternant front-end,
          j'ai progressivement pris en charge toute la structure front des
          plateformes client et interne.
        </p>

        <p>
          J'ai eu l'occasion de travailler sur de nombreux projets d'envergure,
          notamment l'implémentation de challenges de pas permettant aux
          entreprises de créer des compétitions entièrement configurables entre
          leurs collaborateurs.
        </p>

        <p>
          J'ai également développé un système de facturation automatique et mis
          en place des tests end-to-end ainsi que des tests unitaires sur les
          deux plateformes afin d'améliorer leur fiabilité.
        </p>
      </AccordionRow>

      <AccordionRow title="Aujourd'hui">
        <p>
          Aujourd'hui, mes études sont terminées et mon contrat d'alternance
          touche à sa fin.
        </p>

        <p>
          Je suis désormais à la recherche d'un poste de développeur où je
          pourrai mettre à profit toutes ces années d'expérience, tout en
          continuant à apprendre et à évoluer.
        </p>
      </AccordionRow>
    </>
  );
}
