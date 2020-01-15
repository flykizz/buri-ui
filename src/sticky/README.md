# Sticky

### Install

``` javascript
import Vue from 'vue';
import { Sticky } from 'buri';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<buri-sticky>
  <buri-button type="primary">Basic Usage</buri-button>
</buri-sticky>
```

### Offset Top

```html
<buri-sticky :offset-top="50">
  <buri-button type="info">Offset Top</buri-button>
</buri-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <buri-sticky :container="container">
    <buri-button type="warning">Set Container</buri-button>
  </buri-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| offset-top | Offset top | *number* | `0` |
| z-index | z-index when sticky | *number* | `99` |
| container | Container DOM | *HTMLElement* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
