# Fritel Filterables

A Vue 3 embeddable widget for the Fritel website that lets visitors browse, search, filter, and preview recipes. Recipe data is fetched live from the UpToDate (UTD) platform API.

---

## Purpose

Fritel is a kitchen appliance brand. This widget replaces a static recipe page with a dynamic, filterable experience — allowing visitors to quickly find recipes by category, author, or keyword, then preview the full recipe without leaving the page.

---

## Features

| Feature | Description |
|---|---|
| **Recipe grid** | Displays recipe cards in a responsive 3-column grid with image, title, author, and category badges |
| **Search** | Real-time text search that filters recipes by name as you type |
| **Category & author filters** | Sidebar checkboxes to filter by recipe type (Appetizer, Dessert, Fish, etc.) and by author |
| **Active filter breadcrumbs** | Shows which filters are currently active with one-click removal |
| **Pagination** | Displays 12 recipes per page with numbered page controls |
| **Recipe preview dialog** | Clicking a recipe opens a full-screen modal that renders the complete UTD recipe page inside an iframe |
| **Skeleton loader** | Shows placeholder cards while recipes are being fetched |
| **Link rewriting** | Internal links inside the preview iframe are automatically rewritten to point to the live site instead of localhost |

---

## How It Works

### Data Flow

```
UTD API
  └── getRecipes()         → recipe list (name, image, categories, author, pageId)
  └── getFilters()         → available categories and authors for the sidebar
  └── openRecipePreview()  → raw Handlebars HTML for the selected recipe page
```

1. On mount, the widget fetches all recipes and available filter options from the UTD API.
2. The recipe list is filtered client-side based on the user's active search string and selected filters.
3. The filtered list is paginated (12 per page).
4. When a user clicks a recipe card, the widget fetches the full recipe HTML from the UTD API.
5. The raw HTML is compiled through Handlebars (`parseRecipeTemplate`) to inject recipe metadata (title, images, ingredients, etc.).
6. The compiled HTML is wrapped in a full CSS/JS shell (`buildRecipePreviewHtml`) that applies the Fritel site theme, then rendered inside an `<iframe srcdoc>` inside the dialog.

### Filtering Logic

- Search filters by `product.name` (case-insensitive substring match).
- Category/author filters are applied as OR — a recipe matches if it belongs to **any** of the selected categories.
- Filter values are normalized to lowercase and `&` is replaced with `and` for consistent matching.
- Changing any filter resets pagination back to page 1.

### Template Parsing

The UTD API returns recipe pages as Handlebars templates. The `parseRecipeTemplate` utility:
- Compiles the template with Handlebars using `locationPageMeta` fields from the recipe object.
- Runs a second pass with a regex to replace any `${variable}` patterns (used in inline CSS, e.g. `background-image`) that Handlebars does not handle.

---

## Requirements

- Node.js 18+
- npm, pnpm, or bun

---

## Installation

```bash
npm install
```

---

## Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:8080`.

---

## Production Build

```bash
npm run build
```

Output is placed in the `dist/` folder.

---

## Configuration

### Site URL

Edit `src/constants/siteUrl.js` to match the target WordPress site:

```js
export default "https://your-site.com/";
```

This URL is used to rewrite internal links inside the recipe preview iframe.

### UTD API

Edit `src/services/UTDService.js` to update the site ID if the UpToDate account changes:

```js
this.siteId = "your-site-id-here";
```

---

## Widget Integration

The widget mounts to a DOM element with the ID `fritel-filterables-products-module`.

Add the following to your host page:

```html
<!-- Mount point -->
<div id="fritel-filterables-products-module"></div>

<!-- Built assets (adjust paths to match your deployment) -->
<link rel="stylesheet" href="/dist/assets/index.css" />
<script type="module" src="/dist/assets/index.js"></script>
```

---

## Project Structure

```
src/
├── components/
│   ├── Recipes/
│   │   ├── Filters.vue          # Sidebar filter panel (categories + authors)
│   │   ├── FilterGroup.vue      # Reusable collapsible filter group
│   │   ├── Search.vue           # Search input with icon
│   │   ├── ProductGrid.vue      # Main grid — fetching, filtering, pagination, dialog
│   │   ├── Item.vue             # Individual recipe card
│   │   ├── ItemLoader.vue       # Skeleton placeholder grid
│   │   ├── Pagination.vue       # Page number controls
│   │   └── SelectedFilters.vue  # Active filter breadcrumb chips
│   └── ui/
│       ├── Badge.vue            # Category tag badge
│       ├── Checkbox.vue         # Styled checkbox for filters
│       ├── Dialog.vue           # Animated modal dialog
│       └── SkeletonLoader.vue   # Single skeleton placeholder block
├── composables/
│   ├── useSearch.js             # Singleton ref for shared search string
│   └── useSelectedFilters.js    # Singleton ref for selected filter array
├── constants/
│   ├── messages.js              # UI text strings
│   └── siteUrl.js               # Base URL for iframe link rewriting
├── services/
│   └── UTDService.js            # UpToDate API client (recipes, filters, preview)
├── utils/
│   ├── parseRecipeTemplate.js   # Handlebars + ${} template compiler
│   └── buildRecipePreviewHtml.js # Full HTML/CSS shell for iframe srcdoc
├── Recipes.vue                  # Root layout (sidebar + grid)
└── main.js                      # Vue app entry — mounts to #fritel-filterables-products-module
```

---

## Tech Stack

| Technology | Role |
|---|---|
| Vue 3 (Composition API) | UI framework |
| Vite | Build tool and dev server |
| Tailwind CSS 3 | Utility-first styling |
| SASS | Extended CSS in SFCs |
| Axios | HTTP requests to UTD API |
| Handlebars | Recipe HTML template rendering |
