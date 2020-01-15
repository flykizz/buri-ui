<template>
  <demo-section>
    <buri-cell center :title="$t('basicUsage')">
      <buri-stepper v-model="stepper1" />
    </buri-cell>

    <buri-cell center :title="$t('step')">
      <buri-stepper v-model="stepper2" step="2" />
    </buri-cell>

    <buri-cell center :title="$t('range')">
      <buri-stepper v-model="stepper3" :min="5" :max="8" />
    </buri-cell>

    <buri-cell center :title="$t('integer')">
      <buri-stepper v-model="stepper4" integer />
    </buri-cell>

    <buri-cell center :title="$t('disabled')">
      <buri-stepper v-model="stepper5" disabled />
    </buri-cell>

    <buri-cell center :title="$t('decimalLength')">
      <buri-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
    </buri-cell>

    <buri-cell center :title="$t('customSize')">
      <buri-stepper v-model="stepper7" button-size="32px" input-width="40px" />
    </buri-cell>

    <buri-cell center :title="$t('asyncChange')">
      <buri-stepper :value="stepper6" async-change @change="onChange" />
    </buri-cell>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      asyncChange: '异步变更',
      customSize: '自定义大小',
      decimalLength: '固定小数位数'
    },
    'en-US': {
      step: 'Step',
      range: 'Range',
      integer: 'Integer',
      asyncChange: 'Async Change',
      customSize: 'Custom Size',
      decimalLength: 'Decimal Length'
    }
  },

  data() {
    return {
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1
    };
  },

  methods: {
    onChange(value) {
      this.$toast.loading({ forbidClick: true });

      setTimeout(() => {
        this.stepper6 = value;
        this.$toast.clear();
      }, 500);
    }
  }
};
</script>
