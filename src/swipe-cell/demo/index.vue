<template>
  <div>
    <demo-section>
      <demo-block :title="$t('basicUsage')">
        <buri-swipe-cell>
          <template #left>
            <buri-button
              square
              type="primary"
              :text="$t('select')"
            />
          </template>
          <buri-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <buri-button
              square
              type="danger"
              :text="$t('delete')"
            />
            <buri-button
              square
              type="primary"
              :text="$t('collect')"
            />
          </template>
        </buri-swipe-cell>
      </demo-block>

      <demo-block :title="$t('title2')">
        <buri-swipe-cell :before-close="beforeClose">
          <template #left>
            <buri-button
              square
              type="primary"
              :text="$t('select')"
            />
          </template>
          <buri-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <buri-button
              square
              type="danger"
              :text="$t('delete')"
            />
          </template>
        </buri-swipe-cell>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      select: '选择',
      delete: '删除',
      collect: '收藏',
      title: '单元格',
      title2: '异步关闭',
      confirm: '确定删除吗？'
    },
    'en-US': {
      select: 'Select',
      delete: 'Delete',
      collect: 'Collect',
      title: 'Cell',
      title2: 'Async close',
      confirm: 'Are you sure to delete?'
    }
  },

  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: this.$t('confirm')
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe-cell {
  user-select: none;
}
</style>
