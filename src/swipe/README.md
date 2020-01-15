# Swipe

### Install

``` javascript
import Vue from 'vue';
import { Swipe, SwipeItem } from 'buri';

Vue.use(Swipe).use(SwipeItem);
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval

```html
<buri-swipe :autoplay="3000" indicator-color="white">
  <buri-swipe-item>1</buri-swipe-item>
  <buri-swipe-item>2</buri-swipe-item>
  <buri-swipe-item>3</buri-swipe-item>
  <buri-swipe-item>4</buri-swipe-item>
</buri-swipe>
```

### Image Lazyload

Use [Lazyload](#/en-US/lazyload) component to lazyload image

```html
<buri-swipe>
  <buri-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </buri-swipe-item>
</buri-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/buri/apple-1.jpg',
        'https://img.yzcdn.cn/buri/apple-2.jpg'
      ]
    }
  }
}
```

### Change Event

```html
<buri-swipe @change="onChange">
  <buri-swipe-item>1</buri-swipe-item>
  <buri-swipe-item>2</buri-swipe-item>
  <buri-swipe-item>3</buri-swipe-item>
  <buri-swipe-item>4</buri-swipe-item>
</buri-swipe>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('Current Swipe index:' + index);
    }
  }
}
```

### Vertical Scrolling

```html
<buri-swipe :autoplay="3000" vertical>
  <buri-swipe-item>1</buri-swipe-item>
  <buri-swipe-item>2</buri-swipe-item>
  <buri-swipe-item>3</buri-swipe-item>
  <buri-swipe-item>4</buri-swipe-item>
</buri-swipe>
```

### Set SwipeItem Size

```html
<buri-swipe :loop="false" :width="300">
  <buri-swipe-item>1</buri-swipe-item>
  <buri-swipe-item>2</buri-swipe-item>
  <buri-swipe-item>3</buri-swipe-item>
  <buri-swipe-item>4</buri-swipe-item>
</buri-swipe>
```

> It's not supported to set SwipeItem size in the loop mode

### Custom Indicator

```html
<buri-swipe @change="onChange">
  <buri-swipe-item>1</buri-swipe-item>
  <buri-swipe-item>2</buri-swipe-item>
  <buri-swipe-item>3</buri-swipe-item>
  <buri-swipe-item>4</buri-swipe-item>

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
</buri-swipe>
```

```js
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
```

## API

### Swipe Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| autoplay | Autoplay interval (ms) | *number* | - |
| duration | Animation duration (ms) | *number* | `500` |
| initial-swipe | Index of initial swipe, start from 0 | *number* | `0` |
| width | Set Swiper Item Width | *number* | `0` |
| height | Set Swiper Item Height | *number* | `0` |
| loop | Whether to enable loop | *boolean* | `true` |
| show-indicators | Whether to show indicators | *boolean* | `true` |
| indicator-color | Indicator color | *string* | `#1989fa` |
| vertical | Whether to be vertical Scrolling | *boolean* | `false` |
| touchable | Whether to allow swipe by touch gesture | *boolean* | `true` |
| stop-propagation `v2.1.0` | Whether to stop touchmove event propagation | *boolean* | `false` |

### Swipe Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when current swipe change | index: index of current swipe |

### SwipeItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### Swipe Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Swipe instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| prev `v2.4.2` | Swipe to prev item | - | - |
| next `v2.4.2` | Swipe to next item | - | - |
| swipeTo | Swipe to target index | index: target index, options: Options | void |
| resize `v2.2.14` | Resize Swipe when container element resized | - | void |

### swipeTo Options

| Name | Description | Type |
|------|------|------|------|
| immediate | Whether to skip animation | *boolean* |

### Swipe Slots

| Name | Description |
|------|------|
| default | Content |
| indicator | Custom indicator |
