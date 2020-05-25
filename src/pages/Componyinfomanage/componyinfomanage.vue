<template>
  <div>
    <button @click="changeLangEvent">点击切换语言</button>
    <span>{{$t('languages.title')}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: "zh-cN"
    };
  },
  methods: {
    changeLangEvent() {
      if (this.lang === "zh-CN") {
        this.lang = "en-US";
        this.$i18n.locale = this.lang;
      } else {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>