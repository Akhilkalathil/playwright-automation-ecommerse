import { test,expect } from "@playwright/test";
test ("Exercise 24: Test Browser Navigation", async ({request})=>
{
    const response = await request.get("/api/products");

    //validating status code
    expect (response.status()).toBe(200);

    //validate headers
    const header = response.headers();
    expect (header["content-type"]).toContain("application/json");
    expect (header["transfer-encoding"]).toContain("chunked");

    // Validationg response body
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    //Checking expected strecture

    const firstproduct = body[0];
    console.log(firstproduct);
    expect(firstproduct).toHaveProperty("id");
    expect(firstproduct).toHaveProperty("name");
    expect(firstproduct).toHaveProperty("price");
    expect(firstproduct).toHaveProperty("stock");

      const secondproduct = body[1];
    console.log(secondproduct);
    expect(secondproduct).toHaveProperty("id");
    expect(secondproduct).toHaveProperty("name");
    expect(secondproduct).toHaveProperty("price");
    expect(secondproduct).toHaveProperty("stock");
}
)