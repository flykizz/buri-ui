<template>
  <demo-section>
    <buri-tabs v-model="tab" sticky :color="BLUE">
      <buri-tab :title="$t('demo')">
        <demo-block :title="$t('basicUsage')">
          <buri-col span="6" @click="copy(demoIcon)">
            <buri-icon :name="demoIcon" />
          </buri-col>
          <buri-col span="6" @click="copy(demoImage)">
            <buri-icon :name="demoImage" />
          </buri-col>
        </demo-block>

        <demo-block :title="$t('info')">
          <buri-col span="6" @click="copy(demoIcon, { dot: true })">
            <buri-icon :name="demoIcon" dot />
          </buri-col>
          <buri-col span="6" @click="copy(demoIcon, { info: '9' })">
            <buri-icon :name="demoIcon" info="9" />
          </buri-col>
          <buri-col span="6" @click="copy(demoIcon, { info: '99+' })">
            <buri-icon :name="demoIcon" info="99+" />
          </buri-col>
        </demo-block>

        <demo-block :title="$t('color')">
          <buri-col span="6" @click="copy(demoIcon, { color: BLUE })">
            <buri-icon :name="demoIcon" :color="BLUE" />
          </buri-col>
          <buri-col span="6" @click="copy(demoIcon, { color: GREEN })">
            <buri-icon :name="demoIcon" :color="GREEN" />
          </buri-col>
        </demo-block>

        <demo-block :title="$t('size')">
          <buri-col span="6" @click="copy(demoIcon, { size: '40' })">
            <buri-icon :name="demoIcon" size="40" />
          </buri-col>
          <buri-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <buri-icon :name="demoIcon" size="3rem" />
          </buri-col>
        </demo-block>
      </buri-tab>

      <buri-tab :title="$t('basic')">
        <buri-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <buri-icon :name="icon" />
          <span>{{ icon }}</span>
        </buri-col>
      </buri-tab>

      <buri-tab :title="$t('outline')">
        <buri-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <buri-icon :name="icon" />
          <span>{{ icon }}</span>
        </buri-col>
      </buri-tab>

      <buri-tab :title="$t('filled')">
        <buri-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <buri-icon :name="icon" />
          <span>{{ icon }}</span>
        </buri-col>
      </buri-tab>
    </buri-tabs>
  </demo-section>
</template>

<script>
import icons from '@buri-ui/icons';
import { BLUE, GREEN } from '../../utils/constant';

// from https://30secondsofcode.org
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      info: '提示信息',
      basic: '基础图标',
      copied: '复制成功',
      outline: '线框风格',
      filled: '实底风格',
      demo: '用法示例',
      color: '图标颜色',
      size: '图标大小'
    },
    'en-US': {
      title: 'Icon List',
      info: 'Show Info',
      basic: 'Basic',
      copied: 'Copied',
      outline: 'Outline',
      filled: 'Filled',
      demo: 'Demo',
      color: 'Icon Color',
      size: 'Icon Size'
    }
  },

  data() {
    this.BLUE = BLUE;
    this.GREEN = GREEN;
    this.icons = icons;
    return {
      tab: 0,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/buri/icon-demo-1126.png'
    };
  },

  methods: {
    copy(icon, option = {}) {
      let tag = `<buri-icon name="${icon}"`;
      if ('dot' in option) {
        tag = `${tag} ${option.dot ? 'dot' : ''}`;
      }
      if ('info' in option) {
        tag = `${tag} info="${option.info}"`;
      }
      if ('color' in option) {
        tag = `${tag} color="${option.color}"`;
      }
      if ('size' in option) {
        tag = `${tag} size="${option.size}"`;
      }
      tag = `${tag} />`;
      copyToClipboard(tag);

      this.$notify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `${this.$t('copied')}：${tag}`
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  &-notify {
    font-size: 13px;
  }

  .buri-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  .buri-icon {
    margin: 16px 0 16px;
    color: @text-color;
    font-size: 32px;
  }

  .buri-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
