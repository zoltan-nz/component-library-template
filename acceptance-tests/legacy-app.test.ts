describe('static website acceptance test', () => {
  it('should navigate between routes and send ajax request to the marketing server', async () => {
    // page.on('console', msg => console.log(msg));

    // We collect ajax calls in this array, so we can check the expected urls has been called in our test.
    const ajaxUrls: string[] = [];

    await page.setRequestInterception(true);
    page.on('request', async request => {
      if (request.url().includes('localhost:5001')) {
        ajaxUrls.push(request.url());
        request.respond({
          body: JSON.stringify({ some: 'response' }),
          contentType: 'application/json',
          headers: { 'Access-Control-Allow-Origin': '*' },
        });
      } else {
        await request.continue();
      }
    });

    await page.goto('http://localhost:5000/acceptance-tests/sample-applications/legacy-app/');

    await expect(page).toMatch('Home Page');
    await page.waitForSelector('[data-test-header]', { visible: true });

    // The expected ajax call has been called?
    expect(ajaxUrls.length).toEqual(1);
    expect(ajaxUrls[ajaxUrls.length - 1]).toEqual('http://localhost:5001/track?clientId=12345&pageName=home-page');

    await expect(page).toMatchElement('[data-test-header]', { text: 'Home Page' });
    await Promise.all([page.waitForNavigation(), expect(page).toClick('[data-test-link]')]);

    expect(ajaxUrls.length).toEqual(3);
    expect(ajaxUrls[ajaxUrls.length - 2]).toEqual('http://localhost:5001/track?clientId=12345&linkName=about%20page');
    expect(ajaxUrls[ajaxUrls.length - 1]).toEqual('http://localhost:5001/track?clientId=12345&pageName=about-page');

    await page.waitForSelector('[data-test-header]', { visible: true });
    await expect(page).toMatchElement('[data-test-header', { text: 'About Page' });

    await Promise.all([page.waitForNavigation(), expect(page).toClick('[data-test-link]')]);

    await page.waitForSelector('[data-test-header]', { visible: true });
    await expect(page).toMatchElement('[data-test-header]', { text: 'Home Page' });

    expect(ajaxUrls.length).toEqual(5);
    expect(ajaxUrls[ajaxUrls.length - 2]).toEqual('http://localhost:5001/track?clientId=12345&linkName=home%20page');
    expect(ajaxUrls[ajaxUrls.length - 1]).toEqual('http://localhost:5001/track?clientId=12345&pageName=home-page');
  });
});
