import View from 'brindille-view';
import template from './componentTest.html';
import defaults from 'defaults';

export default class extends View {
  constructor(model) {
    super({
      template: template,
      model: defaults(model, {
        label: 'test',
        url: 'http://google.com'
      })
    });
  }
};