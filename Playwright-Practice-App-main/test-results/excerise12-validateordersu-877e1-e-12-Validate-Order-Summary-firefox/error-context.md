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
        - 'link "M2: Locators & UI" [ref=e12] [cursor=pointer]':
          - /url: /module-2
        - 'link "M3: E-Commerce" [ref=e16] [cursor=pointer]':
          - /url: /module-3
        - 'link "M4: Advanced UI" [ref=e22] [cursor=pointer]':
          - /url: /module-4
        - 'link "M5: Browser Context" [ref=e28] [cursor=pointer]':
          - /url: /module-5
        - 'link "M6: API & Network" [ref=e35] [cursor=pointer]':
          - /url: /module-6
        - 'link "M7: E2E Scenario" [ref=e43] [cursor=pointer]':
          - /url: /module-7
        - 'link "M8: Improving Suite" [ref=e49] [cursor=pointer]':
          - /url: /module-8
    - main [ref=e54]:
      - generic [ref=e55]:
        - 'heading "Module 3: E-Commerce Automation" [level=1] [ref=e56]'
        - paragraph [ref=e57]: Practice with product lists, filtering, sorting, and cart management.
        - generic [ref=e58]:
          - 'link "Ex 6: Filter" [ref=e59] [cursor=pointer]':
            - /url: /module-3/exercise-6
          - 'link "Ex 7: Sort" [ref=e60] [cursor=pointer]':
            - /url: /module-3/exercise-7
          - 'link "Ex 8: Add to Cart" [ref=e61] [cursor=pointer]':
            - /url: /module-3/exercise-8
          - 'link "Ex 9: Quantity" [ref=e62] [cursor=pointer]':
            - /url: /module-3/exercise-9
          - 'link "Ex 10: Remove" [ref=e63] [cursor=pointer]':
            - /url: /module-3/exercise-10
          - 'link "Ex 11: Checkout" [ref=e64] [cursor=pointer]':
            - /url: /module-3/exercise-11
          - 'link "Ex 12: Summary" [ref=e65] [cursor=pointer]':
            - /url: /module-3/exercise-12
        - generic [ref=e67]:
          - 'heading "Exercise 12: Validate Order Summary" [level=2] [ref=e68]'
          - paragraph [ref=e69]: "Test scenario: Verify that the subtotal, tax, and total amount are calculated correctly based on the products."
          - generic [ref=e70]:
            - 'heading "Order #12345" [level=3] [ref=e71]'
            - table [ref=e72]:
              - rowgroup [ref=e73]:
                - row [ref=e74]:
                  - columnheader "Product" [ref=e75]
                  - columnheader "Qty" [ref=e76]
                  - columnheader "Price" [ref=e77]
              - rowgroup [ref=e78]:
                - row [ref=e79]:
                  - cell "Playwright Book" [ref=e80]
                  - cell "1" [ref=e81]
                  - cell "$39.99" [ref=e82]
                - row [ref=e83]:
                  - cell "Coffee Mug" [ref=e84]
                  - cell "2" [ref=e85]
                  - cell "$30.00" [ref=e86]
            - generic [ref=e87]:
              - generic [ref=e88]:
                - text: "Subtotal:"
                - generic [ref=e89]: $69.99
              - generic [ref=e90]:
                - text: "Tax (10%):"
                - generic [ref=e91]: $7.00
              - generic [ref=e92]:
                - text: "Total:"
                - generic [ref=e93]: $76.99
  - generic [ref=e98] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e99]
    - generic [ref=e104]:
      - button "Open issues overlay" [ref=e105]:
        - generic [ref=e106]:
          - generic [ref=e107]: "0"
          - generic [ref=e108]: "1"
        - generic [ref=e109]: Insight
      - button "Collapse issues badge" [ref=e110]
  - alert [ref=e113]
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