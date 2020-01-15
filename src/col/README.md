# Layout

### Intro

Quickly and easily create layouts with `buri-row` and `buri-col`

### Install

``` javascript
import Vue from 'vue';
import { Row, Col } from 'buri';

Vue.use(Row).use(Col);
```

## Usage

### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.

```html
<buri-row>
  <buri-col span="8">span: 8</buri-col>
  <buri-col span="8">span: 8</buri-col>
  <buri-col span="8">span: 8</buri-col>
</buri-row>

<buri-row>
  <buri-col span="4">span: 4</buri-col>
  <buri-col span="10" offset="4">offset: 4, span: 10</buri-col>
  <buri-col span="6">span: 6</buri-col>
</buri-row>

<buri-row>
  <buri-col offset="12" span="12">offset: 12, span: 12</buri-col>
</buri-row>
```


### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<buri-row gutter="20">
  <buri-col span="8">span: 8</buri-col>
  <buri-col span="8">span: 8</buri-col>
  <buri-col span="8">span: 8</buri-col>
</buri-row>
```

### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<buri-row type="flex">
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
</buri-row>

<buri-row type="flex" justify="center">
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
</buri-row>

<buri-row type="flex" justify="end">
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
</buri-row>

<buri-row type="flex" justify="space-between">
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
</buri-row>

<buri-row type="flex" justify="space-around">
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
  <buri-col span="6">span: 6</buri-col>
</buri-row>
```

## API

### Row Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Layout type, can be set to `flex` | *string* | - |
| gutter | Grid spacing（px） | *string \| number* | - |
| tag | Custom element tag | *string* | `div` |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | *string* | `start` |
| align | Flex cross axis, be set to  center/bottom | *string* | `top` |

### Col Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| span | number of column the grid spans | *string \| number* | - |
| offset | number of spacing on the left side of the grid | *string \| number* | - |
| tag | Custom element tag | *string* | `div` |

### Row Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click row | event: Event |

### Col Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click col | event: Event |
