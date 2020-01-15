# SwipeCell

### Install

``` javascript
import Vue from 'vue';
import { SwipeCell } from 'buri';

Vue.use(SwipeCell);
```

## Usage

### Basic Usage

```html
<buri-swipe-cell>
  <template slot="left">
    <buri-button square type="primary" text="Select" />
  </template>

  <buri-cell :border="false" title="Cell" value="Cell Content" />

  <template slot="right">
    <buri-button square type="danger" text="Delete" />
    <buri-button square type="primary" text="Collect"/>
  </template>
</buri-swipe-cell>
```

### Async close

```html
<buri-swipe-cell :before-close="beforeClose">
  <template slot="left">
    <buri-button square type="primary" text="Select" />
  </template>

  <buri-cell :border="false" title="Cell" value="Cell Content" />

  <template slot="right">
    <buri-button square type="danger" text="Delete" />
  </template>
</buri-swipe-cell>
```

```js
export default {
  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: 'Are you sure to delete?'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name `v2.0.4` | Identifier of SwipeCell | *string \| number* | - |
| before-close `v2.3.0` | Callback function before close | *Function* | - |
| disabled | Whether to disabled swipe | *boolean* | `false` |
| left-width | Width of the left swipe area | *number* | `auto` |
| right-width | Width of the right swipe area | *number* | `auto` |
| stop-propagation `v2.1.0` | Whether to stop touchmove event propagation | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | custom content |
| left | content of left scrollable area |
| right | content of right scrollabe area |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | Click positon (`left` `right` `cell` `outside`) |
| open | Triggered when opened | { position: 'left' \| 'right' , name: string } |
| close | Triggered when closed | { position: string , name: string } |

### beforeClose Params

| Attribute | Description | Type |
|------|------|------|
| name | Name | *string* |
| position | Click positon (`left` `right` `cell` `outside`) | *string* |
| instance | SwipeCell instance | *SwipeCell* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get SwipeCell instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| open | open SwipeCell | position: `left | right` | - |
| close | close SwipeCell | - | - |
