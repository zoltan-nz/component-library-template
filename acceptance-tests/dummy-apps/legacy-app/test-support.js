const init = () => {
  const adapter = new MarketingPlayground.LegacyAdapter({ server: 'http://localhost:5001', clientId: '12345' });
  const analytics = new MarketingPlayground.Analytics({ adapter });

  const pageName = document.querySelectorAll('[data-page-name]')[0].dataset.pageName;
  analytics.trackPage({ pageName });

  const links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    links[i].onclick = e => {
      const linkName = e.target.innerText.toLocaleLowerCase();
      analytics.trackLink({ linkName });
    };
  }
};

window.onload = () => {
  init();
};
