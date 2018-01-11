import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HelloWorld from '../components/HelloWorld.vue';

storiesOf('HelloWorld', module)
  .add('story as a component', () => ({
    components: { HelloWorld },
    template: '<hello-world></hello-world>'
  }));
