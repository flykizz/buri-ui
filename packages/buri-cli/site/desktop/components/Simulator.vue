<template>
  <div :class="['buri-doc-simulator', { 'buri-doc-simulator-fixed': isFixed }]">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'buri-doc-simulator',

  props: {
    src: String
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight
    };
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px'
      };
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  }
};
</script>

<style lang="less">
@import '../../common/style/var';

.buri-doc-simulator {
  position: absolute;
  top: @buri-doc-padding + @buri-doc-header-top-height;
  right: @buri-doc-padding;
  z-index: 1;
  box-sizing: border-box;
  width: @buri-doc-simulator-width;
  min-width: @buri-doc-simulator-width;
  overflow: hidden;
  background: #fafafa;
  border-radius: @buri-doc-border-radius;
  box-shadow: #ebedf0 0 4px 12px;

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: @buri-doc-row-max-width) {
    right: 50%;
    margin-right: -@buri-doc-row-max-width / 2 + 40px;
  }

  &-fixed {
    position: fixed;
    top: @buri-doc-padding;
  }

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
