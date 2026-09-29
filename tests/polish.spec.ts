import { expect, test } from '@playwright/test';

test('production polish keeps demos visible and selects real mobile previews', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const proofLinks = page.locator('.hero-proof a');
  await expect(proofLinks).toHaveCount(2);
  for (const link of await proofLinks.all()) {
    await expect(link).toBeInViewport();
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
  await expect(page.locator('.pricing-note')).toContainText('not a monthly subscription');
  await expect(page.locator('#pricing article').nth(1)).toContainText('Possible features');
  await expect(page.locator('#contact a[href="mailto:mr.habiibullahm@gmail.com"]')).toHaveText('mr.habiibullahm@gmail.com ↗');
  const previews = page.locator('#work picture');
  await expect(previews).toHaveCount(2);
  for (const preview of await previews.all()) {
    const image = preview.locator('img');
    const mobileSource = await preview.locator('source').getAttribute('srcset');
    expect(mobileSource).toBeTruthy();
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((node) => (node as HTMLImageElement).decode());
    await expect.poll(() => image.evaluate((node) => new URL((node as HTMLImageElement).currentSrc).pathname)).toBe(mobileSource);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const preview of await previews.all()) {
    const image = preview.locator('img');
    const mobileSource = await preview.locator('source').getAttribute('srcset');
    await expect.poll(() => image.evaluate((node) => new URL((node as HTMLImageElement).currentSrc).pathname)).not.toBe(mobileSource);
  }
});
