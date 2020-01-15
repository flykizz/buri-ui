<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-row>
        <buri-image width="100" height="100" :src="image" />
      </buri-row>
    </demo-block>

    <demo-block :title="$t('fitMode')">
      <buri-row gutter="20">
        <buri-col v-for="fit in fits" span="8" :key="fit">
          <buri-image :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </buri-col>
      </buri-row>
    </demo-block>

    <demo-block :title="$t('round')">
      <buri-row gutter="20">
        <buri-col v-for="fit in fits" span="8" :key="fit">
          <buri-image round :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </buri-col>
      </buri-row>
    </demo-block>

    <demo-block :title="$t('loading')">
      <buri-row gutter="20">
        <buri-col span="8">
          <buri-image width="100%" height="27vw" />
          <div class="text">{{ $t('defaultTip') }}</div>
        </buri-col>

        <buri-col span="8">
          <buri-image width="100%" height="27vw">
            <template #loading>
              <buri-loading type="spinner" size="20" />
            </template>
          </buri-image>
          <div class="text">{{ $t('customTip') }}</div>
        </buri-col>
      </buri-row>
    </demo-block>

    <demo-block :title="$t('error')">
      <buri-row gutter="20">
        <buri-col span="8">
          <buri-image width="100%" height="27vw" src="x" />
          <div class="text">{{ $t('defaultTip') }}</div>
        </buri-col>

        <buri-col span="8">
          <buri-image width="100%" height="27vw" src="x">
            <template #error>{{ $t('loadFail') }}</template>
          </buri-image>
          <div class="text">{{ $t('customTip') }}</div>
        </buri-col>
      </buri-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fitMode: '填充模式',
      round: '圆形图片',
      loading: '加载中提示',
      error: '加载失败提示',
      defaultTip: '默认提示',
      customTip: '自定义提示',
      loadFail: '加载失败'
    },
    'en-US': {
      fitMode: 'Fit Mode',
      round: 'Round',
      loading: 'Loading',
      error: 'Error',
      defaultTip: 'Default Tip',
      customTip: 'Custom Tip',
      loadFail: 'Load failed'
    }
  },

  data() {
    return {
      image: 'https://img.yzcdn.cn/buri/cat.jpeg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .buri-row {
    padding: 0 @padding-md;
  }

  .buri-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-7;
    font-size: 14px;
    text-align: center;
  }
}
</style>
