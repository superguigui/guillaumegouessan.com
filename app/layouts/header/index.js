import View from 'brindille-view';
import template from './header.html';

class Header extends View {
  constructor() {
    super({
      template: template,
      model: {},
      compose: {},
      resolve: {}
    });
  }
}

export default new Header();