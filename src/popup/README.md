# Popup

### Install

``` javascript
import Vue from 'vue';
import { Popup } from 'buri';

Vue.use(Popup);
```

## Usage

### Basic Usage

```html
<buri-cell is-link @click="showPopup">Show Popup</buri-cell>

<buri-popup v-model="show">Content</buri-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
```

### Position

Use `position` prop to set popup display position

```html
<buri-popup
  v-model="show"
  position="top"
  :style="{ height: '20%' }"
/>
```

### Close Icon

```html
<buri-popup
  v-model="show"
  closeable
  position="bottom"
  :style="{ height: '20%' }"
/>

<!-- Custom Icon -->
<buri-popup
  v-model="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '20%' }"
/>

<!-- Icon Position -->
<buri-popup
  v-model="show"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '20%' }"
/>
```

### Round Corner

```html
<buri-popup
  v-model="show"
  round
  position="bottom"
  :style="{ height: '20%' }"
/>
```

### Get Container

Use `get-container` prop to specify mount location

```html
<!-- mount to body -->
<buri-popup v-model="show" get-container="body" />

<!-- mount to #app -->
<buri-popup v-model="show" get-container="#app" />

<!-- Specify the mount location by function -->
<buri-popup v-model="show" :get-container="getContainer" />
```

```js
export default {
  methods: {
    getContainer() {
      return document.querySelector('.my-container');
    }
  }
}
```

> Tips: The get-container prop cannot be used on the root node

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show popup | *boolean* | `false` |
| overlay | Whether to show overlay | *boolean* | `true` |
| position | Can be set to `top` `bottom` `right` `left` | *string* | `center` |
| overlay-class | Custom overlay class | *string* | - |
| overlay-style | Custom overlay style | *object* | - |
| duration | Transition duration, unit second | *number* | `0.3` |
| round `v2.0.7` | Whether to show round corner | *boolean* | `false` |
| lock-scroll | Whether to lock background scroll | *boolean* | `true` |
| lazy-render | Whether to lazy render util appeared | *boolean* | `true` |
| close-on-popstate `v2.2.10` | Whether to close when popstate | *boolean* | `false` |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `true` |
| closeable `v2.2.0` | Whether to show close icon | *boolean* | `false` |
| close-icon `v2.2.0` | Close icon name | *string* | `cross` |
| close-icon-position `v2.2.2` | Close Icon Position，can be set to `top-left` `bottom-left` `bottom-right` | *string* | `top-right` |
| transition | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | *string* | - |
| get-container | Return the mount node for Popup | *string \| () => Element* | - |
| safe-area-inset-bottom `v2.2.1` | Whether to enable bottom safe area adaptation | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click Popup | event: Event |
| open | Triggered when open Popup | - |
| opened | Triggered when opened Popup | - |
| close | Triggered when close Popup | - |
| closed | Triggered when closed Popup | - |
| click-overlay | Triggered when click overlay | - |
