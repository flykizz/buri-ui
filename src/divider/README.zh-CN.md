# Divider 分割线

### 引入

``` javascript
import Vue from 'vue';
import { Divider } from 'buri';

Vue.use(Divider);
```

## 代码演示

### 基础用法

默认渲染一条水平分割线

```html
<buri-divider />
```

### 展示文字

通过插槽在可以分割线中间插入内容

```html
<buri-divider>文字</buri-divider>
```

### 内容位置

通过`content-position`指定内容所在位置

```html
<buri-divider content-position="left">文字</buri-divider>
<buri-divider content-position="right">文字</buri-divider>
```

### 虚线

添加`dashed`属性使分割线渲染为虚线

```html
<buri-divider dashed>文字</buri-divider>
```

### 自定义样式

可以直接通过`style`属性设置分割线的样式

```html
<buri-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  文字
</buri-divider>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| dashed | 是否使用虚线 | *boolean* | `false` |
| hairline | 是否使用 0.5px 线 | *boolean* | `true` |
| content-position | 内容位置，可选值为`left` `right` | *string* | `center` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |
