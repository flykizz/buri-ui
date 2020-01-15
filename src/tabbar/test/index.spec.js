import VueRouter from 'vue-router';
import { mount, later } from '../../../test';
import Vue from 'vue';
import Tabbar from '..';

Vue.use(VueRouter);

test('route mode', async () => {
  const router = new VueRouter();
  const wrapper = mount({
    router,
    template: `
      <buri-tabbar route>
        <buri-tabbar-item replace to="/">
          Tab
        </buri-tabbar-item>
        <buri-tabbar-item replace to="/search">
          Tab
        </buri-tabbar-item>
        <buri-tabbar-item replace :to="{ path: '/star' }">
          Tab
        </buri-tabbar-item>
        <buri-tabbar-item>
          Tab
        </buri-tabbar-item>
      </buri-tabbar>
    `
  });

  expect(wrapper).toMatchSnapshot();

  const items = wrapper.findAll('.buri-tabbar-item');

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(2).trigger('click');
  items.at(3).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('route mode match by name', async () => {
  const Foo = { render: () => 'Foo' };
  const Bar = { render: () => 'Bar' };
  const router = new VueRouter({
    routes: [
      { path: '/foo', component: Foo, name: 'foo' },
      { path: '/bar', component: Bar, name: 'bar' }
    ]
  });

  const wrapper = mount({
    router,
    template: `
      <buri-tabbar route>
        <buri-tabbar-item :to="{ name: 'foo' }">
          Tab
        </buri-tabbar-item>
        <buri-tabbar-item :to="{ name: 'bar' }">
          Tab
        </buri-tabbar-item>
      </buri-tabbar>
    `
  });

  const items = wrapper.findAll('.buri-tabbar-item');
  items.at(0).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();

  items.at(1).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('router NavigationDuplicated', async done => {
  expect(async () => {
    const router = new VueRouter();
    const wrapper = mount({
      router,
      template: `
      <buri-tabbar route>
        <buri-tabbar-item replace to="/home">
          Tab
        </buri-tabbar-item>
      </buri-tabbar>
    `
    });

    const item = wrapper.find('.buri-tabbar-item');
    item.trigger('click');
    item.trigger('click');

    await later();
    done();
  }).not.toThrow();
});

test('watch tabbar value', () => {
  const wrapper = mount({
    template: `
      <buri-tabbar :value="value">
        <buri-tabbar-item>Tab</buri-tabbar-item>
        <buri-tabbar-item>Tab</buri-tabbar-item>
      </buri-tabbar>
    `,
    data() {
      return {
        value: 0
      };
    }
  });

  wrapper.setData({ value: 1 });
  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount({
    template: `
      <buri-tabbar @change="onChange">
        <buri-tabbar-item @click="onClick">Tab</buri-tabbar-item>
      </buri-tabbar>
    `,
    methods: {
      onClick,
      onChange
    }
  });

  wrapper.find('.buri-tabbar-item').trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('name prop', () => {
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <buri-tabbar :value="value" @change="onChange">
        <buri-tabbar-item name="a">Tab</buri-tabbar-item>
        <buri-tabbar-item name="b">Tab</buri-tabbar-item>
      </buri-tabbar>
    `,
    data() {
      return {
        value: 'a'
      };
    },
    methods: {
      onChange
    }
  });

  wrapper
    .findAll('.buri-tabbar-item')
    .at(1)
    .trigger('click');

  expect(onChange).toHaveBeenCalledWith('b');
});

test('disable border', () => {
  const wrapper = mount(Tabbar, {
    propsData: {
      border: false
    }
  });

  expect(wrapper).toMatchSnapshot();
});
