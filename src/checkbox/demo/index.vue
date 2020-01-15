<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-checkbox v-model="checkbox1">{{ $t('checkbox') }}</buri-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <buri-checkbox :value="false" disabled>
        {{ $t('checkbox') }}
      </buri-checkbox>
      <buri-checkbox :value="true" disabled>
        {{ $t('checkbox') }}
      </buri-checkbox>
    </demo-block>

    <demo-block :title="$t('disabledLabelClick')">
      <buri-checkbox v-model="checkboxLabel" label-disabled>
        {{ $t('checkbox') }}
      </buri-checkbox>
    </demo-block>

    <demo-block :title="$t('customShape')">
      <buri-checkbox v-model="checkboxShape" shape="square">
        {{ $t('customColor') }}
      </buri-checkbox>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <buri-checkbox v-model="checkbox2" checked-color="#07c160">
        {{ $t('customColor') }}
      </buri-checkbox>
    </demo-block>

    <demo-block :title="$t('customIconSize')">
      <buri-checkbox v-model="checboxIcon" icon-size="24px">
        {{ $t('customIconSize') }}
      </buri-checkbox>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <buri-checkbox v-model="checkbox3">
        {{ $t('customIcon') }}
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon">
        </template>
      </buri-checkbox>
    </demo-block>

    <demo-block :title="$t('title3')">
      <buri-checkbox-group v-model="result">
        <buri-checkbox name="a">{{ $t('checkbox') }} a</buri-checkbox>
        <buri-checkbox name="b">{{ $t('checkbox') }} b</buri-checkbox>
        <buri-checkbox name="c">{{ $t('checkbox') }} c</buri-checkbox>
      </buri-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <buri-checkbox-group v-model="result2" :max="2">
        <buri-checkbox name="a">{{ $t('checkbox') }} a</buri-checkbox>
        <buri-checkbox name="b">{{ $t('checkbox') }} b</buri-checkbox>
        <buri-checkbox name="c">{{ $t('checkbox') }} c</buri-checkbox>
      </buri-checkbox-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="$t('toggleAll')">
      <buri-checkbox-group v-model="checkAllResult" ref="group">
        <buri-checkbox name="a">{{ $t('checkbox') }} a</buri-checkbox>
        <buri-checkbox name="b">{{ $t('checkbox') }} b</buri-checkbox>
        <buri-checkbox name="c">{{ $t('checkbox') }} c</buri-checkbox>
      </buri-checkbox-group>

      <div class="demo-checkbox-buttons">
        <buri-button type="primary" @click="checkAll">{{ $t('checkAll') }}</buri-button>
        <buri-button type="info" @click="toggleAll">{{ $t('inverse') }}</buri-button>
      </div>
    </demo-block>

    <demo-block :title="$t('title5')">
      <buri-checkbox-group v-model="result3">
        <buri-cell-group>
          <buri-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="$t('checkbox') + item"
            @click="toggle(index)"
          >
            <template #right-icon>
              <buri-checkbox ref="checkboxes" :name="item" />
            </template>
          </buri-cell>
        </buri-cell-group>
      </buri-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      customIconSize: '自定义大小',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      title3: '复选框组',
      title4: '设置最大可选数',
      title5: '搭配单元格组件使用',
      toggleAll: '全选与反选',
      checkAll: '全选',
      inverse: '反选',
      disabledLabelClick: '禁用文本点击'
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customIconSize: 'Custom Icon Size',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell',
      toggleAll: 'Toggle All',
      checkAll: 'Check All',
      inverse: 'Inverse',
      disabledLabelClick: 'Disable the click event of label'
    }
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checboxIcon: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      checkAllResult: [],
      activeIcon: 'https://img.yzcdn.cn/buri/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/buri/user-inactive.png'
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },

    checkAll() {
      this.$refs.group.toggleAll(true);
    },

    toggleAll() {
      this.$refs.group.toggleAll();
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-checkbox {
  background: @white;

  .buri-checkbox {
    margin: 10px 0 0 20px;
  }

  .buri-cell {
    .buri-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: @padding-md;

    .buri-button {
      margin-left: @padding-md;
    }
  }
}
</style>
