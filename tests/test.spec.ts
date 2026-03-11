import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ffex2-ui-dev-api.azurewebsites.net/en');
  await page.getByRole('textbox', { name: 'Email' }).fill('qa_test_cs');
  await page.getByRole('textbox', { name: 'Password' }).fill('qa_test_cs');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.close();
});