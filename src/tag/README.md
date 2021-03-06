# Tag

### Install

``` javascript
import Vue from 'vue';
import { Tag } from 'buri';

Vue.use(Tag);
```

## Usage

### Basic Usage

```html
<buri-tag>Tag</buri-tag>
<buri-tag type="primary">Tag</buri-tag>
<buri-tag type="success">Tag</buri-tag>
<buri-tag type="danger">Tag</buri-tag>
<buri-tag type="warning">Tag</buri-tag>
```

### Round style

```html
<buri-tag round>Tag</buri-tag>
<buri-tag round type="primary">Tag</buri-tag>
<buri-tag round type="success">Tag</buri-tag>
<buri-tag round type="danger">Tag</buri-tag>
<buri-tag round type="warning">Tag</buri-tag>
```

### Mark style

```html
<buri-tag mark>Tag</buri-tag>
<buri-tag mark type="primary">Tag</buri-tag>
<buri-tag mark type="success">Tag</buri-tag>
<buri-tag mark type="danger">Tag</buri-tag>
<buri-tag mark type="warning">Tag</buri-tag>
```

### Plain style

```html
<buri-tag plain>Tag</buri-tag>
<buri-tag plain type="primary">Tag</buri-tag>
<buri-tag plain type="success">Tag</buri-tag>
<buri-tag plain type="danger">Tag</buri-tag>
<buri-tag plain type="warning">Tag</buri-tag>
```

### Custom Color

```html
<buri-tag color="#f2826a">Tag</buri-tag>
<buri-tag color="#f2826a" plain>Tag</buri-tag>
<buri-tag color="#7232dd">Tag</buri-tag>
<buri-tag color="#7232dd" plain>Tag</buri-tag>
<buri-tag color="#ffe1e1" text-color="#ad0000">Tag</buri-tag>
```

### Custom Size

```html
<buri-tag type="danger">Tag</buri-tag>
<buri-tag type="danger" size="medium">Tag</buri-tag>
<buri-tag type="danger" size="large">Tag</buri-tag>
```

### Closeable

```html
<buri-tag
  v-if="show.primary"
  closeable
  size="medium"
  type="primary"
  @close="close('primary')"
>
  Tag
</buri-tag>
<buri-tag
  v-if="show.success"
  closeable
  size="medium"
  type="success"
  @close="close('success')"
>
  Tag
</buri-tag>
```

```js
export default {
  data() {
    return {
      show: {
        primary: true,
        success: true
      }
    }
  },
  methods: {
    close(type) {
      this.show[type] = false;
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Type, can be set to `primary` `success` `danger` `warning` | *string* | `default` |
| size | Size, can be set to `large` `medium` | *string* | - |
| color | Custom color | *string* | - |
| plain | Whether to be plain style | *boolean* | `false` |
| round | Whether to be round style | *boolean* | `false` |
| mark | Whether to be mark style | *boolean* | `false` |
| text-color | Text color | *string* | `white` |
| closeable `v2.2.9` | Whether to be closeable | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Default slot |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
| close | Triggered when click close icon | - |
