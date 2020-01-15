# SubmitBar

### Install

``` javascript
import Vue from 'vue';
import { SubmitBar } from 'buri';

Vue.use(SubmitBar);
```

## Usage

### Basic Usage

```html
<buri-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

### Disabled

`submit` event will not triggerd when disabled.

```html
<buri-submit-bar
  disabled
  :price="3050"
  button-text="Submit"
  tip="Some tips"
  tip-icon="info-o"
  @submit="onSubmit"
/>
```

### Loading

`submit` event will not triggerd when loading.

```html
<buri-submit-bar
  loading
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

### Adburiced Usage

Use slot to add custom contents.

```html
<buri-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
>
  <buri-checkbox v-model="checked">Check</buri-checkbox>
  <span slot="tip">
    Some tips, <span @click="onClickEditAddress">Link</span>
  </span>
</buri-submit-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| price | Price | *number* | - |
| label | Price left label | *string* | `Total：` |
| suffix-label | Price right label | *string* | - |
| text-align `v2.3.0` | Price label text align can be set to `right` `left` | *string* | `right` |
| button-text | Button text | *string* | - |
| button-type | Button type | *string* | `danger` |
| tip | Tip | *string* | - |
| tip-icon | Icon |  *string* | - |
| disabled | Whether to disable button | *boolean* | `false` |
| loading | Whether to show loading icon | *boolean* | `false` |
| currency | Currency symbol | *string* | `¥` |
| decimal-length | number of digits to appear after the decimal point | *number* | `2` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| submit | Triggerd when click submit button | - |

### Slots

| Name | Description |
|------|------|
| default | Custom left content |
| top | Custom top content |
| tip | Custom tips |
