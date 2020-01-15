<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-grid>
        <buri-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="$t('text')" />
      </buri-grid>
    </demo-block>

    <demo-block :title="$t('columnNum')">
      <buri-grid :column-num="3">
        <buri-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="$t('text')" />
      </buri-grid>
    </demo-block>

    <demo-block :title="$t('customContent')">
      <buri-grid :border="false" :column-num="3">
        <buri-grid-item>
          <buri-image fit="contain" src="https://img.yzcdn.cn/buri/apple-1.jpg" />
        </buri-grid-item>
        <buri-grid-item>
          <buri-image fit="contain" src="https://img.yzcdn.cn/buri/apple-2.jpg" />
        </buri-grid-item>
        <buri-grid-item>
          <buri-image fit="contain" src="https://img.yzcdn.cn/buri/apple-3.jpg" />
        </buri-grid-item>
      </buri-grid>
    </demo-block>

    <demo-block :title="$t('square')">
      <buri-grid square>
        <buri-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="$t('text')" />
      </buri-grid>
    </demo-block>

    <demo-block :title="$t('gutter')">
      <buri-grid :gutter="10">
        <buri-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="$t('text')" />
      </buri-grid>
    </demo-block>

    <demo-block :title="$t('route')">
      <buri-grid clickable :column-num="2">
        <buri-grid-item icon="home-o" :text="$t('vueRoute')" to="/" />
        <buri-grid-item icon="search" :text="$t('urlRoute')" url="/buri/mobile.html" />
      </buri-grid>
    </demo-block>

    <demo-block :title="$t('showInfo')">
      <buri-grid :column-num="2">
        <buri-grid-item icon="home-o" :text="$t('text')" dot />
        <buri-grid-item icon="search" :text="$t('text')" info="99+" />
      </buri-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      showInfo: '提示信息'
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      showInfo: 'Show Info'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';
</style>
