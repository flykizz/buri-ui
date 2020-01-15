<template>
  <demo-section>
    <buri-grid :column-num="2" :border="false">
      <buri-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('basicUsage') }}</h3>
        <buri-sidebar v-model="activeKey1">
          <buri-sidebar-item :title="$t('title')" />
          <buri-sidebar-item :title="$t('title')" />
          <buri-sidebar-item :title="$t('title')" />
        </buri-sidebar>
      </buri-grid-item>

      <buri-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('showInfo') }}</h3>
        <buri-sidebar v-model="activeKey2">
          <buri-sidebar-item :title="$t('title')" dot />
          <buri-sidebar-item :title="$t('title')" info="5" />
          <buri-sidebar-item :title="$t('title')" info="99+" />
        </buri-sidebar>
      </buri-grid-item>

      <buri-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('disabled') }}</h3>
        <buri-sidebar v-model="activeKey3">
          <buri-sidebar-item :title="$t('title')" />
          <buri-sidebar-item :title="$t('title')" disabled />
          <buri-sidebar-item :title="$t('title')" />
        </buri-sidebar>
      </buri-grid-item>

      <buri-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('changeEvent') }}</h3>
        <buri-sidebar v-model="activeKey4" @change="onChange">
          <buri-sidebar-item :title="$t('title') + 1" />
          <buri-sidebar-item :title="$t('title') + 2" />
          <buri-sidebar-item :title="$t('title') + 3" />
        </buri-sidebar>
      </buri-grid-item>
    </buri-grid>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名',
      showInfo: '提示信息',
      disabled: '禁用选项',
      changeEvent: '监听切换事件',
      selectTip: '你切换到了'
    },
    'en-US': {
      showInfo: 'Show Info',
      disabled: 'Disabled',
      changeEvent: 'Change Event',
      selectTip: 'You select '
    }
  },

  data() {
    return {
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0,
      activeKey4: 0
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: 'primary',
        message: `${this.$t('selectTip')} ${this.$t('title')}${index + 1}`
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sidebar {
  background-color: @white;

  .buri-sidebar {
    margin-left: @padding-md;
  }

  &-title {
    margin-bottom: 16px;
    color: @gray-6;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
