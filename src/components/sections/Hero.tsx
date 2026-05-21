const NOTIFICATIONS = [
  {
    className: "n1",
    icon: "🎵",
    title: "3 personnes vont au même concert que toi",
    subtitle: "Phoenix · La Cigale · vendredi 23h",
    time: "à l'instant",
  },
  {
    className: "n2",
    icon: "🎨",
    title: "Léa veut venir à l'expo avec toi",
    subtitle: "Picasso x Hockney · Pinacothèque",
    time: "2 min",
  },
  {
    className: "n3",
    icon: "🎭",
    title: "Match trouvé pour samedi soir",
    subtitle: "Théâtre des Bouffes du Nord",
    time: "5 min",
  },
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="display">
            Trouve qui veut sortir <em>avec toi</em>.
          </h1>
          <p className="hero-sub">
            Mosaic te connecte instantanément aux personnes qui veulent aller au
            même événement culturel que toi. Concerts, expos, théâtre,
            festivals.
          </p>
          <div className="hero-ctas">
            <a href="#join" className="btn-primary on-dark">
              Rejoindre Mosaic →
            </a>
            <a href="#how" className="btn-ghost on-dark">
              Voir comment ça marche
            </a>
          </div>
        </div>

        <div className="hero-widget">
          {NOTIFICATIONS.map((n) => (
            <div key={n.className} className={`notif ${n.className}`}>
              <div className="ic">{n.icon}</div>
              <div className="body">
                <div className="t">{n.title}</div>
                <div className="s">{n.subtitle}</div>
              </div>
              <span className="time">{n.time}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
