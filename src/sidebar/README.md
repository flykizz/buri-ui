# Sidebar

### Install

``` javascript
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'buri';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## Usage

### Basic Usage

```html
<buri-sidebar v-model="activeKey">
  <buri-sidebar-item title="Title" />
  <buri-sidebar-item title="Title" />
  <buri-sidebar-item title="Title" />
</buri-sidebar>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
```

### Show Info

```html
<buri-sidebar v-model="activeKey">
  <buri-sidebar-item title="Title" dot />
  <buri-sidebar-item title="Title" info="5" />
  <buri-sidebar-item title="Title" info="99+" />
</buri-sidebar>
```

### Disabled

```html
<buri-sidebar v-model="activeKey">
  <buri-sidebar-item title="Title" />
  <buri-sidebar-item title="Title" disabled />
  <buri-sidebar-item title="Title" />
</buri-sidebar>
```

### Change Event

```html
<buri-sidebar v-model="activeKey" @change="onChange">
  <buri-sidebar-item title="Title1" />
  <buri-sidebar-item title="Title2" />
  <buri-sidebar-item title="Title3" />
</buri-sidebar>
```

```js
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    }
  }
}
```

## API

### Sidebar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of chosen item | *string \| number* | `0` |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | *string* | `''` |
| dot `v2.2.1` | Whether to show red dot | *boolean* | `false` |
| info | Content of the badge | *string \| number* | `''` |
| disabled `v2.2.0` | Whether to be disabled | *boolean* | `false` |
| url | Link | *string* | - |
| to `v2.0.4` | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace `v2.0.4` | If true, the navigation will not leave a history record | *boolean* | `false` |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | index: index of current item |
