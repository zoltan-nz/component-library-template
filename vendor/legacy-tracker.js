function LegacyTracker() {
  this.version = '1.0';

  this.server = null;
  this.clientId = null;

  this.pageName = null;
  this.linkName = null;

  this.url = `http://${this.server}/track?clientId=${this.clientId}`;

  this.trackPage = () => {
    // tslint:disable-next-line:no-console
    fetch(`${this.url}&pageName=${this.pageName}`).finally(response => console.log(response));
  };

  this.trackLink = () => {
    // tslint:disable-next-line:no-console
    fetch(`${this.url}&linkName${this.linkName}`).finally(response => console.log(response));
  };
}
