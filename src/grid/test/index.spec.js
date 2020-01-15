import { mount } from '../../../test';

test('click grid item', () => {
  const onClick = jest.fn();
  const wrapper = mount({
    template: `
      <buri-grid>
        <buri-grid-item @click="onClick" />
      </buri-grid>
    `,
    methods: {
      onClick
    }
  });

  const Item = wrapper.find('.buri-grid-item__content');
  Item.trigger('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('sqaure and set gutter', () => {
  const wrapper = mount({
    template: `
      <buri-grid square :column-num="2" gutter="10rem">
        <buri-grid-item />
        <buri-grid-item />
        <buri-grid-item />
      </buri-grid>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('icon-size prop', () => {
  const wrapper = mount({
    template: `
      <buri-grid icon-size="10">
        <buri-grid-item icon="success" />
      </buri-grid>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('render icon-slot', () => {
  const wrapper = mount({
    template: `
      <buri-grid icon-size="10">
        <buri-grid-item info="1">
          <div slot="icon" />
        </buri-grid-item>
      </buri-grid>
    `
  });

  expect(wrapper).toMatchSnapshot();
});
