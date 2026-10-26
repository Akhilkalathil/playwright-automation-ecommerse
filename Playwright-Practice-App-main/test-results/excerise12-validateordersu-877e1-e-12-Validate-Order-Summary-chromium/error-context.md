# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excerise12-validateordersummary.spec.js >> Exercise 12: Validate Order Summary
- Location: tests\excerise12-validateordersummary.spec.js:3:5

# Error details

```
Error: expect(received).toBeCloseTo(expected, precision)

Expected: NaN
Received: 7

Expected precision:    2
Expected difference: < 0.005
Received difference:   NaN
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - complementary [ref=e3]:
      - heading "PW Practice App" [level=1] [ref=e5]
      - navigation [ref=e6]:
        - 'link "M1: PW Essentials" [ref=e7] [cursor=pointer]':
          - /url: /module-1
        - 'link "M2: Locators & UI" [ref=e11] [cursor=pointer]':
          - /url: /module-2
        - 'link "M3: E-Commerce" [ref=e15] [cursor=pointer]':
          - /url: /module-3
        - 'link "M4: Advanced UI" [ref=e21] [cursor=pointer]':
          - /url: /module-4
        - 'link "M5: Browser Context" [ref=e27] [cursor=pointer]':
          - /url: /module-5
        - 'link "M6: API & Network" [ref=e34] [cursor=pointer]':
          - /url: /module-6
        - 'link "M7: E2E Scenario" [ref=e41] [cursor=pointer]':
          - /url: /module-7
        - 'link "M8: Improving Suite" [ref=e47] [cursor=pointer]':
          - /url: /module-8
    - main [ref=e52]:
      - generic [ref=e53]:
        - 'heading "Module 3: E-Commerce Automation" [level=1] [ref=e54]'
        - paragraph [ref=e55]: Practice with product lists, filtering, sorting, and cart management.
        - generic [ref=e56]:
          - 'link "Ex 6: Filter" [ref=e57] [cursor=pointer]':
            - /url: /module-3/exercise-6
          - 'link "Ex 7: Sort" [ref=e58] [cursor=pointer]':
            - /url: /module-3/exercise-7
          - 'link "Ex 8: Add to Cart" [ref=e59] [cursor=pointer]':
            - /url: /module-3/exercise-8
          - 'link "Ex 9: Quantity" [ref=e60] [cursor=pointer]':
            - /url: /module-3/exercise-9
          - 'link "Ex 10: Remove" [ref=e61] [cursor=pointer]':
            - /url: /module-3/exercise-10
          - 'link "Ex 11: Checkout" [ref=e62] [cursor=pointer]':
            - /url: /module-3/exercise-11
          - 'link "Ex 12: Summary" [ref=e63] [cursor=pointer]':
            - /url: /module-3/exercise-12
        - generic [ref=e65]:
          - 'heading "Exercise 12: Validate Order Summary" [level=2] [ref=e66]'
          - paragraph [ref=e67]: "Test scenario: Verify that the subtotal, tax, and total amount are calculated correctly based on the products."
          - generic [ref=e68]:
            - 'heading "Order #12345" [level=3] [ref=e69]'
            - table [ref=e70]:
              - rowgroup [ref=e71]:
                - row [ref=e72]:
                  - columnheader "Product" [ref=e73]
                  - columnheader "Qty" [ref=e74]
                  - columnheader "Price" [ref=e75]
              - rowgroup [ref=e76]:
                - row [ref=e77]:
                  - cell "Playwright Book" [ref=e78]
                  - cell "1" [ref=e79]
                  - cell "$39.99" [ref=e80]
                - row [ref=e81]:
                  - cell "Coffee Mug" [ref=e82]
                  - cell "2" [ref=e83]
                  - cell "$30.00" [ref=e84]
            - generic [ref=e85]:
              - generic [ref=e86]:
                - text: "Subtotal:"
                - generic [ref=e87]: $69.99
              - generic [ref=e88]:
                - text: "Tax (10%):"
                - generic [ref=e89]: $7.00
              - generic [ref=e90]:
                - text: "Total:"
                - generic [ref=e91]: $76.99
  - generic [ref=e96] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e97]
    - generic [ref=e101]:
      - button "Open issues overlay" [ref=e102]:
        - generic [ref=e103]:
          - generic [ref=e104]: "0"
          - generic [ref=e105]: "1"
        - generic [ref=e106]: Insight
      - button "Collapse issues badge" [ref=e107]
  - alert [ref=e110]
```

# Test source

```ts
  1  | 
  2  | import {test,expect } from "@playwright/test"
  3  | test ("Exercise 12: Validate Order Summary" ,  async ({page})=>
  4  |     
  5  |     {
  6  |         await page.goto("/module-3/exercise-12");
  7  | 
  8  |         const subtotal = await page.locator("#summary-subtotal").textContent();
  9  |         const tax = await page.locator("#summary-tax").textContent();
  10 |         const total = await page.locator("#summary-total").textContent();
  11 | 
  12 |        console.log(subtotal,tax,total);
  13 | 
  14 |        const subtotalnum = parseFloat(subtotal?.replace("$","") || "0");
  15 |        const taxnum = parseFloat(tax?.replace("$","") || "0");
  16 |        const totalnum = parseFloat(total?.replace("$","") || "0");
  17 | 
  18 |        console.log(subtotalnum,taxnum,totalnum);
  19 | 
  20 |        expect(totalnum).toBeCloseTo(subtotalnum+taxnum, 2);
  21 | 
> 22 |        expect(taxnum).toBeCloseTo(subtotal * .099 , 2);
     |                       ^ Error: expect(received).toBeCloseTo(expected, precision)
  23 |     }
  24 | 
  25 | )
```