
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <buri-goods-action>
        <buri-goods-action-icon icon="chat-o" :text="$t('icon1')" @click="onClickIcon" />
        <buri-goods-action-icon icon="cart-o" :text="$t('icon2')" @click="onClickIcon" />
        <buri-goods-action-button type="warning" :text="$t('button1')" @click="onClickButton" />
        <buri-goods-action-button type="danger" :text="$t('button2')" @click="onClickButton" />
      </buri-goods-action>
    </demo-block>

    <demo-block :title="$t('iconInfo')">
      <buri-goods-action>
        <buri-goods-action-icon icon="chat-o" :text="$t('icon1')" />
        <buri-goods-action-icon icon="cart-o" info="5" :text="$t('icon2')" />
        <buri-goods-action-icon icon="shop-o" info="12" :text="$t('icon3')" />
        <buri-goods-action-button type="warning" :text="$t('button1')" />
        <buri-goods-action-button type="danger" :text="$t('button2')" />
      </buri-goods-action>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="$t('customIconColor')">
      <buri-goods-action>
        <buri-goods-action-icon icon="chat-o" :text="$t('icon1')" color="#07c160" />
        <buri-goods-action-icon icon="cart-o" :text="$t('icon2')" />
        <buri-goods-action-icon icon="star" :text="$t('collected')" color="#ff5000" />
        <buri-goods-action-button type="warning" :text="$t('button1')" />
        <buri-goods-action-button type="danger" :text="$t('button2')" />
      </buri-goods-action>
    </demo-block>

    <demo-block :title="$t('customButtonColor')">
      <buri-goods-action>
        <buri-goods-action-icon icon="chat-o" :text="$t('icon1')" />
        <buri-goods-action-icon icon="cart-o" :text="$t('icon2')" />
        <buri-goods-action-button color="#be99ff" type="warning" :text="$t('button1')" />
        <buri-goods-action-button color="#7232dd" type="danger" :text="$t('button2')" />
      </buri-goods-action>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      icon1: '客服',
      icon2: '购物车',
      icon3: '店铺',
      button1: '加入购物车',
      button2: '立即购买',
      iconInfo: '徽标提示',
      collected: '已收藏',
      clickIcon: '点击图标',
      clickButton: '点击按钮',
      customIconColor: '自定义图标颜色',
      customButtonColor: '自定义按钮颜色'
    },
    'en-US': {
      icon1: 'Icon1',
      icon2: 'Icon2',
      icon3: 'Icon3',
      button1: 'Button1',
      button2: 'Button2',
      iconInfo: 'Icon info',
      collected: 'Collected',
      clickIcon: 'Click Icon',
      clickButton: 'Click Button',
      customIconColor: 'Custom Icon Color',
      customButtonColor: 'Custom Button Color'
    }
  },
  methods: {
    onClickIcon() {
      this.$toast(this.$t('clickIcon'));
    },
    onClickButton() {
      this.$toast(this.$t('clickButton'));
    }
  }
};
</script>

<style lang="less">
.demo-goods-action {
  .buri-goods-action {
    position: relative;
  }
}
</style>
