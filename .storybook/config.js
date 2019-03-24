import {configure} from '@storybook/react';

function loadStories () {
  require('../src/stories/Backdrop');
  require('../src/stories/Grid');
  require('../src/stories/GridCol');
  require('../src/stories/Logo');
  require('../src/stories/Spinner');
  require('../src/stories/Tile');
  require('../src/stories/Typography');
}

configure(loadStories, module);
