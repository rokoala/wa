import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
}
console.log(module);

configure(loadStories, module);
