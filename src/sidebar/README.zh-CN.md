# Sidebar 侧边导航

### 引入

``` javascript
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'buri';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## 代码演示

### 基础用法

通过`v-model`绑定当前选中项的索引

```html
<buri-sidebar v-model="activeKey">
  <buri-sidebar-item title="标签名称" />
  <buri-sidebar-item title="标签名称" />
  <buri-sidebar-item title="标签名称" />
</buri-sidebar>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
```

### 提示信息

设置`dot`属性后，会在右上角展示一个小红点。设置`info`属性后，会在右上角展示相应的徽标

```html
<buri-sidebar v-model="activeKey">
  <buri-sidebar-item title="标签名称" dot />
  <buri-sidebar-item title="标签名称" info="5" />
  <buri-sidebar-item title="标签名称" info="99+" />
</buri-sidebar>
```

### 禁用选项

通过`disabled`属性禁用选项

```html
<buri-sidebar v-model="activeKey">
  <buri-sidebar-item title="标签名称" />
  <buri-sidebar-item title="标签名称" disabled />
  <buri-sidebar-item title="标签名称" />
</buri-sidebar>
```


### 监听切换事件

设置`change`方法来监听切换导航项时的事件

```html
<buri-sidebar v-model="activeKey" @change="onChange">
  <buri-sidebar-item title="标签名1" />
  <buri-sidebar-item title="标签名2" />
  <buri-sidebar-item title="标签名3" />
</buri-sidebar>
```

```js
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    }
  }
}
```

## API

### Sidebar Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model `v2.0.4` | 当前导航项的索引 | *string \| number* | `0` |

### Sidebar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换导航项时触发 | index: 当前导航项的索引 |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 内容 | *string* | `''` |
| dot `v2.2.1` | 是否显示右上角小红点 | *boolean* | `false` |
| info | 右上角徽标的内容 | *string \| number* | - |
| disabled `v2.2.0` | 是否禁用该项 | *boolean* | `false` |
| url | 点击后跳转的链接地址 | *string* | - |
| to `v2.0.4` | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | *string \| object* | - |
| replace `v2.0.4` | 是否在跳转时替换当前页面历史 | *boolean* | `false` |

### SidebarItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | index: 当前导航项的索引 |
