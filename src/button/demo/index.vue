<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <buri-button type="default">{{ $t('default') }}</buri-button>
        <buri-button type="primary">{{ $t('primary') }}</buri-button>
        <buri-button type="info">{{ $t('info') }}</buri-button>
      </div>
      <buri-button type="danger">{{ $t('danger') }}</buri-button>
      <buri-button type="warning">{{ $t('warning') }}</buri-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <buri-button plain type="primary" :text="$t('plain')" />
      <buri-button plain type="info" :text="$t('plain')" />
    </demo-block>

    <demo-block :title="$t('hairline')">
      <buri-button plain hairline type="primary" :text="$t('hairlineButton')" />
      <buri-button plain hairline type="info" :text="$t('hairlineButton')" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <buri-button disabled type="primary" :text="$t('disabled')" />
      <buri-button disabled type="info" :text="$t('disabled')" />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <buri-button loading type="primary" />
      <buri-button loading type="primary" loading-type="spinner" />
      <buri-button loading :loading-text="$t('loadingText')" type="info" />
    </demo-block>

    <demo-block :title="$t('shape')">
      <buri-button type="primary" square :text="$t('square')" />
      <buri-button type="info" round :text="$t('round')" />
    </demo-block>

    <demo-block :title="$t('icon')">
      <buri-button type="primary" icon="star-o" />
      <buri-button type="primary" icon="star-o" :text="$t('button')" />
      <buri-button
        plain
        type="primary"
        icon="https://img.yzcdn.cn/buri/logo.png"
        :text="$t('button')"
      />
    </demo-block>

    <demo-block :title="$t('size')">
      <buri-button type="primary" size="large">{{ $t('large') }}</buri-button>
      <buri-button type="primary" size="normal">{{ $t('normal') }}</buri-button>
      <buri-button type="primary" size="small">{{ $t('small') }}</buri-button>
      <buri-button type="primary" size="mini">{{ $t('mini') }}</buri-button>
    </demo-block>

    <demo-block :title="$t('router')">
      <buri-button :text="$t('urlRoute')" type="primary" url="/buri/mobile.html" />
      <buri-button :text="$t('vueRoute')" type="primary" to="index" />
    </demo-block>

    <demo-block :title="$t('customColor')">
      <buri-button color="#7232dd" :text="$t('pure')" />
      <buri-button plain color="#7232dd" :text="$t('pure')" />
      <buri-button color="linear-gradient(to right, #4bb0ff, #6149f6)" :text="$t('gradient')" />
    </demo-block>

    <demo-block :title="$t('blockElement')">
      <div class="demo-button-row">
        <buri-button type="primary">{{ $t('normal') }}</buri-button>
      </div>
      <buri-button type="primary" block>{{ $t('blockElement') }}</buri-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      customColor: '自定义颜色',
      pure: '单色按钮',
      gradient: '渐变色按钮',
      blockElement: '块级元素'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      customColor: 'Custom Color',
      pure: 'Pure',
      gradient: 'Gradient',
      blockElement: 'Block Element'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-button {
  background: @white;

  .buri-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .buri-doc-demo-block {
    padding: 0 @padding-md;
  }

  .buri-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
