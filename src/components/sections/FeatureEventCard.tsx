export default function FeatureEventCard() {
  return (
    <section className="section-periwinkle">
      <div className="container">
        <div className="feature-row">
          <div className="feature-text">
            <h2>
              Chaque événement devient une{" "}
              <em>rencontre potentielle</em>.
            </h2>
            <p>
              Tu vois ce qui se passe, tu vois qui veut y aller, tu décides. Pas
              de profils interminables à scroller. Juste l&apos;événement, les
              gens, et la suite logique.
            </p>
            <a href="#join" className="btn-primary">
              Découvrir l&apos;app →
            </a>
          </div>
          <div className="event-card">
            <div className="event-img">
              <div className="event-img-label">
                Concert
                <br />
                Phoenix
              </div>
            </div>
            <h3>Phoenix en concert</h3>
            <div className="event-meta">
              Vendredi 23 mai · 20h
              <br />
              La Cigale, Paris
            </div>
            <div className="guest-row">
              <div className="avatars">
                <div className="av a1">L</div>
                <div className="av a2">M</div>
                <div className="av a3">T</div>
                <div className="av a4">S</div>
                <div className="plus-n">+12</div>
              </div>
              <span className="guest-label">veulent y aller</span>
              <span className="status-pill going ml-auto">● Match</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
