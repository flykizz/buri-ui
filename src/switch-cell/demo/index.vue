<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-cell-group>
        <buri-switch-cell
          v-model="checked"
          :title="$t('title')"
        />
      </buri-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <buri-cell-group>
        <buri-switch-cell
          v-model="checked"
          disabled
          :title="$t('title')"
        />
      </buri-cell-group>
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <buri-cell-group>
        <buri-switch-cell
          v-model="checked"
          loading
          :title="$t('title')"
        />
      </buri-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
