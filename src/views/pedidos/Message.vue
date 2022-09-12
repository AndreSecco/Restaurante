<template>
  <div class="alert alert-success msg" role="alert">
    <h6>{{ msg }}</h6>
  </div>
</template>
<script>
export default {
  name: "Message",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.msg{
    margin: 0% 23%;
}
</style>