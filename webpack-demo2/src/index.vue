<template>
  <div class="page">
      <span>^-^ hello world.....</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {},
  created() {
    $.get("/config/list", function(data) {
      // console.log(data)
    });

    $.get("/msg/index", function(data) {
      // console.log(data)
    });
  },
  mounted() {
    console.log(11);
  }
};
</script>

<style scoped lang="less">
@import url(./assets/css/base.css);
.page {
  background-color: #123456;
  span {
    color: #654321;
  }
}
</style>