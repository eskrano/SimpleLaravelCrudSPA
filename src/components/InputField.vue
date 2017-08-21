<template>
  <div>
    <input class="inputfield" type="text" v-model="value">
  </div>
</template>

<script>
  export default {
    data: () => ({
      value: null
    })
  }
</script>

<style>
  .inputfield {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 3px solid;
    border-bottom-color: chartreuse;
    padding: 10px;
  }
</style>
