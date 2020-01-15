# Tabbar

### Install

``` javascript
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'buri';

Vue.use(Tabbar).use(TabbarItem);
```

## Usage

### Basic Usage

```html
<buri-tabbar v-model="active">
  <buri-tabbar-item icon="home-o">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="search">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="friends-o">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="setting-o">Tab</buri-tabbar-item>
</buri-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```

### Match by name

```html
<buri-tabbar v-model="active">
  <buri-tabbar-item name="home" icon="home-o">Tab</buri-tabbar-item>
  <buri-tabbar-item name="search" icon="search">Tab</buri-tabbar-item>
  <buri-tabbar-item name="friends" icon="friends-o">Tab</buri-tabbar-item>
  <buri-tabbar-item name="setting" icon="setting-o">Tab</buri-tabbar-item>
</buri-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 'home'
    }
  }
}
```

### Show Badge

```html
<buri-tabbar v-model="active">
  <buri-tabbar-item icon="home-o">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="search" dot>Tab</buri-tabbar-item>
  <buri-tabbar-item icon="friends-o" info="5">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="setting-o" info="20">Tab</buri-tabbar-item>
</buri-tabbar>
```

### Custom Icon

Use `icon` slot to custom icon

```html
<buri-tabbar v-model="active">
  <buri-tabbar-item info="3">
    <span>Custom</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.inactive"
    >
  </buri-tabbar-item>
  <buri-tabbar-item icon="search">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="setting-o">Tab</buri-tabbar-item>
</buri-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/buri/user-active.png',
        inactive: 'https://img.yzcdn.cn/buri/user-inactive.png'
      }
    }
  }
}
```

### Custom Color

```html
<buri-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000"
>
  <buri-tabbar-item icon="home-o">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="search">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="freinds-o">Tab</buri-tabbar-item>
  <buri-tabbar-item icon="setting-o">Tab</buri-tabbar-item>
</buri-tabbar>
```


### Change Event

```html
<buri-tabbar v-model="active" @change="onChange">
  <buri-tabbar-item icon="home-o">Tab1</buri-tabbar-item>
  <buri-tabbar-item icon="search">Tab2</buri-tabbar-item>
  <buri-tabbar-item icon="freinds-o">Tab3</buri-tabbar-item>
  <buri-tabbar-item icon="setting-o">Tab4</buri-tabbar-item>
</buri-tabbar>
```

```js
export default {
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    }
  }
}
```

### Route Mode

```html
<router-view />

<buri-tabbar route>
  <buri-tabbar-item
    replace
    to="/home"
    icon="home-o"
  >
    Tab
  </buri-tabbar-item>
  <buri-tabbar-item
    replace
    to="/search"
    icon="search"
  >
    Tab
  </buri-tabbar-item>
</buri-tabbar>
```

## API

### Tabbar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Identifier of current tab | *string \| number* | `0` |
| fixed | Whether to fixed bottom | *boolean* | `true` |
| border | Whether to show border | *boolean* | `true` |
| z-index | Z-index | *number* | `1` |
| active-color | Color of active tab item | *string* | `#1989fa` |
| inactive-color | Color of inactive tab item | *string* | `#7d7e80` |
| route | Whether to enable route mode | *boolean* | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `false` |

### Tabbar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when change active tab | active: index of current tab |

### TabbarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Identifier | *string \| number* | Item index |
| icon | Icon name | *string* | - |
| dot | Whether to show red dot | *boolean* | - |
| info | Content of the badge | *string \| number* | - |
| url | Link | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### TabbarItem Slots

| Name | Description | SlotProps |
|------|------|------|
| icon | Custom icon | active |
