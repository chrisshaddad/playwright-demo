import { test } from "@playwright/test";

test.describe("authentication flows", () => {
  test.beforeEach(async ({ page }) => {
    // Head to the homepage before each test
    await page.goto("http://localhost:3000");
  });

  test("login successfully", async () => {
    // Test a successful login
  });

  test("login with invalid credentials", async () => {
    // Test a login with invalid credentials
  });
});
