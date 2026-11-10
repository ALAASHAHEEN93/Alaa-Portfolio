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
  list.forEach(p => { p.cover = local(p.cover); p.images = p.images.map(local); });
  return list;
})();
