# Playwright TypeScript Practice Tasks (No Login) — Telerik eShop Demo

Target site: https://demos.telerik.com/aspnet-core/eshop/  
Goal: practice **Playwright + TypeScript** with **complex logic**, **stable waits**, and **real UI validation**

---

## 1) Multi-filter Integrity: Every Result Matches All Filters

**Steps**
1. Open the product catalog / product listing page. (Bikes/Mountain Bikes)
2. Apply **at least 2 filters** Selected as Size: 38, Color: Black
3. validate every product and validate it satisfies **every active filter**.

**Expected**
- Every displayed product matches all chosen filters.

---

## 2) Sorting by Price: Low-High

**Steps**
1. Open the product listing page. (Bikes/Mountain Bikes)
2. Choose sort: **Price: Low to High**.

**Expected**
- Displayed products sorting by price Low-High correctly

**Hints**
- check product `i`, `price[i] <= price[i+1]`

---

## 3) Sorting by Name: Z-A

**Steps**
1. Open the product listing page. (Bikes/Mountain Bikes)
2. Choose sort: **Name: Z to A**.

**Expected**
- Displayed products sorting by name Z-A correctly

---

## 4) Cart Math: Total Equals Sum(LinePrice × Quantity)

**Steps**
1. Add to cart from the listing page.
   - Add product A with 1 Quantity
   - Add product B with 2 Quantity
2. Navigate to the cart.
3. Verify product, product price and quantity.
4. Verify final price of all product.
5. Verify Sub-total.

**Expected**
- Display all product(A,B), product price and quantity correctly.
- The final price of product(A,B) has been calculated correctly.

**Hints**
- use method: `reduce()`  

---

## 5) Cart Quantity Controls: Increment/Decrement/Input + Validation

**Steps**
1. Open the cart with at least one line item.
2. Change product quantity
3. Verify final price and Sub-total

**Expected**
- The final price and cart total update correctly after change.

**Hints**
- `fill()` + Enter to trigger recalculation  

---

## 6) Remove product and re-calculated

**Steps**
1. Add to cart from the listing page.
   - Add product A
   - Add product B
2. Navigate to the cart.
3. Remove product A

**Expected**
- Product A is no longer displayed.
- The cart total has been re-calculated correctly. 

---

## 7) Search with AutoComplete: Select 2nd Suggestion

**Steps**
1. Focus the search input and type a word 'bike'.
2. Wait for suggestion dropdown.
3. Verify all suggestion include 'bike' word.
3. Select the **second suggestion** by press ArrowDown and Enter.

**Expected**
- Suggestions appear reliably.
- Navigation to product list page and displayed product name match with second suggestion.

**Hints**
- `page.waitForResponse()` if wait suggestions displayed
- use `for` loop
- `nth(1)` to get text

---

## 8) Verify number pagination when random to pick one of items per page

**Steps**
1. Open the product listing page. (Bikes/Mountain Bikes)
2. Click **Items per page** dropdown.
3. Randomly pick one of: **6, 12, 24, 48** and apply it.
4. Use `if..else` to compute the expected page count:
   - if selected == 6 → expectedPages = 6  
   - else if selected == 12 → expectedPages = 3  
   - else if selected == 24 → expectedPages = 2  
   - else selected 48 → expectedPages = 1

**Expected**
- The pagination total page count matches the mapping above for the randomly selected items-per-page value.
- The test passes regardless of which option is randomly selected.

**Hints**
- Define the desired random value (6, 12, 24, 48).
- Random selection: `Math.floor(Math.random() * options.length)`
- Use `if..else if..else` to map selection → expected pages

---

## 9) Favorites → Download PDF: disable

**Steps**
1. Open Favorites page.
2. Check no product on favorites page (if have product please remove before)
3. Verify Download PDF button

**Expected**
- Download PDF button is disable.

**Hints**
- Don't forget to write the script to check for products on the favorites page and remove them first if there are any.

---


## 10) Favorites → Export PDF: Download Exists (I'm not sure if this is possible.)

**Steps**
1. Add at least 2 products to Favorites.
2. Open Favorites page.
3. Trigger “Export/Download PDF”.
4. Capture the download event and save file.
5. Verify filename ends with `.pdf`.

**Expected**
- A PDF download occurs successfully.
- The PDF display favorites lists correctly.

**Hints**
- `page.waitForEvent('download')`  
- `download.suggestedFilename()` + `saveAs()`  

---
