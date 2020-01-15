<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-panel
        :title="$t('title')"
        :desc="$t('desc')"
        :status="$t('status')"
      >
        <div>{{ $t('content') }}</div>
      </buri-panel>
    </demo-block>

    <demo-block :title="$t('adburicedUsage')">
      <buri-panel
        :title="$t('title')"
        :desc="$t('desc')"
        :status="$t('status')"
      >
        <div>{{ $t('content') }}</div>
        <template #footer>
          <buri-button size="small">{{ $t('button') }}</buri-button>
          <buri-button
            size="small"
            type="danger"
          >
            {{ $t('button') }}
          </buri-button>
        </template>
      </buri-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-panel {
  .buri-panel__footer {
    text-align: right;

    .buri-button {
      margin-left: 5px;
    }
  }

  .buri-panel__content {
    padding: 20px;
  }
}
</style>
