<template>
  <div class="buri-doc-demo-block">
    <h2 class="buri-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="less">
@import '../../common/style/var';

.buri-doc-demo-block {
  &__title {
    margin: 0;
    padding: 32px 16px 16px;
    color: @buri-doc-text-light-blue;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  &:first-of-type {
    .buri-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
