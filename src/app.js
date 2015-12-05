import Router from './router';

window.app = {
  init: function(){
    this.router = new Router()
    this.router.history.start()
  }
};

window.app.init();