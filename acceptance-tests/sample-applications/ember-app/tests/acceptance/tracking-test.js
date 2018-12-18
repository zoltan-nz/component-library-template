import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tracking', function(hooks) {
  setupApplicationTest(hooks);

  test('Page tracking when navigate a subpage', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal(this.element.querySelector('[data-test-home-page-header]').textContent, 'Home Page');

    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.equal(this.element.querySelector('[data-test-about-page-header]').textContent, 'About Page');
  });
});
