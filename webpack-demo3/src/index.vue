<template>
  <div class="page">
      <span>webpack demo3.....</span>
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
    // console.log(11);
  }
};
</script>

<style scoped>

</style>