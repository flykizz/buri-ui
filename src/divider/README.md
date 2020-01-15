# Divider

### Install

``` javascript
import Vue from 'vue';
import { Divider } from 'buri';

Vue.use(Divider);
```

## Usage

### Basic Usage

```html
<buri-divider />
```

### With Text

```html
<buri-divider>Text</buri-divider>
```

### Content Position

```html
<buri-divider content-position="left">Text</buri-divider>
<buri-divider content-position="right">Text</buri-divider>
```

### Dashed

```html
<buri-divider dashed>Text</buri-divider>
```

### Custom Style

```html
<buri-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  Text
</buri-divider>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| dashed | Whether to use dashed border | *boolean* | `false` |
| hairline | Whether to use hairline | *boolean* | `true` |
| content-position | Content position，can be set to `left` `right` | *string* | `center` |

### Slots

| Name | Description |
|------|------|
| default | content |
