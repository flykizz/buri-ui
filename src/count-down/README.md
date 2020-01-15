# CountDown

### Install

``` javascript
import Vue from 'vue';
import { CountDown } from 'buri';

Vue.use(CountDown);
```

## Usage

### Basic Usage

```html
<buri-count-down :time="time" />
```

```js
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
}
```

### Custom Format

```html
<buri-count-down
  :time="time"
  format="DD Day, HH:mm:ss"
/>
```

### Millisecond

```html
<buri-count-down
  millisecond
  :time="time"
  format="HH:mm:ss:SS"
/>
```

### Custom Style

```html
<buri-count-down :time="time">
  <template v-slot="timeData">
    <span class="item">{{ timeData.hours }}</span>
    <span class="item">{{ timeData.minutes }}</span>
    <span class="item">{{ timeData.seconds }}</span>
  </template>
</buri-count-down>

<style>
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
```

### Manual Control

```html
<buri-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="finish"
/>
<buri-grid clickable :column-num="3">
  <buri-grid-item text="Start" icon="play-circle-o" @click="start" />
  <buri-grid-item text="Pause" icon="pause-circle-o" @click="pause" />
  <buri-grid-item text="Reset" icon="replay" @click="reset" />
</buri-grid>
```

```js
export default {
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      this.$toast('Finished');
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| time | Total time | *number* | - |
| format | Time format | *string* | `HH:mm:ss` |
| auto-start | Whether to auto start count down | *boolean* | `true` |
| millisecond | Whether to enable millisecond render | *boolean* | `false` |

### Available formats

| Format | Description |
|------|------|
| DD | Day |
| HH | Hour |
| mm | Minute |
| ss | Second |
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digits |
| SSS | Millisecond, 3-digits |

### Events

| Event | Description | Arguments |
|------|------|------|
| finish | Triggered when count down finished | - |

### Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom Content | timeData |

### timeData Structure

| Name | Description | Type |
|------|------|------|
| days | Remain days | *number* |
| hours | Remain hours | *number* |
| minutes | Remain minutes | *number* |
| seconds | Remain seconds | *number* |
| milliseconds | Remain milliseconds | *number* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get CountDown instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| start | Start count down | - | - |
| pause | Pause count down | - | - |
| reset | Reset count down | - | - |
