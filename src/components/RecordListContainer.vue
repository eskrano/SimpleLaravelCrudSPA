<template>
  <div class = "RecordListItemContainer">
    <div>Contacts</div>
    <div v-for = "item in items">
      <RecordListItem :item = "item" />
    </div>
  </div>
</template>

<script>
  import RecordListItem from './RecordListItem.vue'

  export default {
    props: ['items'],
    components: {
      RecordListItem
    }
  }
</script>

<style>
  .RecordListItemContainer {
    border:1px solid darkgray;
    padding: 5px;
    margin-top: 10px;
  }
</style>
