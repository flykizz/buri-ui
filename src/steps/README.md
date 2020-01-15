# Steps

### Install

``` javascript
import Vue from 'vue';
import { Step, Steps } from 'buri';

Vue.use(Step).use(Steps);
```

## Usage

### Basic Usage

```html
<buri-steps :active="active">
  <buri-step>Step1</buri-step>
  <buri-step>Step2</buri-step>
  <buri-step>Step3</buri-step>
  <buri-step>Step4</buri-step>
</buri-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

### Custom Style

```html
<buri-steps
  :active="active"
  active-icon="success"
  active-color="#38f"
>
  <buri-step>Step1</buri-step>
  <buri-step>Step2</buri-step>
  <buri-step>Step3</buri-step>
  <buri-step>Step4</buri-step>
</buri-steps>
```

### Vertical Steps

```html
<buri-steps direction="vertical" :active="0">
  <buri-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </buri-step>
  <buri-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </buri-step>
  <buri-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </buri-step>
</buri-steps>
```

## API

### Steps Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| active | Active step | *number* | 0 |
| description | Description | *string* | - |
| direction | Can be set to `vertical` | *string* | `horizontal` |
| active-color | Active step color | *string* | `#07c160` |
| active-icon | Active icon name | *string* | `checked` |
| inactive-icon | Active icon name | *string* | - |

### Step Slots

| Name | Description |
|------|------|
| active-icon | Custom active icon |
| inactive-icon | Custom inactive icon |
