<template>
  <div class="buri-doc-block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'buri-doc-block'
};
</script>

<style lang="less">
@import '../style/variable';

.buri-doc-block {
  display: flex;
  margin-bottom: 20px;

  .highlight {
    flex: 1;
    box-sizing: border-box;

    pre {
      word-wrap: break-word;
    }
  }
}
</style>
