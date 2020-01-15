# IndexBar

### Install

``` javascript
import Vue from 'vue';
import { IndexBar } from 'buri';

Vue.use(IndexBar);
```

## Usage

### Basic Usage

```html
<buri-index-bar>
  <buri-index-anchor index="A" />
  <buri-cell title="Text" />
  <buri-cell title="Text" />
  <buri-cell title="Text" />

  <buri-index-anchor index="B" />
  <buri-cell title="Text" />
  <buri-cell title="Text" />
  <buri-cell title="Text" />

  ...
</buri-index-bar>
```

### Custom Index List

```html
<buri-index-bar :index-list="indexList">
  <buri-index-anchor index="1">Title 1</buri-index-anchor>
  <buri-cell title="Text" />
  <buri-cell title="Text" />
  <buri-cell title="Text" />

  <buri-index-anchor index="2">Title 2</buri-index-anchor>
  <buri-cell title="Text" />
  <buri-cell title="Text" />
  <buri-cell title="Text" />

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

| Attribute | Description | Type | Default |
|------|------|------|------|
| index-list | Index List | *string[] \| number[]* | `A-Z` |
| z-index | z-index | *number* | `1` |
| sticky | Whether to enable anchor sticky top | *boolean* | `true` |
| sticky-offset-top `v2.0.7` | Anchor offset top when sticky | *number* | `0` |
| highlight-color | Index character highlight color | *string* | `#07c160` | - |

### IndexAnchor Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| index | Index | *string \| number* | - |

### IndexBar Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when select index | index |

### IndexAnchor Slots

| Name | Description |
|------|------|
| default | Anchor content, show index by default |
