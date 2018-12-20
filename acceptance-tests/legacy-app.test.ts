describe.skip('legacy app', () => {
  it('should navigate between routes', async () => {
    await page.goto('http://localhost:5000/acceptance-tests/sample-applications/legacy-app/');
    await page.waitForSelector('[data-test-header]');

    await expect(page).toMatchElement('[data-test-header]', { text: 'Home Page'});
  });
});
