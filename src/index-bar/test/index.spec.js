import { mount, trigger, triggerDrag } from '../../../test';

function mockScrollIntoView() {
  const fn = jest.fn();
  Element.prototype.scrollIntoView = fn;
  return fn;
}

function mockOffsetHeight(offsetHeight) {
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    get() {
      return offsetHeight;
    }
  });
}

test('custom anchor text', () => {
  const wrapper = mount({
    template: `
      <buri-index-bar>
        <buri-index-anchor index="A">Title A</buri-index-anchor>
        <buri-index-anchor index="B">Title B</buri-index-anchor>
      </buri-index-bar>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('click and scroll to anchor', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <buri-index-bar @select="onSelect">
        <buri-index-anchor index="A" />
        <buri-index-anchor index="B" />
      </buri-index-bar>
    `,
    methods: {
      onSelect
    }
  });

  const fn = mockScrollIntoView();
  const indexes = wrapper.findAll('.buri-index-bar__index');
  indexes.at(0).trigger('click');

  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('A');
});

test('touch and scroll to anchor', () => {
  const onSelect = jest.fn();
  const wrapper = mount({
    template: `
      <buri-index-bar @select="onSelect">
        <buri-index-anchor index="A" />
        <buri-index-anchor index="B" />
        <buri-index-anchor index="XXX" />
      </buri-index-bar>
    `,
    methods: {
      onSelect
    }
  });

  const fn = mockScrollIntoView();
  const sidebar = wrapper.find('.buri-index-bar__sidebar');
  const indexes = wrapper.findAll('.buri-index-bar__index');

  document.elementFromPoint = function (x, y) {
    const index = y / 100;

    if (index === 1 || index === 2) {
      return indexes.at(index).element;
    }

    if (index === 3) {
      return {
        dataset: {}
      };
    }
  };

  // horizontal drag
  triggerDrag(sidebar, 100, 0);
  expect(fn).toHaveBeenCalledTimes(0);

  // vertical drag
  trigger(sidebar, 'touchstart', 0, 0);
  trigger(sidebar, 'touchmove', 0, 100);
  trigger(sidebar, 'touchmove', 0, 200);
  trigger(sidebar, 'touchmove', 0, 300);
  trigger(sidebar, 'touchmove', 0, 400);
  trigger(sidebar, 'touchend', 0, 400);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('B');
});

test('scroll and update active anchor', () => {
  const nativeRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function () {
    const { index } = this.dataset;
    return {
      top: index ? index * 10 : 0
    };
  };

  mockOffsetHeight(10);

  const wrapper = mount({
    template: `
      <buri-index-bar :sticky="sticky">
        <buri-index-anchor
          v-for="index in 4"
          :key="index"
          :index="index"
          :data-index="index - 1"
        />
      </buri-index-bar>
    `,
    data() {
      return {
        sticky: false
      };
    }
  });

  window.scrollTop = 0;
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();

  wrapper.setData({ sticky: true });
  trigger(window, 'scroll');
  expect(wrapper).toMatchSnapshot();
  wrapper.vm.$destroy();

  Element.prototype.getBoundingClientRect = nativeRect;
});
