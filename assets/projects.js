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
      slug: "ferment-freude", hideBoards: true, tldr: { problem: "Fermentation feels complicated, and the brand’s shop, workshops and story felt disconnected.", role: "UX/UI design, brand and front-end contribution in a team of two, from first talk to production.", result: "A unified brand and a live website at fermentfreude.at, with ongoing UX/UI and front-end work." }, behance: "246062163/ferment-freude-Brand-Identity-Website-UX",
      title: "ferment freude", tagline: "Brand identity & website UX", kind: "web", kindLabel: "Brand identity · UI/UX · Next.js", year: "2026",
      role: "UI/UX design, brand & front-end (team project)", platform: "Responsive web", tools: ["Figma", "Webflow", "Next.js", "TypeScript", "Git & GitHub"],
      live: "https://www.fermentfreude.at/",
      cover: C + "127e80246062163.Y3JvcCw3MzIsNTcyLDU5LDExNg.png",
      overview: [
        "Fermentfreude is an Austrian food startup dedicated to making fermentation accessible for both everyday use and the food service industry. The platform explains complex processes in a simple, approachable way, removing uncertainty and encouraging people to try it.",
        "Together with developer Rafaela Vaz, I worked on the UI/UX design and the brand, and contributed to the Next.js front-end. The UX focused on a clear, intuitive journey for exploring workshops, products and educational content. The UI reflects the brand’s natural, experimental character through thoughtful typography, spacing and visual hierarchy, and the React build keeps the experience smooth and consistent across devices."
      ],
      highlights: ["Rebrand strategy & creative direction with the owner", "Full brand guidelines: type, graphics, photography", "Clear journey for workshops, products and learning", "Clean, modern UI with strong hierarchy", "Responsive React build aligned with the design system"],
      tags: ["Branding", "Logo design", "Visual identity", "Web design", "React"],
      video: "https://www-ccv.adobe.io/v1/player/ccv/4r-2Ty5PqgT/embed?api_key=behance1&bgcolor=%23191919",
      beforeAfter: {
        intro: "The old Wix site listed workshop dates in a plain table. The new site guides visitors through workshops, products and learning with a clearer structure and a calmer, more modern look.",
        pairs: [
          { label: "Home page", before: "assets/ferment-before-after/ff-wix-home.jpg", after: "assets/ferment-before-after/ff-site-home-kombucha.jpg" },
          { label: "Workshops", before: "assets/ferment-before-after/ff-wix-dates.jpg", after: "assets/ferment-before-after/ff-site-workshops.jpg" }
        ]
      },
      images: imgs(["max_632_webp/7d4725246062163.69bb3afc783ff.png"]),
      team: { text: "A team project with developer Rafaela Vaz, made possible by ITCareerHub and Science Park Graz.", link: "https://rafaela-vaz.vercel.app/work/fermentfreude/" },
      testimonial: {
        name: "David Haider", role: "Founder, Fermentfreude OG", source: "LinkedIn recommendation, 2026", link: "https://www.linkedin.com/in/alaa-design/",
        lead: "What impressed me most was your ability to understand what we were trying to achieve, ask the right questions, and come back with thoughtful ideas and solutions rather than simply executing tasks.",
        more: [
          "More than once, you had already explored different approaches and prepared potential solutions before we had even asked for them. That level of initiative, ownership and problem-solving is something I value immensely.",
          "We are genuinely proud of what you created together and how you helped transform and strengthen our brand!"
        ],
        closing: "To any future employer reading this: if Ala’a is on your shortlist, I’d strongly suggest moving her to the top."
      },
      flagship: true,
      facts: [["Role", "UX/UI, brand & front-end"], ["Timeline", "Jan 2026 to now"], ["Client", "Austrian food startup"], ["Tools", "Figma · Webflow · Next.js · TypeScript"]],
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
          ["UX & usability", "Usability feedback and analytics to understand where customers got stuck on the old site."],
          ["UX/UI design", "User flows, wireframes and high-fidelity Figma prototypes for the shop, workshops and learning content."],
          ["Front-end development", "Helped build website components and UI elements with Next.js and TypeScript, working with Git and GitHub in the team."]
        ],
        evolution: {
          title: ["From Webflow", "to Next.js"],
          intro: "The project changed direction along the way, and so did my toolkit.",
          phases: [
            { label: "Phase 1", title: "UI/UX design in Figma, built for Webflow", text: "It started as a UI/UX design project planned for Webflow: tools I already had experience with. I designed flows, wireframes and the UI in Figma.", tools: ["Figma", "Webflow"] },
            { label: "Phase 2", title: "A custom platform in Next.js", text: "As the plans grew, development moved from Webflow to a custom platform. With no prior React experience, I learned Next.js, TypeScript, HTML, CSS, Git and GitHub on the job and applied them in a real project.", tools: ["Next.js", "TypeScript", "HTML", "CSS", "Git & GitHub"] }
          ],
          platform: ["E-commerce", "Workshop booking", "Customer accounts", "CRM integrations", "Content delivery", "Ready for online courses"],
          duties: ["UI/UX design and user-centred thinking throughout the project", "Front-end development with modern web technologies", "Building website components and UI elements", "Working with Git and GitHub in a collaborative team", "Ideas and solutions for better UX, structure and functionality", "Turning business requirements into practical, user-friendly solutions"]
        },
        process: [
          ["Kick-off", "Brand strategy and creative direction with the owner."],
          ["Audit", "Reviewed the existing brand and website to see what to keep and what to change."],
          ["Brand system", "Typography, colour, graphics, photography direction and logo applications."],
          ["UX & UI", "Flows, wireframes and Figma prototypes for shop, workshops and learning."],
          ["Build", "React front-end with reusable Storybook components."],
          ["Iterate", "Usability feedback, hypotheses and A/B tests, ongoing."]
        ],
        research: {
          title: ["Feedback", "& data"],
          intro: "This was a rebrand, not a brand from scratch: the brand already existed. Instead of starting over, we used usability feedback and data to decide what to improve, then tested the changes.",
          methods: ["Audit of the existing brand and website", "Usability feedback sessions", "Analytics review of drop-off points", "A/B testing"],
          loop: ["Hypothesis", "Test", "Learn"]
        },
        brand: {
          text: "A rebrand of the existing brand: full guidelines for typography, colour, graphics and photography, so it looks the same on the website, in the shop and on social media.",
          palette: [["Cream", "#FAF2E0"], ["Charcoal", "#2D2F2C"], ["Sage", "#B0C7B8"], ["Mustard", "#E6BE68"]],
          type: [["Fonseca", "Headlines & titles"], ["Bricolage Grotesque", "Display and calls to attention"], ["Balto", "Body text & captions"], ["DIN Next", "Secondary typeface"]],
          typeBoards: ["assets/brand/brand_jpg_0.jpg", "assets/brand/brand_jpg_1.jpg"],
          logo: ["assets/brand/brand_jpg_16.jpg", "assets/brand/brand_jpg_17.jpg", "assets/brand/brand_jpg_14.jpg", "assets/brand/brand_jpg_29.jpg"],
          photo: ["assets/brand/brand_jpg_6.jpg", "assets/brand/brand_jpg_12.jpg", "assets/brand/brand_jpg_10.jpg", "assets/brand/brand_jpg_4.jpg", "assets/brand/brand_jpg_13.jpg", "assets/brand/brand_jpg_2.jpg"],
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
      slug: "coffee-lab", behance: null, repo: "https://github.com/ALAASHAHEEN93/Coffee-Lab", live: "https://alaashaheen93.github.io/Coffee-Lab/",
      tldr: { problem: "Most coffee shops online look the same and don’t help you understand how a coffee will taste.", role: "Concept, UI design and full-stack development, on my own.", result: "A bilingual shop in Next.js and Payload CMS with interactive flavour tools, a cart and user accounts." },
      title: "CoffeeLab", tagline: "A molecular roastery online shop", kind: "web", kindLabel: "E-commerce · Design & full-stack", year: "2026",
      role: "UI design & full-stack development", platform: "Responsive web · German & English", tools: ["Next.js", "TypeScript", "Payload CMS", "MongoDB"],
      cover: "assets/work/coffee-lab/cover.webp",
      overview: [
        "CoffeeLab is a specialty coffee shop designed as a molecular laboratory: every coffee is a “specimen” you can explore, tune and compare before you buy.",
        "I designed and built it end to end, from the dark roastery look to a Next.js front-end with a Payload CMS back-end, accounts, a cart and content in German and English."
      ],
      highlights: ["A bold lab concept for a coffee brand", "Live flavour radar with roast and taste sliders", "Espresso or filter: one switch changes the tasting notes", "Product filters, cart drawer, login and sign-up", "All content editable in Payload CMS, in German and English"],
      tags: ["E-commerce", "UI design", "Next.js", "Payload CMS", "Full-stack"],
      images: ["assets/work/coffee-lab/00-hero.webp", "assets/work/coffee-lab/01-roastery.webp", "assets/work/coffee-lab/02-cart.webp", "assets/work/coffee-lab/03-precision-lab.webp", "assets/work/coffee-lab/04-blendingsection.webp", "assets/work/coffee-lab/05-vault.webp", "assets/work/coffee-lab/06-blending-genome.webp", "assets/work/coffee-lab/07-archives.webp", "assets/work/coffee-lab/08-operations.webp", "assets/work/coffee-lab/09-mobile.webp", "assets/work/coffee-lab/10-login.webp"],
      facts: [["Role", "UI design & full-stack"], ["Platform", "Responsive web · DE & EN"], ["Built with", "Next.js · TypeScript · Payload CMS"], ["Year", "2026"]],
      story: {
        challenge: {
          statement: "Specialty coffee shops online all look alike: a grid of bags and a few tasting notes. CoffeeLab lets you explore a coffee before you buy it.", em: "explore",
          points: [["A brand you remember", "A bold lab concept, with specimens, protocols and archives instead of a generic shop."], ["Taste before you buy", "Interactive tools show how roast level and brew method change the flavour."], ["A real shop behind it", "Filters, a cart, accounts and a checkout step, not just a landing page."], ["Editable in two languages", "All content lives in a CMS, in German and English."]]
        },
        rolesTitle: ["From concept", "to code"], rolesText: "I designed and built CoffeeLab on my own, from the visual concept to the deployed app.",
        roles: [["Concept & UI design", "The lab theme, the dark roastery palette, typography and every section of the page."], ["Interaction design", "The flavour radar, roast slider, espresso and filter switch, and the blending chamber."], ["Front-end", "Next.js and React with TypeScript: product filters, a cart drawer and responsive layouts."], ["CMS & back-end", "Payload CMS with MongoDB: editable home content, products, user accounts, German and English."]],
        featuresTitle: ["Walk", "through the lab"], featuresText: "Eight moments from the shop, from the first screen to the cart.",
        features: [
          { title: "A lab, not a shop window", board: 0, text: "The hero sets the tone: a molecular roastery. A sticky switch for espresso or filter stays on screen and changes the tasting notes across the page." },
          { title: "Featured specimens", board: 1, text: "Coffees as lab specimens, with filters for bestsellers, single origins, espresso blends and rare varietals. Each card shows tasting tags, rating and price." },
          { title: "Add without leaving", board: 2, text: "Adding a coffee opens a slide-in cart with the item, quantity and subtotal, so shoppers can keep browsing." },
          { title: "Tune the flavour", board: 3, text: "Sliders for roast, acidity, body, sweetness and complexity drive a live flavour radar, so you see a profile instead of reading about it." },
          { title: "The blending chamber", board: 4, text: "Pick an expert blend or assemble your own. The tasting notes change with the brew method." },
          { title: "The classified vault", board: 5, text: "Rare micro-lots presented as sealed protocols with cupping scores, origin, roast and flavour notes." },
          { title: "Blend analysis", board: 6, text: "A detailed view for each blend: origins, sensory scores and stability, with Add to cart right next to the data." },
          { title: "Same lab, pocket size", board: 9, text: "Navigation, filters and product cards reflow for phones, with the same dark, calm look." }
        ],
        brand: { title: ["Dark roast,", "copper light"], text: "A near-black roastery background with warm copper accents, an elegant serif for headlines and a clean sans-serif for data and UI.",
          palette: [["Roast black", "#080706"], ["Foam", "#F6F2EC"], ["Crema", "#D8CEC3"], ["Copper", "#C78F6F"], ["Bronze", "#A67C52"]],
          type: [["Cormorant Garamond", "Headlines and product names"], ["Inter / system sans", "UI, labels and body text"]] },
        decisionsTitle: ["Key decisions", "Built to", "last"],
        decisions: [["Content in a CMS, not in code", "Every text on the home page lives in a Payload CMS global, so content can change without a developer."], ["Two languages, one toggle", "German and English content per field, with a DE / EN toggle that remembers the choice."], ["Never a blank page", "If the database is unavailable, the site falls back to built-in content instead of breaking."], ["Accounts and cart", "Login, sign-up and an account page built on Payload’s authentication, plus a shared cart across the page."]],
        outcome: { title: ["Designed", "and built"], points: ["A complete brand and UI concept", "A working Next.js shop with cart and accounts", "Content editable in a CMS, in German and English", "Responsive on desktop and mobile"], cta: "Try the live demo", ongoing: "CoffeeLab is a portfolio project: products, prices, ratings and figures are sample content. The live demo runs on GitHub Pages without a server, so accounts and the CMS are only in the full version. The code is on GitHub." }
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
      images: imgs(["fs_webp/ecf50f238047517.690cb76536f1a.png", "1400_webp/b821f5238047517.690cb76538409.png", "1400_webp/c31303238047517.690cb76538a71.png", "1400_webp/d8ac81238047517.690cb76537cd2.png", "1400_webp/f95bee238047517.690cb76537637.png", "1400_webp/e5b487238047517.690cb765397b3.png", "fs_webp/227280238047517.690d0a6258c4c.png", "fs_webp/643a1a238047517.690cb818b1edf.png", "1400_webp/976817238047517.690cb765390f1.png", "max_1200_webp/8b1071238047517.690d0a6259115.png"]),
      facts: [["Role", "UI/UX design, concept to delivery"], ["Duration", "2 weeks"], ["Tools", "Figma · FigJam · Google Forms"], ["Platform", "Mobile app"]],
      story: {
        challenge: {
          statement: "Counting calories by hand takes so much effort that many people give up before they reach their goal.", em: "give up",
          points: [["Manual input is slow", "Most calorie apps ask you to type in every meal, which takes time and is hard to keep up."], ["Homemade food is a guess", "Carbs, fats and protein are hard to estimate for homemade or restaurant meals."], ["Labels are confusing", "Menus and food labels don’t make the healthy choice obvious."], ["Motivation fades", "Inaccurate tracking leads to missed goals, and people stop tracking altogether."]]
        },
        rolesTitle: ["One designer,", "start to finish"], rolesText: "I was the UI/UX designer from the first concept to the final screens, in two weeks.",
        roles: [["Concept", "Defined the idea: snap a meal, let AI do the counting, and turn the numbers into plans and progress."], ["UX research", "Mapped what users say, think, see and hear in an empathy map, with FigJam and Google Forms."], ["UI design", "Designed the full flow in Figma: onboarding, home, recipes, AI coach, daily macros and progress."], ["Design system", "Built the colours, type scale, a 390 px grid and reusable components with variants."]],
        empathy: {
          title: ["What users", "say and feel"], intro: "An empathy map of someone who wants to eat better but has no time to count every meal.", core: "User",
          quads: [
            ["💬", "Says", ["“I don’t know how many calories are in this meal.”", "“I want to eat better, but I don’t have time to count everything.”", "“I tried other apps, but they’re too complicated.”"]],
            ["💭", "Thinks", ["“If I could just take a picture, it would save me so much time.”", "“I get confused about carbs and fats.”", "“I want to see progress without feeling stressed.”"]],
            ["👀", "Sees", ["Fitness influencers with perfect diets", "Apps that need manual entry", "Confusing labels in restaurants and stores"]],
            ["👂", "Hears", ["“AI can now tell you how many calories are in your food.”", "“You should eat fewer carbs.”", "“It’s too hard to stay consistent with diet apps.”"]]
          ],
          insight: ["Key insight", "Users don’t want more data, they want less effort. “If I could just take a picture” became the core feature."]
        },
        process: [["Empathize", "Empathy map of users’ frustrations", "Research"], ["Define", "Problem statement and goals", "Research"], ["Ideate", "Photo-first tracking, meal plans and an AI coach", "Concept"], ["Prototype", "High-fidelity screens in Figma", "Design"], ["Test", "Review the flow and refine", "Design"]],
        processTitle: ["Design thinking,", "step by step"],
        screensTitle: ["From first tap to", "daily habit"], screensText: "The key screens, in the order a new user meets them. Every board is in the gallery below.",
        screens: [["Quick sign-up", "Sign up with Facebook or Google, without long forms."], ["Personal setup", "Four short steps (sex, birthday, height and weight) set personal targets and end with a friendly congratulations."], ["Home & recipes", "Search plus Breakfast, Lunch and Dinner tabs lead to recipes with ingredients and step-by-step instructions."], ["Snap a meal", "Upload a photo of your meal and the AI estimates calories, carbs, protein and fat."], ["AI coach", "A chat where users ask about food and goals and get personal suggestions."], ["My daily & progress", "Macros for each day, saved recipes and a weight chart that make progress visible."]],
        brand: { title: ["Fresh, calm", "and green"], text: "An olive green for health and freshness, a warm cocoa brown for food, and one font family in four weights.",
          palette: [["Olive", "#9FAE70"], ["Cocoa", "#8C5E42"]],
          type: [["Montserrat", "Light, Regular, Bold and Extra Bold"], ["Type scale", "H1 24 px down to H6 14 px, body 16 px"], ["Grid", "390 px frame, 16 px margins and gutters"]] },
        outcome: { title: ["A complete", "app concept"], points: ["An end-to-end flow from sign-up to progress", "Photo-first meal logging powered by AI", "A reusable design system with components and variants", "Designed in two weeks"], ongoing: "CalTrack is a concept case study designed in Figma. The next step would be usability testing the photo flow with real meals." }
      }
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
      slug: "aurelle-bakery", behance: null, repo: "https://github.com/ALAASHAHEEN93/aurelle-bakery-menu",
      tldr: { problem: "A motion concept from social media only exists as a video: nobody can actually use it.", role: "Front-end development: turning the concept into a real, interactive page.", result: "A live menu book with 3D page turns, a canvas particle effect, and tap, swipe and keyboard controls." },
      title: "Aurelle Bakery", tagline: "A menu book where every page bakes a dessert", kind: "web", kindLabel: "Interactive web · Front-end", year: "2026",
      role: "Front-end development & interaction", platform: "Responsive web (desktop & mobile)", tools: ["HTML", "CSS", "JavaScript", "Canvas"],
      live: "https://alaashaheen93.github.io/aurelle-bakery-menu/",
      cover: "assets/work/aurelle/preview.jpg",
      team: { icon: "✦", text: "Concept and dessert imagery from an Instagram reel by @vexmo_animation. I rebuilt the concept as a working, interactive web page." },
      overview: [
        "An interactive dessert menu for a fictional bakery. Each tap turns a page in 3D, and the next dessert bakes onto the page out of swirling flour and sparkles.",
        "I rebuilt a motion concept from an Instagram reel as a real web page, in plain HTML, CSS and JavaScript, with no build step and no dependencies."
      ],
      highlights: ["An open menu book on a marble table: leather cover, gold corners, framed paper pages", "3D page turns, forward and back", "A flour-and-sparkle particle effect drawn on canvas", "Autoplay, plus tap, swipe and arrow-key navigation", "No build step and no dependencies"],
      tags: ["Interaction design", "Animation", "Front-end", "Canvas"],
      videoFile: "assets/work/aurelle/aurelle-demo.mp4",
      images: []
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
      images: imgs(["1400_webp/1315c1230573965.68790b883ecf7.png", "1400_webp/d03c0d230573965.68790b8840c32.png", "1400_webp/a77d4d230573965.687953251c803.png", "1400_webp/285f9b230573965.687953251bae7.png", "1400_webp/dac537230573965.68790b883fd7d.png", "1400_webp/4a7f9f230573965.6879552e55fa2.png", "1400_webp/f2bfbb230573965.687953251c183.png", "1400_webp/bf0b4a230573965.6879552e55a49.png", "1400_webp/46828a230573965.68790b883d625.png", "1400_webp/b0dbf4230573965.68790b8840239.png", "1400_webp/97685b230573965.6879552e566b5.png", "1400_webp/fbfa35230573965.68790b883e2a3.png", "1400_webp/756939230573965.68790b883b8b4.png", "1400_webp/68af49230573965.68790b883c12f.png", "1400_webp/ee893f230573965.68790c824d5e9.png"]),
      story: {
        challenge: {
          statement: "Many people love plants but struggle to keep them alive, and most apps help only with shopping or only with care.", em: "keep them alive",
          points: [["Lack of knowledge", "Beginners don’t know what a plant needs or what is going wrong."], ["Problems found too late", "Pests, diseases and improper care are noticed when the plant is already hard to save."], ["Unreliable purchases", "Poor-quality plants bought online lead to frustration and plant loss."], ["Two apps for one hobby", "Shopping and care live in separate apps, so the journey breaks."]]
        },
        rolesTitle: ["Designing the", "whole journey"], rolesText: "I designed Grove end to end in Figma, from the problem statement to the final screens.",
        roles: [["UX research", "Defined the problem and the two audiences: beginners and plant enthusiasts."], ["UX design", "Joined the store and the care assistant in one flow, from browsing to checkout to care."], ["UI design", "Designed every screen, from welcome and login to payment, reviews and My Garden."], ["Visual system", "Chose the colours and type, and set up a 5-column mobile grid."]],
        decisionsTitle: ["Key design decisions", "One app,", "two jobs"],
        decisions: [["Shop and care in one place", "A plant store and a care assistant share one app, so users can spot a problem and buy what they need in the same place."], ["Take a photo, get an answer", "Users take a photo or pick one from the gallery, and the app checks it for pests, diseases or improper care."], ["Care advice after every scan", "The analysis ends in a plant profile with care tips, and users can save their plants in My Garden collections."], ["Compare before you buy", "Favourites let users compare prices, and reviews help them shop with confidence."]],
        screensTitle: ["Screen by", "screen"], screensText: "The key screens of the app. Every board is in the gallery below.",
        screens: [["Welcome & login", "A short onboarding, then login or sign-up."], ["Home & new arrivals", "Browse plants, new arrivals and categories."], ["Plant details", "Photos, price and care information for each plant."], ["Snap to diagnose", "Use the camera or gallery, tap “Analyse the image” and get the plant’s details."], ["Bag & order details", "Review the bag, then follow the order with its tracking details."], ["Reviews & My Garden", "Review bought plants and group your own plants into collections."], ["Favourites", "Save plants and compare prices before buying."], ["Payment", "Pay by card or with PayPal."]],
        brand: { title: ["Deep green,", "soft leaves"], text: "A deep forest green with a pale leaf green keeps the store calm and lets the plant photos stand out.",
          palette: [["Forest", "#143730"], ["Leaf mist", "#DCE8DE"], ["Black", "#000000"], ["White", "#FEFEFE"]],
          type: [["Lunasima", "Regular and Bold, for headings and text"], ["Grid", "16 px margins and gutters, 5 columns"]] },
        outcome: { title: ["Shop it,", "grow it"], points: ["One app for buying plants and caring for them", "Photo-based checks for pests, diseases and care problems", "A complete purchase flow with card and PayPal", "Personal plant collections in My Garden"], ongoing: "Grove is a concept case study designed in Figma. The next step would be testing the photo diagnosis with beginners and refining the care advice." }
      }
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
      images: imgs(["1400_webp/1b7e88239610529.692d77dc66cb9.png", "1400_webp/6b8bb3239610529.692d77dc68b3d.png", "1400_webp/7a7857239610529.692d77dc693f1.png", "1400_webp/fcbd6b239610529.692d7ba648efa.png", "1400_webp/c0a238239610529.692d77dc684a9.png", "1400_webp/26ca9e239610529.692d77dc67be6.png"]),
      story: {
        challenge: {
          statement: "Design a complete Arabic shopping app for modest fashion, from the first welcome screen to a confirmed order.", em: "complete",
          points: [["Welcome & onboarding", "Introduce the store and what it promises before the first purchase."], ["Easy browsing", "Home, category and product pages for exploring abayas."], ["A clear checkout", "Cart, checkout and an order confirmation."], ["Trust & contact", "Login and sign-up, plus Contact Us and About pages."]]
        },
        rolesTitle: ["Designing in", "Arabic"], rolesText: "I designed every screen in Figma, right to left from the start.",
        roles: [["UX design", "Planned the shopping flow from onboarding to order confirmation."], ["UI design", "Designed onboarding, sign-in, home, favourites, product details, cart, checkout and account screens."], ["Right-to-left layout", "Layouts, navigation and text follow the Arabic reading direction on every screen."]],
        decisionsTitle: ["Key design decisions", "Calm, warm and", "right to left"],
        decisions: [["Right to left on every screen", "Layouts, back arrows and navigation follow the Arabic reading direction, so the app feels native to its users."], ["Three promises in onboarding", "Three illustrated screens welcome users to the store and introduce easy ordering and fast delivery."], ["Sign in your way", "Sign in with email, or with Facebook, Google or Apple."], ["Warm sand tones", "Soft beige and a deep brown keep the focus on the abayas and give the store a calm, elegant feel."]],
        screensTitle: ["Screen by", "screen"], screensText: "The key screens of the app. Every board is in the gallery below.",
        screens: [["Onboarding", "Three illustrated welcome screens."], ["Sign in & sign-up", "Email or social sign-in, and a short sign-up form."], ["Home", "Featured abayas, new arrivals and categories."], ["Favourites", "Saved pieces, ready to add to the cart."], ["Product details", "Large photos, sizes, rating and description, with Add to cart."], ["Cart, checkout & confirmation", "Cart, address and payment, and a clear order confirmation."], ["Contact & account", "A contact form, About page and account settings."]],
        outcome: { title: ["Ready", "to shop"], points: ["A complete shopping flow in Arabic", "Right-to-left layouts on every screen", "Onboarding, account, cart, checkout and confirmation", "Contact and About pages that build trust"], ongoing: "Abaya Store is a UI/UX concept designed in Figma. The next steps would be a usability test with Arabic-speaking shoppers and an English version." }
      }
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
      images: imgs(["fs_webp/0eaea9235882915.68e01c8762041.png", "fs_webp/387d10235882915.68e01c8761672.png", "fs_webp/9d4a1d235882915.68e01c876348c.png", "fs_webp/7ecf39235882915.68e01c8762e48.png", "fs_webp/01f45d235882915.68e01c876053f.png", "max_632_webp/367b80235882915.68e01c875fd3b.png", "1400_webp/5de89c235882915.68e7b8bab62c0.png", "1400_webp/eab6fe235882915.68e01dc41d744.png", "1400_webp/340bd3235882915.68e01c8763efa.png"]),
      story: {
        challenge: {
          statement: "Many parents struggle to make storytime consistent, so children miss out on the benefits of regular storytelling.", em: "consistent",
          points: [["Busy schedules", "Parents often don’t have time to read to their kids every day."], ["Stories are scattered", "Diverse, age-appropriate stories are hard to find in one place."], ["Passive reading", "Few apps have interactive features that keep children engaged and help them learn."], ["Overstimulating apps", "Many apps are loud and busy instead of calm and designed for kids."]]
        },
        rolesTitle: ["Designing for", "two users"], rolesText: "Little Chapter has to work for a parent and a child at the same time. I designed it end to end in Figma.",
        roles: [["UX research", "Defined the problem and mapped the tone the app should have for kids and parents."], ["UX design", "Planned two ways to enjoy a story, reading together or listening to narration, plus a short quiz."], ["UI design", "Designed every screen, from splash and onboarding to library, explore and profile."], ["Design system", "Created the colours, typography and reusable components like story cards and the tab bar."]],
        decisionsTitle: ["Tone mapping", "How it", "feels"], decisionsNav: "Tone", decisionsText: "Before drawing screens, I defined how the app should sound, look and react.",
        decisions: [["Voice & language", "Simple, playful and friendly. Short sentences, emojis and questions, and no formal words."], ["Visual tone", "Warm, soft colours, rounded shapes and icons, and light animations like stars, balloons and sparkles."], ["Interaction tone", "Encouraging feedback: “Almost! Try again” instead of “Wrong!”, and confetti, stars and sounds to celebrate success."]],
        screensTitle: ["Screen by", "screen"], screensText: "The key screens of the app. Every board is in the gallery below.",
        screens: [["Splash & onboarding", "A friendly fox welcomes the family: “Adventure begins with every page”."], ["Sign up & login", "A simple start for parents."], ["Personal home", "A welcome, trending stories and the most popular ones."], ["Read or listen", "Read the story together, or play the narrated version."], ["Story quiz", "A short question after the story, with green for right and gentle red for “try again”."], ["Library & explore", "Saved stories in My Library, and search to find new ones."], ["Profile", "Notifications, data and storage, and subscription settings for parents."]],
        brand: { title: ["Soft, warm", "and safe"], text: "A calm teal green on a warm cream background, with rounded, friendly type that is easy for young readers.",
          palette: [["Teal", "#3E7067"], ["Cream", "#FDF6EC"], ["Ink", "#000000"]],
          type: [["Baloo", "Headings, 16 to 30 px"], ["Nunito", "Body text, 16 px, Regular and Semi Bold"]] },
        outcome: { title: ["Storytime,", "made easy"], points: ["Read-together and narrated listening modes", "A short quiz after the story", "A calm, child-friendly interface shaped by a tone map", "Library, explore and profile for parents"], ongoing: "Little Chapter is a concept case study designed in Figma. The next step would be testing the reading and quiz flow with parents and children together." }
      }
    }
  ];
  // German version of each case study (used when the site is in DE). Anything left out falls back to English.
  const DE = {
    "coffee-lab": {
      tagline: "Ein Onlineshop als molekulare Rösterei", kindLabel: "E-Commerce · Design & Full-Stack", role: "UI Design & Full-Stack-Entwicklung", platform: "Responsive Website · Deutsch & Englisch",
      tldr: { problem: "Die meisten Kaffee-Shops online sehen gleich aus und helfen nicht zu verstehen, wie ein Kaffee schmeckt.", role: "Konzept, UI Design und Full-Stack-Entwicklung, eigenständig.", result: "Ein zweisprachiger Shop mit Next.js und Payload CMS, mit interaktiven Geschmacks-Tools, Warenkorb und Nutzerkonten." },
      overview: ["CoffeeLab ist ein Specialty-Coffee-Shop, gestaltet als molekulares Labor: Jeder Kaffee ist eine „Probe“, die man vor dem Kauf erkunden, einstellen und vergleichen kann.", "Ich habe ihn komplett gestaltet und gebaut, vom dunklen Röstereilook bis zum Next.js-Front-End mit Payload-CMS-Back-End, Konten, Warenkorb und Inhalten auf Deutsch und Englisch."],
      highlights: ["Ein starkes Laborkonzept für eine Kaffeemarke", "Live-Geschmacksradar mit Röst- und Geschmacksreglern", "Espresso oder Filter: Ein Schalter ändert die Geschmacksnoten", "Produktfilter, Warenkorb-Drawer, Login und Registrierung", "Alle Inhalte in Payload CMS pflegbar, auf Deutsch und Englisch"],
      tags: ["E-Commerce", "UI Design", "Next.js", "Payload CMS", "Full-Stack"],
      facts: [["Rolle", "UI Design & Full-Stack"], ["Plattform", "Responsive Web · DE & EN"], ["Gebaut mit", "Next.js · TypeScript · Payload CMS"], ["Jahr", "2026"]],
      story: {
        challenge: {
          statement: "Specialty-Coffee-Shops sehen online alle gleich aus: ein Raster aus Tüten und ein paar Geschmacksnoten. Bei CoffeeLab kann man einen Kaffee erkunden, bevor man ihn kauft.", em: "erkunden",
          points: [["Eine Marke, die bleibt", "Ein starkes Laborkonzept, mit Proben, Protokollen und Archiven statt eines austauschbaren Shops."], ["Schmecken vor dem Kauf", "Interaktive Tools zeigen, wie Röstgrad und Zubereitung den Geschmack verändern."], ["Ein echter Shop dahinter", "Filter, Warenkorb, Konten und ein Checkout-Schritt, nicht nur eine Landingpage."], ["Pflegbar in zwei Sprachen", "Alle Inhalte liegen in einem CMS, auf Deutsch und Englisch."]]
        },
        rolesTitle: ["Vom Konzept", "zum Code"], rolesText: "Ich habe CoffeeLab eigenständig gestaltet und gebaut, vom visuellen Konzept bis zur veröffentlichten App.",
        roles: [["Konzept & UI Design", "Das Laborthema, die dunkle Röstereipalette, Typografie und jeder Abschnitt der Seite."], ["Interaction Design", "Das Geschmacksradar, der Röstregler, der Espresso-/Filter-Schalter und die Blending-Kammer."], ["Front-End", "Next.js und React mit TypeScript: Produktfilter, Warenkorb-Drawer und responsive Layouts."], ["CMS & Back-End", "Payload CMS mit MongoDB: pflegbare Inhalte, Produkte, Nutzerkonten, Deutsch und Englisch."]],
        featuresTitle: ["Ein Rundgang", "durch das Labor"], featuresText: "Acht Momente aus dem Shop, vom ersten Screen bis zum Warenkorb.",
        features: [
          { title: "Ein Labor, kein Schaufenster", board: 0, text: "Der Hero setzt den Ton: eine molekulare Rösterei. Ein fixierter Schalter für Espresso oder Filter bleibt sichtbar und ändert die Geschmacksnoten auf der ganzen Seite." },
          { title: "Ausgewählte Proben", board: 1, text: "Kaffees als Laborproben, mit Filtern für Bestseller, Single Origins, Espresso-Blends und seltene Varietäten. Jede Karte zeigt Geschmacksnoten, Bewertung und Preis." },
          { title: "Hinzufügen, ohne die Seite zu verlassen", board: 2, text: "Ein Kaffee im Warenkorb öffnet einen seitlichen Warenkorb mit Artikel, Menge und Zwischensumme, und man kann weiterstöbern." },
          { title: "Den Geschmack einstellen", board: 3, text: "Regler für Röstung, Säure, Körper, Süße und Komplexität steuern ein Live-Geschmacksradar: Man sieht das Profil, statt darüber zu lesen." },
          { title: "Die Blending-Kammer", board: 4, text: "Einen Experten-Blend wählen oder selbst zusammenstellen. Die Geschmacksnoten ändern sich mit der Zubereitung." },
          { title: "Der geheime Tresor", board: 5, text: "Seltene Microlots als versiegelte Protokolle, mit Cupping-Score, Herkunft, Röstung und Geschmacksnoten." },
          { title: "Blend-Analyse", board: 6, text: "Eine Detailansicht für jeden Blend: Herkunft, sensorische Werte und Stabilität, mit „In den Warenkorb“ direkt neben den Daten." },
          { title: "Dasselbe Labor im Taschenformat", board: 9, text: "Navigation, Filter und Produktkarten passen sich an Smartphones an, mit demselben dunklen, ruhigen Look." }
        ],
        brand: { title: ["Dunkle Röstung,", "Kupferlicht"], text: "Ein fast schwarzer Röstereihintergrund mit warmen Kupferakzenten, eine elegante Serifenschrift für Headlines und eine klare Sans-Serif für Daten und UI.",
          palette: [["Röstschwarz", "#080706"], ["Milchschaum", "#F6F2EC"], ["Crema", "#D8CEC3"], ["Kupfer", "#C78F6F"], ["Bronze", "#A67C52"]],
          type: [["Cormorant Garamond", "Headlines und Produktnamen"], ["Inter / System-Sans", "UI, Labels und Fließtext"]] },
        decisionsTitle: ["Wichtige Entscheidungen", "Gebaut, um zu", "bleiben"],
        decisions: [["Inhalte im CMS, nicht im Code", "Jeder Text der Startseite liegt in einem Payload-CMS-Global, Inhalte lassen sich ohne Entwickler:in ändern."], ["Zwei Sprachen, ein Schalter", "Deutsche und englische Inhalte pro Feld, mit einem DE-/EN-Schalter, der die Wahl speichert."], ["Nie eine leere Seite", "Ist die Datenbank nicht erreichbar, zeigt die Seite eingebaute Inhalte, statt abzustürzen."], ["Konten und Warenkorb", "Login, Registrierung und Kontoseite auf Basis der Payload-Authentifizierung, dazu ein gemeinsamer Warenkorb auf der ganzen Seite."]],
        outcome: { title: ["Gestaltet", "und gebaut"], points: ["Ein komplettes Marken- und UI-Konzept", "Ein funktionierender Next.js-Shop mit Warenkorb und Konten", "Inhalte im CMS pflegbar, auf Deutsch und Englisch", "Responsive auf Desktop und Mobilgeräten"], cta: "Live-Demo ausprobieren", ongoing: "CoffeeLab ist ein Portfolio-Projekt: Produkte, Preise, Bewertungen und Zahlen sind Beispielinhalte. Die Live-Demo läuft auf GitHub Pages ohne Server, Konten und CMS gibt es daher nur in der Vollversion. Der Code liegt auf GitHub." }
      }
    },
    "aurelle-bakery": {
      tagline: "Ein Menübuch, in dem jede Seite ein Dessert backt", kindLabel: "Interaktives Web · Front-End", role: "Front-End-Entwicklung & Interaktion", platform: "Responsive Website (Desktop & Mobil)",
      team: { text: "Konzept und Dessert-Bilder aus einem Instagram-Reel von @vexmo_animation. Ich habe das Konzept als funktionierende, interaktive Webseite umgesetzt." },
      overview: ["Eine interaktive Dessertkarte für eine fiktive Bäckerei. Jeder Tipp blättert eine Seite in 3D um, und das nächste Dessert backt sich aus wirbelndem Mehl und Glitzer auf die Seite.", "Ich habe ein Motion-Konzept aus einem Instagram-Reel als echte Webseite umgesetzt, mit purem HTML, CSS und JavaScript, ohne Build-Schritt und ohne Abhängigkeiten."],
      highlights: ["Ein offenes Menübuch auf einem Marmortisch: Ledereinband, goldene Ecken, gerahmte Papierseiten", "3D-Umblättern, vor und zurück", "Ein Mehl-und-Glitzer-Partikeleffekt auf Canvas", "Autoplay sowie Tippen, Wischen und Pfeiltasten", "Kein Build-Schritt, keine Abhängigkeiten"],
      tags: ["Interaction Design", "Animation", "Front-End", "Canvas"],
      tldr: { problem: "Ein Motion-Konzept aus Social Media existiert nur als Video: Niemand kann es wirklich benutzen.", role: "Front-End-Entwicklung: das Konzept in eine echte, interaktive Seite verwandeln.", result: "Ein live nutzbares Menübuch mit 3D-Umblättern, Canvas-Partikeleffekt und Steuerung per Tippen, Wischen und Tastatur." }
    },
    "ferment-freude": {
      tagline: "Markenidentität & Website-UX", kindLabel: "Markenidentität · UI/UX · Next.js",
      role: "UI/UX Design, Marke & Front-End (Teamprojekt)", platform: "Responsive Website",
      overview: [
        "Fermentfreude ist ein österreichisches Food-Startup, das Fermentation für den Alltag und für die Gastronomie zugänglich macht. Die Plattform erklärt komplexe Prozesse einfach und nahbar, nimmt Unsicherheit und lädt dazu ein, es selbst auszuprobieren.",
        "Gemeinsam mit Rafaela Vaz (Entwicklung) habe ich am UI/UX Design und an der Marke gearbeitet und zum Next.js-Front-End beigetragen. Die UX setzte auf eine klare, intuitive Journey durch Workshops, Produkte und Lerninhalte. Das UI spiegelt den natürlichen, experimentellen Charakter der Marke durch durchdachte Typografie, Weißraum und visuelle Hierarchie, und die React-Umsetzung hält das Erlebnis auf allen Geräten flüssig und konsistent."
      ],
      highlights: ["Rebranding-Strategie & Creative Direction mit der Geschäftsleitung", "Vollständige Brand Guidelines: Schrift, Grafik, Fotografie", "Klare Journey für Workshops, Produkte und Wissen", "Klares, modernes UI mit starker Hierarchie", "Responsive React-Umsetzung im Einklang mit dem Designsystem"],
      tags: ["Branding", "Logo-Design", "Visuelle Identität", "Webdesign", "React"],
      tldr: { problem: "Fermentation wirkt kompliziert, und Shop, Workshops und Markengeschichte waren voneinander getrennt.", role: "UX/UI Design, Marke und Front-End-Beitrag im Zweierteam, vom ersten Gespräch bis zum Live-Betrieb.", result: "Eine einheitliche Marke und eine Live-Website auf fermentfreude.at, mit laufender UX/UI- und Front-End-Arbeit." },
      team: { text: "Ein Teamprojekt mit Rafaela Vaz (Entwicklung), ermöglicht durch ITCareerHub und Science Park Graz." },
      testimonial: { role: "Founder, Fermentfreude OG", source: "LinkedIn-Empfehlung, 2026 · im englischen Original" },
      facts: [["Rolle", "UX/UI, Marke & Front-End"], ["Zeitraum", "Seit Januar 2026"], ["Kunde", "Österreichisches Food-Startup"], ["Tools", "Figma · Webflow · Next.js · TypeScript"]],
      beforeAfter: {
        intro: "Die alte Wix-Website listete Workshop-Termine in einer schlichten Tabelle. Die neue Website führt durch Workshops, Produkte und Wissen, mit klarerer Struktur und einem ruhigeren, moderneren Look.",
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
          ["UX & Usability", "Usability-Feedback und Analytics, um zu verstehen, wo Kund:innen auf der alten Website hängen blieben."],
          ["UX/UI Design", "User Flows, Wireframes und High-Fidelity-Prototypen in Figma für Shop, Workshops und Lerninhalte."],
          ["Front-End-Entwicklung", "Mitarbeit an Website-Komponenten und UI-Elementen mit Next.js und TypeScript, im Team mit Git und GitHub."]
        ],
        evolution: {
          title: ["Von Webflow", "zu Next.js"],
          intro: "Das Projekt hat unterwegs die Richtung geändert, und mein Werkzeugkasten auch.",
          phases: [
            { label: "Phase 1", title: "UI/UX Design in Figma, geplant für Webflow", text: "Es begann als UI/UX-Designprojekt, das in Webflow umgesetzt werden sollte: Tools, mit denen ich bereits Erfahrung hatte. Flows, Wireframes und UI habe ich in Figma gestaltet.", tools: ["Figma", "Webflow"] },
            { label: "Phase 2", title: "Eine eigene Plattform mit Next.js", text: "Als die Pläne wuchsen, wechselte die Entwicklung von Webflow zu einer eigenen Plattform. Ohne Vorerfahrung mit React habe ich mir Next.js, TypeScript, HTML, CSS, Git und GitHub im Projekt angeeignet und direkt angewendet.", tools: ["Next.js", "TypeScript", "HTML", "CSS", "Git & GitHub"] }
          ],
          platform: ["E-Commerce", "Workshop-Buchung", "Kundenkonten", "CRM-Integrationen", "Content-Auslieferung", "Vorbereitet für Online-Kurse"],
          duties: ["UI/UX Design und nutzerzentriertes Denken über das gesamte Projekt", "Front-End-Entwicklung mit modernen Webtechnologien", "Umsetzung von Website-Komponenten und UI-Elementen", "Arbeit mit Git und GitHub im Team", "Ideen und Lösungen für bessere UX, Struktur und Funktionalität", "Geschäftsanforderungen in praktische, nutzerfreundliche Lösungen übersetzen"]
        },
        process: [["Kick-off", "Markenstrategie und Creative Direction mit der Geschäftsleitung."], ["Analyse", "Bestehende Marke und Website geprüft: was bleibt, was sich ändert."], ["Markensystem", "Typografie, Farbe, Grafik, Bildsprache und Logo-Anwendungen."], ["UX & UI", "Flows, Wireframes und Figma-Prototypen für Shop, Workshops und Wissen."], ["Umsetzung", "React-Front-End mit wiederverwendbaren Storybook-Komponenten."], ["Iteration", "Usability-Feedback, Hypothesen und A/B-Tests, laufend."]],
        research: { title: ["Feedback", "& Daten"], intro: "Das war ein Rebranding, keine Marke von null: Die Marke gab es bereits. Statt neu anzufangen, haben wir mit Usability-Feedback und Daten entschieden, was wir verbessern, und die Änderungen getestet.", methods: ["Analyse der bestehenden Marke und Website", "Usability-Feedback-Sessions", "Analytics-Review der Absprungstellen", "A/B-Tests"], loop: ["Hypothese", "Test", "Lernen"] },
        brand: {
          text: "Ein Rebranding der bestehenden Marke: vollständige Guidelines für Typografie, Farbe, Grafik und Fotografie, damit sie auf der Website, im Laden und auf Social Media gleich aussieht.",
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
      tldr: { problem: "Die eigene Ernährung jeden Tag zu verstehen und zu steuern, kann kompliziert wirken.", role: "UX-Research und UI Design für Smartphone und Tablet.", result: "Ein KI-gestütztes App-Konzept: Mahlzeit fotografieren für sofortige Nährwerte, persönliche Pläne und sichtbarer Fortschritt." },
      facts: [["Rolle", "UI/UX Design, vom Konzept bis zur Übergabe"], ["Dauer", "2 Wochen"], ["Tools", "Figma · FigJam · Google Forms"], ["Plattform", "Mobile App"]],
      story: {
        challenge: {
          statement: "Kalorien von Hand zu zählen ist so mühsam, dass viele aufgeben, bevor sie ihr Ziel erreichen.", em: "aufgeben",
          points: [["Manuelle Eingabe ist langsam", "Die meisten Kalorien-Apps verlangen, jede Mahlzeit einzutippen. Das kostet Zeit und hält kaum jemand durch."], ["Selbstgekochtes ist Schätzung", "Kohlenhydrate, Fette und Eiweiß sind bei selbstgekochtem oder Restaurant-Essen schwer zu schätzen."], ["Verwirrende Angaben", "Speisekarten und Etiketten machen die gesunde Wahl nicht offensichtlich."], ["Die Motivation sinkt", "Ungenaues Tracking führt zu verfehlten Zielen, und viele hören ganz auf."]]
        },
        rolesTitle: ["Eine Designerin,", "von Anfang bis Ende"], rolesText: "Ich war UI/UX Designerin vom ersten Konzept bis zu den finalen Screens, in zwei Wochen.",
        roles: [["Konzept", "Die Idee definiert: Mahlzeit fotografieren, die KI zählt, und aus den Zahlen werden Pläne und Fortschritt."], ["UX-Research", "In einer Empathy Map festgehalten, was Nutzer:innen sagen, denken, sehen und hören, mit FigJam und Google Forms."], ["UI Design", "Den kompletten Ablauf in Figma gestaltet: Onboarding, Startseite, Rezepte, KI-Coach, Tageswerte und Fortschritt."], ["Designsystem", "Farben, Schriftskala, ein 390-px-Raster und wiederverwendbare Komponenten mit Varianten."]],
        empathy: {
          title: ["Was Nutzer:innen", "sagen und fühlen"], intro: "Eine Empathy Map von jemandem, der sich gesünder ernähren will, aber keine Zeit hat, jede Mahlzeit zu zählen.", core: "Nutzer:in",
          quads: [
            ["💬", "Sagt", ["„Ich weiß nicht, wie viele Kalorien in dieser Mahlzeit stecken.“", "„Ich will mich besser ernähren, habe aber keine Zeit, alles zu zählen.“", "„Ich habe andere Apps probiert, aber sie sind zu kompliziert.“"]],
            ["💭", "Denkt", ["„Wenn ich einfach ein Foto machen könnte, würde mir das so viel Zeit sparen.“", "„Kohlenhydrate und Fette verwirren mich.“", "„Ich will Fortschritte sehen, ohne Stress.“"]],
            ["👀", "Sieht", ["Fitness-Influencer mit perfekter Ernährung", "Apps mit manueller Eingabe", "Verwirrende Angaben in Restaurants und Läden"]],
            ["👂", "Hört", ["„KI kann dir jetzt sagen, wie viele Kalorien in deinem Essen stecken.“", "„Du solltest weniger Kohlenhydrate essen.“", "„Mit Diät-Apps dranzubleiben ist zu schwer.“"]]
          ],
          insight: ["Wichtigste Erkenntnis", "Nutzer:innen wollen nicht mehr Daten, sondern weniger Aufwand. „Wenn ich einfach ein Foto machen könnte“ wurde zur Kernfunktion."]
        },
        process: [["Empathize", "Empathy Map der Frustrationen", "Research"], ["Define", "Problemstellung und Ziele", "Research"], ["Ideate", "Foto-Tracking, Ernährungspläne und KI-Coach", "Konzept"], ["Prototype", "High-Fidelity-Screens in Figma", "Design"], ["Test", "Ablauf prüfen und verfeinern", "Design"]],
        processTitle: ["Design Thinking,", "Schritt für Schritt"],
        screensTitle: ["Vom ersten Tippen zur", "täglichen Routine"], screensText: "Die wichtigsten Screens, in der Reihenfolge, in der neue Nutzer:innen sie sehen. Alle Boards sind in der Galerie unten.",
        screens: [["Schnelle Registrierung", "Mit Facebook oder Google registrieren, ohne lange Formulare."], ["Persönliches Setup", "Vier kurze Schritte (Geschlecht, Geburtstag, Größe und Gewicht) setzen persönliche Ziele und enden mit einem freundlichen Glückwunsch."], ["Startseite & Rezepte", "Suche und Tabs für Frühstück, Mittag- und Abendessen führen zu Rezepten mit Zutaten und Schritt-für-Schritt-Anleitung."], ["Mahlzeit fotografieren", "Ein Foto der Mahlzeit hochladen, und die KI schätzt Kalorien, Kohlenhydrate, Eiweiß und Fett."], ["KI-Coach", "Ein Chat für Fragen zu Essen und Zielen, mit persönlichen Vorschlägen."], ["Mein Tag & Fortschritt", "Makros pro Tag, gespeicherte Rezepte und eine Gewichtskurve machen Fortschritt sichtbar."]],
        brand: { title: ["Frisch, ruhig", "und grün"], text: "Ein Olivgrün für Gesundheit und Frische, ein warmes Kakaobraun für Essen und eine Schriftfamilie in vier Stärken.",
          palette: [["Oliv", "#9FAE70"], ["Kakao", "#8C5E42"]],
          type: [["Montserrat", "Light, Regular, Bold und Extra Bold"], ["Schriftskala", "H1 24 px bis H6 14 px, Fließtext 16 px"], ["Raster", "390-px-Frame, 16 px Ränder und Abstände"]] },
        outcome: { title: ["Ein komplettes", "App-Konzept"], points: ["Ein durchgängiger Ablauf von der Registrierung bis zum Fortschritt", "Mahlzeiten per Foto erfassen, mit KI", "Ein wiederverwendbares Designsystem mit Komponenten und Varianten", "In zwei Wochen gestaltet"], ongoing: "CalTrack ist eine Konzept-Case-Study, gestaltet in Figma. Der nächste Schritt wäre ein Usability-Test des Foto-Ablaufs mit echten Mahlzeiten." }
      }
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
      tldr: { problem: "Pflanzenkauf und Pflanzenpflege finden meist an getrennten Orten statt, was für Einsteiger:innen schwierig ist.", role: "UX-Research und UI Design.", result: "Eine All-in-one-App: Pflanzenshop plus fotobasierter Pflege-Assistent, der Schädlinge und Krankheiten erkennt." },
      story: {
        challenge: {
          statement: "Viele lieben Pflanzen, schaffen es aber nicht, sie am Leben zu halten, und die meisten Apps helfen nur beim Kaufen oder nur bei der Pflege.", em: "am Leben zu halten",
          points: [["Fehlendes Wissen", "Einsteiger:innen wissen nicht, was eine Pflanze braucht oder was schiefläuft."], ["Probleme zu spät erkannt", "Schädlinge, Krankheiten und falsche Pflege fallen erst auf, wenn die Pflanze kaum noch zu retten ist."], ["Unzuverlässige Käufe", "Online gekaufte Pflanzen schlechter Qualität führen zu Frust und Verlust."], ["Zwei Apps für ein Hobby", "Kaufen und Pflegen passieren in getrennten Apps, die Journey bricht ab."]]
        },
        rolesTitle: ["Die ganze Journey", "gestaltet"], rolesText: "Ich habe Grove komplett in Figma gestaltet, von der Problemstellung bis zu den finalen Screens.",
        roles: [["UX-Research", "Das Problem und die zwei Zielgruppen definiert: Einsteiger:innen und Pflanzenfans."], ["UX Design", "Shop und Pflege-Assistent in einem Ablauf verbunden, vom Stöbern über den Checkout bis zur Pflege."], ["UI Design", "Jeden Screen gestaltet, von Willkommen und Login bis zu Bezahlung, Bewertungen und My Garden."], ["Visuelles System", "Farben und Schrift gewählt und ein mobiles 5-Spalten-Raster angelegt."]],
        decisionsTitle: ["Wichtige Designentscheidungen", "Eine App,", "zwei Aufgaben"],
        decisions: [["Kaufen und Pflegen an einem Ort", "Pflanzenshop und Pflege-Assistent teilen sich eine App: Problem erkennen und das Passende kaufen, am selben Ort."], ["Foto machen, Antwort bekommen", "Ein Foto aufnehmen oder aus der Galerie wählen, und die App prüft es auf Schädlinge, Krankheiten oder falsche Pflege."], ["Pflegetipps nach jedem Scan", "Die Analyse endet in einem Pflanzenprofil mit Pflegetipps, und eigene Pflanzen lassen sich in My-Garden-Sammlungen speichern."], ["Vergleichen vor dem Kauf", "Mit Favoriten lassen sich Preise vergleichen, und Bewertungen geben Sicherheit beim Kauf."]],
        screensTitle: ["Screen für", "Screen"], screensText: "Die wichtigsten Screens der App. Alle Boards sind in der Galerie unten.",
        screens: [["Willkommen & Login", "Ein kurzes Onboarding, dann Login oder Registrierung."], ["Startseite & Neuheiten", "Pflanzen, Neuheiten und Kategorien entdecken."], ["Pflanzendetails", "Fotos, Preis und Pflegeinfos zu jeder Pflanze."], ["Foto-Diagnose", "Kamera oder Galerie nutzen, „Bild analysieren“ tippen und die Pflanzendetails erhalten."], ["Warenkorb & Bestellung", "Den Warenkorb prüfen und die Bestellung mit Sendungsdetails verfolgen."], ["Bewertungen & My Garden", "Gekaufte Pflanzen bewerten und eigene Pflanzen in Sammlungen ordnen."], ["Favoriten", "Pflanzen merken und Preise vor dem Kauf vergleichen."], ["Bezahlung", "Mit Karte oder PayPal bezahlen."]],
        brand: { title: ["Tiefes Grün,", "zarte Blätter"], text: "Ein tiefes Waldgrün mit einem hellen Blattgrün hält den Shop ruhig und lässt die Pflanzenfotos wirken.",
          palette: [["Wald", "#143730"], ["Blattnebel", "#DCE8DE"], ["Schwarz", "#000000"], ["Weiß", "#FEFEFE"]],
          type: [["Lunasima", "Regular und Bold, für Überschriften und Text"], ["Raster", "16 px Ränder und Abstände, 5 Spalten"]] },
        outcome: { title: ["Kaufen,", "wachsen lassen"], points: ["Eine App zum Kaufen und Pflegen von Pflanzen", "Foto-Check auf Schädlinge, Krankheiten und Pflegeprobleme", "Ein kompletter Kaufablauf mit Karte und PayPal", "Eigene Pflanzensammlungen in My Garden"], ongoing: "Grove ist eine Konzept-Case-Study, gestaltet in Figma. Der nächste Schritt wäre, die Foto-Diagnose mit Einsteiger:innen zu testen und die Pflegetipps zu verfeinern." }
      }
    },
    "abaya-store": {
      tagline: "Eine Shopping-App für Modest Fashion", kindLabel: "Mobile App · UI/UX", role: "UI/UX Design", platform: "Mobile App · arabische Oberfläche (RTL)",
      overview: ["Eine Shopping-App für Modest Fashion, komplett in Figma gestaltet, mit arabischer Oberfläche von rechts nach links.", "Das Ziel: ein ruhiger, eleganter Shop, in dem Stöbern und Bezahlen mühelos funktionieren."],
      highlights: ["Willkommens- und Onboarding-Screens", "Startseite und Kategorien", "Produktdetails", "Warenkorb & Checkout", "Login / Registrierung", "Kontakt- und Über-uns-Seite"],
      tags: ["E-Commerce", "Mode", "Mobile App", "RTL"],
      tldr: { problem: "Modest Fashion online zu kaufen soll sich ruhig, elegant und einfach anfühlen, auf Arabisch.", role: "UI/UX Design in Figma.", result: "Eine vollständige Shopping-App von rechts nach links: Onboarding, Kategorien, Produktdetails, Warenkorb, Checkout und Konto." },
      story: {
        challenge: {
          statement: "Eine komplette arabische Shopping-App für Modest Fashion gestalten, vom ersten Willkommens-Screen bis zur bestätigten Bestellung.", em: "komplette",
          points: [["Willkommen & Onboarding", "Den Shop und seine Versprechen vor dem ersten Kauf vorstellen."], ["Einfaches Stöbern", "Startseite, Kategorien und Produktseiten, um Abayas zu entdecken."], ["Ein klarer Checkout", "Warenkorb, Checkout und eine Bestellbestätigung."], ["Vertrauen & Kontakt", "Login und Registrierung, dazu Kontakt- und Über-uns-Seiten."]]
        },
        rolesTitle: ["Gestaltet auf", "Arabisch"], rolesText: "Ich habe jeden Screen in Figma gestaltet, von Anfang an von rechts nach links.",
        roles: [["UX Design", "Den Einkaufsablauf vom Onboarding bis zur Bestellbestätigung geplant."], ["UI Design", "Onboarding, Anmeldung, Startseite, Favoriten, Produktdetails, Warenkorb, Checkout und Konto gestaltet."], ["Rechts-nach-links-Layout", "Layouts, Navigation und Text folgen auf jedem Screen der arabischen Leserichtung."]],
        decisionsTitle: ["Wichtige Designentscheidungen", "Ruhig, warm und", "von rechts nach links"],
        decisions: [["Rechts nach links auf jedem Screen", "Layouts, Zurück-Pfeile und Navigation folgen der arabischen Leserichtung, damit sich die App für ihre Nutzer:innen natürlich anfühlt."], ["Drei Versprechen im Onboarding", "Drei illustrierte Screens begrüßen im Shop und stellen einfaches Bestellen und schnelle Lieferung vor."], ["Anmelden, wie man möchte", "Mit E-Mail anmelden oder mit Facebook, Google oder Apple."], ["Warme Sandtöne", "Sanftes Beige und ein tiefes Braun lenken den Blick auf die Abayas und geben dem Shop eine ruhige, elegante Wirkung."]],
        screensTitle: ["Screen für", "Screen"], screensText: "Die wichtigsten Screens der App. Alle Boards sind in der Galerie unten.",
        screens: [["Onboarding", "Drei illustrierte Willkommens-Screens."], ["Anmeldung & Registrierung", "E-Mail- oder Social-Login und ein kurzes Registrierungsformular."], ["Startseite", "Ausgewählte Abayas, Neuheiten und Kategorien."], ["Favoriten", "Gemerkte Stücke, bereit für den Warenkorb."], ["Produktdetails", "Große Fotos, Größen, Bewertung und Beschreibung, mit „In den Warenkorb“."], ["Warenkorb, Checkout & Bestätigung", "Warenkorb, Adresse und Bezahlung, dazu eine klare Bestellbestätigung."], ["Kontakt & Konto", "Ein Kontaktformular, die Über-uns-Seite und Kontoeinstellungen."]],
        outcome: { title: ["Bereit zum", "Einkaufen"], points: ["Ein kompletter Einkaufsablauf auf Arabisch", "Rechts-nach-links-Layouts auf jedem Screen", "Onboarding, Konto, Warenkorb, Checkout und Bestätigung", "Kontakt- und Über-uns-Seiten, die Vertrauen schaffen"], ongoing: "Abaya Store ist ein UI/UX-Konzept, gestaltet in Figma. Die nächsten Schritte wären ein Usability-Test mit arabischsprachigen Kund:innen und eine englische Version." }
      }
    },
    "little-chapter": {
      tagline: "Geschichten, die Familien verbinden", kindLabel: "Mobile App · UX Case Study", role: "UX-Research & UI Design", platform: "Mobile App",
      overview: ["Eine App für Kindergeschichten, mit der Eltern und Kinder gemeinsam lesen oder vertonte Versionen hören können.", "Sie verbindet Lernen, Unterhaltung und gemeinsame Zeit in einer ansprechenden und sicheren digitalen Leseumgebung."],
      highlights: ["Gemeinsam lesen oder vorlesen lassen", "Kindgerechte, verspielte Oberfläche", "Sicheres Lesen ohne Ablenkung", "Für Eltern und Kinder gestaltet"],
      tags: ["Kinder", "Bildung", "Storytelling", "Mobile App"],
      tldr: { problem: "Eltern wünschen sich sichere, spannende Geschichten, die sie gemeinsam mit ihren Kindern erleben können.", role: "UX-Research und UI Design.", result: "Eine Geschichten-App mit Vorlese- und Hörmodus in einer verspielten, sicheren Oberfläche." },
      story: {
        challenge: {
          statement: "Vielen Eltern fällt es schwer, regelmäßig vorzulesen, und Kinder verpassen so die Vorteile von Geschichten im Alltag.", em: "regelmäßig",
          points: [["Volle Terminkalender", "Eltern haben oft keine Zeit, ihren Kindern jeden Tag vorzulesen."], ["Verstreute Geschichten", "Vielfältige, altersgerechte Geschichten sind schwer an einem Ort zu finden."], ["Passives Lesen", "Wenige Apps haben interaktive Funktionen, die Kinder fesseln und beim Lernen helfen."], ["Überreizende Apps", "Viele Apps sind laut und unruhig statt ruhig und für Kinder gemacht."]]
        },
        rolesTitle: ["Gestaltet für", "zwei Nutzer:innen"], rolesText: "Little Chapter muss gleichzeitig für ein Elternteil und ein Kind funktionieren. Ich habe die App komplett in Figma gestaltet.",
        roles: [["UX-Research", "Das Problem definiert und festgelegt, welchen Ton die App für Kinder und Eltern haben soll."], ["UX Design", "Zwei Wege zur Geschichte geplant, gemeinsam lesen oder vorlesen lassen, dazu ein kurzes Quiz."], ["UI Design", "Jeden Screen gestaltet, vom Splash und Onboarding bis zu Bibliothek, Entdecken und Profil."], ["Designsystem", "Farben, Typografie und wiederverwendbare Komponenten wie Story-Karten und die Tab-Leiste."]],
        decisionsTitle: ["Tone Mapping", "Wie es sich", "anfühlt"], decisionsNav: "Tonalität", decisionsText: "Bevor ich Screens gezeichnet habe, habe ich festgelegt, wie die App klingen, aussehen und reagieren soll.",
        decisions: [["Stimme & Sprache", "Einfach, verspielt und freundlich. Kurze Sätze, Emojis und Fragen, keine förmlichen Wörter."], ["Visueller Ton", "Warme, sanfte Farben, runde Formen und Icons und leichte Animationen wie Sterne, Ballons und Funkeln."], ["Ton der Interaktion", "Ermutigendes Feedback: „Fast! Versuch’s nochmal“ statt „Falsch!“, und Konfetti, Sterne und Sounds, um Erfolge zu feiern."]],
        screensTitle: ["Screen für", "Screen"], screensText: "Die wichtigsten Screens der App. Alle Boards sind in der Galerie unten.",
        screens: [["Splash & Onboarding", "Ein freundlicher Fuchs begrüßt die Familie: „Mit jeder Seite beginnt ein Abenteuer“."], ["Registrierung & Login", "Ein einfacher Einstieg für Eltern."], ["Persönliche Startseite", "Eine Begrüßung, angesagte und die beliebtesten Geschichten."], ["Lesen oder hören", "Die Geschichte gemeinsam lesen oder die vorgelesene Version abspielen."], ["Story-Quiz", "Eine kurze Frage nach der Geschichte, mit Grün für richtig und sanftem Rot für „nochmal versuchen“."], ["Bibliothek & Entdecken", "Gespeicherte Geschichten in Meine Bibliothek und eine Suche für neue."], ["Profil", "Benachrichtigungen, Daten und Speicher sowie Abo-Einstellungen für Eltern."]],
        brand: { title: ["Sanft, warm", "und sicher"], text: "Ein ruhiges Petrolgrün auf warmem Creme, mit runder, freundlicher Schrift, die für junge Leser:innen leicht lesbar ist.",
          palette: [["Petrol", "#3E7067"], ["Creme", "#FDF6EC"], ["Tinte", "#000000"]],
          type: [["Baloo", "Überschriften, 16 bis 30 px"], ["Nunito", "Fließtext, 16 px, Regular und Semi Bold"]] },
        outcome: { title: ["Vorlesezeit,", "ganz einfach"], points: ["Gemeinsam lesen oder vorlesen lassen", "Ein kurzes Quiz nach der Geschichte", "Eine ruhige, kindgerechte Oberfläche, geprägt durch ein Tone Mapping", "Bibliothek, Entdecken und Profil für Eltern"], ongoing: "Little Chapter ist eine Konzept-Case-Study, gestaltet in Figma. Der nächste Schritt wäre, den Lese- und Quiz-Ablauf gemeinsam mit Eltern und Kindern zu testen." }
      }
    }
  };
  list.forEach(p => { if (DE[p.slug]) p.de = DE[p.slug]; });
  list.forEach(p => { p.cover = local(p.cover); p.images = p.images.map(local); });
  return list;
})();
