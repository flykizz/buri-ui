# IndexBar 索引栏

### 引入

``` javascript
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'buri';

Vue.use(IndexBar).use(IndexAnchor);
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置

```html
<buri-index-bar>
  <buri-index-anchor index="A" />
  <buri-cell title="文本" />
  <buri-cell title="文本" />
  <buri-cell title="文本" />

  <buri-index-anchor index="B" />
  <buri-cell title="文本" />
  <buri-cell title="文本" />
  <buri-cell title="文本" />

  ...
</buri-index-bar>
```

### 自定义索引列表

可以通过`index-list`属性自定义展示的索引字符列表，

```html
<buri-index-bar :index-list="indexList">
  <buri-index-anchor index="1">标题1</buri-index-anchor>
  <buri-cell title="文本" />
  <buri-cell title="文本" />
  <buri-cell title="文本" />

  <buri-index-anchor index="2">标题2</buri-index-anchor>
  <buri-cell title="文本" />
  <buri-cell title="文本" />
  <buri-cell title="文本" />

  ...
</buri-index-bar>
```

```js
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| index-list | 索引字符列表 | *string[] \| number[]* | `A-Z` |
| z-index | z-index 层级 | *number* | `1` |
| sticky | 是否开启锚点自动吸顶 | *boolean* | `true` |
| sticky-offset-top `v2.0.7` | 锚点自动吸顶时与顶部的距离 | *number* | `0` |
| highlight-color | 索引字符高亮颜色 | *string* | `#07c160` |

### IndexAnchor Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| index | 索引字符 | *string \| number* | - |

### IndexBar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选中字符时触发 | index: 索引字符 |

### IndexAnchor Slots

| 名称 | 说明 |
|------|------|
| default | 锚点位置显示内容，默认为索引字符 |
