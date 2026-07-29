import AccordionRow from "../components/AccordionRow/AccordionRow";

export default function AboutMe() {
  return (
    <div className="presentation-page about-me-page">
      <AccordionRow title="Randonnée">
        <p>
          J'adore marcher et j'en fais autant que possible chaque jour : pendant
          la pause du midi, le matin pour aller travailler, le soir pour rentrer
          du travail et parfois même à la salle de sport.
        </p>

        <p>
          Il me faut au moins 20 000 pas par jour pour considérer que la journée
          a été suffisamment active.
        </p>

        <p>
          Le week-end, il m'arrive de consulter Visorando, un site qui
          répertorie les randonnées à proximité, puis de partir pour plusieurs
          heures de marche, généralement sur des parcours de plus de 20 km.
          C'est aussi une excellente façon de découvrir de nouveaux paysages.
        </p>
      </AccordionRow>

      <AccordionRow title="Cuisine">
        <p>
          La cuisine fait partie de mes hobbies, même si je suis loin d'être un
          grand cuisinier. J'aime tester de nouvelles recettes et expérimenter
          avec ce que j'ai sous la main.
        </p>

        <p>
          Cela finit parfois en pâtes au beurre, mais il y a toujours de l'idée
          et l'envie d'essayer quelque chose de nouveau ! 😄
        </p>
      </AccordionRow>

      <AccordionRow title="DJing">
        <p>
          J'ai découvert le DJing totalement par hasard avec des amis au cours
          d'une soirée. J'ai commencé pour m'amuser, puis je m'y suis
          progressivement investi davantage.
        </p>

        <p>
          Cela me permet d'exprimer un côté artistique, un peu comme lorsque je
          conçois une interface ou développe un site web.
        </p>

        <p>
          Je n'ai jamais eu la prétention d'être un DJ professionnel. Je
          pratique avant tout pour moi et pour le plaisir. Le jour où je ne
          m'amuserai plus, j'arrêterai.
        </p>
      </AccordionRow>

      <AccordionRow title="Collection de vinyles">
        <p>
          Les vinyles sont devenus une véritable passion peu après mes débuts
          dans le DJing. Des amis mixaient sur vinyles, ce qui a rapidement
          éveillé ma curiosité.
        </p>

        <p>
          J'ai ensuite acheté mes premiers disques : un, puis deux, puis
          trois... jusqu'à constituer aujourd'hui une collection d'environ 400
          vinyles.
        </p>
      </AccordionRow>

      <AccordionRow title="Jeux vidéo">
        <p>
          J'aime les jeux vidéo depuis mon enfance et mes goûts sont assez
          variés. Je peux aussi bien jouer à Call of Duty qu'à Farming Simulator
          ou The Last of Us.
        </p>

        <p>
          Dès l'âge de 13 ans, je me suis passionné pour le modding,
          c'est-à-dire la modification de jeux vidéo. J'ai commencé à créer des
          scripts et du contenu pour des jeux comme Arma 3, Left 4 Dead 2 ou
          Garry's Mod.
        </p>

        <p>
          Cette passion pour le modding est d'ailleurs l'une des principales
          raisons qui m'ont conduit vers le développement.
        </p>
      </AccordionRow>
    </div>
  );
}
