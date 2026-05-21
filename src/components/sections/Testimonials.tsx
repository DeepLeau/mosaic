const TESTIMONIALS = [
  {
    starsAuthor: "Léa, 27 ans",
    quote:
      "J'avais une place pour Phoenix et personne avec qui y aller. En 10 min sur Mosaic j'avais matché avec 2 personnes qui voulaient aussi y aller. Soirée incroyable.",
    avatarClass: "a1",
    avatarInitial: "L",
    name: "Léa Moreau",
    role: "Designeuse · Paris 11",
  },
  {
    starsAuthor: "Marc, 31 ans",
    quote:
      "Enfin une app qui n'est pas du dating déguisé. Tu vois un événement, tu trouves des gens cool qui y vont aussi, point. C'est tout ce dont on avait besoin.",
    avatarClass: "a2",
    avatarInitial: "M",
    name: "Marc Tessier",
    role: "Architecte · Lyon",
  },
  {
    starsAuthor: "Sofia, 24 ans",
    quote:
      "Je viens d'arriver à Paris, je connaissais personne. Mosaic m'a fait rencontrer trois personnes en deux semaines, juste en allant voir des expos. Magique.",
    avatarClass: "a3",
    avatarInitial: "S",
    name: "Sofia Ben Amor",
    role: "Journaliste · Paris 18",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Ils sortent avec Mosaic</div>
          <h2 className="section-title">
            L&apos;app que <em>tout le monde s&apos;envoie</em>.
          </h2>
        </div>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial">
              <div className="testimonial-stars">
                ★★★★★{" "}
                <span className="testimonial-stars-author">{t.starsAuthor}</span>
              </div>
              <p>&quot;{t.quote}&quot;</p>
              <div className="author">
                <div className={`av ${t.avatarClass}`}>{t.avatarInitial}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
