<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-sticky>
        <buri-button type="primary" style="margin-left: 15px;">{{ $t('basicUsage') }}</buri-button>
      </buri-sticky>
    </demo-block>

    <demo-block :title="$t('offsetTop')">
      <buri-sticky :offset-top="50">
        <buri-button type="info" style="margin-left: 115px;">{{ $t('offsetTop') }}</buri-button>
      </buri-sticky>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="$t('setContainer')">
      <div ref="container" style="height: 150px; background-color: #fff;">
        <buri-sticky :container="container">
          <buri-button type="warning" style="margin-left: 215px;">{{ $t('setContainer') }}</buri-button>
        </buri-sticky>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      offsetTop: '吸顶距离',
      setContainer: '指定容器'
    },
    'en-US': {
      offsetTop: 'Offset Top',
      setContainer: 'Set Container'
    }
  },

  data() {
    return {
      container: null
    };
  },

  mounted() {
    this.container = this.$refs.container;
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sticky {
  height: 200vh;

  .buri-button {
    margin-left: @padding-md;
  }
}
</style>
