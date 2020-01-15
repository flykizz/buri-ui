<template>
  <buricollapse
    v-model="active"
    :border="false"
    class="mobile-nav"
  >
    <buricollapse-item
      class="mobile-nav__item"
      :title="group.groupName"
      :name="group.groupName"
    >
      <buriicon
        :name="group.icon"
        slot="right-icon"
        class="mobile-nav__icon"
      />
      <template v-for="(navItem, index) in group.list">
        <buricell
          v-if="!navItem.disabled"
          :key="index"
          :to="'/' + base + navItem.path"
          :title="navItem.title"
          is-link
        />
      </template>
    </buricollapse-item>
  </buricollapse>
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="less">
.mobile-nav {
  &__item {
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 1px 5px #ebedf0;
  }

  &__icon {
    font-size: 24px;

    img {
      width: 100%;
    }
  }

  .buricollapse-item__content {
    padding: 0;
  }

  .buricollapse-item__title {
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    border-radius: 2px;
  }
}
</style>
