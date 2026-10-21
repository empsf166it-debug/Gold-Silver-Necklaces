# AURELIA Fine Jewelry - Workspace Agent Guidelines

## 1. Project Architecture & Stack
- Pure Vanilla HTML5, Vanilla JavaScript (ES6+), and Vanilla CSS with Tailwind CSS CDN for utility classes.
- No Node.js build step or bundler. Pages run directly in browsers via `file:///` or static local servers.
- Core design tokens are defined in [styles.css](file:///c:/Users/Shalani%20A/Documents/Shalan/Own%20Websites(OCTOBER)/Fine%20Jewelry%20&%20Watches/styles.css) under `:root` and `html.dark`.

## 2. Efficiency & Context Optimization Rules
- **Surgical Edits**: When editing [app.js](file:///c:/Users/Shalani%20A/Documents/Shalan/Own%20Websites(OCTOBER)/Fine%20Jewelry%20&%20Watches/app.js) or HTML files, do NOT read or rewrite entire files. Use `view_file` with precise `StartLine`/`EndLine` ranges and `replace_file_content` targeting specific blocks.
- **Design Token Reuse**: Always reuse predefined tokens (`var(--bg-primary)`, `var(--text-primary)`, `var(--color-gold)`, `glass-card`, `btn-luxury-gold`, `btn-luxury-silver`) instead of generating new ad-hoc colors or inline styles.
- **Subagent Restraint**: Avoid spawning heavy `browser_subagent` processes for straightforward code updates (CSS, text, layout tweaks). Only invoke browser subagents when explicitly requested by the user or when debugging complex runtime interactions.
- **Preserve Structure**: Never overwrite, delete, or regenerate working features, pages, or components. Keep all 5 pages, RTL support, theme switching, 3D tilt, and cart/wishlist state intact.
