<template>
  <div
    class="buri-doc-container buri-doc-row"
    :class="{ 'buri-doc-container--with-simulator': hasSimulator }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'buri-doc-container',

  props: {
    hasSimulator: Boolean
  }
};
</script>

<style lang="less">
@import '../../common/style/var';

.buri-doc-container {
  box-sizing: border-box;
  padding-left: @buri-doc-nav-width;
  overflow: hidden;

  &--with-simulator {
    padding-right: @buri-doc-simulator-width + @buri-doc-padding;
  }
}
</style>
