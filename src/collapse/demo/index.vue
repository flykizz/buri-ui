<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-collapse v-model="active1">
        <buri-collapse-item :title="$t('title') + 1">{{ $t('text') }}</buri-collapse-item>
        <buri-collapse-item :title="$t('title') + 2">{{ $t('text') }}</buri-collapse-item>
        <buri-collapse-item
          :title="$t('title') + 3"
          disabled
        >
          {{ $t('text') }}
        </buri-collapse-item>
      </buri-collapse>
    </demo-block>

    <demo-block :title="$t('accordion')">
      <buri-collapse
        v-model="active2"
        accordion
      >
        <buri-collapse-item :title="$t('title') + 1">{{ $t('text') }}</buri-collapse-item>
        <buri-collapse-item :title="$t('title') + 2">{{ $t('text') }}</buri-collapse-item>
        <buri-collapse-item :title="$t('title') + 3">{{ $t('text') }}</buri-collapse-item>
      </buri-collapse>
    </demo-block>

    <demo-block :title="$t('titleSlot')">
      <buri-collapse v-model="active3">
        <buri-collapse-item>
          <template #title>
            {{ $t('title') + 1 }}<buri-icon name="question-o" />
          </template>
          {{ $t('text') }}
        </buri-collapse-item>
        <buri-collapse-item
          :title="$t('title') + 2"
          :value="$t('content')"
          icon="shop-o"
        >
          {{ $t('text') }}
        </buri-collapse-item>
      </buri-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      text: '代码是写出来给人看的，附带能在机器上运行'
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      text: 'Content'
    }
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-collapse {
  .buri-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
