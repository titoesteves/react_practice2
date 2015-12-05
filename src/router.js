import Router from 'ampersand-router';
import React from 'react';
import PublicPage from './pages/public';
import Repos from './pages/repos';

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repo'
  },
  public(){
    React.render(<PublicPage/>, document.body);
  },
  repo(){
    React.render(<Repos/>, document.body);
  }
});