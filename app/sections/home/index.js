import View from 'brindille-view';
import template from './home.html';

// Exported Class
export default class extends View {
  constructor() {
    super({
      template: template,
      model: {}
    });
  }

  transitionIn() {
    console.log('Home - transitionIn');
    TweenMax.from(this.$el, 1, {
      alpha: 0,
      onComplete: this.onTransitionInComplete
    });
  }

  transitionOut() {
    console.log('Home - transitionOut');
    TweenMax.to(this.$el, 1, {
      alpha: 0,
      onComplete: this.onTransitionOutComplete
    });
  }
};