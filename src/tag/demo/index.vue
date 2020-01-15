<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-tag>{{ $t('tag') }}</buri-tag>
      <buri-tag type="primary">{{ $t('tag') }}</buri-tag>
      <buri-tag type="success">{{ $t('tag') }}</buri-tag>
      <buri-tag type="danger">{{ $t('tag') }}</buri-tag>
      <buri-tag type="warning">{{ $t('tag') }}</buri-tag>
    </demo-block>

    <demo-block :title="$t('round')">
      <buri-tag round>{{ $t('tag') }}</buri-tag>
      <buri-tag round type="primary">{{ $t('tag') }}</buri-tag>
      <buri-tag round type="success">{{ $t('tag') }}</buri-tag>
      <buri-tag round type="danger">{{ $t('tag') }}</buri-tag>
      <buri-tag round type="warning">{{ $t('tag') }}</buri-tag>
    </demo-block>

    <demo-block :title="$t('mark')">
      <buri-tag mark>{{ $t('tag') }}</buri-tag>
      <buri-tag mark type="primary">{{ $t('tag') }}</buri-tag>
      <buri-tag mark type="success">{{ $t('tag') }}</buri-tag>
      <buri-tag mark type="danger">{{ $t('tag') }}</buri-tag>
      <buri-tag mark type="warning">{{ $t('tag') }}</buri-tag>
    </demo-block>

    <demo-block :title="$t('plain')">
      <buri-tag plain>{{ $t('tag') }}</buri-tag>
      <buri-tag plain type="primary">{{ $t('tag') }}</buri-tag>
      <buri-tag plain type="success">{{ $t('tag') }}</buri-tag>
      <buri-tag plain type="danger">{{ $t('tag') }}</buri-tag>
      <buri-tag plain type="warning">{{ $t('tag') }}</buri-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <buri-tag color="#f2826a">{{ $t('tag') }}</buri-tag>
      <buri-tag color="#f2826a" plain>{{ $t('tag') }}</buri-tag>
      <buri-tag color="#7232dd">{{ $t('tag') }}</buri-tag>
      <buri-tag color="#7232dd" plain>{{ $t('tag') }}</buri-tag>
      <buri-tag color="#ffe1e1" text-color="#ad0000">{{ $t('tag') }}</buri-tag>
    </demo-block>

    <demo-block :title="$t('customSize')">
      <buri-tag type="success">{{ $t('tag') }}</buri-tag>
      <buri-tag type="success" size="medium">{{ $t('tag') }}</buri-tag>
      <buri-tag type="success" size="large">{{ $t('tag') }}</buri-tag>
    </demo-block>

    <demo-block :title="$t('closeable')">
      <buri-tag
        v-if="show.primary"
        size="medium"
        closeable
        type="primary"
        @close="close('primary')"
      >
        {{ $t('tag') }}
      </buri-tag>
      <buri-tag
        v-if="show.success"
        size="medium"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ $t('tag') }}
      </buri-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小'
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closeable: 'Closeable',
      customColor: 'Custom Color',
      customSize: 'Custom Size'
    }
  },

  data() {
    return {
      show: {
        primary: true,
        success: true
      }
    };
  },

  methods: {
    close(tag) {
      this.show[tag] = false;
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .buri-tag + .buri-tag {
    margin-left: @padding-xs;
  }

  .buri-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
