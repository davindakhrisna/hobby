---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/posts/[slug]/page.tsx"]
---

# Surface brief: blog (home archive + post reading view)

Scope: home/archive (`src/app/page.tsx`), post view (`src/app/posts/[slug]/page.tsx`), about. Visitor mode: Read.

Audience: developers reading kryisnn's engineering posts. Job: read one post in depth, find the next. Content: synthetic sample posts with public images and embedded videos (lazy + skeleton). Constraints: minimalist, no loud colors, responsive desktop/tablet/mobile, shadcn/ui used heavily, frontend only.

## Direction contract

THESIS: Every post is a component datasheet: document number, revision, numbered figures and tables, a revision history at the end; the archive is a parts selection table. Refuses the hero-plus-card-grid blog home and the dark terminal dev blog.

OWN-WORLD: Cool white paper ground, graphite ink, grey secondary ink, grey table rules, one muted steel line used only as hairlines for active/focus states; no fills, no shadows, near-square corners. Archivo at three widths (condensed for labels, doc numbers, table heads; normal for body and titles), Geist Mono for code only. Tables, title blocks, and figure captions are the component language.

STORY: The reader understands this is one engineer's documented work, scans the selection table, filters by topic (all topics always visible, active inked), opens a document, reads with a persistent contents list, previews figures from in-text references, reaches revision history and the next document. Read posts carry a mark in the index.

FIRST VIEWPORT: Top strip: `kryisnn` mark left, nav, document number and revision right. Title block: large title spanning two thirds, right column with Description and a Features list. The selection table header and topic filter sit at the fold edge; the newest document is Figure 1 beside the table on desktop. Primary action: a row of the table.

FORM: Component datasheet; position 5 of 7 on the ordered list; seed key c39874b6. Raises: fixed ~66ch measure (literary quarterly), state as mark not hue (cutting bench), color only in hairlines (iridescent edge), all options present with active struck forward (cathode gauze).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

Real post content, author bio, feedback/contact address.
