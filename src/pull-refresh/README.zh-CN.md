# PullRefresh 下拉刷新

### 引入

``` javascript
import Vue from 'vue';
import { PullRefresh } from 'buri';

Vue.use(PullRefresh);
```

## 代码演示

### 基础用法

下拉刷新时会触发 `refresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `v-model` 设置为 `false`，表示加载完成。

```html
<buri-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</buri-pull-refresh>
```

```javascript
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
}
```

### 成功提示

通过`success-text`可以设置刷新成功后的顶部提示文案

```html
<buri-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
  <p>刷新次数: {{ count }}</p>
</buri-pull-refresh>
```

### 自定义提示

通过插槽可以自定义下拉刷新过程中的提示内容

```html
<buri-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
  <img
    class="doge"
    slot="pulling"
    slot-scope="props"
    src="https://img.yzcdn.cn/buri/doge.png"
    :style="{ transform: `scale(${props.distance / 80})` }"
  >
  <!-- 释放提示 -->
  <img
    class="doge"
    slot="loosing"
    src="https://img.yzcdn.cn/buri/doge.png"
  >
  <!-- 加载提示 -->
  <img
    class="doge"
    slot="loading"
    src="https://img.yzcdn.cn/buri/doge-fire.jpg"
  >
  <p>刷新次数: {{ count }}</p>
</buri-pull-refresh>

<style>
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 是否处于加载中状态 | *boolean* | - |
| pulling-text | 下拉过程提示文案 | *string* | `下拉即可刷新...` |
| loosing-text | 释放过程提示文案 | *string* | `释放即可刷新...` |
| loading-text | 加载过程提示文案 | *string* | `加载中...` |
| success-text | 刷新成功提示文案 | *string* | - |
| success-duration | 刷新成功提示展示时长(ms) | *number* | `500` |
| animation-duration | 动画时长 | *number* | `300` |
| head-height `v2.4.2` | 顶部内容高度 | *number* | `50` |
| disabled | 是否禁用下拉刷新 | *boolean* | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| refresh | 下拉刷新时触发 | - |

### Slots

| 名称 | 说明 | SlotProps |
|------|------|------|
| default | 自定义内容 | - |
| normal | 非下拉状态时顶部内容 | - |
| pulling | 下拉过程中顶部内容 | { distance: 当前下拉距离 } |
| loosing | 释放过程中顶部内容 | { distance: 当前下拉距离 } |
| loading | 加载过程中顶部内容 | { distance: 当前下拉距离 } |
| success | 刷新成功提示内容 | - |

## 常见问题

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
