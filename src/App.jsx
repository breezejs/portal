import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Article from './containers/Article';
import Home from './containers/Home';
import store, {history} from './store';

function App () {
  return (
    <Provider store={store()}>
      <Layout>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article/:id' component={Article} />
          </Switch>
        </ConnectedRouter>
      </Layout>
    </Provider>
  );
}

export default App;
