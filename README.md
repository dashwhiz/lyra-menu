# Lyra Menu

Online menu for Restaurant Lyra, Skopje (Est. 1996).

Live at **[lyra-menu.fyi](https://lyra-menu.fyi)**

---

## How to update the menu

All menu items and prices live in a single file: **`menu-data.js`**

### Changing a price

1. Open `menu-data.js` on GitHub
2. Find the item (use Ctrl+F / Cmd+F to search)
3. Change the number after `price:`
4. Commit and push — the site updates automatically in ~1 minute

**Example:** To change Polenta from 120 to 150 ден:
```
// Before
{ mk: "Палента", en: "Polenta", weight: "0.20kg", price: 120, allergens: ["G"] },

// After
{ mk: "Палента", en: "Polenta", weight: "0.20kg", price: 150, allergens: ["G"] },
```

### Adding a new item

Copy an existing line and change the values:
```js
{ mk: "Ново јадење", en: "New Dish", weight: "0.25kg", price: 300, allergens: ["G", "D"] },
```

- `mk` — Macedonian name
- `en` — English name
- `weight` — portion size (optional, delete if not needed)
- `price` — price in ден (use a number like `300` or a string like `"190/210"` for dual prices)
- `allergens` — list of allergen codes (optional, delete if none)
- `desc` — description (optional): `desc: { mk: "опис", en: "description" }`

**Allergen codes:** `G` = Gluten, `D` = Dairy, `E` = Eggs, `N` = Nuts, `F` = Fish

### Removing an item

Delete the entire line for that item.

### Adding a new section

Add a new block inside the `food` or `drinks` array:
```js
{
  id: "novo",
  name: { mk: "Нова Категорија", en: "New Category" },
  items: [
    { mk: "Јадење", en: "Dish", price: 200 },
  ]
},
```

---

## Important rules

- Don't delete the commas at the end of lines
- Don't change the structure (curly braces `{}`, square brackets `[]`)
- Always test by refreshing the site after pushing
- If something breaks, check the browser console (F12) for errors

## Tech

Pure HTML + CSS + JS. No build step, no dependencies. Deployed via GitHub Pages with custom domain.

## Files

| File | Purpose |
|------|---------|
| `menu-data.js` | All menu items and prices — **edit this** |
| `index.html` | Page structure |
| `style.css` | Styling |
| `app.js` | Rendering logic |
| `assets/logo.png` | Restaurant logo |
| `CNAME` | Custom domain config |
