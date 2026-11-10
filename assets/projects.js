/* Project data for the case study pages (project.html?p=<slug>).
   Text and images come from Alaa's Behance projects (behance.net/alaashaheen16).
   To edit a case study, change its entry below. */
window.PROJECTS = (function () {
  const M = "https://mir-s3-cdn-cf.behance.net/project_modules/";
  const C = "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/";
  const imgs = list => list.map(u => M + u);
  // Images are stored in assets/work/<project>/ (copied from Behance) so the site does not depend on Behance.
  const LOCAL = {"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b5d3af258133951.Y3JvcCw3NTUsNTkxLDI4LDM5.jpg": "assets/work/casavue-web/cover-5d3af258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ff0026258133951.6aedc7ef078fd.jpg": "assets/work/casavue-web/board-f0026258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/adc81a258133951.6aedc7ef069ae.jpg": "assets/work/casavue-web/board-dc81a258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b66f4f258133951.6aedc7ef06298.jpg": "assets/work/casavue-web/board-66f4f258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e1881258133951.6aedc7ef07ce9.jpg": "assets/work/casavue-web/board-e1881258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7ec0be258133951.6aedc7ef0924d.jpg": "assets/work/casavue-web/board-ec0be258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2cfc50258133951.6aedc7ef05e77.jpg": "assets/work/casavue-web/board-cfc50258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2c76eb258133951.6aedc7ef08063.jpg": "assets/work/casavue-web/board-c76eb258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6d095e258133951.6aedc7ef07169.jpg": "assets/work/casavue-web/board-d095e258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/81ab95258133951.6aedc7ef08785.jpg": "assets/work/casavue-web/board-1ab95258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9aefda258133951.6aedc7ef08eb3.jpg": "assets/work/casavue-web/board-aefda258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/484d07258133951.6aedc7ef083f7.jpg": "assets/work/casavue-web/board-84d07258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/da3c08258133951.6aedc7ef095c4.jpg": "assets/work/casavue-web/board-a3c08258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3d88cf258133951.6aedc7ef08b01.jpg": "assets/work/casavue-web/board-d88cf258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e5aed1258133951.6aedc7ef07560.jpg": "assets/work/casavue-web/board-5aed1258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b03c34258133951.6aedc7ef0661b.jpg": "assets/work/casavue-web/board-03c34258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4d1a1d258133951.6aedc7ef09964.jpg": "assets/work/casavue-web/board-d1a1d258133951.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e269ab258133951.6aedc7ef06d72.jpg": "assets/work/casavue-web/board-269ab258133951.webp", "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/730add257105511.Y3JvcCwxNTM5LDEyMDQsMjIsMA.png": "assets/work/bienenhaus/cover-30add257105511.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/635af7257105511.6acf98becc601.jpg": "assets/work/bienenhaus/board-35af7257105511.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bbf5a8257105511.6acf98becbf14.jpg": "assets/work/bienenhaus/board-bf5a8257105511.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1860a8257105511.6acf98becbb79.jpg": "assets/work/bienenhaus/board-860a8257105511.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7322d3257105511.6acf98becc267.jpg": "assets/work/bienenhaus/board-322d3257105511.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/959951257105511.6acf98becc940.jpg": "assets/work/bienenhaus/board-59951257105511.webp", "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/93c038239610529.Y3JvcCwxMDA2LDc4NywwLDIxOQ.png": "assets/work/abaya-store/cover-3c038239610529.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1b7e88239610529.692d77dc66cb9.png": "assets/work/abaya-store/board-b7e88239610529.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6b8bb3239610529.692d77dc68b3d.png": "assets/work/abaya-store/board-b8bb3239610529.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7a7857239610529.692d77dc693f1.png": "assets/work/abaya-store/board-a7857239610529.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/fcbd6b239610529.692d7ba648efa.png": "assets/work/abaya-store/board-cbd6b239610529.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c0a238239610529.692d77dc684a9.png": "assets/work/abaya-store/board-0a238239610529.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/26ca9e239610529.692d77dc67be6.png": "assets/work/abaya-store/board-6ca9e239610529.webp", "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3523c2238047517.Y3JvcCw4ODYsNjkzLDAsMTk.png": "assets/work/caltrack/cover-523c2238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ecf50f238047517.690cb76536f1a.png": "assets/work/caltrack/board-cf50f238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b821f5238047517.690cb76538409.png": "assets/work/caltrack/board-821f5238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c31303238047517.690cb76538a71.png": "assets/work/caltrack/board-31303238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d8ac81238047517.690cb76537cd2.png": "assets/work/caltrack/board-8ac81238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f95bee238047517.690cb76537637.png": "assets/work/caltrack/board-95bee238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e5b487238047517.690cb765397b3.png": "assets/work/caltrack/board-5b487238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/227280238047517.690d0a6258c4c.png": "assets/work/caltrack/board-27280238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/643a1a238047517.690cb818b1edf.png": "assets/work/caltrack/board-43a1a238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/976817238047517.690cb765390f1.png": "assets/work/caltrack/board-76817238047517.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8b1071238047517.690d0a6259115.png": "assets/work/caltrack/board-b1071238047517.webp", "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/010429235882915.Y3JvcCwxMDYzLDgzMiwxMDcsMA.png": "assets/work/little-chapter/cover-10429235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/0eaea9235882915.68e01c8762041.png": "assets/work/little-chapter/board-eaea9235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/387d10235882915.68e01c8761672.png": "assets/work/little-chapter/board-87d10235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/9d4a1d235882915.68e01c876348c.png": "assets/work/little-chapter/board-d4a1d235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/7ecf39235882915.68e01c8762e48.png": "assets/work/little-chapter/board-ecf39235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/01f45d235882915.68e01c876053f.png": "assets/work/little-chapter/board-1f45d235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/367b80235882915.68e01c875fd3b.png": "assets/work/little-chapter/board-67b80235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5de89c235882915.68e7b8bab62c0.png": "assets/work/little-chapter/board-de89c235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/eab6fe235882915.68e01dc41d744.png": "assets/work/little-chapter/board-ab6fe235882915.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/340bd3235882915.68e01c8763efa.png": "assets/work/little-chapter/board-40bd3235882915.webp", "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2d750d230573965.Y3JvcCwyMTA2LDE2NDgsMzEsMA.png": "assets/work/grove/cover-d750d230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1315c1230573965.68790b883ecf7.png": "assets/work/grove/board-315c1230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d03c0d230573965.68790b8840c32.png": "assets/work/grove/board-03c0d230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a77d4d230573965.687953251c803.png": "assets/work/grove/board-77d4d230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/285f9b230573965.687953251bae7.png": "assets/work/grove/board-85f9b230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/dac537230573965.68790b883fd7d.png": "assets/work/grove/board-ac537230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4a7f9f230573965.6879552e55fa2.png": "assets/work/grove/board-a7f9f230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f2bfbb230573965.687953251c183.png": "assets/work/grove/board-2bfbb230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bf0b4a230573965.6879552e55a49.png": "assets/work/grove/board-f0b4a230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/46828a230573965.68790b883d625.png": "assets/work/grove/board-6828a230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b0dbf4230573965.68790b8840239.png": "assets/work/grove/board-0dbf4230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/97685b230573965.6879552e566b5.png": "assets/work/grove/board-7685b230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/fbfa35230573965.68790b883e2a3.png": "assets/work/grove/board-bfa35230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/756939230573965.68790b883b8b4.png": "assets/work/grove/board-56939230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/68af49230573965.68790b883c12f.png": "assets/work/grove/board-8af49230573965.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ee893f230573965.68790c824d5e9.png": "assets/work/grove/board-e893f230573965.webp", "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/127e80246062163.Y3JvcCw3MzIsNTcyLDU5LDExNg.png": "assets/work/ferment-freude/cover-27e80246062163.webp", "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/7d4725246062163.69bb3afc783ff.png": "assets/work/ferment-freude/board-d4725246062163.webp"};
  const local = u => LOCAL[u] || u;
  const list = [
    {
      slug: "ferment-freude", tldr: { problem: "Fermentation feels complicated, and the brand’s shop, workshops and story felt disconnected.", role: "Brand strategy, UX research, UI design and React development, from first talk to production.", result: "A unified brand and a live website at fermentfreude.at, with ongoing UX/UI and front-end work." }, behance: "246062163/ferment-freude-Brand-Identity-Website-UX",
      title: "ferment freude", tagline: "Brand identity & website UX", kind: "web", kindLabel: "Brand identity · UI/UX · React", year: "2026",
      role: "UI/UX design & React development", platform: "Responsive web", tools: ["Figma", "React", "Storybook"],
      live: "https://www.fermentfreude.at/",
      cover: C + "127e80246062163.Y3JvcCw3MzIsNTcyLDU5LDExNg.png",
      overview: [
        "Fermentfreude is an Austrian food startup dedicated to making fermentation accessible for both everyday use and the food service industry. The platform explains complex processes in a simple, approachable way, removing uncertainty and encouraging people to try it.",
        "I was responsible for the UI/UX design as well as the React development. The UX focused on a clear, intuitive journey for exploring workshops, products and educational content. The UI reflects the brand’s natural, experimental character through thoughtful typography, spacing and visual hierarchy, and the React build keeps the experience smooth and consistent across devices."
      ],
      highlights: ["Brand strategy & creative direction with the owner", "Full brand guidelines: type, graphics, photography", "Clear journey for workshops, products and learning", "Clean, modern UI with strong hierarchy", "Responsive React build aligned with the design system"],
      tags: ["Branding", "Logo design", "Visual identity", "Web design", "React"],
      video: "https://www-ccv.adobe.io/v1/player/ccv/4r-2Ty5PqgT/embed?api_key=behance1&bgcolor=%23191919",
      beforeAfter: {
        intro: "The old Wix site listed workshop dates in a plain table. The new site guides visitors through workshops, products and learning with a clearer structure and a calmer, more modern look.",
        credit: "Screenshots: Rafaela Vaz · älma studio",
        pairs: [
          { label: "Home page", before: "assets/ferment-before-after/ff-wix-home.jpg", after: "assets/ferment-before-after/ff-site-home-kombucha.jpg" },
          { label: "Workshops", before: "assets/ferment-before-after/ff-wix-dates.jpg", after: "assets/ferment-before-after/ff-site-workshops.jpg" }
        ]
      },
      images: imgs(["max_632_webp/7d4725246062163.69bb3afc783ff.png"]),
      flagship: true,
      facts: [["Role", "Brand, UX/UI & React development"], ["Timeline", "Jan 2026 to now"], ["Client", "Austrian food startup"], ["Tools", "Figma · React · Storybook · AI tools"]],
      story: {
        challenge: {
          statement: "Fermentation can feel complicated, and the brand’s digital presence wasn’t making it any easier.",
          points: [
            ["Disconnected experience", "Product pages, workshop booking and the brand story felt like separate places."],
            ["No clear path", "Customers needed a simpler route from discovering the brand to buying a product or booking a workshop."],
            ["Inconsistent identity", "The brand needed a clearer, more consistent identity across digital and print."],
            ["Workshops buried in a table", "On the old Wix site, workshop dates lived in a plain table with separate buttons for booking."]
          ]
        },
        roles: [
          ["Brand strategy & direction", "Kick-off with the owner, brand strategy and full brand guidelines: type, graphics and photography."],
          ["UX research", "Interviews, surveys and usability feedback to understand where customers got stuck."],
          ["UX/UI design", "User flows, wireframes and high-fidelity Figma prototypes for the shop, workshops and learning content."],
          ["Front-end development", "A responsive React build with reusable components documented in Storybook."]
        ],
        process: [
          ["Kick-off", "Brand strategy and creative direction with the owner."],
          ["Research", "Stakeholder and user interviews, online surveys and an analytics review."],
          ["Brand system", "Typography, colour, graphics, photography direction and logo applications."],
          ["UX & UI", "Flows, wireframes and Figma prototypes for shop, workshops and learning."],
          ["Build", "React front-end with reusable Storybook components."],
          ["Iterate", "Usability feedback, hypotheses and A/B tests, ongoing."]
        ],
        research: {
          methods: ["Stakeholder interviews with the owner", "User interviews", "Online surveys", "Usability feedback sessions", "Analytics review of drop-off points", "A/B testing"],
          loop: ["Hypothesis", "Test", "Learn"]
        },
        brand: {
          palette: [["Cream", "#FAF2E0"], ["Charcoal", "#2D2F2C"], ["Sage", "#B0C7B8"], ["Mustard", "#E6BE68"]],
          type: [["Fonseca", "Headlines & titles"], ["Bricolage Grotesque", "Display and calls to attention"], ["Balto", "Body text & captions"], ["DIN Next", "Secondary typeface"]],
          typeBoards: ["assets/brand/brand_jpg_0.jpg", "assets/brand/brand_jpg_1.jpg"],
          logo: ["assets/brand/brand_jpg_16.jpg", "assets/brand/brand_jpg_17.jpg", "assets/brand/brand_jpg_14.jpg", "assets/brand/brand_jpg_29.jpg"],
          photo: ["assets/brand/brand_jpg_6.jpg", "assets/brand/brand_jpg_12.jpg", "assets/brand/brand_jpg_10.jpg", "assets/brand/brand_jpg_4.jpg", "assets/brand/brand_jpg_13.jpg", "assets/brand/brand_jpg_2.jpg", "assets/brand/brand_jpg_9.jpg", "assets/brand/brand_jpg_11.jpg", "assets/brand/brand_jpg_5.jpg"],
          print: ["assets/brand/brand_jpg_15.jpg", "assets/brand/brand_jpg_19.jpg", "assets/brand/brand_jpg_20.jpg", "assets/brand/brand_jpg_21.jpg"],
          social: ["assets/brand/brand_jpg_22.jpg", "assets/brand/brand_jpg_25.jpg", "assets/brand/brand_jpg_23.jpg", "assets/brand/brand_jpg_26.jpg", "assets/brand/brand_jpg_27.jpg", "assets/brand/brand_jpg_28.jpg", "assets/brand/brand_jpg_24.jpg"]
        },
        decisions: [
          ["Clearer product hierarchy", "Products are easier to scan and compare, so the shop feels calm instead of crowded."],
          ["A shorter workshop booking", "Fewer steps from discovering a workshop to booking it. No more hunting through a table of dates."],
          ["Reusable components", "A Storybook component library keeps the UI consistent and makes handoff and new pages faster."],
          ["Mobile-first & accessible", "Layouts start on small screens, with readable type and clear hierarchy for accessibility and conversion."]
        ],
        outcome: {
          title: ["Live, and", "still growing"], cta: "Visit fermentfreude.at",
          points: ["A unified brand system across digital and physical touchpoints", "A clearer shop and workshop experience", "Design iterations informed by research and data", "A living component library for ongoing product work"],
          ongoing: "The site is live at fermentfreude.at, and the work continues. After the volunteer phase I keep taking on 4 to 6 UX/UI and front-end tasks every month."
        }
      }
    },
    {
      slug: "casavue-web", tldr: { problem: "Flat product photos make it hard to imagine furniture in your own room.", role: "UX research, UI design and front-end development of a working prototype.", result: "A live, coded prototype: daylight and lamp previews, room placement, size checks and a 3-tap style finder." }, behance: "258133951/CasaVue-Furniture-Shopping-Website-UX-Case-Study",
      title: "CasaVue", tagline: "Furniture shopping, brought to life on the web", kind: "web", kindLabel: "Website · UX case study", year: "2026",
      role: "UX research, UI design & front-end", platform: "Desktop & mobile web", tools: ["HTML", "CSS", "JavaScript"],
      live: "https://alaashaheen93.github.io/CasaVue/",
      cover: C + "b5d3af258133951.Y3JvcCw3NTUsNTkxLDI4LDM5.jpg",
      overview: [
        "CasaVue brings my furniture-app research to the web as a working, coded prototype.",
        "Instead of guessing from flat product photos, shoppers can see how furniture really looks and fits in their own space, and find their style in seconds."
      ],
      highlights: ["Drag the sun across a real room to preview daylight", "Switch every lamp on to see evening light", "Place pieces in your own room", "Check sizes against your wall", "Find your style in three taps"],
      tags: ["User research", "Interaction design", "Prototype", "E-commerce", "Responsive"],
      images: imgs(["1400_webp/ff0026258133951.6aedc7ef078fd.jpg", "1400_webp/adc81a258133951.6aedc7ef069ae.jpg", "1400_webp/b66f4f258133951.6aedc7ef06298.jpg", "1400_webp/0e1881258133951.6aedc7ef07ce9.jpg", "1400_webp/7ec0be258133951.6aedc7ef0924d.jpg", "1400_webp/2cfc50258133951.6aedc7ef05e77.jpg", "1400_webp/2c76eb258133951.6aedc7ef08063.jpg", "1400_webp/6d095e258133951.6aedc7ef07169.jpg", "1400_webp/81ab95258133951.6aedc7ef08785.jpg", "1400_webp/9aefda258133951.6aedc7ef08eb3.jpg", "1400_webp/484d07258133951.6aedc7ef083f7.jpg", "1400_webp/da3c08258133951.6aedc7ef095c4.jpg", "1400_webp/3d88cf258133951.6aedc7ef08b01.jpg", "1400_webp/e5aed1258133951.6aedc7ef07560.jpg", "1400_webp/b03c34258133951.6aedc7ef0661b.jpg", "1400_webp/4d1a1d258133951.6aedc7ef09964.jpg", "1400_webp/e269ab258133951.6aedc7ef06d72.jpg"]),
      flagship: true,
      facts: [["Role", "UX research, UI design & front-end"], ["Platform", "Desktop & mobile web"], ["Built with", "HTML · CSS · JavaScript"], ["Year", "2026"]],
      story: {
        challenge: {
          statement: "Shoppers can’t tell how a piece will look in their own space, so they hesitate before buying and return it after.",
          em: "their own space",
          points: [
            ["See it in your room", "Let shoppers place a piece in a room before it goes in the bag."],
            ["Real size, real light", "Show true dimensions and how materials look from morning to night."],
            ["A showroom, not a catalogue", "Make browsing feel like walking through rooms instead of scrolling a grid."],
            ["A short path to the bag", "Keep every product one tap from “Try in room” and “Add to bag”."]
          ]
        },
        roles: [
          ["UX research", "An online survey, a competitor comparison and two personas."],
          ["UX & interaction design", "A structure that follows the shopper’s journey, plus the room planner, light and scale concepts."],
          ["Visual design", "A calm slate-teal palette with one warm amber reserved for light."],
          ["Front-end development", "Built as a real, working site in HTML, CSS and JavaScript, not static screens."]
        ],
        stats: {
          title: ["What the", "survey", "told me"],
          items: [["73%", "had returned furniture they bought online."], ["63%", "said their biggest frustration is not seeing how a piece will look in their space."], ["55%", "would use a tool that previews furniture in their own room."], ["9%", "shop for furniture in mobile apps, compared with 72% on websites and 81% in physical stores."]],
          insights: [["Key insight", "Visualisation is the main pain point, ahead of photos, comparison or materials. Showing furniture in context matters more than any other feature."], ["Why web", "Shoppers already research furniture on websites. A browser experience meets them there, with no install needed before they can try a piece."]],
          note: "Online survey (Google Forms), shared via email, social media and WhatsApp."
        },
        competitors: {
          cols: ["IKEA", "OTTO", "CasaVue"],
          rows: [["Real customer photos", "no", "yes", "next"], ["Filtering & search", "no", "yes", "yes"], ["In-room preview (AR)", "yes", "no", "yes"], ["Ease of use", "yes", "no", "yes"]],
          text: "Each store covers half the list. Neither pairs an in-room preview with clear filtering and an easy flow, and that’s the gap CasaVue aims for."
        },
        personas: [
          { name: "Ayman, 34", role: "Full-stack developer · Cologne", needs: "Just moved into a new apartment and wants functional furniture that suits his minimalist taste.", pains: "Cluttered, slow sites, vague specs, and forced account creation at checkout." },
          { name: "Ilham, 33", role: "Accountant · Leverkusen", needs: "Wants modern, quality pieces that fit a small space, and to compare dimensions and materials.", pains: "Near-identical listings and reviews that feel paid or overly positive." }
        ],
        principles: [
          ["See it in your room", "63% can’t picture a piece in their space.", "A room planner: drop pieces into a sample room or your own photo, drag, turn and total the price."],
          ["See it in your light", "Photos taken in studio light don’t match real homes.", "A hero you can “drag the sun” across, plus a light switch in the lighting studio and room planner."],
          ["See it to scale", "Ilham shops for small spaces and needs real dimensions.", "One tape measure for every piece, set against the width of your own wall."],
          ["Walk, don’t scroll", "A grid of products feels like a catalogue, not a store.", "Rooms open like doors, the hero walks you in, and a three-question quiz finds your style."]
        ],
        process: [
          ["The door", "Hero walks you into a lit room", "Discovery"], ["Rooms", "Pick a room through its doorway", "Browsing"], ["Lighting studio", "Switch every lamp on and off", "Browsing"], ["Try in your room", "Place, drag and turn pieces", "Exploration"],
          ["To scale", "Compare against your wall", "Consideration"], ["Find your style", "Three quick either/or picks", "Consideration"], ["The collection", "Filter, sort, save", "Decision"], ["Your bag", "Add a whole room at once", "Purchase"]
        ],
        processTitle: ["One page, laid out like a", "store visit"],
        processText: "Instead of a menu of separate pages, the homepage follows the stages of the user journey from the app research. Each section answers the question a shopper has at that point.",
        features: [
          { title: "Real light, any hour", board: 6, text: "Furniture looks different at 9am and at 9pm. One real room is relit digitally in four lights, so shoppers drag the sun through the day and watch the sofa, wood and brass change." },
          { title: "Every room has a door", board: 8, text: "Instead of a category menu, four rooms open as arched doorways. Shoppers browse by the space they’re furnishing rather than by product type." },
          { title: "Turn the lights on", board: 9, text: "Lamps are bought for how they look switched on. One switch lights up every lamp, so shoppers compare the glow, not just the shade." },
          { title: "Your room is the showroom", board: 10, text: "The answer to the 63%. Open a room (live camera, your photo or a sample), place a piece, drag and turn it, watch the price add up, and add the whole room to the bag." },
          { title: "Everything, to scale", board: 11, text: "Every piece stands on one ruler next to a 170 cm person, and a slider sets the width of your own wall, so you see at once whether a 214 cm sofa fits." },
          { title: "Pick, don’t filter", board: 12, text: "Not everyone knows the word for their style. Three either/or questions end in a named style with three matching pieces, ready to add or try together." },
          { title: "Will it fit?", board: 13, text: "Every product page asks the question shoppers ask themselves. Type the width of your wall and the page checks it against the piece, with returns shown right under “Add to bag”." },
          { title: "Same store, pocket size", board: 14, text: "Rooms and products fold into two-up grids of arches, and a floating “Try in your room” button stays within thumb reach." }
        ],
        brand: {
          title: ["Calm walls,", "warm light"],
          text: "A slate-teal wall colour with a single warm amber reserved for light, so anything that glows on the page means “light”. Every image is framed as an arch, like walking from room to room.",
          palette: [["Slate wall", "#3F5458"], ["Ink", "#22333A"], ["Window", "#8DD5D8"], ["Mist", "#DDE8EA"], ["Linen", "#F6F8F8"], ["Lamp amber", "#E9A83C"]],
          type: [["Poppins", "Headlines, UI and body"], ["Courgette", "One accent word per headline"]]
        },
        validation: [
          ["“Try in room” on every product leads to more confident purchases.", "A/B test: product page with and without the try-on entry point.", "Add-to-cart rate, returns"],
          ["“Will it fit?” reduces size-related returns.", "Compare return reasons for orders with and without a width check.", "Size-related return rate"],
          ["The style quiz shortens the path to a first add-to-bag.", "Funnel comparison: quiz takers vs. collection browsers.", "Time to first add-to-bag"]
        ],
        learned: {
          text: "Building it rather than drawing it changed the design. Dragging a chair across a real photo showed how much scale and shadow matter. Light turned out to be as important to trust as size.",
          next: ["Usability test the room planner with both personas", "Customer photos and reviews once real orders exist", "Phone-camera AR on mobile, building on the photo upload"]
        },
        outcome: {
          title: ["Built, live and", "ready to test"], cta: "Try the live prototype",
          points: ["A working, coded prototype you can scroll, drag and try", "Features aimed at the biggest pain point: visualisation", "Responsive on desktop and mobile", "A validation plan with clear metrics"],
          ongoing: "CasaVue is a prototype: products, prices and ratings are sample content. The next step is usability testing the room planner with both personas."
        }
      }
    },
    {
      slug: "caltrack", tldr: { problem: "Understanding and managing your nutrition every day can feel complicated.", role: "UX research and UI design for mobile and tablet.", result: "An AI-powered app concept: snap a meal for instant nutrition, personal meal plans and visual progress." }, behance: "238047517/CalTrack-AI-Calorie-Diet-App-UX-Case-Study",
      title: "CalTrack", tagline: "AI calorie & diet app", kind: "app", kindLabel: "Mobile app · UX case study", year: "2025",
      role: "UX research & UI design", platform: "Mobile & tablet", tools: ["Figma"],
      cover: C + "3523c2238047517.Y3JvcCw4ODYsNjkzLDAsMTk.png",
      overview: [
        "A smart calorie and diet app that helps people understand and manage their nutrition easily.",
        "It combines AI with friendly, simple design to make healthy eating fast and accessible for everyone."
      ],
      highlights: ["Snap a meal photo and AI estimates calories, carbs, protein and fat", "Personalised meal plans and healthy recipes for each goal", "Daily insights for healthier food choices", "Visual progress tracking with reminders and streaks"],
      tags: ["AI", "Health", "Image upload", "Responsive"],
      images: imgs(["fs_webp/ecf50f238047517.690cb76536f1a.png", "1400_webp/b821f5238047517.690cb76538409.png", "1400_webp/c31303238047517.690cb76538a71.png", "1400_webp/d8ac81238047517.690cb76537cd2.png", "1400_webp/f95bee238047517.690cb76537637.png", "1400_webp/e5b487238047517.690cb765397b3.png", "fs_webp/227280238047517.690d0a6258c4c.png", "fs_webp/643a1a238047517.690cb818b1edf.png", "1400_webp/976817238047517.690cb765390f1.png", "max_1200_webp/8b1071238047517.690d0a6259115.png"])
    },
    {
      slug: "bienenhaus", tldr: { problem: "A small-batch honey brand needed a website that tells its story and sells its honey.", role: "Web design and front-end development.", result: "A live, responsive site in German and English with a seasonal shop and a playful animated bee guide." }, behance: "257105511/Bienenhaus-Raw-Honey-Website",
      title: "Bienenhaus", tagline: "Raw honey from Brandenburg", kind: "web", kindLabel: "Website · Design & front-end", year: "2026",
      role: "Web design & front-end development", platform: "Responsive web · German & English", tools: ["HTML", "CSS", "JavaScript"],
      live: "https://alaashaheen93.github.io/bienenhaus/",
      cover: C + "730add257105511.Y3JvcCwxNTM5LDEyMDQsMjIsMA.png",
      overview: [
        "Website design and front-end development for Bienenhaus, a small-batch honey brand with 42 colonies in Brandenburg and the Uckermark.",
        "The concept centres on warm honey tones, elegant serif typography and a playful animated bee that guides visitors through the story: raw, cold-extracted honey, traceable batches and hand-filled jars."
      ],
      highlights: ["Hero with product showcase", "Brand promises", "Seasonal shop with product cards", "Customer reviews", "Three-step “from hive to jar” process", "Fully responsive, in German and English"],
      tags: ["Branding", "Landing page", "E-commerce", "Front-end", "Responsive"],
      images: imgs(["1400_webp/635af7257105511.6acf98becc601.jpg", "1400_webp/bbf5a8257105511.6acf98becbf14.jpg", "1400_webp/1860a8257105511.6acf98becbb79.jpg", "1400_webp/7322d3257105511.6acf98becc267.jpg", "1400_webp/959951257105511.6acf98becc940.jpg"])
    },
    {
      slug: "grove", tldr: { problem: "Plant shopping and plant care usually live in separate places, which is hard for beginners.", role: "UX research and UI design.", result: "An all-in-one app: plant store plus a photo-based care assistant that spots pests and diseases." }, behance: "230573965/Grove-Plant-Shop-Care-App-UX-Case-Study",
      title: "Grove", tagline: "Plant shop & smart care assistant", kind: "app", kindLabel: "Mobile app · UX case study", year: "2025",
      role: "UX research & UI design", platform: "Mobile app", tools: ["Figma"],
      cover: C + "2d750d230573965.Y3JvcCwyMTA2LDE2NDgsMzEsMA.png",
      overview: [
        "Grove is an all-in-one mobile app that simplifies plant shopping and care for both beginners and enthusiasts.",
        "It combines a digital plant store with a smart care assistant powered by image recognition."
      ],
      highlights: ["Digital plant store", "Snap a photo to detect pests, diseases or improper care", "Personalised care guidance", "Designed for beginners and plant lovers"],
      tags: ["AI", "E-commerce", "Plants", "Mobile app"],
      images: imgs(["1400_webp/1315c1230573965.68790b883ecf7.png", "1400_webp/d03c0d230573965.68790b8840c32.png", "1400_webp/a77d4d230573965.687953251c803.png", "1400_webp/285f9b230573965.687953251bae7.png", "1400_webp/dac537230573965.68790b883fd7d.png", "1400_webp/4a7f9f230573965.6879552e55fa2.png", "1400_webp/f2bfbb230573965.687953251c183.png", "1400_webp/bf0b4a230573965.6879552e55a49.png", "1400_webp/46828a230573965.68790b883d625.png", "1400_webp/b0dbf4230573965.68790b8840239.png", "1400_webp/97685b230573965.6879552e566b5.png", "1400_webp/fbfa35230573965.68790b883e2a3.png", "1400_webp/756939230573965.68790b883b8b4.png", "1400_webp/68af49230573965.68790b883c12f.png", "1400_webp/ee893f230573965.68790c824d5e9.png"])
    },
    {
      slug: "abaya-store", tldr: { problem: "Shopping for modest fashion online should feel calm, elegant and easy, in Arabic.", role: "UI/UX design in Figma.", result: "A complete right-to-left shopping app: onboarding, categories, product details, cart, checkout and account." }, behance: "239610529/Abaya-Store-Modest-Fashion-Shopping-App-UIUX",
      title: "Abaya Store", tagline: "A modest fashion shopping app", kind: "app", kindLabel: "Mobile app · UI/UX", year: "2025",
      role: "UI/UX design", platform: "Mobile app · Arabic (RTL) interface", tools: ["Figma"],
      cover: C + "93c038239610529.Y3JvcCwxMDA2LDc4NywwLDIxOQ.png",
      overview: [
        "A shopping app for modest fashion, designed end to end in Figma with an Arabic, right-to-left interface.",
        "The goal was a calm, elegant storefront that makes browsing abayas and checking out feel effortless."
      ],
      highlights: ["Welcome & onboarding screens", "Home and category pages", "Product details", "Shopping cart & checkout", "Login / sign up", "Contact and About pages"],
      tags: ["E-commerce", "Fashion", "Mobile app", "RTL"],
      images: imgs(["1400_webp/1b7e88239610529.692d77dc66cb9.png", "1400_webp/6b8bb3239610529.692d77dc68b3d.png", "1400_webp/7a7857239610529.692d77dc693f1.png", "1400_webp/fcbd6b239610529.692d7ba648efa.png", "1400_webp/c0a238239610529.692d77dc684a9.png", "1400_webp/26ca9e239610529.692d77dc67be6.png"])
    },
    {
      slug: "little-chapter", tldr: { problem: "Parents want safe, engaging stories they can enjoy together with their kids.", role: "UX research and UI design.", result: "A storytelling app with read-together and narrated modes in a playful, safe interface." }, behance: "235882915/Little-Chapter-Kids-Storytelling-App-UX-Case-Study",
      title: "Little Chapter", tagline: "Stories that bring families together", kind: "app", kindLabel: "Mobile app · UX case study", year: "2025",
      role: "UX research & UI design", platform: "Mobile app", tools: ["Figma"],
      cover: C + "010429235882915.Y3JvcCwxMDYzLDgzMiwxMDcsMA.png",
      overview: [
        "A mobile app for children’s stories that lets parents and kids read together or listen to narrated versions.",
        "It combines learning, entertainment and bonding time, while offering an engaging and safe digital reading environment."
      ],
      highlights: ["Read-together and narrated listening modes", "Child-friendly, playful interface", "Safe, distraction-free reading", "Designed for parents and kids alike"],
      tags: ["Kids", "Education", "Storytelling", "Mobile app"],
      images: imgs(["fs_webp/0eaea9235882915.68e01c8762041.png", "fs_webp/387d10235882915.68e01c8761672.png", "fs_webp/9d4a1d235882915.68e01c876348c.png", "fs_webp/7ecf39235882915.68e01c8762e48.png", "fs_webp/01f45d235882915.68e01c876053f.png", "max_632_webp/367b80235882915.68e01c875fd3b.png", "1400_webp/5de89c235882915.68e7b8bab62c0.png", "1400_webp/eab6fe235882915.68e01dc41d744.png", "1400_webp/340bd3235882915.68e01c8763efa.png"])
    }
  ];
  // German version of each case study (used when the site is in DE). Anything left out falls back to English.
  const DE = {
    "ferment-freude": {
      tagline: "Markenidentität & Website-UX", kindLabel: "Markenidentität · UI/UX · React",
      role: "UI/UX Design & React-Entwicklung", platform: "Responsive Website",
      overview: [
        "Fermentfreude ist ein österreichisches Food-Startup, das Fermentation für den Alltag und für die Gastronomie zugänglich macht. Die Plattform erklärt komplexe Prozesse einfach und nahbar, nimmt Unsicherheit und lädt dazu ein, es selbst auszuprobieren.",
        "Ich war für das UI/UX Design und die React-Entwicklung verantwortlich. Die UX setzte auf eine klare, intuitive Journey durch Workshops, Produkte und Lerninhalte. Das UI spiegelt den natürlichen, experimentellen Charakter der Marke durch durchdachte Typografie, Weißraum und visuelle Hierarchie, und die React-Umsetzung hält das Erlebnis auf allen Geräten flüssig und konsistent."
      ],
      highlights: ["Markenstrategie & Creative Direction mit der Geschäftsleitung", "Vollständige Brand Guidelines: Schrift, Grafik, Fotografie", "Klare Journey für Workshops, Produkte und Wissen", "Klares, modernes UI mit starker Hierarchie", "Responsive React-Umsetzung im Einklang mit dem Designsystem"],
      tags: ["Branding", "Logo-Design", "Visuelle Identität", "Webdesign", "React"],
      tldr: { problem: "Fermentation wirkt kompliziert, und Shop, Workshops und Markengeschichte waren voneinander getrennt.", role: "Markenstrategie, UX-Research, UI Design und React-Entwicklung, vom ersten Gespräch bis zum Live-Betrieb.", result: "Eine einheitliche Marke und eine Live-Website auf fermentfreude.at, mit laufender UX/UI- und Front-End-Arbeit." },
      facts: [["Rolle", "Marke, UX/UI & React-Entwicklung"], ["Zeitraum", "Seit Januar 2026"], ["Kunde", "Österreichisches Food-Startup"], ["Tools", "Figma · React · Storybook · KI-Tools"]],
      beforeAfter: {
        intro: "Die alte Wix-Website listete Workshop-Termine in einer schlichten Tabelle. Die neue Website führt durch Workshops, Produkte und Wissen, mit klarerer Struktur und einem ruhigeren, moderneren Look.",
        credit: "Screenshots: Rafaela Vaz · älma studio",
        pairs: [
          { label: "Startseite", before: "assets/ferment-before-after/ff-wix-home.jpg", after: "assets/ferment-before-after/ff-site-home-kombucha.jpg" },
          { label: "Workshops", before: "assets/ferment-before-after/ff-wix-dates.jpg", after: "assets/ferment-before-after/ff-site-workshops.jpg" }
        ]
      },
      story: {
        challenge: {
          statement: "Fermentation kann kompliziert wirken, und der digitale Auftritt der Marke hat es nicht leichter gemacht.", em: "kompliziert",
          points: [
            ["Getrenntes Erlebnis", "Produktseiten, Workshop-Buchung und Markengeschichte wirkten wie getrennte Orte."],
            ["Kein klarer Weg", "Kund:innen brauchten einen einfacheren Weg vom Entdecken der Marke bis zum Kauf oder zur Workshop-Buchung."],
            ["Uneinheitliche Identität", "Die Marke brauchte einen klareren, einheitlichen Auftritt, digital wie im Druck."],
            ["Workshops in einer Tabelle versteckt", "Auf der alten Wix-Website standen die Workshop-Termine in einer schlichten Tabelle mit separaten Buchungs-Buttons."]
          ]
        },
        roles: [
          ["Markenstrategie & Direction", "Kick-off mit der Geschäftsleitung, Markenstrategie und vollständige Brand Guidelines für Schrift, Grafik und Fotografie."],
          ["UX-Research", "Interviews, Umfragen und Usability-Feedback, um zu verstehen, wo Kund:innen hängen bleiben."],
          ["UX/UI Design", "User Flows, Wireframes und High-Fidelity-Prototypen in Figma für Shop, Workshops und Lerninhalte."],
          ["Front-End-Entwicklung", "Eine responsive React-Umsetzung mit wiederverwendbaren, in Storybook dokumentierten Komponenten."]
        ],
        process: [["Kick-off", "Markenstrategie und Creative Direction mit der Geschäftsleitung."], ["Research", "Stakeholder- und Nutzerinterviews, Online-Umfragen und Analytics-Review."], ["Markensystem", "Typografie, Farbe, Grafik, Bildsprache und Logo-Anwendungen."], ["UX & UI", "Flows, Wireframes und Figma-Prototypen für Shop, Workshops und Wissen."], ["Umsetzung", "React-Front-End mit wiederverwendbaren Storybook-Komponenten."], ["Iteration", "Usability-Feedback, Hypothesen und A/B-Tests, laufend."]],
        research: { methods: ["Stakeholder-Interviews mit der Geschäftsleitung", "Nutzerinterviews", "Online-Umfragen", "Usability-Feedback-Sessions", "Analytics-Review der Absprungstellen", "A/B-Tests"], loop: ["Hypothese", "Test", "Lernen"] },
        brand: {
          palette: [["Creme", "#FAF2E0"], ["Anthrazit", "#2D2F2C"], ["Salbei", "#B0C7B8"], ["Senf", "#E6BE68"]],
          type: [["Fonseca", "Headlines & Titel"], ["Bricolage Grotesque", "Display und Blickfang"], ["Balto", "Fließtext & Bildunterschriften"], ["DIN Next", "Sekundärschrift"]]
        },
        decisions: [
          ["Klarere Produkthierarchie", "Produkte lassen sich leichter überblicken und vergleichen, der Shop wirkt ruhig statt überladen."],
          ["Kürzere Workshop-Buchung", "Weniger Schritte vom Entdecken eines Workshops bis zur Buchung. Keine Suche mehr in einer Termintabelle."],
          ["Wiederverwendbare Komponenten", "Eine Storybook-Komponentenbibliothek hält das UI konsistent und macht Übergaben und neue Seiten schneller."],
          ["Mobile-First & barrierefrei", "Layouts starten auf kleinen Bildschirmen, mit gut lesbarer Schrift und klarer Hierarchie für Barrierefreiheit und Conversion."]
        ],
        outcome: {
          title: ["Live, und", "es geht weiter"], cta: "fermentfreude.at besuchen",
          points: ["Ein einheitliches Markensystem für digitale und physische Touchpoints", "Ein klareres Shop- und Workshop-Erlebnis", "Design-Iterationen auf Basis von Research und Daten", "Eine lebendige Komponentenbibliothek für die weitere Produktarbeit"],
          ongoing: "Die Website ist live auf fermentfreude.at, und die Arbeit geht weiter. Nach der ehrenamtlichen Phase übernehme ich jeden Monat 4 bis 6 UX/UI- und Front-End-Aufgaben."
        }
      }
    },
    "casavue-web": {
      tagline: "Möbel-Shopping, im Web lebendig gemacht", kindLabel: "Website · UX Case Study",
      role: "UX-Research, UI Design & Front-End", platform: "Desktop & mobiles Web",
      overview: ["CasaVue bringt meine Möbel-App-Recherche als funktionierenden, programmierten Prototyp ins Web.", "Statt aus flachen Produktfotos zu raten, sehen Kund:innen, wie Möbel in ihrem eigenen Raum wirklich aussehen und passen, und finden ihren Stil in Sekunden."],
      highlights: ["Die Sonne durch einen echten Raum ziehen, um Tageslicht zu sehen", "Jede Lampe einschalten, um Abendlicht zu sehen", "Stücke im eigenen Raum platzieren", "Maße mit der eigenen Wand vergleichen", "Den eigenen Stil mit drei Klicks finden"],
      tags: ["Nutzerforschung", "Interaction Design", "Prototyp", "E-Commerce", "Responsive"],
      tldr: { problem: "Mit flachen Produktfotos kann man sich Möbel im eigenen Raum kaum vorstellen.", role: "UX-Research, UI Design und Front-End-Entwicklung eines funktionierenden Prototyps.", result: "Ein live programmierter Prototyp: Tages- und Lampenlicht, Raumplanung, Maßvergleich und ein Stil-Finder mit drei Klicks." },
      facts: [["Rolle", "UX-Research, UI Design & Front-End"], ["Plattform", "Desktop & mobiles Web"], ["Gebaut mit", "HTML · CSS · JavaScript"], ["Jahr", "2026"]],
      story: {
        challenge: {
          statement: "Kund:innen können nicht erkennen, wie ein Möbelstück im eigenen Raum wirkt, also zögern sie vor dem Kauf und schicken es danach zurück.", em: "im eigenen Raum",
          points: [["Im eigenen Raum sehen", "Ein Stück im Raum platzieren, bevor es im Warenkorb landet."], ["Echte Größe, echtes Licht", "Echte Maße zeigen und wie Materialien von morgens bis abends wirken."], ["Ein Showroom, kein Katalog", "Stöbern soll sich wie ein Gang durch Räume anfühlen, nicht wie Scrollen durch ein Raster."], ["Ein kurzer Weg zum Warenkorb", "Jedes Produkt ist nur einen Klick von „Im Raum ansehen“ und „In den Warenkorb“ entfernt."]]
        },
        roles: [["UX-Research", "Eine Online-Umfrage, ein Wettbewerbsvergleich und zwei Personas."], ["UX & Interaction Design", "Eine Struktur entlang der Customer Journey, dazu Raumplaner-, Licht- und Maßstabskonzepte."], ["Visual Design", "Eine ruhige Schiefer-Petrol-Palette mit einem warmen Bernstein nur für Licht."], ["Front-End-Entwicklung", "Als echte, funktionierende Website mit HTML, CSS und JavaScript gebaut, nicht als statische Screens."]],
        stats: {
          title: ["Was die", "Umfrage", "gezeigt hat"],
          items: [["73%", "haben online gekaufte Möbel schon einmal zurückgeschickt."], ["63%", "sagen, ihr größter Frust ist, nicht zu sehen, wie ein Stück in ihrem Raum wirkt."], ["55%", "würden ein Tool nutzen, das Möbel im eigenen Raum zeigt."], ["9%", "kaufen Möbel in Apps, gegenüber 72% auf Websites und 81% im Laden."]],
          insights: [["Wichtigste Erkenntnis", "Visualisierung ist der größte Pain Point, noch vor Fotos, Vergleich oder Materialien. Möbel im Kontext zu zeigen ist wichtiger als jede andere Funktion."], ["Warum Web", "Kund:innen recherchieren Möbel ohnehin auf Websites. Ein Browser-Erlebnis holt sie dort ab, ganz ohne Installation."]],
          note: "Online-Umfrage (Google Forms), geteilt per E-Mail, Social Media und WhatsApp."
        },
        competitors: { cols: ["IKEA", "OTTO", "CasaVue"], rows: [["Echte Kundenfotos", "no", "yes", "next"], ["Filter & Suche", "no", "yes", "yes"], ["Vorschau im Raum (AR)", "yes", "no", "yes"], ["Einfache Bedienung", "yes", "no", "yes"]], text: "Jeder Shop deckt nur die Hälfte ab. Keiner verbindet eine Vorschau im Raum mit klaren Filtern und einem einfachen Ablauf, und genau diese Lücke will CasaVue schließen." },
        personas: [
          { name: "Ayman, 34", role: "Full-Stack-Entwickler · Köln", needs: "Ist gerade in eine neue Wohnung gezogen und sucht funktionale Möbel, die zu seinem minimalistischen Stil passen.", pains: "Überladene, langsame Websites, ungenaue Angaben und Pflicht-Konto beim Checkout." },
          { name: "Ilham, 33", role: "Buchhalterin · Leverkusen", needs: "Sucht moderne, hochwertige Stücke für eine kleine Wohnung und will Maße und Materialien vergleichen.", pains: "Fast identische Angebote und Bewertungen, die gekauft oder zu positiv wirken." }
        ],
        principles: [["Im eigenen Raum sehen", "63% können sich ein Stück in ihrem Raum nicht vorstellen.", "Ein Raumplaner: Stücke in einen Beispielraum oder ein eigenes Foto ziehen, drehen und den Preis summieren."], ["Im eigenen Licht sehen", "Fotos im Studiolicht passen nicht zu echten Wohnungen.", "Ein Hero, in dem man „die Sonne zieht“, plus Lichtschalter im Lichtstudio und im Raumplaner."], ["Im Maßstab sehen", "Ilham sucht für kleine Räume und braucht echte Maße.", "Ein Maßband für jedes Stück, abgeglichen mit der Breite der eigenen Wand."], ["Gehen statt scrollen", "Ein Produktraster wirkt wie ein Katalog, nicht wie ein Laden.", "Räume öffnen sich wie Türen, der Hero führt hinein, und ein Quiz mit drei Fragen findet den Stil."]],
        process: [["Die Tür", "Der Hero führt in einen beleuchteten Raum", "Entdecken"], ["Räume", "Einen Raum durch seine Tür wählen", "Stöbern"], ["Lichtstudio", "Jede Lampe ein- und ausschalten", "Stöbern"], ["Im Raum testen", "Stücke platzieren, ziehen und drehen", "Erkunden"], ["Im Maßstab", "Mit der eigenen Wand vergleichen", "Abwägen"], ["Stil finden", "Drei schnelle Entweder-oder-Fragen", "Abwägen"], ["Die Kollektion", "Filtern, sortieren, merken", "Entscheiden"], ["Warenkorb", "Einen ganzen Raum auf einmal hinzufügen", "Kaufen"]],
        processTitle: ["Eine Seite, aufgebaut wie ein", "Ladenbesuch"],
        processText: "Statt eines Menüs mit vielen Einzelseiten folgt die Startseite den Phasen der Customer Journey aus der App-Recherche. Jeder Abschnitt beantwortet die Frage, die Kund:innen in diesem Moment haben.",
        features: [
          { title: "Echtes Licht, zu jeder Stunde", board: 6, text: "Möbel sehen um 9 Uhr anders aus als um 21 Uhr. Ein echter Raum wird digital in vier Lichtstimmungen gezeigt, man zieht die Sonne durch den Tag und sieht, wie sich Sofa, Holz und Messing verändern." },
          { title: "Jeder Raum hat eine Tür", board: 8, text: "Statt eines Kategorie-Menüs öffnen sich vier Räume als gewölbte Türen. Man stöbert nach dem Raum, den man einrichtet, nicht nach Produkttyp." },
          { title: "Licht an", board: 9, text: "Lampen kauft man danach, wie sie eingeschaltet wirken. Ein Schalter lässt jede Lampe leuchten, so vergleicht man das Licht, nicht nur den Schirm." },
          { title: "Dein Raum ist der Showroom", board: 10, text: "Die Antwort auf die 63%. Einen Raum öffnen (Live-Kamera, eigenes Foto oder Beispiel), ein Stück platzieren, ziehen und drehen, den Preis mitwachsen sehen und den ganzen Raum in den Warenkorb legen." },
          { title: "Alles im Maßstab", board: 11, text: "Jedes Stück steht auf einem Maßband neben einer 170 cm großen Person, und ein Regler stellt die Breite der eigenen Wand ein. So sieht man sofort, ob ein 214 cm Sofa passt." },
          { title: "Wählen statt filtern", board: 12, text: "Nicht jeder kennt das Wort für den eigenen Stil. Drei Entweder-oder-Fragen führen zu einem benannten Stil mit drei passenden Stücken, bereit für den Warenkorb oder den Raumtest." },
          { title: "Passt das?", board: 13, text: "Jede Produktseite stellt die Frage, die sich Kund:innen selbst stellen. Wandbreite eingeben, und die Seite prüft sie gegen das Stück, mit Rückgabeinfos direkt unter „In den Warenkorb“." },
          { title: "Derselbe Laden, im Taschenformat", board: 14, text: "Räume und Produkte falten sich in zweispaltige Raster aus Bögen, und ein schwebender „Im Raum testen“-Button bleibt in Daumenreichweite." }
        ],
        brand: { title: ["Ruhige Wände,", "warmes Licht"], text: "Eine Schiefer-Petrol-Wandfarbe mit einem einzigen warmen Bernstein nur für Licht: Alles, was auf der Seite leuchtet, bedeutet „Licht“. Jedes Bild ist als Bogen gerahmt, wie der Weg von Raum zu Raum.",
          palette: [["Schieferwand", "#3F5458"], ["Tinte", "#22333A"], ["Fenster", "#8DD5D8"], ["Nebel", "#DDE8EA"], ["Leinen", "#F6F8F8"], ["Lampen-Bernstein", "#E9A83C"]],
          type: [["Poppins", "Headlines, UI und Fließtext"], ["Courgette", "Ein Akzentwort pro Headline"]] },
        validation: [["„Im Raum testen“ auf jedem Produkt führt zu sichereren Käufen.", "A/B-Test: Produktseite mit und ohne Einstieg in den Raumtest.", "Add-to-Cart-Rate, Retouren"], ["„Passt das?“ senkt größenbedingte Retouren.", "Rückgabegründe von Bestellungen mit und ohne Breitencheck vergleichen.", "Größenbedingte Retourenquote"], ["Das Stil-Quiz verkürzt den Weg zum ersten Warenkorb.", "Funnel-Vergleich: Quiz-Nutzer:innen gegenüber Kollektions-Stöbernden.", "Zeit bis zum ersten Warenkorb"]],
        learned: { text: "Bauen statt nur Zeichnen hat das Design verändert. Einen Stuhl über ein echtes Foto zu ziehen hat gezeigt, wie wichtig Maßstab und Schatten sind. Licht stellte sich als genauso wichtig für Vertrauen heraus wie die Größe.", next: ["Usability-Test des Raumplaners mit beiden Personas", "Kundenfotos und Bewertungen, sobald es echte Bestellungen gibt", "AR mit der Handykamera, aufbauend auf dem Foto-Upload"] },
        outcome: { title: ["Gebaut, live und", "bereit zum Testen"], cta: "Live-Prototyp ausprobieren", points: ["Ein funktionierender, programmierter Prototyp zum Scrollen, Ziehen und Ausprobieren", "Funktionen für den größten Pain Point: Visualisierung", "Responsive auf Desktop und Mobilgeräten", "Ein Validierungsplan mit klaren Kennzahlen"], ongoing: "CasaVue ist ein Prototyp: Produkte, Preise und Bewertungen sind Beispielinhalte. Der nächste Schritt ist ein Usability-Test des Raumplaners mit beiden Personas." }
      }
    },
    "caltrack": {
      tagline: "KI-App für Kalorien & Ernährung", kindLabel: "Mobile App · UX Case Study", role: "UX-Research & UI Design", platform: "Smartphone & Tablet",
      overview: ["Eine smarte Kalorien- und Ernährungs-App, die Menschen hilft, ihre Ernährung einfach zu verstehen und zu steuern.", "Sie verbindet KI mit einem freundlichen, einfachen Design, damit gesunde Ernährung schnell und für alle zugänglich wird."],
      highlights: ["Mahlzeit fotografieren: Die KI schätzt Kalorien, Kohlenhydrate, Eiweiß und Fett", "Persönliche Ernährungspläne und gesunde Rezepte für jedes Ziel", "Tägliche Tipps für gesündere Entscheidungen", "Visueller Fortschritt mit Erinnerungen und Streaks"],
      tags: ["KI", "Gesundheit", "Bild-Upload", "Responsive"],
      tldr: { problem: "Die eigene Ernährung jeden Tag zu verstehen und zu steuern, kann kompliziert wirken.", role: "UX-Research und UI Design für Smartphone und Tablet.", result: "Ein KI-gestütztes App-Konzept: Mahlzeit fotografieren für sofortige Nährwerte, persönliche Pläne und sichtbarer Fortschritt." }
    },
    "bienenhaus": {
      tagline: "Rohhonig aus Brandenburg", kindLabel: "Website · Design & Front-End", role: "Webdesign & Front-End-Entwicklung", platform: "Responsive Website · Deutsch & Englisch",
      overview: ["Webdesign und Front-End-Entwicklung für Bienenhaus, eine kleine Honigmarke mit 42 Bienenvölkern in Brandenburg und der Uckermark.", "Das Konzept setzt auf warme Honigtöne, elegante Serifenschrift und eine verspielte animierte Biene, die durch die Geschichte führt: roher, kalt geschleuderter Honig, rückverfolgbare Chargen und handabgefüllte Gläser."],
      highlights: ["Hero mit Produktpräsentation", "Markenversprechen", "Saisonaler Shop mit Produktkarten", "Kundenbewertungen", "Drei Schritte „vom Bienenstock ins Glas“", "Vollständig responsive, auf Deutsch und Englisch"],
      tags: ["Branding", "Landingpage", "E-Commerce", "Front-End", "Responsive"],
      tldr: { problem: "Eine kleine Honigmarke brauchte eine Website, die ihre Geschichte erzählt und ihren Honig verkauft.", role: "Webdesign und Front-End-Entwicklung.", result: "Eine responsive Live-Website auf Deutsch und Englisch mit saisonalem Shop und einer verspielten animierten Biene." }
    },
    "grove": {
      tagline: "Pflanzenshop & smarter Pflege-Assistent", kindLabel: "Mobile App · UX Case Study", role: "UX-Research & UI Design", platform: "Mobile App",
      overview: ["Grove ist eine All-in-one-App, die Pflanzenkauf und Pflanzenpflege für Einsteiger:innen und Fans vereinfacht.", "Sie verbindet einen digitalen Pflanzenshop mit einem smarten Pflege-Assistenten auf Basis von Bilderkennung."],
      highlights: ["Digitaler Pflanzenshop", "Foto machen und Schädlinge, Krankheiten oder Pflegefehler erkennen", "Persönliche Pflegetipps", "Für Einsteiger:innen und Pflanzenfans gestaltet"],
      tags: ["KI", "E-Commerce", "Pflanzen", "Mobile App"],
      tldr: { problem: "Pflanzenkauf und Pflanzenpflege finden meist an getrennten Orten statt, was für Einsteiger:innen schwierig ist.", role: "UX-Research und UI Design.", result: "Eine All-in-one-App: Pflanzenshop plus fotobasierter Pflege-Assistent, der Schädlinge und Krankheiten erkennt." }
    },
    "abaya-store": {
      tagline: "Eine Shopping-App für Modest Fashion", kindLabel: "Mobile App · UI/UX", role: "UI/UX Design", platform: "Mobile App · arabische Oberfläche (RTL)",
      overview: ["Eine Shopping-App für Modest Fashion, komplett in Figma gestaltet, mit arabischer Oberfläche von rechts nach links.", "Das Ziel: ein ruhiger, eleganter Shop, in dem Stöbern und Bezahlen mühelos funktionieren."],
      highlights: ["Willkommens- und Onboarding-Screens", "Startseite und Kategorien", "Produktdetails", "Warenkorb & Checkout", "Login / Registrierung", "Kontakt- und Über-uns-Seite"],
      tags: ["E-Commerce", "Mode", "Mobile App", "RTL"],
      tldr: { problem: "Modest Fashion online zu kaufen soll sich ruhig, elegant und einfach anfühlen, auf Arabisch.", role: "UI/UX Design in Figma.", result: "Eine vollständige Shopping-App von rechts nach links: Onboarding, Kategorien, Produktdetails, Warenkorb, Checkout und Konto." }
    },
    "little-chapter": {
      tagline: "Geschichten, die Familien verbinden", kindLabel: "Mobile App · UX Case Study", role: "UX-Research & UI Design", platform: "Mobile App",
      overview: ["Eine App für Kindergeschichten, mit der Eltern und Kinder gemeinsam lesen oder vertonte Versionen hören können.", "Sie verbindet Lernen, Unterhaltung und gemeinsame Zeit in einer ansprechenden und sicheren digitalen Leseumgebung."],
      highlights: ["Gemeinsam lesen oder vorlesen lassen", "Kindgerechte, verspielte Oberfläche", "Sicheres Lesen ohne Ablenkung", "Für Eltern und Kinder gestaltet"],
      tags: ["Kinder", "Bildung", "Storytelling", "Mobile App"],
      tldr: { problem: "Eltern wünschen sich sichere, spannende Geschichten, die sie gemeinsam mit ihren Kindern erleben können.", role: "UX-Research und UI Design.", result: "Eine Geschichten-App mit Vorlese- und Hörmodus in einer verspielten, sicheren Oberfläche." }
    }
  };
  list.forEach(p => { if (DE[p.slug]) p.de = DE[p.slug]; });
  list.forEach(p => { p.cover = local(p.cover); p.images = p.images.map(local); });
  return list;
})();
