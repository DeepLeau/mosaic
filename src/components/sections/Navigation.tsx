import LogoMark from "@/components/ui/LogoMark";

const NAV_LINKS = [
  { label: "Concerts", active: true },
  { label: "Expositions", active: false },
  { label: "Théâtre", active: false },
  { label: "Cinéma", active: false },
  { label: "Festivals", active: false },
];

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <LogoMark />
          Mosaic
        </a>
        <ul className="nav-center">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href="#categories"
                className={link.active ? "active" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a href="#" className="btn-ghost on-dark compact">
            Se connecter
          </a>
          <a href="#join" className="btn-primary on-dark">
            Créer un compte
          </a>
        </div>
      </div>
    </nav>
  );
}
