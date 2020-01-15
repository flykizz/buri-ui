import DatetimePicker from '..';
import { mount } from '../../../test';

test('confirm & cancel event', () => {
  const onConfirm = jest.fn();
  const onCancel = jest.fn();

  const wrapper = mount(DatetimePicker, {
    listeners: {
      confirm: onConfirm,
      cancel: onCancel
    }
  });

  wrapper.find('.buri-picker__confirm').trigger('click');
  expect(onConfirm).toHaveBeenCalledTimes(1);

  wrapper.find('.buri-picker__cancel').trigger('click');
  expect(onCancel).toHaveBeenCalledTimes(1);
});

test('time type', () => {
  const wrapper = mount(DatetimePicker, {
    propsData: {
      type: 'time',
      minHour: 22,
      minMinute: 58
    }
  });

  expect(wrapper).toMatchSnapshot();
});
