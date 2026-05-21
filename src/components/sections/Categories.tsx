"use client";

import { useState } from "react";

const TABS = ["Tout", "Cette semaine", "Ce week-end", "Près de moi"];

const CATEGORIES = [
  { className: "c1", emoji: "🎵", title: "Concerts", subtitle: "147 ce mois-ci" },
  { className: "c2", emoji: "🎨", title: "Expositions", subtitle: "62 en cours" },
  { className: "c3", emoji: "🎭", title: "Théâtre", subtitle: "89 pièces" },
  { className: "c4", emoji: "🎬", title: "Cinéma", subtitle: "Avant-premières" },
  { className: "c5", emoji: "🎪", title: "Festivals", subtitle: "18 à venir" },
  { className: "c6", emoji: "🩰", title: "Danse", subtitle: "Opéra · Modern" },
  { className: "c7", emoji: "📚", title: "Lectures", subtitle: "Auteurs en vrai" },
  { className: "c8", emoji: "🎤", title: "Stand-up", subtitle: "Comedy clubs" },
];

export default function Categories() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="section-periwinkle" id="categories">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Pour toutes les envies</div>
          <h2 className="section-title">
            Choisis ta scène, <em>on s&apos;occupe du reste</em>.
          </h2>
          <p className="section-sub">
            Mosaic couvre toute la programmation culturelle. Filtre par
            catégorie ou par humeur du moment.
          </p>
        </div>

        <div className="tab-selector">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.className} className={`cat-card ${cat.className}`}>
              <div className="cat-emoji">{cat.emoji}</div>
              <h4>{cat.title}</h4>
              <span>{cat.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
