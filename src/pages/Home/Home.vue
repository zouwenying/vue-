<template>
  <div>
    <navTop />
    <LeftList />
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftList from "../../components/LeftList.vue";
import NavTop from "../../components/Nav.vue";
export default {
  name: "home",
  data() {
    return {
      msg: "加载中"
    };
  },
  created() {},
  components: {
    LeftList,
    NavTop
  }
};
</script>


<style lang="scss" scoped>
.content {
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 200px;
  background-color: darkturquoise;
  overflow: auto;
}
</style>