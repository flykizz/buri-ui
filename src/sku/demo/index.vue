<template>
  <demo-section>
    <!-- 基础用法 -->
    <demo-block :title="$t('basicUsage')">
      <div class="sku-container">
        <buri-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :start-sale-num="skuData.start_sale_num"
          :close-on-click-overlay="closeOnClickOverlay"
          :message-config="messageConfig"
          :custom-sku-validator="customSkuValidator"
          :properties="skuData.properties"
          disable-stepper-input
          reset-stepper-on-hide
          safe-area-inset-bottom
          reset-selected-sku-on-hide
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <buri-button
          block
          type="primary"
          @click="showBase = true"
        >
          {{ $t('basicUsage') }}
        </buri-button>
      </div>
    </demo-block>

    <!-- 自定义步进器 -->
    <demo-block :title="$t('title2')">
      <div class="sku-container">
        <buri-sku
          v-model="showStepper"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :start-sale-num="skuData.start_sale_num"
          :custom-stepper-config="customStepperConfig"
          :message-config="messageConfig"
          :properties="skuData.properties"
          hide-quota-text
          safe-area-inset-bottom
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <buri-button
          block
          type="primary"
          @click="showStepper = true"
        >
          {{ $t('title2') }}
        </buri-button>
      </div>
    </demo-block>

    <!-- 隐藏售罄sku -->
    <demo-block :title="$t('hideSoldoutSku')">
      <div class="sku-container">
        <buri-sku
          v-model="showSoldout"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :start-sale-num="skuData.start_sale_num"
          :custom-stepper-config="customStepperConfig"
          :message-config="messageConfig"
          :show-soldout-sku="false"
          :properties="skuData.properties"
          hide-quota-text
          safe-area-inset-bottom
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <buri-button
          block
          type="primary"
          @click="showSoldout = true"
        >
          {{ $t('hideSoldoutSku') }}
        </buri-button>
      </div>
    </demo-block>

    <demo-block :title="$t('adburicedUsage')">
      <div class="sku-container">
        <buri-sku
          v-model="showCustom"
          :stepper-title="$t('stepperTitle')"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :start-sale-num="skuData.start_sale_num"
          :properties="skuData.properties"
          show-add-cart-btn
          reset-stepper-on-hide
          safe-area-inset-bottom
          :initial-sku="initialSku"
          :message-config="messageConfig"
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        >
          <template #sku-header-price="{ price }">
            <div class="buri-sku__goods-price">
              <span class="buri-sku__price-symbol">￥</span><span class="buri-sku__price-num">{{ price }}</span>
            </div>
          </template>
          <template #sku-actions="{ skuEventBus }">
            <div class="buri-sku-actions">
              <buri-button
                square
                size="large"
                type="warning"
                @click="onPointClicked"
              >
                {{ $t('button1') }}
              </buri-button>
              <buri-button
                square
                size="large"
                type="danger"
                @click="skuEventBus.$emit('sku:buy')"
              >
                {{ $t('button2') }}
              </buri-button>
            </div>
          </template>
        </buri-sku>
        <buri-button
          block
          type="primary"
          @click="showCustom = true"
        >
          {{ $t('adburicedUsage') }}
        </buri-button>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import { skuData, initialSku } from './data';
import { LIMIT_TYPE } from '../constants';

export default {
  i18n: {
    'zh-CN': {
      title2: '自定义步进器',
      hideSoldoutSku: '隐藏售罄规格',
      stepperTitle: '我要买',
      button1: '积分兑换',
      button2: '买买买'
    },
    'en-US': {
      title2: 'Custom Stepper Related Config',
      hideSoldoutSku: 'Hide Soldout Sku',
      stepperTitle: 'Stepper title',
      button1: 'Button',
      button2: 'Button'
    }
  },

  data() {
    this.skuData = skuData;
    this.initialSku = initialSku;

    return {
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      customSkuValidator: () => '请选择xxx',
      customStepperConfig: {
        quotaText: '单次限购100件',
        stockFormatter: (stock) => `剩余${stock}件`,
        handleOverLimit: (data) => {
          const { action, limitType, quota, startSaleNum = 1 } = data;

          if (action === 'minus') {
            this.$toast(startSaleNum > 1 ? `${startSaleNum}件起售` : '至少选择一件商品');
          } else if (action === 'plus') {
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              this.$toast(`限购${quota}件`);
            } else {
              this.$toast('库存不够了');
            }
          }
        }
      },
      messageConfig: {
        uploadImg: (file, img) => new Promise(resolve => {
          setTimeout(() => resolve(img), 1000);
        }),
        uploadMaxSize: 3
      }
    };
  },

  methods: {
    onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data));
    },

    onPointClicked() {
      this.$toast('积分兑换');
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-sku {
  background-color: @white;

  .sku-container {
    padding: 0 @padding-md;
  }
}
</style>
