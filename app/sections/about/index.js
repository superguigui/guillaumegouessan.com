import View from 'brindille-view';
import template from './about.html';

export default class extends View {
  constructor() {
    super({
      template: template,
      model: {}
    });
  }

  transitionIn() {
    console.log('About - transitionIn');
    TweenMax.from(this.$el, 1, {
      alpha: 0,
      onComplete: this.onTransitionInComplete
    });
  }

  transitionOut() {
    console.log('About - transitionOut');
    TweenMax.to(this.$el, 1, {
      alpha: 0,
      onComplete: this.onTransitionOutComplete
    });
  }
};