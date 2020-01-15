# Card

### Install

``` javascript
import Vue from 'vue';
import { Card } from 'buri';

Vue.use(Card);
```

## Usage

### Basic Usage

```html
<buri-card
  num="2"
  price="2.00"
  title="Title"
  desc="Description"
  thumb="https://img.yzcdn.cn/buri/t-thirt.jpg"
/>
```

### Discount Info

```html
<buri-card
  num="2"
  tag="Tag"
  price="2.00"
  title="Title"
  desc="Description"
  origin-price="10.00"
  thumb="https://img.yzcdn.cn/buri/t-thirt.jpg"
/>
```

### Custom Content

Use slot to custom content.

```html
<buri-card
  num="2"
  title="Title"
  desc="Description"
  price="2.00"
  thumb="https://img.yzcdn.cn/buri/t-thirt.jpg"
>
  <div slot="tags">
    <buri-tag plain type="danger">Tag</buri-tag>
    <buri-tag plain type="danger">Tag</buri-tag>
  </div>
  <div slot="footer">
    <buri-button size="mini">Button</buri-button>
    <buri-button size="mini">Button</buri-button>
  </div>
</buri-card>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| thumb | Left thumb image URL | *string* | - |
| title | Title | *string* | - |
| desc | Description | *string* | - |
| tag | Tag | *string* | - |
| num | number | *string \| number* | - |
| price | Price | *string \| number* | - |
| origin-price | Origin price | *string \| number* | - |
| centered | Whether content vertical centered | *boolean* | `false` |
| currency | Currency symbol |  *string* | `¥` |
| thumb-link | Thumb link URL | *string* | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
| click-thumb | Triggered when thumb clicked | event: Event |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| desc | Custom description |
| num | Custom num |
| price | Custom price |
| origin-price | Custom origin price |
| price-top | Custom price top |
| bottom | Custom price bottom |
| thumb | Custom thumb |
| tag | Custom thumb tag |
| tags | Custom tags |
| footer | Custom footer |
