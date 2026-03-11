# Naming Conventions Summary

## kebab-case
**Use for:** project names, file names  
**Rule:** lowercase words separated by hyphens (`-`)

**Examples**
- Project names:
  - `eshop-playwright-tests`
  - `checkout-regression-suite`
- File names:
  - `items-per-page.spec.ts`
  - `favorites-export-pdf.spec.ts`
  - `cart-total-utils.ts`

---

## camelCase
**Use for:** function names, variable names  
**Rule:** first word lowercase, next words start with uppercase (no spaces, no hyphens)

**Examples**
- Variables:
  - `selectedItemsPerPage`
  - `expectedPages`
  - `totalPrice`
- Functions:
  - `getTotalPages()`
  - `setItemsPerPage()`
  - `parseMoneyText()`

---

## PascalCase
**Use for:** class names, interface names  
**Rule:** every word starts with uppercase (no spaces, no hyphens)

**Examples**
- Classes:
  - `CartPage`
  - `FavoritesPage`
  - `ProductListPage`
- Interfaces:
  - `ProductCard`
  - `CartLineItem`
  - `PaginationInfo`

---