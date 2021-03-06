# Tab

### Install

``` javascript
import Vue from 'vue';
import { Tab, Tabs } from 'buri';

Vue.use(Tab).use(Tabs);
```

## Usage

### Basic Usage

The first tab is actived by default, you can set `v-model` to active specified tab.

```html
<buri-tabs v-model="active">
  <buri-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </buri-tab>
</buri-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

### Match By Name

```html
<buri-tabs v-model="activeName">
  <buri-tab title="tab 1" name="a">content of tab 1</buri-tab>
  <buri-tab title="tab 2" name="b">content of tab 2</buri-tab>
  <buri-tab title="tab 3" name="c">content of tab 3</buri-tab>
</buri-tabs>
```

```js
export default {
  data() {
    return {
      activeName: 'a'
    };
  }
}
```

### Swipe Tabs

By default more than 4 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<buri-tabs>
  <buri-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </buri-tab>
</buri-tabs>
```

### Disabled Tab

You can set `disabled` attribute on the corresponding `buri-tab`. 

```html
<buri-tabs @disabled="onClickDisabled">
  <buri-tab v-for="index in 3" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </buri-tab>
</buri-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(name, title) {
      this.$toast(title + ' is disabled');
    }
  }
};
```

### Card Style

Tabs styled as cards.

```html
<buri-tabs type="card">
  <buri-tab v-for="index in 3" :title="'tab' + index">
    content of tab {{ index }}
  </buri-tab>
</buri-tabs>
```

### Click Event

```html
<buri-tabs @click="onClick">
  <buri-tab v-for="index in 2" :title="'tab' + index">
    content of tab {{ index }}
  </buri-tab>
</buri-tabs>
```

```javascript
export default {
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  }
};
```

### Sticky

In sticky mode, the tab will be fixed to top when scroll to top

```html
<buri-tabs v-model="active" sticky>
  <buri-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </buri-tab>
</buri-tabs>
```

### Custom title

Use title slot to custom tab title

```html
<buri-tabs v-model="active">
  <buri-tab v-for="index in 2">
    <div slot="title">
      <buri-icon name="more-o" />tab
    </div>
    content {{ index }}
  </buri-tab>
</buri-tabs>
```

### Switch Animation

Use `animated` props to change tabs with animation

```html
<buri-tabs v-model="active" animated>
  <buri-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </buri-tab>
</buri-tabs>
```

### Swipeable

In swipeable mode, you can switch tabs with swipe gestrue in the content

```html
<buri-tabs v-model="active" swipeable>
  <buri-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </buri-tab>
</buri-tabs>
```

### Scrollspy

In scrollspy mode, the list of content will be tiled

```html
<buri-tabs v-model="active" scrollspy sticky>
  <buri-tab v-for="index in 8" :title="'tab ' + index">
    content {{ index }}
  </buri-tab>
</buri-tabs>
```

## API

### Tabs Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of active tab | *string \| number* | `0` |
| type | Can be set to `line` `card` | *string* | `line` |
| color | Tab color | *string* | `#ee0a24` |
| duration | Toggle tab's animation time | *number* | `0.3` | - |
| background | Background color | *string* | `white` |
| line-width | Width of tab line | *string \| number* | Width of active tab |
| line-height | Height of tab line | *string \| number* | `3px` |
| animated | Whether to change tabs with animation | *boolean* | `false` |
| border | Whether to show border when `type="line"` | *boolean* | `true` |
| ellipsis | Whether to ellipsis too long title | *boolean* | `true` |
| sticky | Whether to use sticky mode | *boolean* | `false` |
| swipeable | Whether to switch tabs with swipe gestrue in the content | *boolean* | `false` |
| lazy-render | Whether to enable tab content lazy render | *boolean* | `true` |
| scrollspy `v2.3.0` | Whether to use scrollspy mode | *boolean* | `false` |
| offset-top | Offset top when use sticky mode | *number* | `0` |
| swipe-threshold | Set swipe tabs threshold | *number* | `4` | - |
| title-active-color | Title active color | *string* | - |
| title-inactive-color | Title inactive color | *string* | - |

### Tab Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Title | *string* | - |
| disabled | Whether to disable tab | *boolean* | `false` |
| dot `v2.3.0` | Whether to show red dot on the title | *boolean* | `false` |
| info `v2.3.0` | Content of the badge on the title | *string \| number* | - |
| name `v2.0.6` | Identifier | *string \| number* | Index of tab |
| url `v2.2.1` | Link | *string* | - |
| to `v2.2.1` | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace `v2.2.1` | If true, the navigation will not leave a history record | *boolean* | `false` |
| title-style `v2.2.14` | Custom title style | *any*  | - |

### Tabs Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click tab | name，title |
| change | Triggered when active tab changed | name，title |
| disabled | Triggered when click disabled tab | name，title |
| rendered `v2.3.0` | Triggered when content first rendered in lazy-render mode | name，title |
| scroll | Triggered when tab scroll in sticky mode | object: { scrollTop, isFixed } |

### Tabs Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Tabs instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| resize | Resize Tabs when container element resized | - | void |

### Tabs Slots

| Name | Description |
|------|------|
| nav-left | Custom nav left content |
| nav-right | Custom nav right content |

### Tab Slots

| Name | Description |
|------|------|
| default | Content of tab |
| title | Custom tab title |
