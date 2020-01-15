# Icon

### Install

``` javascript
import Vue from 'vue';
import { Icon } from 'buri';

Vue.use(Icon);
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<buri-icon name="chat-o" />
<buri-icon name="https://b.yzcdn.cn/buri/icon-demo-1126.png" />
```

### Show Info

Use `dot` prop, a small red dot will be displayed in the upper right corner of the icon. 

Use `info` prop, the info will be displayed in the upper right corner of the icon.

```html
<buri-icon name="chat-o" dot />
<buri-icon name="chat-o" info="9" />
<buri-icon name="chat-o" info="99+" />
```

### Icon Color

Use `color` prop to set icon color

```html
<buri-icon name="chat-o" color="#1989fa" />
<buri-icon name="chat-o" color="#07c160" />
```

### Icon Size

Use `size` prop to set icon size

```html
<buri-icon name="chat-o" size="40" />
<buri-icon name="chat-o" size="3rem" />
```

### Use local font file

Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'buri/lib/icon/local.css';
```

### Add custom iconfont

```css
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<buri-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Icon name or URL | *string* | `''` |
| dot `v2.2.1` | Whether to show red dot | *boolean* | `false` |
| info | Content of the badge | *string \| number* | `''` |
| color | Icon color | *string* | `inherit` |
| size | Icon size | *string \| number* | `inherit` |
| class-prefix | ClassName prefix | *string* | `buri-icon` |
| tag | HTML Tag | *string* | `i` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click icon | event: Event |
