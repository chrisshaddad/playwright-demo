import { test, expect } from "@playwright/test";

test.describe("authentication flows", () => {
  test.beforeEach(async ({ page }) => {
    // Head to the homepage before each test
    await page.goto("http://localhost:3000");
  });

  test("login successfully", async ({ page }) => {
    // Fill user details and sign in
    await page.getByLabel("Email Address *").fill("admin");
    await page.getByLabel("Password *").fill("admin");
    await page.getByRole("button", { name: "Sign In" }).click();

    // Make sure the user was logged in successfully
    await expect(page).toHaveURL(/.*dashboard.*/);
  });

  test("login with invalid credentials", async ({ page }) => {
    // Fill user details and sign in
    await page.getByLabel("Email Address *").fill("test");
    await page.getByLabel("Password *").fill("test");
    await page.getByRole("button", { name: "Sign In" }).click();

    // Verify we get an error message
    expect(page.getByText("Invalid Email or Password")).toBeTruthy();
  });
});
