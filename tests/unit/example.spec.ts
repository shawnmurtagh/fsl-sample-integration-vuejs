import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Expo from '@/components/Expo.vue';

describe('Expo.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Expo, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
