import { mount, triggerDrag, later } from '../../../test';

const Component = {
  template: `
    <buri-swipe ref="swipe" v-bind="$props">
      <buri-swipe-item :style="style">1</buri-swipe-item>
      <buri-swipe-item :style="style">2</buri-swipe-item>
      <buri-swipe-item :style="style">3</buri-swipe-item>
    </buri-swipe>
  `,
  props: {
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 0
    },
    initialSwipe: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      style: {
        width: '100px',
        height: '100px'
      }
    };
  }
};

test('swipeTo method', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  swipe.swipeTo(2);

  await later(100);
  expect(swipe.active).toEqual(2);
});

test('swipeTo method with immediate option', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  swipe.swipeTo(2, {
    immediate: true
  });

  await later(100);
  expect(swipe.active).toEqual(2);
});

test('prev and next method', async () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;

  swipe.next();
  await later(50);
  expect(swipe.active).toEqual(1);

  swipe.prev();
  await later(50);
  expect(swipe.active).toEqual(0);
});

test('initial swipe', () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;

  expect(swipe.active).toEqual(0);
  wrapper.setProps({ initialSwipe: 2 });
  expect(swipe.active).toEqual(2);
});

test('vertical swipe', () => {
  const wrapper = mount(Component, {
    propsData: {
      vertical: true
    }
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.buri-swipe__track');

  triggerDrag(track, 0, -100);
  expect(swipe.active).toEqual(1);
});

test('untouchable', () => {
  const wrapper = mount(Component, {
    propsData: {
      touchable: false
    }
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.buri-swipe__track');

  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(0);
});

test('loop', () => {
  const wrapper = mount(Component);
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.buri-swipe__track');

  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(2);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(3);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(0);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(-1);
  triggerDrag(track, 100, 0);
  expect(swipe.active).toEqual(1);
});

test('not loop', () => {
  const wrapper = mount(Component, {
    propsData: {
      loop: false
    }
  });
  const { swipe } = wrapper.vm.$refs;
  const track = wrapper.find('.buri-swipe__track');

  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(1);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(2);
  triggerDrag(track, -100, 0);
  expect(swipe.active).toEqual(2);
});
