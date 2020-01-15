# Loading

### Install

``` javascript
import Vue from 'vue';
import { Loading } from 'buri';

Vue.use(Loading);
```

## Usage

### Type

```html
<buri-loading />
<buri-loading type="spinner" />
```

### Color

```html
<buri-loading color="#1989fa" />
<buri-loading type="spinner" color="#1989fa" />
```

### Text

```html
<buri-loading size="24px">Loading...</buri-loading>
```

### Vertical

```html
<buri-loading size="24px" vertical>Loading...</buri-loading>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| color | Loading color | *string* | `#c9c9c9` |
| type | Can be set to `spinner` | *string* | `circular` |
| size | Icon size | *string \| number* | `30px` |
| text-size | Text font size | *string \| number* | `14px` |
| vertical | Whether to arrange icons and text content vertically | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Loading text |
