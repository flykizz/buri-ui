# Stepper

### Install

``` javascript
import Vue from 'vue';
import { Stepper } from 'buri';

Vue.use(Stepper);
```

## Usage

### Basic Usage

```html
<buri-stepper v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  }
}
```

### Step

```html
<buri-stepper v-model="value" step="2" />
```

### Range

```html
<buri-stepper v-model="value" min="5" max="8" />
```

### Integer

```html
<buri-stepper v-model="value" integer />
```

### Disabled

```html
<buri-stepper v-model="value" disabled />
```

### Decimal Length

```html
<buri-stepper v-model="value" step="0.2" :decimal-length="1" />
```

### Custom Size

```html
<buri-stepper v-model="value" input-width="40px" button-size="32px" />
```

### Async Change

```html
<buri-stepper
  :value="value"
  async-change
  @change="onChange"
/>
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  },

  methods: {
    onChange(value) {
      Toast.loading({ forbidClick: true });

      setTimeout(() => {
        Toast.clear();
        this.value = value;
      }, 500);
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current value | *string \| number* | - |
| min | Min value | *string \| number* | `1` |
| max | Max value | *string \| number* | - |
| default-value | Default value, valid when v-model is empty | *string \| number* | `1` |
| step | Value change step | *string \| number* | `1` |
| name `v2.0.3` | Stepper name | *string \| number* | - |
| integer | Whether to allow only integers | *boolean* | `false` |
| disabled | Disable value change | *boolean* | `false` |
| disable-plus `v2.2.16` | Whether to disable plus button | *boolean* | `false` |
| disable-minus `v2.2.16` | Whether to disable minus button | *boolean* | `false` |
| disable-input | Whether to disable input | *boolean* | `false` |
| async-change | Whether to enable async change | *boolean* | `false` | - |
| input-width | Input width | *string \| number* | `32px` |
| button-size `v2.0.5` | Button size | *string \| number* | `28px` |
| show-plus `v2.1.2` | Whether to show plus button | *boolean* | `true` |
| show-minus `v2.1.2` | Whether to show minus button | *boolean* | `true` |
| decimal-length `v2.2.1` | Decimal length | *number* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value change | value: current value, detail: Detail info, contains name |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |
| focus | Triggered when input focused | event: Event |
| blur | Triggered when input blured | event: Event |
