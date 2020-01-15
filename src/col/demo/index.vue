<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-row>
        <buri-col span="8">span: 8</buri-col>
        <buri-col span="8">span: 8</buri-col>
        <buri-col span="8">span: 8</buri-col>
      </buri-row>

      <buri-row>
        <buri-col span="4">span: 4</buri-col>
        <buri-col
          span="10"
          offset="4"
        >
          offset: 4, span: 10
        </buri-col>
      </buri-row>

      <buri-row>
        <buri-col
          offset="12"
          span="12"
        >
          offset: 12, span: 12
        </buri-col>
      </buri-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <buri-row gutter="20">
        <buri-col span="8">span: 8</buri-col>
        <buri-col span="8">span: 8</buri-col>
        <buri-col span="8">span: 8</buri-col>
      </buri-row>
    </demo-block>

    <demo-block
      v-if="!isWeapp"
      :title="$t('title3')"
    >
      <buri-row type="flex">
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
      </buri-row>

      <buri-row
        type="flex"
        justify="center"
      >
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
      </buri-row>

      <buri-row
        type="flex"
        justify="end"
      >
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
      </buri-row>

      <buri-row
        type="flex"
        justify="space-between"
      >
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
      </buri-row>

      <buri-row
        type="flex"
        justify="space-around"
      >
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
        <buri-col span="6">span: 6</buri-col>
      </buri-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局'
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  background: @white;

  .buri-doc-demo-block {
    padding: 0 @padding-md;
  }

  .buri-doc-demo-block__title {
    padding-left: 0;
  }

  .buri-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
