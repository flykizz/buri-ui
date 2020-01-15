# Panel

### Install

``` javascript
import Vue from 'vue';
import { Panel } from 'buri';

Vue.use(Panel);
```

## Usage

### Basic Usage

```html
<buri-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</buri-panel>
```

### Adburiced Usage

```html
<buri-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <div slot="footer">
    <buri-button size="small">Button</buri-button>
    <buri-button size="small" type="danger">Button</buri-button>
  </div>
</buri-panel>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | *string* | - |
| title | Title | *string* | - |
| desc | Description | *string* | - |
| status | Status | *string* | - |

### Slots

| Name | Description |
|------|------|
| default | Default slot |
| header | Custom header |
| footer | Custom footer |
