<template>
  <div class="page">
      hello world...
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  },
  created() {
    $.get('/config/list', function (data) {
      console.log(data)
    })

    $.get('/msg/index', function (data) {
      console.log(data)
    })
  }
}
</script>

<style scoped>

</style>