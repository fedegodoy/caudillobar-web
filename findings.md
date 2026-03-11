# Project Findings & Research

- Initial implementation plan exists (`implementation_plan.md`).
- Suggested stack: React + Vite + Framer Motion.
- Aesthetic: Comic/pop, vibrant contrast (Orange, Brown, Beige), scrollytelling.
- **North Star:** Dynamic One-Page inspired by the brand manual and Instagram examples in `RECURSOS CAUDILLO`.
- **Integrations:**
  - Rappi: Simple external link.
  - Google Reviews: Static component (mockups, hardcoded data).
  - Instagram Grid: Static images referencing the real posts via simple `<a>` links.
- **Source of Truth:** Local JSON files in the repo for all menus (prices, names, etc.). Need to extract data from PDFs.
- **Delivery Payload:** GitHub repo linked to Vercel MCP, deployed to `caudillobar.com.ar`.
- **Behavioral Rules:** No external APIs for performance / low maintenance.
