import AccordionRow from "../components/AccordionRow/AccordionRow";

export default function AboutMe() {
  return (
    <>
      <AccordionRow title="Randomnée">
        <p>
          J'adore la marche, j'en fais autant que possible chaque jour : pendant
          la pause du midi, le matin pour aller travailler, le soir pour rentrer
          du travail et même encore le soir à la salle de sport. Il me faut au
          moins 20 000 pas par jour pour me dire que c'était une journée
          correcte
        </p>
        <p>
          Le week-end, il m'arrive de me connecter sur Visorando (un site qui
          répertorie les randonnées à proximité) et de partir pour plusieurs
          heures de marche, généralement plus de 20 km. Comme ça, il y a encore
          plus de paysages à découvrir
        </p>
      </AccordionRow>

      <AccordionRow title="Cuisine">
        <p>
          Cuisine... Je marque ça comme un hobby, même si je suis un piètre
          cuisinier. J'adore expérimenter de nouvelles recettes. Généralement,
          ça finit en pâtes au beurre, mais il y a de l'idée parfois ! 😄
        </p>
      </AccordionRow>

      <AccordionRow title="DJing">
        <p>
          Le DJing, je l'ai découvert totalement par hasard avec des amis au
          cours d'une soirée. J'ai pris ça à la rigolade au début, puis je m'y
          suis mis sérieusement. Ça me permet d'exprimer un côté artistique (un
          peu comme je le fais avec le développement de mes sites web). Je n'ai
          jamais eu la prétention d'être un bon DJ, sachant que j'ai toujours
          fait ça avant tout pour moi et pour m'amuser. Le jour où je ne
          m'amuserai plus, j'arrêterai.
        </p>
      </AccordionRow>

      <AccordionRow title="Collection de vinyles">
        <p>
          Les vinyles, c'est une grande histoire d'amour. C'est arrivé peu après
          mes débuts en tant que DJ. Des amis utilisaient des vinyles pour
          mixer, ce qui m'a intrigué. Quelques mois plus tard, j'ai acheté mes
          premiers vinyles : 1, puis 2, puis 3... pour en avoir aujourd'hui près
          de 400.
        </p>
      </AccordionRow>

      <AccordionRow title="Jeux vidéo">
        <p>
          J'adore les jeux vidéo depuis que je suis très jeune. J'ai toujours
          été très grand public dans mes goûts : je peux très bien jouer à Call
          of Duty comme à Farming Simulator ou encore à The Last of Us. Dès mes
          13 ans, je me suis pris de passion pour le modding, c'est-à-dire la
          modification de jeux vidéo. J'ai vite été pris au jeu et j'ai commencé
          à créer des scripts pour des jeux comme Arma 3, Left 4 Dead 2 ou
          Garry's Mod. C'est d'ailleurs ce qui m'a lancé dans le monde du
          développement.
        </p>
      </AccordionRow>
    </>
  );
}
