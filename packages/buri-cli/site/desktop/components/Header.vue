<template>
  <div class="buri-doc-header">
    <div class="buri-doc-row">
      <div class="buri-doc-header__top">
        <a class="buri-doc-header__logo">
          <img :src="config.logo">
          <span>{{ config.title }}</span>
        </a>

        <search-input v-if="searchConfig" :lang="lang" :search-config="searchConfig" />

        <ul class="buri-doc-header__top-nav">
          <li v-for="item in config.links" class="buri-doc-header__top-nav-item">
            <a class="buri-doc-header__logo-link" target="_blank" :href="item.url">
              <img :src="item.logo">
            </a>
          </li>

          <li ref="version" v-if="versions" class="buri-doc-header__top-nav-item">
            <span class="buri-doc-header__cube buri-doc-header__version" @click="toggleVersionPop">
              {{ versions[0].label }}
              <transition name="buri-doc-dropdown">
                <div v-if="showVersionPop" class="buri-doc-header__version-pop">
                  <div
                    v-for="item in versions"
                    class="buri-doc-header__version-pop-item"
                    @click="onSwitchVersion(item)"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </transition>
            </span>
          </li>

          <li v-if="langLabel && langLink" class="buri-doc-header__top-nav-item">
            <a class="buri-doc-header__cube" :href="langLink">{{ langLabel }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from './SearchInput';

export default {
  name: 'buri-doc-header',

  components: {
    SearchInput
  },

  props: {
    lang: String,
    config: Object,
    versions: Array,
    langConfigs: Array
  },

  data() {
    return {
      showVersionPop: false
    };
  },

  computed: {
    langLink() {
      return `#${this.$route.path.replace(this.lang, this.anotherLang.lang)}`;
    },

    langLabel() {
      return this.anotherLang.label;
    },

    anotherLang() {
      const items = this.langConfigs.filter(item => item.lang !== this.lang);
      if (items.length) {
        return items[0];
      }

      return {};
    },

    searchConfig() {
      return this.config.searchConfig;
    }
  },

  methods: {
    toggleVersionPop() {
      const val = !this.showVersionPop;

      const action = val ? 'add' : 'remove';
      document.body[`${action}EventListener`]('click', this.checkHideVersionPop);

      this.showVersionPop = val;
    },

    checkHideVersionPop(event) {
      if (!this.$refs.version.contains(event.target)) {
        this.showVersionPop = false;
      }
    },

    onSwitchLang(lang) {
      this.$router.push(this.$route.path.replace(lang.from, lang.to));
    },

    onSwitchVersion(version) {
      location.href = version.link;
    }
  }
};
</script>

<style lang="less">
@import '../../common/style/var';

.buri-doc-header {
  width: 100%;
  box-shadow: 0 4px 12px #ebedf0;
  user-select: none;

  &__top {
    display: flex;
    align-items: center;
    height: @buri-doc-header-top-height;
    padding: 0 @buri-doc-padding;
    line-height: @buri-doc-header-top-height;
    background-color: #001938;

    &-nav {
      flex: 1;
      font-size: 0;
      text-align: right;

      > li {
        position: relative;
        display: inline-block;
        vertical-align: middle;
      }

      &-item {
        margin-left: 20px;
      }

      &-title {
        display: block;
        font-size: 15px;
      }
    }
  }

  &__cube {
    position: relative;
    display: block;
    padding: 0 12px;
    color: #fff;
    font-size: 14px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 24px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  &__version {
    padding-right: 20px;

    &::after {
      position: absolute;
      top: 7px;
      right: 7px;
      width: 5px;
      height: 5px;
      color: rgba(255, 255, 255, 0.9);
      border: 1px solid;
      border-color: transparent transparent currentColor currentColor;
      transform: rotate(-45deg);
      content: '';
    }

    &-pop {
      position: absolute;
      top: 30px;
      right: 0;
      left: 0;
      z-index: 99;
      color: #333;
      line-height: 36px;
      text-align: left;
      background-color: #fff;
      border-radius: @buri-doc-border-radius;
      box-shadow: 0 4px 12px #ebedf0;
      transform-origin: top;
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

      &-item {
        padding-left: 12px;
        transition: 0.2s;

        &:hover {
          color: @buri-doc-blue;
        }
      }
    }
  }

  &__logo {
    display: block;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 24px;
      margin-right: 10px;
    }

    span {
      color: #fff;
      font-size: 22px;
    }
  }

  &__logo-link {
    img {
      display: block;
      width: 26px;
      height: 26px;
      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.buri-doc-dropdown {
  &-enter,
  &-leave-active {
    transform: scaleY(0);
    opacity: 0;
  }
}
</style>
