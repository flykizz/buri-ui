# Skeleton

### Install

``` javascript
import Vue from 'vue';
import { Skeleton } from 'buri';

Vue.use(Skeleton);
```

## Usage

### Basic Usage

```html
<buri-skeleton title :row="3" />
```

### Show Avatar

```html
<buri-skeleton title avatar :row="3" />
```

### Show Children

```html
<buri-skeleton
  title
  avatar
  :row="3"
  :loading="loading"
>
  <div>Content</div>
</buri-skeleton>
```

```js
export default {
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loading = false;
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| row | Row count | *number* | `0` |
| row-width | Row width, can be array | *number \| string \| number[] \| string[]* | `100%` |
| title | Whether to show title placeholder | *boolean* | `false` |
| title-width | Title width | *string \| number* | `40%` |
| avatar | Whether to show avatar placeholder | *boolean* | `false` |
| avatar-size | Size of avatar placeholder | *string \| number* | `32px` |
| avatar-shape | Shape of avatar placeholder，can be set to `square` | *string* | `round` |
| loading | Whether to show skeleton，pass `false` to show child component | *boolean* | `true` |
| animate | Whether to enable animation | *boolean* | `true` |
