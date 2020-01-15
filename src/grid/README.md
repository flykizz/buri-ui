# Grid

### Install

``` javascript
import Vue from 'vue';
import { Grid, GridItem } from 'buri';

Vue.use(Grid).use(GridItem);
```

## Usage

### Basic Usage

```html
<buri-grid>
  <buri-grid-item icon="photo-o" text="Text" />
  <buri-grid-item icon="photo-o" text="Text" />
  <buri-grid-item icon="photo-o" text="Text" />
  <buri-grid-item icon="photo-o" text="Text" />
</buri-grid>
```

### Column Num

```html
<buri-grid :column-num="3">
  <buri-grid-item
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</buri-grid>
```

### Custom Content

```html
<buri-grid :border="false" :column-num="3">
  <buri-grid-item>
    <buri-image src="https://img.yzcdn.cn/buri/apple-1.jpg" />
  </buri-grid-item>
  <buri-grid-item>
    <buri-image src="https://img.yzcdn.cn/buri/apple-2.jpg" />
  </buri-grid-item>
  <buri-grid-item>
    <buri-image src="https://img.yzcdn.cn/buri/apple-3.jpg" />
  </buri-grid-item>
</buri-grid>
```

### Square

```html
<buri-grid square>
  <buri-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</buri-grid>
```

### Gutter

```html
<buri-grid :gutter="10">
  <buri-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</buri-grid>
```

### Route

```html
<buri-grid clickable :column-num="2">
  <buri-grid-item icon="home-o" text="Vue Router" to="/" />
  <buri-grid-item icon="search" text="URL" url="/buri/mobile.html" />
</buri-grid>
```

### Show Info

```html
<buri-grid :column-num="2">
  <buri-grid-item icon="home-o" text="Text" dot />
  <buri-grid-item icon="search" text="Text" info="99+" />
</buri-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| column-num `v2.0.4` | Column Num | *number* | `4` |
| gutter | Gutter | *string \| number* | `0` |
| border | Whether to show border | *boolean* | `true` |
| center | Whether to center content | *boolean* | `true` |
| square | Whether to be square shape | *boolean* | `false` |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |
| icon-size `v2.2.6` | Icon size | *string \| number* | `28px` |

### GridItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Text | *string* | - |
| icon | Icon name or URL | *string* | - |
| dot `v2.2.1` | Whether to show red dot | *boolean* | `false` |
| info `v2.2.1` | Content of the badge | *string \| number* | - |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### GridItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### GridItem Slots

| Name | Description |
|------|------|
| default | Custom content |
| icon | Custom icon |
| text | Custom text |
