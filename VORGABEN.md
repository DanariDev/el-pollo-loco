# El Pollo Loco – Offizielle Vorgaben (Developer Akademie)

## Allgemeine Regeln
- **Vanilla JavaScript (ES6)** – keine Frameworks, keine externen Libraries.
- **Canvas 2D API** für Darstellung, kein DOM‑Manipulieren für Spielfiguren.
- **Saubere Projektstruktur** (HTML, CSS, JS, Assets klar getrennt).
- **Alle Funktionen kurz & klar** – max. ~15 Zeilen; keine Monsterfunktionen.
- **Kommentieren** nur wo nötig (kein Roman, aber kurze Erklärungen).
- **Kein Alert/Prompt** für Spielfeedback – nur HUD, Text, Grafiken.
- **Responsiv** – Canvas mittig, anpassbar (fixed aspect ratio).

---

## Aufbau & Abgabe
- Ein **Repository** (GitHub) mit vollständiger Struktur.
- Einstieg: **index.html** mit `<canvas>`.
- Ordner wie folgt:
```
/css   → Styles (style.css)
/js    → Module (main.js, world.js, classes...)
/assets/img → Bilder, Sprites
/assets/audio → optional Sounds
```
- **README.md** mit kurzer Spielbeschreibung + Steuerung.

---

## Projektphasen (laut Kursplan)

### Phase 1 – Objekte erstellen
- Canvas initialisieren, erste Grafiken laden.
- Klassenstruktur: `Drawable` (Basis), `Movable` (mit Bewegung, Gravitation).
- Objekte: Wolken, Huhn, Held.
- Hintergrundgrafiken einfügen, Architektur bauen.
- Objekt-Positionierung & Layering (Hintergrund, Vordergrund, Charaktere).

### Phase 2 – Spiellogik
- Keyboardsteuerung implementieren.
- Charakter animieren (laufen, springen).
- Kamera folgt dem Spieler (X‑Achse).
- Gegner animieren & bewegen.
- Kollisionen vorbereiten.

### Phase 3 – Mathematik & Physik
- Gravitation & Sprungmechanik.
- Collision Detection (AABB).
- Schaden & Lebensanzeige.
- Game Over / Neustart.

---

## Erlaubt / Nicht erlaubt

✅ **Erlaubt**
- Modularisierung über JS‑Dateien
- Nutzung von `class` und `extends`
- `requestAnimationFrame` für Loop
- Hilfsfunktionen in `utils.js`
- Platzhaltergrafiken am Anfang (bunte Boxen)

❌ **Nicht erlaubt**
- jQuery, Phaser, Three.js, o.ä.
- Inline‑JS oder Inline‑CSS
- `alert()`, `prompt()`, `confirm()` als Spiellogik
- Unstrukturierter Spaghetti‑Code (alles in einer Datei)

---

## Akzeptanzkriterien
- Spiel läuft flüssig mit ca. 60 FPS.
- Charakter steuerbar (links/rechts, springen).
- Gegner vorhanden & beweglich.
- Hintergrund parallax scrollend.
- Gravitation & Kollisionen funktionieren.
- HUD zeigt Leben/Punkte.
- Restart möglich (z.B. Taste oder Button).
- Code nachvollziehbar, modular, kurze Funktionen.

---

## Abgabehinweis
- Letzter Stand muss **fehlerfrei builden** und laufen.
- Nur Dateien committen, die ins Projekt gehören (kein .vscode, node_modules).
- Im Zweifel: Einfach halten, lieber weniger Features aber stabil & sauber.
