<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <buri-loading />
      <buri-loading type="spinner" />
    </demo-block>

    <demo-block :title="$t('color')">
      <buri-loading color="#1989fa" />
      <buri-loading
        type="spinner"
        color="#1989fa"
      />
    </demo-block>

    <demo-block :title="$t('text')">
      <buri-loading size="24px">
        {{ $t('loading') }}
      </buri-loading>
    </demo-block>

    <demo-block :title="$t('vertical')">
      <buri-loading
        size="24px"
        vertical
      >
        {{ $t('loading') }}
      </buri-loading>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '加载类型',
      color: '自定义颜色',
      text: '加载文案',
      vertical: '垂直排列'
    },
    'en-US': {
      type: 'Type',
      color: 'Color',
      text: 'Text',
      vertical: 'Vertical'
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-loading {
  background: @white;

  .buri-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
