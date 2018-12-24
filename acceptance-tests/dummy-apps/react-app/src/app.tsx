import { Analytics, LegacyAdapter } from 'marketing-playground';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import About from './about';
import Home from './home';

const adapter = new LegacyAdapter({ server: 'http://localhost:5001', clientId: '12345' });
const analytics = new Analytics({ adapter });

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/" data-test-link-home onClick={() => analytics.trackLink({ linkName: 'home' })}>
          Home
        </Link>{' '}
        |{' '}
        <Link to="/about" data-test-link-about onClick={() => analytics.trackLink({ linkName: 'about' })}>
          About
        </Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
