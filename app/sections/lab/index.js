import View from 'brindille-view';
import template from './lab.html';

// Exported Class
export default class extends View {
  constructor() {
    super({
      template: template,
      model: {}
    });
  }

  transitionIn() {
    console.log('Lab - transitionIn');
    TweenMax.from(this.$el, 1, {
      alpha: 0,
      onComplete: this.onTransitionInComplete
    });
  }

  transitionOut() {
    console.log('Lab - transitionOut');
    TweenMax.to(this.$el, 1, {
      alpha: 0,
      onComplete: this.onTransitionOutComplete
    });
  }
};