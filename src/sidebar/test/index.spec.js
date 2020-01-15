import { mount } from '../../../test';
import Sidebar from '..';

test('click event & change event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <buri-sidebar @change="onChange">
        <buri-sidebar-item @click="onClick">Text</buri-sidebar-item>
      </buri-sidebar>
    `,
    methods: {
      onClick,
      onChange
    }
  });

  wrapper.find('.buri-sidebar-item').trigger('click');
  expect(onClick).toHaveBeenCalledWith(0);
  expect(onChange).toHaveBeenCalledWith(0);
  wrapper.vm.$destroy();
});

test('v-model', () => {
  const wrapper = mount({
    template: `
      <buri-sidebar v-model="active">
        <buri-sidebar-item>Text</buri-sidebar-item>
        <buri-sidebar-item>Text</buri-sidebar-item>
      </buri-sidebar>
    `,
    data() {
      return {
        active: 0
      };
    }
  });

  wrapper.findAll('.buri-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(1);
});

test('disabled prop', () => {
  const wrapper = mount({
    template: `
      <buri-sidebar v-model="active">
        <buri-sidebar-item>Text</buri-sidebar-item>
        <buri-sidebar-item disabled>Text</buri-sidebar-item>
      </buri-sidebar>
    `,
    data() {
      return {
        active: 0
      };
    }
  });

  wrapper.findAll('.buri-sidebar-item').at(1).trigger('click');
  expect(wrapper.vm.active).toEqual(0);
});

test('without parent', () => {
  const consoleError = console.error;
  try {
    console.error = jest.fn();
    mount(Sidebar);
  } catch (err) {
    console.error = consoleError;
    expect(err).toBeTruthy();
  }
});
