# DatetimePicker 时间选择

### 介绍

用于选择时间，支持日期、时分等时间维度，通常与 [弹出层](#/zh-CN/popup) 组件配合使用

### 引入

```javascript
import Vue from 'vue';
import { DatetimePicker } from 'buri';

Vue.use(DatetimePicker);
```

## 代码演示

### 选择完整时间

```html
<buri-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```javascript
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  }
};
```

### 选择日期（年月日）

```html
<buri-datetime-picker
  v-model="currentDate"
  type="date"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```js
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  }
};
```

### 选择日期（年月）

通过传入`formatter`函数，可以对选项文字进行格式化处理

```html
<buri-datetime-picker
  v-model="currentDate"
  type="year-month"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
/>
```

```js
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },

  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    }
  }
}
```

### 选择时间

```html
<buri-datetime-picker
  v-model="currentTime"
  type="time"
  :min-hour="10"
  :max-hour="20"
/>
```

```js
export default {
  data() {
    return {
      currentTime: '12:00'
    };
  }
};
```

### 选项过滤器

通过传入`filter`函数，可以对选项数组进行过滤，实现自定义时间间隔

```html
<buri-datetime-picker
  v-model="currentTime"
  type="time"
  :filter="filter"
/>
```

```js
export default {
  data() {
    return {
      currentTime: '12:00'
    };
  },

  methods: {
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % 5 === 0);
      }

      return options;
    }
  }
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为 `date` <br> `time` `year-month` | *string* | `datetime` |
| min-date | 可选的最小时间，精确到分钟 | *Date* | 十年前 |
| max-date | 可选的最大时间，精确到分钟 | *Date* | 十年后 |
| min-hour | 可选的最小小时，针对 time 类型 | *number* | `0` |
| max-hour | 可选的最大小时，针对 time 类型 | *number* | `23` |
| min-minute | 可选的最小分钟，针对 time 类型 | *number* | `0` |
| max-minute | 可选的最大分钟，针对 time 类型 | *number* | `59` |
| filter | 选项过滤函数 | *(type, values) => values* | - |
| formatter | 选项格式化函数 | *(type, value) => value* | - |
| title | 顶部栏标题 | *string* | `''` |
| show-toolbar | 是否显示顶部栏 | *boolean* | `true` |
| loading | 是否显示加载状态 | *boolean* | `false` |
| item-height | 选项高度 | *number* | `44` |
| confirm-button-text | 确认按钮文字 | *string* | `确认` |
| cancel-button-text | 取消按钮文字 | *string* | `取消` |
| visible-item-count | 可见的选项个数 | *number* | `5` |
| swipe-duration `v2.2.13` | 快速滑动时惯性滚动的时长，单位`ms` | *number*  | `1000` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当值变化时触发的事件 | picker 实例 |
| confirm | 点击完成按钮时触发的事件 | 当前 value |
| cancel | 点击取消按钮时触发的事件 | - |

### 方法

通过 [ref](https://cn.vuejs.org/v2/api/#ref) 可以获取到 DatetimePicker 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| getPicker `v2.4.0` | 获取 Picker 实例，用于调用 Picker 的[实例方法](#/zh-CN/picker#fang-fa) | - | - |

## 常见问题

### 设置 min-date 或 max-date 后出现页面卡死的情况？

请注意不要在模板中直接使用类似`min-date="new Date()"`的写法，这样会导致每次渲染组件时传入一个新的 Date 对象，而传入新的数据会触发下一次渲染，从而陷入死循环。

正确的做法是将`min-date`作为一个数据定义在`data`函数中。

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。

### 是否有年份或月份选择器？

如果仅需要选择年份或者月份，建议直接使用 [Picker](#/zh-CN/picker) 组件。
