# GoodsAction

### Install

``` javascript
import Vue from 'vue';
import {
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon
} from 'buri';

Vue
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon);
```

## Usage

### Basic Usage

```html
<buri-goods-action>
  <buri-goods-action-icon icon="chat-o" text="Icon1" @click="onClickIcon" />
  <buri-goods-action-icon icon="cart-o" text="Icon2" @click="onClickIcon" />
  <buri-goods-action-button type="warning" text="Button1" @click="onClickButton" />
  <buri-goods-action-button type="danger" text="Button2" @click="onClickButton" />
</buri-goods-action>
```

```javascript
export default {
  methods: {
    onClickIcon() {
      Toast('Click Icon');
    },
    onClickButton() {
      Toast('Click Button');
    }
  }
}
```

### Icon info

Use `info` prop to show badge in icon

```html
<buri-goods-action>
  <buri-goods-action-icon icon="chat-o" text="Icon1" />
  <buri-goods-action-icon icon="cart-o" text="Icon2" info="5" />
  <buri-goods-action-icon icon="shop-o" text="Icon3" info="12" />
  <buri-goods-action-button type="warning" text="Button1" />
  <buri-goods-action-button type="danger" text="Button2" />
</buri-goods-action>
```

### Custom Icon Color

```html
<buri-goods-action>
  <buri-goods-action-icon icon="chat-o" text="Icon1" color="#07c160" />
  <buri-goods-action-icon icon="cart-o" text="Icon2" />
  <buri-goods-action-icon icon="star" text="Collected" color="#ff5000" />
  <buri-goods-action-button type="warning" text="Button1" />
  <buri-goods-action-button type="danger" text="Button2" />
</buri-goods-action>
```

### Custom Button Color

```html
<buri-goods-action>
  <buri-goods-action-icon icon="chat-o" text="Icon1" />
  <buri-goods-action-icon icon="shop-o" text="Icon2" />
  <buri-goods-action-button color="#be99ff" type="warning" text="Button1" />
  <buri-goods-action-button color="#7232dd" type="danger" text="Button2" />
</buri-goods-action>
```

## API

### GoodsAction Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `false` |

### GoodsActionIcon Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | *string* | - |
| icon | Icon | *string* | - |
| color `v2.4.2` | Icon color | *string* | `#323233` |
| icon-class | Icon class name | *any* | `''` |
| info | Content of the badge | *string \| number* | - |
| url | Link | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### GoodsActionButton Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | *string* | - |
| type | Button type, Can be set to `primary` `info` `warning` `danger` | *string* | `default` |
| color `v2.1.8` | Button color, support linear-gradient | *string* | - |
| primary | Is primary button (red color) | *boolean* | `false` |
| disabled | Whether to disable button | *boolean* | `false` |
| loading | Whether show loading status | *boolean* | `false` |
| url | Link | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### GoodsActionIcon Slots

| Name | Description |
|------|------|
| default | Text |
| icon | Custom icon |

### GoodsActionButton Slots

| Name | Description |
|------|------|
| default | Button content |
