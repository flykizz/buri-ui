<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-divider />
    </demo-block>

    <demo-block :title="$t('withText')">
      <buri-divider>
        {{ $t('text') }}
      </buri-divider>
    </demo-block>

    <demo-block :title="$t('contentPosition')">
      <buri-divider content-position="left">
        {{ $t('text') }}
      </buri-divider>

      <buri-divider content-position="right">
        {{ $t('text') }}
      </buri-divider>
    </demo-block>

    <demo-block :title="$t('dashed')">
      <buri-divider
        dashed
        :hairline="false"
      >
        {{ $t('text') }}
      </buri-divider>
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <buri-divider :style="{ borderColor: BLUE, color: BLUE, padding: '0 16px' }">
        {{ $t('text') }}
      </buri-divider>
    </demo-block>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      dashed: '虚线',
      withText: '展示文本',
      contentPosition: '内容位置',
      customStyle: '自定义样式'
    },
    'en-US': {
      text: 'Text',
      dashed: 'Dashed',
      withText: 'With Text',
      contentPosition: 'Content Position',
      customStyle: 'Custom Style'
    }
  },

  data() {
    return {
      BLUE
    };
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-divider {
  background-color: @white;

  .buri-doc-demo-block__title {
    padding-top: @padding-md;
  }
}
</style>
