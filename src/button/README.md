# Button

### Install

``` javascript
import Vue from 'vue';
import { Button } from 'buri';

Vue.use(Button);
```

## Usage

### Type

```html
<buri-button type="default">Default</buri-button>
<buri-button type="primary">Primary</buri-button>
<buri-button type="info">Info</buri-button>
<buri-button type="danger">Danger</buri-button>
<buri-button type="warning">Warning</buri-button>
```

### Plain

```html
<buri-button plain type="primary">Primary</buri-button>
<buri-button plain type="info">Danger</buri-button>
```

### Hairline

```html
<buri-button plain hairline type="primary">Hairline</buri-button>
<buri-button plain hairline type="info">Hairline</buri-button>
```

### Disabled

```html
<buri-button disabled type="primary">Diabled</buri-button>
<buri-button disabled type="info">Diabled</buri-button>
```

### Loading

```html 
<buri-button loading type="primary" />
<buri-button loading type="primary" loading-type="spinner" />
<buri-button loading type="info" loading-text="Loading..." />
```

### Shape

```html 
<buri-button square type="primary">Square</buri-button>
<buri-button round type="info">Round</buri-button>
```

### Icon

```html 
<buri-button icon="star-o" type="primary" />
<buri-button icon="star-o" type="primary">Button</buri-button>
<buri-button icon="https://img.yzcdn.cn/buri/logo.png" type="info">Button</buri-button>
```

### Size

```html 
<buri-button type="primary" size="large">Large</buri-button>
<buri-button type="primary" size="normal">Normal</buri-button>
<buri-button type="primary" size="small">Small</buri-button>
<buri-button type="primary" size="mini">Mini</buri-button>
```

### Route

```html
<buri-button type="primary" url="/buri/mobile.html">URL</buri-button>
<buri-button type="primary" to="index">Vue Router</buri-button>
```

### Custom Color

```html
<buri-button color="#7232dd">Pure</buri-button>
<buri-button color="#7232dd" plain>Pure</buri-button>
<buri-button color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient</buri-button>
```

### Block Element
```html
<buri-button type="primary" block>Block Element</buri-button>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | *string* | `default` |
| size | Can be set to `large` `small` `mini` | *string* | `normal` |
| text | Text | *string* | - |
| color `v2.1.8` | Color, support linear-gradient | *string* | - |
| icon | Left Icon | *string* | - |
| tag | HTML Tag | *string* | `button` |
| native-type | Native Type Attribute | *string* | `''` |
| plain | Whether to be plain button | *boolean* | `false` |
| block | Whether to set display block | *boolean* | `false` |
| round | Whether to be round button | *boolean* | `false` |
| square | Whether to be square button | *boolean* | `false` |
| disabled | Whether to disable button | *boolean* | `false` |
| loading | Whether show loading status | *boolean* | `false` |
| loading-text | Loading text | *string* | - |
| loading-type | Loading type, can be set to `spinner` | *string* | `circular` |
| loading-size | Loading icon size | *string* | `20px` |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
| touchstart | Triggered when touch start | event: TouchEvent |
