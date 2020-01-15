# Checkbox

### Install

``` javascript
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'buri';

Vue.use(Checkbox).use(CheckboxGroup);
```

## Usage

### Basic Usage

```html
<buri-checkbox v-model="checked">Checkbox</buri-checkbox>
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
<buri-checkbox v-model="checked" disabled>Checkbox</buri-checkbox>
```

### Disabled Label Click

```html
<buri-checkbox v-model="checked" label-disabled>Checkbox</buri-checkbox>
```

### Custom Shape

```html
<buri-checkbox v-model="checked" shape="square">Checkbox</buri-checkbox>
```

### Custom Color

```html
<buri-checkbox v-model="checked" checked-color="#07c160">Checkbox</buri-checkbox>
```

### Custom Icon Size

```html
<buri-checkbox v-model="checked" icon-size="24px">Checkbox</buri-checkbox>
```

### Custom Icon

Use icon slot to custom icon

```html
<buri-checkbox v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? activeIcon : inactiveIcon"
  >
</buri-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
      activeIcon: 'https://img.yzcdn.cn/buri/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/buri/user-inactive.png'
    };
  }
};
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<buri-checkbox-group v-model="result">
  <buri-checkbox name="a">Checkbox a</buri-checkbox>
  <buri-checkbox name="b">Checkbox b</buri-checkbox>
  <buri-checkbox name="c">Checkbox c</buri-checkbox>
</buri-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      result: ['a', 'b']
    };
  }
};
```

### Maximum amount of checked options

```html
<buri-checkbox-group v-model="result" :max="2">
  <buri-checkbox name="a">Checkbox a</buri-checkbox>
  <buri-checkbox name="b">Checkbox b</buri-checkbox>
  <buri-checkbox name="c">Checkbox c</buri-checkbox>
</buri-checkbox-group>
```

### Toggle All

```html
<buri-checkbox-group v-model="result" ref="checkboxGroup">
  <buri-checkbox name="a">Checkbox a</buri-checkbox>
  <buri-checkbox name="b">Checkbox b</buri-checkbox>
  <buri-checkbox name="c">Checkbox c</buri-checkbox>
</buri-checkbox-group>

<buri-button type="primary" @click="checkAll">Check All</buri-button>
<buri-button type="info" @click="toggleAll">Toggle All</buri-button>
```

```js
export default {
  data() {
    return {
      result: []
    }
  },

  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    }
  }
}
```

### Inside a Cell

```html
<buri-checkbox-group v-model="result">
  <buri-cell-group>
    <buri-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
      @click="toggle(index)"
    >
      <buri-checkbox
        :name="item"
        ref="checkboxes"
        slot="right-icon"
      />
    </buri-cell>
  </buri-cell-group>
</buri-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

## API

### Checkbox Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Checkbox name | *any* | - |
| shape | Can be set to `square` | *string* | `round` |
| v-model | Check status | *boolean* | `false` |
| disabled | Disable checkbox | *boolean* | `false` |
| label-disabled | Whether to disable label click | *boolean* | `false` |
| label-position | Can be set to `left` | *string* | `right` |
| icon-size | Icon size | *string \| number* | `20px` |
| checked-color | Checked color | *string* | `#1989fa` | - |
| bind-group `v2.2.4` | Whether to bind with CheckboxGroup | *boolean* | `true` |

### CheckboxGroup Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Names of all checked checkboxes | *any[]* | - |
| max | Maximum amount of checked options | *number* | `0`(Unlimited) |
| disabled | Disable all checkboxes | *boolean* | `false` |
| icon-size `v2.2.3` | Icon size of all checkboxes | *string \| number* | `20px` |
| checked-color `v2.2.3` | Checked color of all checkboxes | *string* | `#1989fa` | - |

### Checkbox Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |
| click | Triggered when click checkbox | event: Event |

### CheckboxGroup Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Checkbox Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom label | - |
| icon | Custom icon | checked: whether to be checked |

### CheckboxGroup Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get CheckboxGroup instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| toggleAll | Toggle check status of all checkboxes | checked?: boolean | - |

### Checkbox Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Checkbox instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| toggle | Toggle check status | checked?: boolean | - |
