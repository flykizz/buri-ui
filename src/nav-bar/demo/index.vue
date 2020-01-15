<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('adburicedUsage')">
      <buri-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        left-arrow
      >
        <template #right>
          <buri-icon name="search" />
        </template>
      </buri-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$toast(this.$t('back'));
    },
    onClickRight() {
      this.$toast(this.$t('button'));
    }
  }
};
</script>
