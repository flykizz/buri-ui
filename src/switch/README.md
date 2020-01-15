# Switch

### Install

``` javascript
import Vue from 'vue';
import { Switch } from 'buri';

Vue.use(Switch);
```

## Usage

### Basic Usage

```html
<buri-switch v-model="checked" />
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};  
```

### Disabled

```html
<buri-switch v-model="checked" disabled />
```

### Loading

```html
<buri-switch v-model="checked" loading />
```

### Custom Size

```html
<buri-switch v-model="checked" size="24px" />
```

### Custom Color

```html
<buri-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
```

### Async Control

```html
<buri-switch :value="checked" @input="onInput" />
```

```js
export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: 'Confirm',
        message: 'Are you sure to toggle switch?'
      }).then(() => {
        this.checked = checked;
      });
    }
  }
};  
```

### Inside a Cell

```html
<buri-cell center title="Title">
  <buri-switch v-model="checked" slot="right-icon" size="24" />
</buri-cell>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Check status of Switch | *any* | `false` |
| loading | Whether to show loading icon | *boolean* | `false` |
| disabled | Whether to disable switch | *boolean* | `false` |
| size `v2.2.11` | Size of switch | *string \| number* | `30px` |
| active-color | Background color when active | *string* | `#1989fa` |
| inactive-color | Background color when inactive | *string* | `#fff` |
| active-value | Value when active | *any* | `true` |
| inactive-value | Value when inactive | *any* | `false` |

### Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when check status changed | checked: is switch checked |
| click `v2.2.11` | Triggered when clicked | event: Event |
