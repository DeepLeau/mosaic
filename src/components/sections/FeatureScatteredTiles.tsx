const TILES = [
  {
    className: "t1",
    label: "Concert",
    title: "Christine and the Queens",
    meta: "Zénith · 24 mai",
  },
  {
    className: "t2",
    label: "Exposition",
    title: "Hockney au Louvre",
    meta: "Jusqu'au 30 juin",
  },
  {
    className: "t3",
    label: "Théâtre",
    title: "Hamlet, nouvelle mise en scène",
    meta: "Bouffes du Nord",
  },
  {
    className: "t4",
    label: "Festival",
    title: "Nuit des Musées",
    meta: "Samedi soir",
  },
  {
    className: "t5",
    label: "Cinéma",
    title: "Ciné en plein air",
    meta: "Parc de la Villette",
  },
];

export default function FeatureScatteredTiles() {
  return (
    <section>
      <div className="container">
        <div className="feature-row reverse">
          <div className="feature-text">
            <h2>
              Toute la culture parisienne, <em>à portée de match</em>.
            </h2>
            <p>
              Pas besoin de chercher des heures sur trois apps. Mosaic agrège
              concerts, expos, théâtre, cinéma et festivals — et te connecte aux
              gens qui ont les mêmes envies que toi.
            </p>
            <a href="#categories" className="btn-ghost">
              Explorer les catégories →
            </a>
          </div>
          <div className="scattered">
            {TILES.map((tile) => (
              <div key={tile.className} className={`tile ${tile.className}`}>
                <div className="tile-label">{tile.label}</div>
                <div>
                  <div className="tile-title">{tile.title}</div>
                  <div className="tile-meta tile-spacer">{tile.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
