<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-tabbar v-model="active">
        <buri-tabbar-item icon="home-o">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="search">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="friends-o">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="setting-o">{{ $t('tab') }}</buri-tabbar-item>
      </buri-tabbar>
    </demo-block>

    <demo-block :title="$t('matchByName')">
      <buri-tabbar v-model="activeName">
        <buri-tabbar-item name="home" icon="home-o">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item name="search" icon="search">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item name="friends" icon="friends-o">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item name="setting" icon="setting-o">{{ $t('tab') }}</buri-tabbar-item>
      </buri-tabbar>
    </demo-block>

    <demo-block :title="$t('badge')">
      <buri-tabbar v-model="active2">
        <buri-tabbar-item icon="home-o">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="search" dot>{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="friends-o" info="5">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="setting-o" info="20">{{ $t('tab') }}</buri-tabbar-item>
      </buri-tabbar>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <buri-tabbar v-model="active3">
        <buri-tabbar-item info="3">
          <span>{{ $t('custom') }}</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive">
          </template>
        </buri-tabbar-item>
        <buri-tabbar-item icon="search">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="setting-o">{{ $t('tab') }}</buri-tabbar-item>
      </buri-tabbar>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <buri-tabbar v-model="active4" active-color="#07c160" inactive-color="#000">
        <buri-tabbar-item icon="home-o">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="search">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="friends-o">{{ $t('tab') }}</buri-tabbar-item>
        <buri-tabbar-item icon="setting-o">{{ $t('tab') }}</buri-tabbar-item>
      </buri-tabbar>
    </demo-block>

    <demo-block :title="$t('switchEvent')">
      <buri-tabbar v-model="active5" @change="onChange">
        <buri-tabbar-item icon="home-o">{{ $t('tab') + 1 }}</buri-tabbar-item>
        <buri-tabbar-item icon="search">{{ $t('tab') + 2 }}</buri-tabbar-item>
        <buri-tabbar-item icon="friends-o">{{ $t('tab') + 3 }}</buri-tabbar-item>
        <buri-tabbar-item icon="setting-o">{{ $t('tab') + 4 }}</buri-tabbar-item>
      </buri-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      badge: '提示信息',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      matchByName: '通过名称匹配',
      switchEvent: '监听切换事件',
      selectTip: '你切换到了'
    },
    'en-US': {
      badge: 'Show Badge',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      matchByName: 'Match by name',
      switchEvent: 'Change Event',
      selectTip: 'You select '
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      activeName: 'home',
      icon: {
        active: 'https://img.yzcdn.cn/buri/user-active.png',
        inactive: 'https://img.yzcdn.cn/buri/user-inactive.png'
      }
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: 'primary',
        message: `${this.$t('selectTip')} ${this.$t('tab')}${index + 1}`
      });
    }
  }
};
</script>

<style lang="less">
.demo-tabbar {
  .buri-tabbar {
    position: relative;
  }
}
</style>
