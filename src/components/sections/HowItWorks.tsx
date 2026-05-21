const STEPS = [
  {
    num: 1,
    title: "Choisis un événement",
    text: "Parcours les concerts, expos, pièces de théâtre et festivals près de chez toi. Marque ceux qui te font envie en un tap.",
  },
  {
    num: 2,
    title: "On te matche instantanément",
    text: "Mosaic te montre qui d'autre veut y aller — amis d'amis, profils compatibles, gens du même quartier. Tu choisis avec qui parler.",
  },
  {
    num: 3,
    title: "Sortez ensemble",
    text: "Une fois le match accepté, on s'occupe du chat. Vous fixez l'heure, le point de rendez-vous, et c'est parti.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Comment ça marche</div>
          <h2 className="section-title">
            Trois étapes, <em>zéro friction</em>.
          </h2>
          <p className="section-sub">
            Aucun swipe, aucune conversation forcée. Juste les bonnes personnes
            au bon endroit, au bon moment.
          </p>
        </div>

        <div className="how-grid">
          {STEPS.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
