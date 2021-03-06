# Progress

### Install

``` javascript
import Vue from 'vue';
import { Progress } from 'buri';

Vue.use(Progress);
```

## Usage

### Basic Usage

Use 'percentage' prop to set current progress

```html
<buri-progress :percentage="50" />
```

### Stroke Width

```html
<buri-progress :percentage="50" stroke-width="8" />
```

### Inactive

```html
<buri-progress inactive :percentage="50" />
```


### Custom Style

Use `pivot-text` to custom text，use `color` to custom bar color

```html
<buri-progress
  pivot-text="Orange"
  color="#f2826a"
  :percentage="25"
/>

<buri-progress
  pivot-text="Red"
  color="#ee0a24"
  :percentage="50"
/>

<buri-progress
  :percentage="75"
  pivot-text="Purple"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| inactive | Whether to be gray | *boolean* | `false` |
| percentage | Percentage | *number* | `0` |
| stroke-width `v2.2.1` | Stroke width | *string \| number* | `4px` |
| show-pivot | Whether to show text | *boolean* | `true` |
| color | Color | *string* | `#1989fa` |
| text-color | Text color | *string* | `#fff` |
| track-color `v2.2.9` | Track color | *string* | `#e5e5e5` |
| pivot-text | Text | *string* | percentage |
| pivot-color | Text background color | *string* | inherit progress color |
