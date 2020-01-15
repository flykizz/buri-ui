<template>
  <demo-section>
    <buri-tabs v-model="activeTab" :color="BLUE">
      <buri-tab :title="$t('basicUsage')">
        <buri-index-bar>
          <div
            v-for="index in indexList"
            :key="index"
          >
            <buri-index-anchor :index="index" />
            <buri-cell :title="$t('text')" />
            <buri-cell :title="$t('text')" />
            <buri-cell :title="$t('text')" />
          </div>
        </buri-index-bar>
      </buri-tab>

      <buri-tab :title="$t('customIndexList')">
        <buri-index-bar :index-list="customIndexList">
          <div
            v-for="index in customIndexList"
            :key="index"
          >
            <buri-index-anchor :index="index">
              {{ $t('title') + index }}
            </buri-index-anchor>
            <buri-cell :title="$t('text')" />
            <buri-cell :title="$t('text')" />
            <buri-cell :title="$t('text')" />
          </div>
        </buri-index-bar>
      </buri-tab>
    </buri-tabs>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      customIndexList: '自定义索引列表'
    },
    'en-US': {
      text: 'Text',
      customIndexList: 'Custom Index List'
    }
  },

  data() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      BLUE,
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10]
    };
  }
};
</script>
