import { expect, test } from '@playwright/test';

test('homepage, project previews, contact and SEO are complete', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('/');
  await expect(page).toHaveTitle(
    'Habib AI Labs — Practical AI for Real Businesses',
  );
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Practical AI for real businesses.',
  );
  await expect(page.locator('#services article')).toHaveCount(4);
  await expect(page.locator('#work article')).toHaveCount(2);
  await expect(page.locator('#work .work-capabilities')).toBeVisible();
  await expect(page.locator('#work .work-capability-item')).toHaveCount(7);
  await expect(page.locator('#work .work-capabilities')).toContainText('2 live demos');
  await expect(page.locator('#work .work-capability-item').filter({ hasText: 'RAG' })).toContainText('2 of 2');
  await expect(page.locator('#pricing article')).toHaveCount(3);
  await expect(page.locator('details')).toHaveCount(7);
  await expect(
    page
      .locator('.hero-actions')
      .getByRole('link', { name: 'Discuss Your Project' }),
  ).toHaveAttribute('href', '#contact');
  await expect(page.locator('#contact .button-contact')).toHaveAttribute(
    'href',
    /^mailto:/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://ai.habiibullahm.my.id/',
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://ai.habiibullahm.my.id/og-image.png',
  );
  await page.locator('#work').scrollIntoViewIfNeeded();
  for (const image of await page.locator('.preview-image').all()) {
    await expect(image).toBeVisible();
    await expect
      .poll(() =>
        image.evaluate((node) => (node as HTMLImageElement).naturalWidth),
      )
      .toBeGreaterThan(0);
  }
  expect(errors).toEqual([]);
});

test('desktop navigation reaches services, work and pricing', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  for (const [label, anchor] of [
    ['Services', 'services'],
    ['Work', 'work'],
    ['Pricing', 'pricing'],
  ]) {
    await page
      .locator('#site-nav')
      .getByRole('link', { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`#${anchor}$`));
  }
});

test('live demo and portfolio links open safely', async ({ page }) => {
  await page.goto('/');
  const urls = [
    'https://bidakara-ai-assistant.vercel.app/',
    'https://agres-ai-sales-assistant.vercel.app/chat',
    'https://habiibullahm.my.id/',
  ];
  for (const url of urls) {
    const links = page.locator(`a[href="${url}"]`);
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  }
});

test('mobile menu opens, closes and supports keyboard dismissal', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.locator('.menu-toggle');
  await expect(page.locator('#site-nav')).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#site-nav')).toBeVisible();
  await page
    .locator('#site-nav')
    .getByRole('link', { name: 'Services', exact: true })
    .click();
  await expect(page).toHaveURL(/#services$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
});

for (const width of [320, 375, 390, 414, 680, 768, 1024, 1440]) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(scrollWidth).toBeLessThanOrEqual(width + 1);
  });
}

test('content and mobile navigation remain accessible without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/');
  await expect(page.locator('#services article')).toHaveCount(4);
  await expect(page.locator('#work article')).toHaveCount(2);
  await expect(page.locator('#contact .button-contact')).toBeVisible();
  await expect(page.locator('#site-nav')).toBeVisible();
  await page
    .locator('#site-nav')
    .getByRole('link', { name: 'Work', exact: true })
    .click();
  await expect(page).toHaveURL(/#work$/);
  await context.close();
});

test('mobile navigation traps focus and resets when resized', async ({
  page,
}) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/');
  const toggle = page.locator('.menu-toggle');
  await toggle.click();
  await expect(page.locator('#main')).toHaveAttribute('inert', '');
  await expect(page.locator('#site-nav a').first()).toBeFocused();
  await page.locator('#site-nav a').last().focus();
  await page.keyboard.press('Tab');
  await expect(toggle).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.locator('#site-nav a').last()).toBeFocused();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(768);
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#main')).not.toHaveAttribute('inert');
  await expect(page.locator('#site-nav')).toBeVisible();
});

test('FAQ is keyboard accessible and every CTA has a valid destination', async ({
  page,
}) => {
  await page.goto('/');
  const question = page
    .locator('summary')
    .filter({ hasText: 'Does AI always answer correctly?' });
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(
    page.getByText('No. AI systems are probabilistic.', { exact: false }),
  ).toBeVisible();
  for (const link of await page.locator('a').all()) {
    const href = await link.getAttribute('href');
    expect(href).toBeTruthy();
    if (href?.startsWith('#')) await expect(page.locator(href)).toHaveCount(1);
  }
});

test('SEO assets and crawler routes exist in the production build', async ({
  request,
}) => {
  const image = await request.get('/og-image.png');
  expect(image.status()).toBe(200);
  expect(image.headers()['content-type']).toContain('image/png');
  const favicon = await request.get('/favicon.svg');
  expect(favicon.status()).toBe(200);
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain(
    'Sitemap: https://ai.habiibullahm.my.id/sitemap.xml',
  );
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(sitemap.headers()['content-type']).toMatch(
    /^(application|text)\/xml(?:\s*;|$)/i,
  );
  const sitemapXml = await sitemap.text();
  expect(sitemapXml).toMatch(/^<\?xml\s+version="1\.0"\s+encoding="UTF-8"\?>/);
  expect(sitemapXml).toContain(
    '<loc>https://ai.habiibullahm.my.id/</loc>',
  );
});

test('reduced motion keeps content visible without animated workflows', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const duration = await page
    .locator('.flow-line span')
    .first()
    .evaluate((element) => getComputedStyle(element).animationDuration);
  expect(parseFloat(duration)).toBeLessThan(0.01);
  await expect(page.locator('#work')).toBeVisible();
});
