import LogoMark from "@/components/ui/LogoMark";

const FOOTER_COLUMNS = [
  {
    title: "Produit",
    links: [
      { label: "Comment ça marche", href: "#how" },
      { label: "Catégories", href: "#categories" },
      { label: "Télécharger", href: "#join" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos", href: "#" },
      { label: "Presse", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "CGU", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <LogoMark />
              Mosaic
            </a>
            <p>
              L&apos;app qui te connecte aux personnes qui veulent aller au même
              événement culturel que toi.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer-col">
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mosaic — Tous droits réservés</span>
          <span>Made with ✨ in Paris</span>
        </div>
      </div>
    </footer>
  );
}
