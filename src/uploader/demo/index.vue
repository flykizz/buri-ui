<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-uploader :after-read="afterRead" />
    </demo-block>

    <demo-block :title="$t('preview')">
      <buri-uploader v-model="fileList" multiple accept="*" />
    </demo-block>

    <demo-block :title="$t('maxCount')">
      <buri-uploader v-model="fileList2" multiple :max-count="2" />
    </demo-block>

    <demo-block :title="$t('uploadStyle')">
      <buri-uploader>
        <buri-button type="primary" icon="photo">{{ this.$t('upload') }}</buri-button>
      </buri-uploader>
    </demo-block>

    <demo-block :title="$t('beforeRead')">
      <buri-uploader v-model="fileList3" :before-read="beforeRead" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      upload: '上传文件',
      preview: '文件预览',
      maxCount: '限制上传数量',
      beforeRead: '上传前校验',
      uploadStyle: '自定义上传样式',
      invalidType: '请上传 jpg 格式图片'
    },
    'en-US': {
      upload: 'Upload File',
      preview: 'Preview File',
      maxCount: 'Max Count',
      beforeRead: 'Before Read',
      uploadStyle: 'Upload Style',
      invalidType: 'Please upload an image in jpg format'
    }
  },

  data() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/buri/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/buri/tree.jpg' }
      ],
      fileList2: [{ url: 'https://img.yzcdn.cn/buri/sand.jpg' }],
      fileList3: []
    };
  },

  methods: {
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast(this.$t('invalidType'));
        return false;
      }

      return true;
    },

    afterRead(file, detail) {
      console.log(file, detail);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-uploader {
  background-color: @white;

  .buri-uploader {
    margin-left: @padding-md;
  }
}
</style>
