# Project Constitution (gemini.md)

## Data Schemas
The primary Source of Truth for the application content will be local JSON files within the repository.

**Menu Data Schema (`/src/data/menu.json`):**
```json
{
  "section": "String (e.g., 'Tragos de Autor', 'Entradas')",
  "items": [
    {
      "name": "String (Name of the dish/drink)",
      "description": "String (Optional description or ingredients)",
      "price": "Number (Price in ARS)"
    }
  ]
}
```

**Instagram Grid Schema (Static Mockupeado):**
```json
{
  "images": [
    {
      "src": "String (Local path to image)",
      "link": "String (URL to Instagram post)",
      "alt": "String"
    }
  ]
}
```

## Behavioral Rules
- **No External Data APIs:** To ensure performance and low maintenance, avoid using live APIs (like Instagram API). Use static image placeholders that link out to the external services.
- **Static Assets:** Mockup Google Reviews and the Instagram grid using static assets and data.
- **Aesthetic:** Comic/pop, vibrant contrast (Orange, Brown, Beige).

## Architectural Invariants
- Adaptation of 3-layer architecture for a frontend web project.
- Deterministic rendering and predictable routing.
- Golden Rule: Update SOPs/Blueprints before changing code.
- **Delivery Payload:** Code stored in GitHub, deployed via Vercel (MCP integration available) to custom domain `caudillobar.com.ar`.

## Maintenance Log
*(To be populated during Phase 5 - Trigger)*
