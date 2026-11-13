/* English / German language support.
   - Language comes from ?lang=de|en, then the visitor's saved choice, then their browser language.
   - DE below maps English text (exactly as it appears on the page) to German.
   - Case study content in German lives in assets/projects.js (the `de` part of each project). */
window.I18N = (function () {
  const DE = {
    // Navigation & shared
    "Alaa’s": "Alaas", "Design Portfolio": "Design-Portfolio",
    "About me": "Über mich", "Brand identity": "Markenidentität", "Projects": "Projekte", "Experience": "Erfahrung", "Contact": "Kontakt",
    "Menu": "Menü", "Close": "Schließen", "All projects": "Alle Projekte",
    // Hero
    "Hello, I’m Alaa Shaheen": "Hallo, ich bin Alaa Shaheen",
    "I design": "Ich gestalte",
    "intuitive mobile apps, websites and brand identities": "intuitive Mobile Apps, Websites und Markenidentitäten",
    ", and I can build them too. Computer engineer turned designer, based in Cologne, Germany.": " und setze sie auch selbst um. Vom Computer Engineering zum Design, mit Sitz in Köln.",
    "View projects": "Projekte ansehen", "Open to work": "Offen für Jobs", "Open to Junior UX/UI roles": "Offen für Junior-UX/UI-Stellen", "Cologne, hybrid or remote": "Köln, hybrid oder remote", "Available now": "Ab sofort verfügbar",
    // Ribbon
    "UX Research": "UX-Research", "user flows": "User Flows", "prototypes": "Prototypen", "Design Systems": "Designsysteme",
    "brand identity": "Markenidentität", "Accessibility": "Barrierefreiheit", "front-end": "Front-End",
    // About
    "Let’s connect": "Kontakt aufnehmen", "Cologne, Germany": "Köln, Deutschland",
    "I’m a UX/UI designer with a degree in Computer System Engineering and professional Web Design training in Germany. I turn interviews, surveys and usability feedback into clear user flows, Figma prototypes and accessible interfaces. And I speak the language of developers.":
      "Ich bin UX/UI Designer mit einem Abschluss in Computer System Engineering und einer Weiterbildung im Webdesign in Deutschland. Aus Interviews, Umfragen und Usability-Feedback entwickle ich klare User Flows, Figma-Prototypen und barrierefreie Interfaces. Und ich spreche die Sprache der Entwicklung.",
    "Design tools": "Design-Tools", "UX/UI case studies on Behance": "UX/UI-Case-Studies auf Behance", "yrs": "Jahre",
    "Freelance web development, 2016 to 2020": "Freiberufliche Webentwicklung, 2016 bis 2020",
    "German & English working proficiency": "Deutsch & Englisch auf Arbeitsniveau", "steps": "Schritte", "From discovery to build": "Von der Recherche bis zur Umsetzung",
    // Featured
    "★ Flagship project": "★ Leuchtturmprojekt", "About the project": "Über das Projekt",
    "An Austrian food startup making fermentation accessible, selling products online and running workshops. The brand story, shop and workshop booking felt disconnected, so customers needed a clearer path from discovery to purchase.":
      "Ein österreichisches Food-Startup, das Fermentation zugänglich macht, mit Online-Shop und Workshops. Markengeschichte, Shop und Workshop-Buchung wirkten getrennt, deshalb brauchten Kund:innen einen klareren Weg vom Entdecken bis zum Kauf.",
    "What I did: from brand to code": "Meine Aufgaben: von der Marke bis zum Code",
    "Brand strategy, creative direction & full brand guidelines": "Markenstrategie, Creative Direction & vollständige Brand Guidelines",
    "Interviews, surveys, usability feedback & A/B tests": "Interviews, Umfragen, Usability-Feedback & A/B-Tests",
    "User flows, wireframes & Figma prototypes": "User Flows, Wireframes & Figma-Prototypen",
    "React front-end with a Storybook component library": "React-Front-End mit Storybook-Komponentenbibliothek",
    "Live at fermentfreude.at and still evolving": "Live auf fermentfreude.at und in stetiger Weiterentwicklung",
    "Jan 2026 to now": "Seit Januar 2026", "Shop · workshops · learning": "Shop · Workshops · Wissen",
    "Read the full case study": "Ganze Case Study lesen", "Live site ↗": "Live-Website ↗",
    // Projects grid
    "UX/UI Projects": "UX/UI-Projekte", "Selected": "Ausgewählte", "work": "Arbeiten",
    "All · 7": "Alle · 7", "All · 8": "Alle · 8", "Mobile apps · 4": "Mobile Apps · 4", "Websites · 3": "Websites · 3", "Websites · 4": "Websites · 4",
    "See everything on Behance ↗": "Alles auf Behance ansehen ↗",
    "Furniture shopping website": "Möbel-Shopping-Website", "Raw honey website": "Website für Rohhonig", "Modest fashion shopping app": "Shopping-App für Modest Fashion",
    "AI calorie & diet app": "KI-App für Kalorien & Ernährung", "Kids’ storytelling app": "Geschichten-App für Kinder", "Plant shop & care app": "Pflanzenshop & Pflege-App",
    "Brand identity & website UX": "Markenidentität & Website-UX", "★ Flagship case study": "★ Leuchtturm-Case-Study",
    // Process
    "How I work": "So arbeite ich", "My": "Mein", "process": "Prozess",
    "Discover": "Entdecken", "Stakeholder talks, user interviews and surveys to understand goals and pain points.": "Stakeholder-Gespräche, Nutzerinterviews und Umfragen, um Ziele und Pain Points zu verstehen.",
    "Define": "Definieren", "Requirements, hypotheses and customer journeys that frame the right problem.": "Anforderungen, Hypothesen und Customer Journeys, die das richtige Problem eingrenzen.",
    "Design": "Gestalten", "User flows, wireframes and high-fidelity UI in Figma, backed by a brand system.": "User Flows, Wireframes und High-Fidelity-UI in Figma, gestützt auf ein Markensystem.",
    "Validate": "Validieren", "Interactive prototypes, usability feedback and analytics to learn fast.": "Interaktive Prototypen, Usability-Feedback und Analytics, um schnell zu lernen.",
    "Build": "Umsetzen", "Responsive, accessible front-end with HTML, CSS, JS, Webflow and components.": "Responsives, barrierefreies Front-End mit HTML, CSS, JS, Webflow und Komponenten.",
    // Journey
    "Experience & education": "Erfahrung & Ausbildung", "The": "Mein", "journey": "Werdegang",
    "From computer engineering to freelance web development to UX/UI design. Every step added a new layer: how things are built, how clients think, and how people use what I design.":
      "Vom Computer Engineering über freiberufliche Webentwicklung zum UX/UI Design. Jeder Schritt brachte eine neue Ebene: wie Dinge gebaut werden, wie Kund:innen denken und wie Menschen nutzen, was ich gestalte.",
    "Building for the web since": "Entwicklung fürs Web seit", "German & English": "Deutsch & Englisch", "Roles: design, research, code": "Rollen: Design, Research, Code",
    "All": "Alle", "Work": "Beruf", "Education": "Ausbildung", "Now ·": "Aktuell ·",
    "· Austrian food startup · volunteer project": "· Österreichisches Food-Startup · ehrenamtliches Projekt",
    "Brand strategy, creative direction and full brand guidelines": "Markenstrategie, Creative Direction und vollständige Brand Guidelines",
    "Research, user flows, wireframes and Figma prototypes": "Research, User Flows, Wireframes und Figma-Prototypen",
    "Online shop and workshop booking experience": "Online-Shop und Workshop-Buchung",
    "React front-end with Storybook components": "React-Front-End mit Storybook-Komponenten",
    "UX research": "UX-Research", "Read the case study": "Case Study lesen",
    "2024 to 2025": "2024 bis 2025", "2016 to 2020": "2016 bis 2020", "2011 to 2016": "2011 bis 2016",
    "· Professional training in Germany · team projects": "· Berufliche Weiterbildung in Deutschland · Teamprojekte",
    "UX research: interviews, surveys and usability reviews": "UX-Research: Interviews, Umfragen und Usability-Reviews",
    "User flows, wireframes and interactive prototypes in Figma": "User Flows, Wireframes und interaktive Prototypen in Figma",
    "Responsive, mobile-first sites with HTML, CSS, JS and Webflow": "Responsive Mobile-First-Websites mit HTML, CSS, JS und Webflow",
    "Design systems, reusable components and accessibility": "Designsysteme, wiederverwendbare Komponenten und Barrierefreiheit",
    "Freelance Web Developer": "Freiberufliche Webentwicklung", "Self-employed": "Selbstständig", "· Client projects": "· Kundenprojekte",
    "Turned business requirements into responsive web interfaces": "Geschäftsanforderungen in responsive Web-Interfaces übersetzt",
    "Web application development and maintenance": "Entwicklung und Wartung von Webanwendungen",
    "Usability and consistency across devices and screen sizes": "Usability und Konsistenz über Geräte und Bildschirmgrößen hinweg",
    "· Degree": "· Studium",
    "The engineering foundation behind my design work: I understand how the things I design get built": "Das technische Fundament meiner Designarbeit: Ich verstehe, wie das, was ich gestalte, gebaut wird",
    "Problem solving": "Problemlösung", "UX/UI design": "UX/UI Design", "User flows": "User Flows", "Visual design": "Visual Design",
    "Surveys": "Umfragen", "Usability feedback": "Usability-Feedback", "Requirements": "Anforderungen", "A/B testing": "A/B-Tests",
    "Systems & code": "Systeme & Code", "Design systems": "Designsysteme", "Brand guidelines": "Brand Guidelines",
    "Languages": "Sprachen", "German": "Deutsch", "English": "Englisch",
    // Footer
    "Get in touch": "Kontakt", "Let’s work": "Lass uns", "together": "zusammenarbeiten", "Cologne, Germany ·": "Köln, Deutschland ·", "UX/UI Designer · Cologne": "UX/UI Designer · Köln", "Available now for new roles and projects": "Ab sofort verfügbar für neue Stellen und Projekte", "Email": "E-Mail", "The fastest way to reach me": "Der schnellste Weg zu mir", "All my case studies": "Alle meine Case Studies", "Have a project in mind?": "Ein Projekt im Kopf?", "Let’s make it together.": "Lass es uns gemeinsam umsetzen.",
    "Open to Junior UX/UI & Product Design roles in Germany (hybrid or remote) and freelance projects.": "Offen für Junior-Stellen im UX/UI und Product Design in Deutschland (hybrid oder remote) sowie für freie Projekte.",
    "Send an email": "E-Mail schreiben", "Copy email": "E-Mail kopieren", "Copied ✓": "Kopiert ✓",
    "UX/UI designer crafting calm, accessible digital experiences, from research to code.": "UX/UI Designer für ruhige, barrierefreie digitale Erlebnisse, von der Recherche bis zum Code.",
    "Available for work": "Verfügbar für neue Aufgaben", "Explore": "Entdecken", "Process": "Prozess", "Connect": "Vernetzen",
    "Based in": "Standort", "local time": "Ortszeit", "German B2 · English B2": "Deutsch B2 · Englisch B2",
    "Designed & built with care in Cologne": "Mit Sorgfalt gestaltet & gebaut in Köln", "Back to top": "Nach oben",
    "Email copied to clipboard ✓": "E-Mail in die Zwischenablage kopiert ✓",
    // Case study template
    "Overview": "Überblick", "In 30": "In 30", "seconds": "Sekunden", "My role": "Meine Rolle", "Result": "Ergebnis",
    "Role": "Rolle", "Platform": "Plattform", "Year": "Jahr", "Timeline": "Zeitraum", "Client": "Kunde", "Built with": "Gebaut mit",
    "View live site ↗": "Live-Website ansehen ↗", "View on Behance ↗": "Auf Behance ansehen ↗",
    "Before & after": "Vorher & nachher", "How it was,": "So war es,", "how it is now": "so ist es jetzt",
    "Before · old site": "Vorher · alte Website", "After · now": "Nachher · jetzt",
    "The case study": "Die Case Study", "Inside the": "Ein Blick ins", "project": "Projekt",
    "Click any board to view it full size.": "Ein Klick auf ein Board öffnet es in voller Größe.",
    "Keep exploring": "Weiter entdecken", "More": "Mehr", "← Previous project": "← Vorheriges Projekt", "Next project →": "Nächstes Projekt →",
    "The challenge": "Die Herausforderung", "From brand": "Von der Marke", "to code": "bis zum Code",
    "I worked across the whole product, from the first idea to the code running in the browser.": "Ich habe am gesamten Produkt gearbeitet, von der ersten Idee bis zum Code im Browser.",
    "Listening": "Erst", "first": "zuhören",
    "I combined conversations with real people and real data to form hypotheses, then tested them before committing.": "Ich habe Gespräche mit echten Menschen und echte Daten verbunden, um Hypothesen zu bilden, und sie getestet, bevor ich mich festgelegt habe.",
    "repeat": "wiederholen",
    "Where the": "Wo die", "gap": "Lücke", "is": "liegt", "Feature": "Funktion", "Has it": "Vorhanden", "Missing": "Fehlt", "Next step": "Nächster Schritt",
    "Who it’s": "Für wen", "for": "es ist", "Needs": "Bedürfnisse", "Pain points": "Pain Points",
    "Insights → principles": "Erkenntnisse → Prinzipien", "Four things the site has to": "Vier Dinge, die die Website", "show": "zeigen muss", "Insight": "Erkenntnis",
    "How it": "Wie alles", "came together": "entstand",
    "The experience": "Das Erlebnis", "Walk": "Ein Rundgang", "through": "durch", "the store": "den Store",
    "Eight moments from the live prototype, each one answering a question from the research.": "Acht Momente aus dem Live-Prototyp, jeder beantwortet eine Frage aus der Recherche.",
    "Brand system": "Markensystem", "A brand that feels": "Eine Marke, die sich", "natural": "natürlich anfühlt",
    "Full brand guidelines for typography, colour, graphics and photography, so the brand looks the same on the website, in the shop and on social media.": "Vollständige Brand Guidelines für Typografie, Farbe, Grafik und Fotografie, damit die Marke auf der Website, im Laden und auf Social Media gleich aussieht.",
    "Colour": "Farbe", "Click a swatch to copy its hex code": "Ein Klick auf ein Farbfeld kopiert den Hex-Code", "Copy": "Kopieren",
    "Typography": "Typografie", "A clear hierarchy from headline to caption": "Eine klare Hierarchie von der Headline bis zur Bildunterschrift",
    "Logo & merchandise": "Logo & Merchandise", "The mark on totes and in-store signage": "Das Zeichen auf Taschen und an der Ladenbeschilderung",
    "Photography direction": "Bildsprache", "Warm, honest and hands-on: real workshops and real jars": "Warm, ehrlich und nahbar: echte Workshops und echte Gläser",
    "Posters and flyers for workshops": "Plakate und Flyer für Workshops", "Social media": "Social Media", "Drag or scroll sideways →": "Zur Seite ziehen oder scrollen →",
    "Key design decisions": "Wichtige Designentscheidungen", "What I": "Was ich", "changed": "verändert habe",
    "Validation plan": "Validierungsplan", "How I’d": "Wie ich es", "measure": "messen", "it": "würde",
    "Each big idea becomes a hypothesis with a test and a metric, so the next version is decided by data.": "Jede große Idee wird zu einer Hypothese mit Test und Kennzahl, damit Daten über die nächste Version entscheiden.",
    "Reflection": "Reflexion", "learned": "gelernt habe", "Next steps": "Nächste Schritte", "Outcome": "Ergebnis",
    "← Prev": "← Zurück", "Next →": "Weiter →", "Close ✕": "Schließen ✕",
    "oops…": "hoppla…", "Not found": "Nicht gefunden", "This case study doesn’t exist (yet).": "Diese Case Study gibt es (noch) nicht.", "Back to all projects": "Zurück zu allen Projekten",
    // Chapter bar
    "Challenge": "Herausforderung", "Research": "Research", "Principles": "Prinzipien", "Walkthrough": "Rundgang", "Brand": "Marke",
    "Decisions": "Entscheidungen", "Testimonial": "Stimme", "What the founder says": "Stimme aus dem Gründungsteam", "Kind words": "Was andere sagen", "Download my CV (PDF)": "Lebenslauf herunterladen (PDF)", "Junior UX/UI Designer · 2 pages": "Junior UX/UI Designer · 2 Seiten", "Rebrand, UX/UI design and front-end work for the shop and workshop booking, in a team with Rafaela Vaz.": "Rebranding, UX/UI Design und Front-End für Shop und Workshop-Buchung, im Team mit Rafaela Vaz.", "Certificate of completion": "Abschlusszertifikat", "Systems & quality": "Systeme & Qualität", "Responsive design": "Responsive Design", "Jul 2025": "Juli 2025", "· Online course on Coursera": "· Online-Kurs auf Coursera", "Using generative AI tools in everyday work": "Generative KI-Tools im Arbeitsalltag nutzen", "Writing effective prompts": "Wirksame Prompts schreiben", "Using AI responsibly": "KI verantwortungsvoll einsetzen", "AI tools": "KI-Tools", "Responsible AI": "Verantwortungsvolle KI", "Course certificate": "Kurszertifikat", "Google · Coursera · Jul 2025": "Google · Coursera · Juli 2025", "Verify on Coursera": "Auf Coursera prüfen", "Degree": "Abschluss", "Bachelor of Engineering": "Bachelor of Engineering", "Computer System Engineering · awarded 2016": "Computer System Engineering · verliehen 2016", "Certificate available on request": "Zeugnis auf Anfrage", "Certificate": "Zertifikat", "Interactive Web Designer": "Interactive Web Designer:in", "960 teaching units · Dec 2024 to Jun 2025": "960 Unterrichtseinheiten · Dez. 2024 bis Jun. 2025", "Rapid prototyping · Custom UI library · Final project": "Rapid Prototyping · Eigene UI-Bibliothek · Abschlussprojekt", "View certificate": "Zertifikat ansehen", "Evolution": "Verlauf", "Project evolution": "Projektverlauf", "What the": "Was die", "platform": "Plattform", "includes": "umfasst", "did": "gemacht habe", "View code on GitHub ↗": "Code auf GitHub ansehen ↗", "Interactive dessert menu book": "Interaktives Dessert-Menübuch", "Rebrand: strategy, creative direction & full brand guidelines": "Rebranding: Strategie, Creative Direction & vollständige Brand Guidelines", "Usability feedback, analytics & A/B tests": "Usability-Feedback, Analytics & A/B-Tests", "User flows, wireframes and Figma prototypes": "User Flows, Wireframes und Figma-Prototypen", "Rebrand: brand strategy, creative direction and guidelines": "Rebranding: Markenstrategie, Creative Direction und Guidelines", "Contributed to the React front-end and Storybook components": "Mitarbeit am React-Front-End und an Storybook-Komponenten", "Contributed to the React front-end with Storybook components": "Mitarbeit am React-Front-End mit Storybook-Komponenten", "Team project with Rafaela Vaz": "Teamprojekt mit Rafaela Vaz", "Founder, Fermentfreude OG · LinkedIn recommendation": "Founder, Fermentfreude OG · LinkedIn-Empfehlung (englisches Original)", "Read the full case study →": "Ganze Case Study lesen →", "Validation": "Validierung", "Learned": "Gelernt", "Empathy map": "Empathy Map", "In motion": "In Bewegung", "See it": "Live", "in action": "erleben", "A short recording of the live site, so you can see the interactions without leaving this page.": "Eine kurze Aufnahme der Live-Website: alle Interaktionen auf einen Blick, ohne diese Seite zu verlassen.", "Molecular roastery online shop": "Onlineshop als molekulare Rösterei", "Key decisions": "Wichtige Entscheidungen", "Key screens": "Wichtige Screens", "Tone": "Tonalität", "Tone mapping": "Tone Mapping", "Duration": "Dauer"
  };

  let saved = null;
  try { saved = localStorage.getItem("alaa-lang"); } catch (e) {}
  const param = new URLSearchParams(location.search).get("lang");
  const browserDe = (navigator.languages || [navigator.language || ""]).some(l => /^de\b/i.test(l));
  const lang = param === "de" || param === "en" ? param : saved === "de" || saved === "en" ? saved : browserDe ? "de" : "en";
  if (param) try { localStorage.setItem("alaa-lang", lang); } catch (e) {}
  document.documentElement.lang = lang;

  const T = s => (lang === "de" && DE[s] != null ? DE[s] : s);

  function apply(root) {
    if (lang !== "de") return;
    const w = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement && !n.parentElement.closest("script, style, svg") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n => {
      const raw = n.nodeValue, key = raw.replace(/\s+/g, " ").trim();
      if (key && DE[key] != null) n.nodeValue = raw.match(/^\s*/)[0] + DE[key] + raw.match(/\s*$/)[0];
    });
  }

  function mergeDeep(target, src) {
    Object.keys(src).forEach(k => {
      const v = src[k];
      if (v && typeof v === "object" && !Array.isArray(v) && target[k] && typeof target[k] === "object" && !Array.isArray(target[k])) mergeDeep(target[k], v);
      else target[k] = v;
    });
    return target;
  }

  function toggle() {
    const nav = document.querySelector(".nav-links"); if (!nav) return;
    const b = document.createElement("button");
    b.type = "button"; b.className = "lang-toggle"; b.setAttribute("data-hover", "");
    b.title = lang === "de" ? "Switch to English" : "Auf Deutsch wechseln";
    b.innerHTML = `<span class="${lang === "en" ? "on" : ""}">EN</span> <span class="${lang === "de" ? "on" : ""}">DE</span><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap"> (${b.title})</span>`;
    b.addEventListener("click", () => {
      const next = lang === "de" ? "en" : "de";
      try { localStorage.setItem("alaa-lang", next); } catch (e) {}
      const u = new URL(location.href); u.searchParams.set("lang", next); location.href = u.toString();
    });
    const cta = nav.querySelector(".cta"); nav.insertBefore(b, cta || null);
  }

  return { lang, T, apply, mergeDeep, toggle, DE };
})();
